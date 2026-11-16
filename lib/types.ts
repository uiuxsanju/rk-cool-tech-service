export type IconName =
  | "snow" | "tool" | "fridge" | "washer" | "drop" | "flame" | "bolt"
  | "user" | "grid" | "pin" | "chat" | "shield" | "wa" | "badge" | "clock" | "check" | "phone";

export interface Item { title: string; text: string }
export interface Faq { q: string; a: string }
export interface Feature { icon: IconName; title: string; text: string }
export interface Step { title: string; text: string; icon: IconName }

export interface Service {
  slug: string;
  image: string;
  icon: IconName;
  cat: string;
  cardTitle: string;
  short: string;
  cardText: string;
  chips: string[];
  title: string;
  desc: string;
  h1: string;
  lead: string;
  alt: string;
  aboutHeading: string;
  about: string[];
  offers: Item[];
  problems: Item[];
  faqs: Faq[];
  waMessage: string;
}
