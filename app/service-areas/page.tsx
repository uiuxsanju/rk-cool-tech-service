import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { AREAS } from "@/lib/content";
import { AREA_PAGES } from "@/lib/areas";
import { MAPS_HREF, servicePath, waHref } from "@/lib/site";
import { pageMeta, simplePageGraph } from "@/lib/pages";
import { PageHero } from "@/components/PageHero";
import { CenterHeading, ContactSection, JsonLd } from "@/components/blocks";

const PATH = "/service-areas/";
const TITLE = "AC Service Areas in Vizag | Dwaraka Nagar, Gajuwaka, NAD, MVP Colony";
const DESC = "AC service, AC repair and electrical repairs across Visakhapatnam – Dwaraka Nagar, NAD, Gajuwaka, Pendurthi, Vepagunta, MVP Colony, Madhurawada and more.";

/** Short, area-specific notes for localities without their own page. */
const NOTES: Record<string, string> = {
  "MVP Colony": "Apartments and independent houses across MVP Colony sectors – AC service, gas filling and electrical repairs.",
  Madhurawada: "Fast-growing residential area with many new flats – AC installation, AC service and home wiring work.",
  Seethammadhara: "Established residential locality – regular AC servicing, fridge and washing machine repairs.",
  Rushikonda: "Coastal homes where salt air affects outdoor AC units – cleaning and maintenance help most.",
  "PM Palem": "Residential colonies near the stadium area – AC repair, AC service and geyser repairs.",
  Akkayyapalem: "Close to our Dwaraka Nagar base – quick visits for AC, appliance and electrical repairs.",
  Kancharapalem: "AC repair, AC gas filling and home electrical work for houses and shops.",
  Marripalem: "AC service and repair, RO purifier service and electrical repairs.",
  Gopalapatnam: "Homes near NAD and Simhachalam – AC service, installation and appliance repair.",
  Madhavadhara: "Hillside residential area – AC servicing, gas filling and electrical work.",
};

export const metadata: Metadata = pageMeta(PATH, TITLE, DESC, [
  ...AREA_PAGES.map((a) => `AC service ${a.name}`),
  ...Object.keys(NOTES).map((n) => `AC service ${n}`),
]);

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={simplePageGraph(PATH, "AC service areas in Vizag", DESC)} />
      <PageHero
        crumb="Service areas"
        eyebrow="SERVICE AREAS · VISAKHAPATNAM"
        title={<>AC Service Areas in Vizag <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– Doorstep Visits Across the City</em></>}
        lead="Our main location is RTC Complex, Dwaraka Nagar. From there we cover the main areas below and most localities of Visakhapatnam city."
        image="/images/services/ac-maintenance-vizag.webp"
        alt="AC technician visiting a home in Visakhapatnam"
      />

      <section className="services-section section-pad" aria-labelledby="ma-h">
        <div className="section-shell">
          <CenterHeading id="ma-h" eyebrow="MAIN SERVICE AREAS" title={<>AC service &amp; electrician <em>near you.</em></>} />
          <div className="related-grid">
            {AREA_PAGES.map((a) => (
              <Link key={a.slug} className="related related--area" href={servicePath(a.slug)}>
                <span className="related__pin"><MapPin aria-hidden="true" /></span>
                <span>
                  <strong>AC service in {a.name}</strong>
                  <small>{a.nearby.slice(0, 3).join(" · ")}</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" aria-labelledby="oa-h">
        <div className="section-shell">
          <CenterHeading id="oa-h" eyebrow="ALSO SERVING" title={<>Other localities <em>we cover.</em></>} intro="Not sure if we reach you? Send your location on WhatsApp and we will confirm." />
          <div className="area-notes">
            {AREAS.map((n) => (
              <article key={n} id={n.toLowerCase().replace(/[^a-z]+/g, "-")}>
                <h3><MapPin aria-hidden="true" /> {n}</h3>
                <p>{NOTES[n] ?? "AC service, AC repair, appliance repair and electrical work at your doorstep."}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 26 }}>
            <a className="text-link" href={waHref("Hi AC Service Vizag, do you provide service in my area in Vizag?")} target="_blank" rel="noopener noreferrer">
              Check if we cover your area <ArrowRight aria-hidden="true" />
            </a>{" "}
            · <a className="text-link" href={MAPS_HREF} target="_blank" rel="noopener noreferrer">RTC Complex on Google Maps</a>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
