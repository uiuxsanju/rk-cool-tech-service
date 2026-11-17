import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/content";
import { AREA_PAGES } from "@/lib/areas";
import { absoluteUrl, servicePath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...["/about/", "/contact/", "/ac-brands-vizag/", "/service-areas/"].map((p) => ({
      url: absoluteUrl(p),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: absoluteUrl(servicePath(s.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...AREA_PAGES.map((a) => ({
      url: absoluteUrl(servicePath(a.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
