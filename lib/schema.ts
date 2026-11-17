import { AREAS, PRIMARY_AREAS, SERVICES } from "./content";
import { HOME_KEYWORDS } from "./keywords";
import type { AreaPage } from "./areas";
import { BUSINESS, MAPS_HREF, absoluteUrl, servicePath } from "./site";
import type { Faq, Service } from "./types";

const BUSINESS_ID = absoluteUrl("/#business");

export function businessNode() {
  return {
    "@type": ["HVACBusiness", "Electrician"],
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: [BUSINESS.legalName, "acservicevizag.in", "AC Service in Vizag", "AC Repair Vizag"],
    keywords: HOME_KEYWORDS.join(", "),
    geo: { "@type": "GeoCoordinates", latitude: 17.7244, longitude: 83.3048 },
    slogan: BUSINESS.tagline,
    description:
      "AC service, AC repair, AC installation and AC gas filling, electrician for home electrical repairs, and refrigerator, washing machine, RO water purifier and geyser service in Visakhapatnam (Vizag), Andhra Pradesh.",
    url: absoluteUrl("/"),
    telephone: BUSINESS.tel,
    email: BUSINESS.email,
    hasMap: MAPS_HREF,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl("/images/ac-service-vizag.jpg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      ...[...PRIMARY_AREAS, ...AREAS].map((a) => ({ "@type": "Place", name: `${a}, Visakhapatnam` })),
    ],
    contactPoint: { "@type": "ContactPoint", telephone: BUSINESS.tel, email: BUSINESS.email, contactType: "customer service", areaServed: "IN" },
    knowsAbout: SERVICES.map((s) => s.short),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC service, electrician & appliance repair in Vizag",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${s.short} in Vizag`, url: absoluteUrl(servicePath(s.slug)) },
      })),
    },
  };
}

export function faqNode(faqs: Faq[], pageUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function homeGraph(faqs: Faq[]) {
  const home = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      { "@type": "WebSite", "@id": `${home}#website`, url: home, name: BUSINESS.name, inLanguage: "en-IN", publisher: { "@id": BUSINESS_ID } },
      { "@type": "WebPage", "@id": `${home}#webpage`, url: home, name: "AC Service Vizag | AC Repair & Installation in Visakhapatnam", isPartOf: { "@id": `${home}#website` }, about: { "@id": BUSINESS_ID }, inLanguage: "en-IN" },
      faqNode(faqs, home),
    ],
  };
}

export function serviceGraph(s: Service) {
  const pageUrl = absoluteUrl(servicePath(s.slug));
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${s.short} in Vizag`,
        serviceType: s.short,
        description: s.desc,
        url: pageUrl,
        image: absoluteUrl(s.image),
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Visakhapatnam" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${s.short} services`,
          itemListElement: s.offers.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.title } })),
        },
      },
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: s.title, description: s.desc, isPartOf: { "@id": absoluteUrl("/#website") }, about: { "@id": `${pageUrl}#service` }, inLanguage: "en-IN" },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: `${s.short} in Vizag`, item: pageUrl },
        ],
      },
      faqNode(s.faqs, pageUrl),
    ],
  };
}

export function areaGraph(a: AreaPage) {
  const pageUrl = absoluteUrl(servicePath(a.slug));
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `AC Service & Electrician in ${a.name}, Vizag`,
        serviceType: ["AC repair", "AC service", "AC installation", "Electrician", "Home appliance repair"],
        description: a.desc,
        url: pageUrl,
        provider: { "@id": BUSINESS_ID },
        areaServed: [
          { "@type": "Place", name: `${a.name}, Visakhapatnam` },
          ...a.nearby.map((n) => ({ "@type": "Place", name: `${n}, Visakhapatnam` })),
        ],
      },
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: a.title, description: a.desc, isPartOf: { "@id": absoluteUrl("/#website") }, about: { "@id": `${pageUrl}#service` }, inLanguage: "en-IN" },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: `AC Service in ${a.name}`, item: pageUrl },
        ],
      },
      faqNode(a.faqs, pageUrl),
    ],
  };
}
