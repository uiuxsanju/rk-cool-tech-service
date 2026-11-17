/**
 * Pulls the real AC Service Vizag photos (logo is local: public/images/rk-logo.*) from the Lovable site into public/images.
 * Runs automatically before `npm run dev` and `npm run build` (incl. on Vercel).
 * - Existing real images are kept (commit public/images to git after the first run).
 * - If a download fails, a placeholder from scripts/fallback is used so the build never breaks,
 *   and the download is retried on the next run.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images");
const FALLBACK = join(ROOT, "scripts", "fallback");
const MARKER = join(OUT, ".fallback.json");
const SOURCE = process.env.IMAGE_SOURCE_URL || "https://screenshot-scene-studio-54.lovable.app";

const IMAGES = {
  "rk-hero.jpg": "/assets/rk-hero-BMGTpgY0.jpg",
};

mkdirSync(OUT, { recursive: true });
const pending = new Set(existsSync(MARKER) ? JSON.parse(readFileSync(MARKER, "utf8")) : []);

for (const [name, path] of Object.entries(IMAGES)) {
  const dest = join(OUT, name);
  if (existsSync(dest) && !pending.has(name)) continue;
  try {
    const res = await fetch(SOURCE + path, { signal: AbortSignal.timeout(20000) });
    const type = res.headers.get("content-type") || "";
    if (!res.ok || !type.startsWith("image/")) throw new Error(`HTTP ${res.status} ${type}`);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    pending.delete(name);
    console.log(`✓ ${name}`);
  } catch (err) {
    if (!existsSync(dest)) copyFileSync(join(FALLBACK, name), dest);
    pending.add(name);
    console.warn(`! ${name}: download failed (${err.message}) – using placeholder`);
  }
}

if (pending.size) writeFileSync(MARKER, JSON.stringify([...pending], null, 2));
else if (existsSync(MARKER)) writeFileSync(MARKER, "[]");
