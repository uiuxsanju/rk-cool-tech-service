import type { Faq } from "./types";

/**
 * Local SEO landing pages – one per main service area.
 * URL = /{slug}/  e.g. /ac-service-gajuwaka/
 * "nearby" lists are neighbouring localities – edit freely if needed.
 */
export interface AreaPage {
  slug: string;
  name: string;        // short area name
  label: string;       // chip label used on the home page (must match PRIMARY_AREAS)
  title: string;
  desc: string;
  h1: string;
  lead: string;
  about: string[];
  nearby: string[];
  faqs: Faq[];
}

const commonFaqs = (name: string): Faq[] => [
  {
    q: `Do you provide AC service in ${name}, Vizag?`,
    a: `Yes. AC Service Vizag provides doorstep AC repair, AC general service, AC gas filling and AC installation in ${name} and nearby localities. Call or WhatsApp 9000626018 to book a visit.`,
  },
  {
    q: `Is there an electrician available in ${name}?`,
    a: `Yes. We handle home electrical repairs in ${name} – wiring faults, switch boards, MCB and DB work, fan and light fitting and power problems. Call 9000626018 with the issue.`,
  },
  {
    q: `Which other appliances do you repair in ${name}?`,
    a: `Along with ACs and electrical work, we repair refrigerators, washing machines, RO water purifiers and geysers of all major brands in ${name}, Visakhapatnam.`,
  },
  {
    q: "Will I know the charges before work starts?",
    a: "Yes. Our technician inspects first, explains the fault and tells you the charges before starting any repair.",
  },
];

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "ac-service-dwaraka-nagar",
    name: "Dwaraka Nagar",
    label: "RTC Complex, Dwaraka Nagar",
    title: "AC Service in Dwaraka Nagar, Vizag | AC Repair & Electrician",
    desc: "AC service, AC repair and electrician in Dwaraka Nagar, Vizag – based at RTC Complex. Doorstep AC, fridge, washing machine, RO, geyser & electrical repairs. Call 9000626018.",
    h1: "AC Service & Electrician in Dwaraka Nagar – Near RTC Complex, Vizag",
    lead: "Our main location is RTC Complex, Dwaraka Nagar – so homes, offices and shops around Dwaraka Nagar get the quickest doorstep visits for AC repair, AC service and electrical work.",
    about: [
      "Dwaraka Nagar is the heart of Visakhapatnam – busy offices, showrooms, apartments and family homes around RTC Complex. ACs here run long hours and electrical loads are high, so regular AC servicing and safe wiring matter.",
      "From AC gas filling and cooling problems to MCB trips, switch board repairs and new wiring, AC Service Vizag handles it at your doorstep. We explain the fault and the charges before any work begins.",
    ],
    nearby: ["RTC Complex", "Diamond Park", "Daba Gardens", "Asilmetta", "Siripuram", "Akkayyapalem", "Seethammadhara", "Maddilapalem"],
    faqs: commonFaqs("Dwaraka Nagar"),
  },
  {
    slug: "ac-service-nad",
    name: "NAD Junction",
    label: "NAD Junction",
    title: "AC Service in NAD Junction, Vizag | AC Repair & Electrician NAD",
    desc: "AC service and AC repair in NAD Junction, Vizag – split & window AC, gas filling, installation, plus electrician and appliance repairs. Doorstep service. Call 9000626018.",
    h1: "AC Service & Electrician in NAD Junction – Doorstep Repairs in Vizag",
    lead: "Need an AC technician or electrician near NAD Junction? AC Service Vizag provides doorstep AC repair, AC service, gas filling and home electrical repairs across NAD and nearby colonies.",
    about: [
      "NAD Junction connects some of Vizag’s busiest residential areas, with apartments and independent houses that depend on ACs through the long, humid summer.",
      "We service and repair split and window ACs, fix refrigerators, washing machines, RO purifiers and geysers, and take up electrical work such as wiring, MCB and DB installation and switch board repairs – all at your home in NAD.",
    ],
    nearby: ["Sheela Nagar", "Kakani Nagar", "Gopalapatnam", "Marripalem", "Airport Road", "Kancharapalem"],
    faqs: commonFaqs("NAD Junction"),
  },
  {
    slug: "ac-service-gajuwaka",
    name: "Gajuwaka",
    label: "Gajuwaka",
    title: "AC Service in Gajuwaka, Vizag | AC Repair & Electrician Gajuwaka",
    desc: "AC service and AC repair in Gajuwaka, Vizag – AC gas filling, installation, general service, plus electrician, fridge and washing machine repair. Call 9000626018.",
    h1: "AC Service & Electrician in Gajuwaka – AC Repair at Your Doorstep",
    lead: "AC not cooling or power tripping at home in Gajuwaka? Call AC Service Vizag for doorstep AC repair, AC service, gas filling and electrical repairs.",
    about: [
      "Gajuwaka is one of Visakhapatnam’s largest residential and industrial zones. Dust and coastal humidity make AC filters and coils clog faster, so periodic AC servicing keeps cooling strong and bills lower.",
      "Our technicians cover Gajuwaka for AC repair and installation, refrigerator, washing machine, RO and geyser repairs, and home electrical work – with the fault and charges explained before we start.",
    ],
    nearby: ["Old Gajuwaka", "Autonagar", "Sriharipuram", "Kurmannapalem", "Nathayyapalem", "Chinagantyada"],
    faqs: commonFaqs("Gajuwaka"),
  },
  {
    slug: "ac-service-pendurthi",
    name: "Pendurthi",
    label: "Pendurthi",
    title: "AC Service in Pendurthi, Vizag | AC Repair & Electrician Pendurthi",
    desc: "AC service and AC repair in Pendurthi, Vizag – split & window AC repair, gas filling, installation, plus electrician and home appliance repairs. Call 9000626018.",
    h1: "AC Service & Electrician in Pendurthi – Doorstep AC & Electrical Repairs",
    lead: "AC Service Vizag covers Pendurthi for AC repair, AC general service, AC gas filling, AC installation and home electrical repairs – book on call or WhatsApp.",
    about: [
      "Pendurthi is growing fast with new apartments and independent homes. New AC installations, wiring and MCB work are common here, along with regular AC servicing before summer.",
      "We handle split and window ACs, refrigerators, washing machines, RO purifiers, geysers and complete home electrical work in Pendurthi, with clear charges explained before any work.",
    ],
    nearby: ["Sujatha Nagar", "Chintalagraharam", "Vepagunta", "Purushothapuram", "Saripalli"],
    faqs: commonFaqs("Pendurthi"),
  },
  {
    slug: "ac-service-vepagunta",
    name: "Vepagunta",
    label: "Vepagunta",
    title: "AC Service in Vepagunta, Vizag | AC Repair & Electrician Vepagunta",
    desc: "AC service and AC repair in Vepagunta, Vizag – AC gas filling, installation and general service, plus electrician, fridge, washing machine & RO repair. Call 9000626018.",
    h1: "AC Service & Electrician in Vepagunta – AC Repair & Electrical Work",
    lead: "Looking for AC service or an electrician in Vepagunta? AC Service Vizag provides doorstep AC repair, gas filling, installation and electrical repairs.",
    about: [
      "Vepagunta sits between Simhachalam and Pendurthi, with many new residential colonies. ACs, geysers and RO purifiers are now standard in most homes here – and they need regular servicing.",
      "Our team covers Vepagunta for AC repair and AC service, appliance repairs and home electrical work including wiring, switch boards, MCB and DB installation.",
    ],
    nearby: ["Simhachalam", "Gopalapatnam", "Naiduthota", "Pendurthi", "Sujatha Nagar"],
    faqs: commonFaqs("Vepagunta"),
  },
];

export const getAreaPage = (slug: string) => AREA_PAGES.find((a) => a.slug === slug);
export const areaPageFor = (label: string) => AREA_PAGES.find((a) => a.label === label);
