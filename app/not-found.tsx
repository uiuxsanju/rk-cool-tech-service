import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/content";
import { servicePath } from "@/lib/site";
import { CallButton, WhatsAppButton } from "@/components/blocks";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | RK Cool Tech Services Vizag" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="nf">
      <div className="section-shell">
        <h1 className="h-display">Page not found</h1>
        <p style={{ color: "var(--site-copy)", margin: "14px 0 24px" }}>The page you are looking for does not exist. Try one of our services below or call us.</p>
        <div className="hero__actions" style={{ justifyContent: "center", marginBottom: 24 }}>
          <CallButton />
          <WhatsAppButton />
          <Link className="btn whatsapp-button" href="/">Go to Home</Link>
        </div>
        <ul className="area-chips" style={{ justifyContent: "center" }}>
          {SERVICES.map((s) => (
            <li key={s.slug}><Link href={servicePath(s.slug)}>{s.short} in Vizag</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
