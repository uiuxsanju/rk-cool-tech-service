import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/content";
import { BUSINESS, servicePath } from "@/lib/site";
import { pageMeta, simplePageGraph } from "@/lib/pages";
import { PageHero } from "@/components/PageHero";
import { LogoStamp } from "@/components/LogoStamp";
import { ContactSection, Eyebrow, JsonLd, ProcessSection, ReasonsSection } from "@/components/blocks";

const PATH = "/about/";
const TITLE = "About AC Service Vizag | AC Repair & Electrical Experts in Visakhapatnam";
const DESC = "About AC Service Vizag – AC service, AC repair, installation and electrical repairs in Visakhapatnam, run by Pro. Ramprasad from RTC Complex, Dwaraka Nagar.";

export const metadata: Metadata = pageMeta(PATH, TITLE, DESC, ["About AC Service Vizag", "AC technician in Vizag", "AC service company Visakhapatnam"]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={simplePageGraph(PATH, "About AC Service Vizag", DESC, "AboutPage")} />
      <PageHero
        crumb="About us"
        eyebrow="ABOUT US · VISAKHAPATNAM"
        title={<>About AC Service Vizag <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– One Call for All Electrical Repairs</em></>}
        lead="AC Service Vizag is a local AC and home electrical repair service in Visakhapatnam, run by Pro. Ramprasad from our main location at RTC Complex, Dwaraka Nagar."
        image="/images/services/ac-installation-vizag.webp"
        alt="AC Service Vizag technician working on a split AC in a Visakhapatnam home"
      />

      <section className="about-section section-pad" aria-labelledby="ab-h">
        <div className="section-shell prose-split">
          <div>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 id="ab-h" className="h-display">A local team for AC and home electrical care</h2>
            <p>
              We started AC Service Vizag with a simple idea – one phone number Vizag families can call for their AC, their home
              appliances and their electrical problems. Our work covers AC service, AC repair, AC installation, gas filling, cleaning and
              maintenance, plus refrigerator, washing machine, RO purifier and geyser repair and home electrical work.
            </p>
            <p>
              Every visit follows the same approach: inspect first, explain the real fault in plain words, tell you the charges, and only then
              start the work. After the repair we test the appliance in front of you.
            </p>
            <p>
              Owner: <strong>{BUSINESS.owner}</strong> · Main location: <strong>RTC Complex, Dwaraka Nagar, Visakhapatnam</strong> · Phone:{" "}
              <a href={`tel:${BUSINESS.tel}`}>{BUSINESS.phoneDisplay}</a>
            </p>
          </div>
          <div className="about-visual">
            <Image src="/images/services/ac-repair-visakhapatnam.webp" alt="AC repair at a home in Visakhapatnam" width={1024} height={576} sizes="(max-width:820px) 92vw, 540px" />
            <LogoStamp />
          </div>
        </div>
      </section>

      <section className="services-section section-pad" aria-labelledby="svc-h">
        <div className="section-shell">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 id="svc-h" className="h-display">Our services in Vizag</h2>
          <ul className="area-chips" style={{ marginTop: 18 }}>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={servicePath(s.slug)}>{s.short} in Vizag</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <ReasonsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
