export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://rkcooltechservices.in").replace(/\/$/, "");
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";

export const BUSINESS = {
  name: "RK Cool Tech Services",
  legalName: "RK COOL TECH SERVICES",
  owner: "Pro. Ramprasad",
  phoneDisplay: "+91 90006 26018",
  phoneShort: "90006 26018",
  tel: "+919000626018",
  wa: "919000626018",
  city: "Visakhapatnam",
  region: "Andhra Pradesh",
  country: "IN",
  tagline: "Your Comfort, Our Priority.",
} as const;

export const TEL_HREF = `tel:${BUSINESS.tel}`;

export const waHref = (message = "Hi RK Cool Tech Services, I would like to book a service in Vizag.") =>
  `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

export const servicePath = (slug: string) => `/${slug}/`;
