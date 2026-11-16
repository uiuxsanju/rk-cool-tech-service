import { AREAS, PRIMARY_AREAS, SERVICES } from "./content";
import { BUSINESS, absoluteUrl, servicePath } from "./site";
import type { Faq, Service } from "./types";

const BUSINESS_ID = absoluteUrl("/#business");

export function businessNode() {
  return {
    "@type": "HVACBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    slogan: BUSINESS.tagline,
    description:
      "AC repair, AC installation, AC gas filling, refrigerator, washing machine, RO water purifier, geyser and electrical services in Visakhapatnam (Vizag), Andhra Pradesh.",
    url: absoluteUrl("/"),
    telephone: BUSINESS.tel,
    logo: absoluteUrl("/images/rk-logo.png"),
    image: absoluteUrl("/images/rk-hero.jpg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      ...[...PRIMARY_AREAS, ...AREAS].map((a) => ({ "@type": "Place", name: `${a}, Visakhapatnam` })),
    ],
    contactPoint: { "@type": "ContactPoint", telephone: BUSINESS.tel, contactType: "customer service", areaServed: "IN" },
    knowsAbout: SERVICES.map((s) => s.short),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home appliance services in Vizag",
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
      { "@type": "WebPage", "@id": `${home}#webpage`, url: home, name: "RK Cool Tech Services | AC Repair & Appliance Service in Vizag", isPartOf: { "@id": `${home}#website` }, about: { "@id": BUSINESS_ID }, inLanguage: "en-IN" },
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
