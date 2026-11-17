export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://acservicevizag.in").replace(/\/$/, "");
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";

export const BUSINESS = {
  name: "AC Service Vizag",
  legalName: "AC SERVICE VIZAG.in",
  owner: "Pro. Ramprasad",
  phoneDisplay: "+91 90006 26018",
  phoneShort: "90006 26018",
  tel: "+919000626018",
  wa: "919000626018",
  street: "RTC Complex, Dwaraka Nagar",
  area: "Dwaraka Nagar",
  city: "Visakhapatnam",
  region: "Andhra Pradesh",
  country: "IN",
  tagline: "One Call for All Electrical Repairs.",
} as const;

/** Main location – Google Maps search link for RTC Complex, Dwaraka Nagar. */
export const MAPS_HREF = "https://www.google.com/maps/search/?api=1&query=RTC+Complex+Dwaraka+Nagar+Visakhapatnam";

export const TEL_HREF = `tel:${BUSINESS.tel}`;

export const waHref = (message = "Hi AC Service Vizag, I would like to book a service in Vizag.") =>
  `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

export const servicePath = (slug: string) => `/${slug}/`;
