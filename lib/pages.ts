import { absoluteUrl } from "./site";

/** BreadcrumbList + WebPage JSON-LD for simple static pages. */
export function simplePageGraph(path: string, name: string, description: string, type = "WebPage", extra: object[] = []) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": type, "@id": `${url}#webpage`, url, name, description, isPartOf: { "@id": absoluteUrl("/#website") }, about: { "@id": absoluteUrl("/#business") }, inLanguage: "en-IN" },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
      ...extra,
    ],
  };
}

export function pageMeta(path: string, title: string, description: string, keywords: string[] = []) {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
