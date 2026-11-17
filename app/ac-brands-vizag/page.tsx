import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "@/lib/content";
import { servicePath, waHref } from "@/lib/site";
import { pageMeta, simplePageGraph } from "@/lib/pages";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/icons";
import { BrandsSection, CenterHeading, ContactSection, JsonLd } from "@/components/blocks";

const PATH = "/ac-brands-vizag/";
const TITLE = "AC Brands We Service in Vizag | LG, Samsung, Voltas, Daikin & More";
const DESC = "AC service and repair in Vizag for LG, Samsung, Voltas, Daikin, Whirlpool, Blue Star, Hitachi, Carrier, Panasonic, Haier, Godrej and Lloyd ACs. Call 9000626018.";

const AC_BRANDS: { slug: string; name: string; text: string }[] = [
  { slug: "lg", name: "LG", text: "Service and repair for LG split and window ACs, including dual inverter models – cooling issues, gas filling, PCB and sensor faults." },
  { slug: "samsung", name: "Samsung", text: "Samsung inverter split AC service, cleaning, gas charging and error-code diagnosis at your home in Vizag." },
  { slug: "voltas", name: "Voltas", text: "Voltas split and window AC servicing, installation, gas filling and repair of cooling, noise and drainage problems." },
  { slug: "daikin", name: "Daikin", text: "Daikin inverter split AC service, deep cleaning, gas pressure checks and repair of indoor and outdoor unit faults." },
  { slug: "whirlpool", name: "Whirlpool", text: "Whirlpool AC service and repair – weak cooling, water leakage, capacitor and fan motor problems." },
  { slug: "blue-star", name: "Blue Star", text: "Blue Star split and window AC servicing, installation and repair for homes, offices and shops." },
  { slug: "hitachi", name: "Hitachi", text: "Hitachi AC servicing, gas charging and diagnosis of inverter, sensor and outdoor unit issues." },
  { slug: "carrier", name: "Carrier", text: "Carrier split and window AC service, cleaning, installation and cooling-problem repair." },
  { slug: "panasonic", name: "Panasonic", text: "Panasonic inverter AC service, filter and coil cleaning, gas filling and repair." },
  { slug: "haier", name: "Haier", text: "Haier AC service and repair – not cooling, error codes, noise and leakage problems." },
  { slug: "godrej", name: "Godrej", text: "Godrej split and window AC servicing, gas filling and repair at your doorstep." },
  { slug: "lloyd", name: "Lloyd", text: "Lloyd AC service, installation, gas charging and repair of cooling and electrical faults." },
];

export const metadata: Metadata = pageMeta(PATH, TITLE, DESC, AC_BRANDS.map((b) => `${b.name} AC service Vizag`));

export default function BrandsPage() {
  const dims = Object.fromEntries(BRANDS.map((b) => [b.slug, b]));
  return (
    <>
      <JsonLd data={simplePageGraph(PATH, "AC brands we service in Vizag", DESC)} />
      <PageHero
        crumb="AC brands"
        eyebrow="AC BRANDS · VISAKHAPATNAM"
        title={<>AC Brands We Service in Vizag <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– All Major Brands</em></>}
        lead="Split or window, inverter or non-inverter – we service and repair ACs of all major brands at homes, offices and shops across Visakhapatnam."
        image="/images/services/split-ac-service-vizag.webp"
        alt="Split AC of a major brand serviced in Vizag"
      />

      <section className="services-section section-pad" aria-labelledby="br-h">
        <div className="section-shell">
          <CenterHeading
            id="br-h"
            eyebrow="AC SERVICE BY BRAND"
            title={<>Brand-wise AC service <em>in Vizag.</em></>}
            intro="AC Service Vizag is an independent multi-brand service provider. We are not an authorised service centre of these brands; brand names and logos belong to their owners."
          />
          <div className="brand-cards">
            {AC_BRANDS.map((b) => {
              const d = dims[b.slug];
              return (
                <article key={b.slug} className="brand-card" id={b.slug}>
                  <div className="brand-card__logo">
                    {d && <Image src={`/brands/logos/${b.slug}.webp`} alt={`${b.name} logo`} width={d.w} height={d.h} sizes="140px" />}
                  </div>
                  <h3>{b.name} AC Service in Vizag</h3>
                  <p>{b.text}</p>
                  <a href={waHref(`Hi AC Service Vizag, I need ${b.name} AC service in Vizag.`)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Book {b.name} AC service
                  </a>
                </article>
              );
            })}
          </div>
          <p className="brands-note" style={{ marginTop: 26, textAlign: "center" }}>
            Also see: <Link href={servicePath("ac-service-vizag")}>AC service</Link> · <Link href={servicePath("ac-repair-service-vizag")}>AC repair</Link> ·{" "}
            <Link href={servicePath("ac-gas-filling-vizag")}>AC gas filling</Link> · <Link href={servicePath("ac-installation-vizag")}>AC installation</Link>
          </p>
        </div>
      </section>

      <BrandsSection />
      <ContactSection />
    </>
  );
}
