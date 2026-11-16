import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ShieldCheck, Snowflake, Wrench } from "lucide-react";
import { HOME_FAQS, SERVICES } from "@/lib/content";
import { BUSINESS, servicePath } from "@/lib/site";
import { homeGraph } from "@/lib/schema";
import { Reveal } from "@/components/Reveal";
import { LogoStamp } from "@/components/LogoStamp";
import {
  AreaSection, BrandsSection, CallButton, ContactSection, Eyebrow, FaqSection, JsonLd, ProcessSection,
  ReasonsSection, ServiceCard, SplitHeading, WhatsAppButton,
} from "@/components/blocks";

const TITLE = "RK Cool Tech Services | AC Repair & Appliance Service in Vizag";
const DESC =
  "AC repair & appliance service in Vizag – NAD, Gajuwaka, Pendurthi, Vepagunta & RTC Complex. AC, fridge, washing machine, RO, geyser & electrical. Call 9000626018.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESC, url: "/" },
  twitter: { title: TITLE, description: DESC },
};

export default function HomePage() {
  const cards = SERVICES.filter((s) => s.slug !== "ac-installation-vizag");

  return (
    <>
      <JsonLd data={homeGraph(HOME_FAQS)} />

      {/* HERO */}
      <section className="hero" id="home" aria-labelledby="hero-h">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1 id="hero-h">
              <span className="hero__kicker">AC Repair &amp; Home Appliance Service in Vizag</span>
              Good service.
              <br />
              <em>Peace of mind.</em>
            </h1>
            <p className="hero__description">
              Expert AC repair, installation and gas filling, plus refrigerator, washing machine, RO, geyser and electrical services in
              NAD, Gajuwaka, Pendurthi, Vepagunta and across Visakhapatnam. Thoughtful work, reliable hands, and a little less to worry about.
            </p>
            <div className="hero__actions">
              <CallButton />
              <WhatsAppButton />
            </div>
            <div className="hero__trust">
              <span className="trust-mark">
                <ShieldCheck aria-hidden="true" />
              </span>
              <span>Experienced technicians</span>
              <i aria-hidden="true" />
              <span>Vizag &amp; nearby areas</span>
              <i aria-hidden="true" />
              <span>All major brands</span>
            </div>
          </div>
          <div className="hero__visual">
            <Image
              className="hero__photo"
              src="/images/rk-hero.jpg"
              alt="RK Cool Tech technician carefully inspecting an air conditioner in a Vizag home"
              width={1536}
              height={1024}
              priority
              sizes="(max-width:700px) 100vw, 640px"
            />
            <div className="hero__image-label">
              <span className="hero__image-icon">
                <Snowflake aria-hidden="true" />
              </span>
              <span>
                <strong>Comfort, restored.</strong>
                <small>One repair at a time.</small>
              </span>
              <ArrowDownRight aria-hidden="true" />
            </div>
            <div className="hero__photo-note">
              <span aria-hidden="true" /> VISAKHAPATNAM, ANDHRA PRADESH
            </div>
          </div>
        </div>
        <div className="hero__bottom-line" aria-label="Appliances we service">
          <span>AC</span><i aria-hidden="true" /><span>REFRIGERATOR</span><i aria-hidden="true" /><span>WASHING MACHINE</span>
          <i aria-hidden="true" /><span>RO</span><i aria-hidden="true" /><span>GEYSER</span><i aria-hidden="true" /><span>ELECTRICAL</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-strip" aria-label="Service introduction">
        <div className="section-shell intro-strip__inner">
          <Image className="intro-strip__mark" src="/images/rk-mark.png" alt="" width={44} height={44} aria-hidden="true" />
          <p>
            When something at home stops working, <strong>we’re here to help make it right.</strong>
          </p>
          <a href="#services">
            See what we do <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-pad" id="services" aria-labelledby="svc-h">
        <div className="section-shell">
          <SplitHeading
            id="svc-h"
            eyebrow="WHAT WE TAKE CARE OF"
            title={<>AC &amp; appliance services in Vizag,<br /><em>in good hands.</em></>}
            aside="From the first cool breeze to the last spin cycle – AC repair, installation, gas filling and complete home appliance care across Visakhapatnam."
          />
          <div className="services-grid">
            {cards.map((s, i) => (
              <ServiceCard
                key={s.slug}
                s={s}
                index={i}
                extraLink={s.slug === "ac-repair-service-vizag" ? { href: servicePath("ac-installation-vizag"), label: "AC Installation in Vizag" } : undefined}
              />
            ))}
          </div>
          <div className="services-footer">
            <p>Not sure what’s gone wrong? Tell us what you’re seeing.</p>
            <a className="text-link" href="#contact">
              Let’s talk <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-pad" id="about" aria-labelledby="about-h">
        <div className="section-shell about-grid">
          <Reveal className="about-visual">
            <Image
              src="/images/rk-hero.jpg"
              alt="A skilled RK Cool Tech technician providing careful home air conditioner service in Visakhapatnam"
              width={1536}
              height={1024}
              sizes="(max-width:700px) 92vw, 560px"
            />
            <LogoStamp />
          </Reveal>
          <div className="about-copy">
            <Eyebrow>A NEIGHBOURLY KIND OF SERVICE</Eyebrow>
            <h2 id="about-h" className="h-display">
              Your trusted home
              <br />
              appliance partner<span>.</span>
            </h2>
            <p className="about-copy__lead">
              Good work is about more than fixing a fault. It’s about showing up, listening carefully, and leaving your home in better shape.
            </p>
            <p>
              RK Cool Tech Services provides AC repair, appliance repair, maintenance and installation across Vizag. Owner {BUSINESS.owner} and his
              team focus on quality workmanship, reliable service, fair charges and the comfort of every customer – from a split AC near NAD Junction
              to a washing machine in Gajuwaka.
            </p>
            <div className="about-signoff">
              <span className="about-signoff__seal">
                <Wrench aria-hidden="true" />
              </span>
              <span>
                <strong>{BUSINESS.owner}</strong>
                <small>Owner, RK Cool Tech Services</small>
              </span>
              <Link href="#contact" aria-label={`Contact ${BUSINESS.owner}`}>
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReasonsSection />
      <BrandsSection />
      <ProcessSection />
      <AreaSection
        title={<>Vizag is home.<br /><em>We’re here for it.</em></>}
        text="Serving Visakhapatnam and surrounding areas with dependable AC repair, home appliance repair, installation and care – with our main focus on NAD Junction, Pendurthi, Vepagunta, RTC Complex and Gajuwaka."
      />
      <FaqSection faqs={HOME_FAQS} title={<>Questions, <em>answered.</em></>} />
      <ContactSection />
    </>
  );
}
