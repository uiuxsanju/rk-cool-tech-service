import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/content";
import { absoluteUrl, servicePath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...SERVICES.map((s) => ({
      url: absoluteUrl(servicePath(s.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
