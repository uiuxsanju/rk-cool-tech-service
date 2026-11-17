import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock3, MapPin, MessageSquareText, ShieldCheck, Wrench, Zap } from "lucide-react";
import { AC_PAGES, HOME_CARDS, HOME_FAQS, getService } from "@/lib/content";
import { BUSINESS, servicePath } from "@/lib/site";
import { homeGraph } from "@/lib/schema";
import { HOME_KEYWORDS } from "@/lib/keywords";
import { Reveal } from "@/components/Reveal";
import { AppIcon } from "@/components/icons";
import { LogoStamp } from "@/components/LogoStamp";
import {
  AreaSection, BrandsSection, CallButton, ContactSection, Eyebrow, FaqSection, JsonLd, ProcessSection,
  ReasonsSection, ServiceCard, SplitHeading, WhatsAppButton,
} from "@/components/blocks";

const TITLE = "AC Service Vizag | AC Repair & Installation in Visakhapatnam";
const DESC =
  "Looking for AC service in Vizag? Get professional AC repair, servicing, installation, maintenance and electrical repair services in Visakhapatnam. Contact AC Service Vizag today.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: HOME_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESC, url: "/" },
  twitter: { title: TITLE, description: DESC },
};

export default function HomePage() {
  const cards = HOME_CARDS.map((slug) => getService(slug)!);
  const acPages = AC_PAGES.map((slug) => getService(slug)!);

  return (
    <>
      <JsonLd data={homeGraph(HOME_FAQS)} />

      {/* HERO */}
      <section className="hero" id="home" aria-labelledby="hero-h">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="hero__pill">
              <Zap aria-hidden="true" /> {BUSINESS.tagline.replace(/\.$/, "")}
            </p>
            <h1 id="hero-h">
              Professional AC Service &amp; Repair <em>in Visakhapatnam.</em>
            </h1>
            <p className="hero__description">
              Doorstep AC service, AC repair, installation and gas filling – plus a trusted electrician for home electrical repairs, and refrigerator, washing machine, RO and geyser service.
              Based at RTC Complex, Dwaraka Nagar – serving NAD, Gajuwaka, Pendurthi, Vepagunta and all of Visakhapatnam.
            </p>
            <div className="hero__actions">
              <CallButton label={`Call ${BUSINESS.phoneShort}`} />
              <WhatsAppButton label="WhatsApp us" />
            </div>
            <ul className="hero__services" aria-label="Our services">
              {cards.map((x) => (
                <li key={x.slug}>
                  <Link href={servicePath(x.slug)}>
                    <AppIcon name={x.icon} /> {x.cardTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__frame">
              <Image
                className="hero__photo"
                src="/images/ac-service-vizag.webp"
                alt="AC Service Vizag technician carefully repairing a split air conditioner in a Vizag home"
                width={1536}
                height={1024}
                priority
                sizes="(max-width:820px) 100vw, 640px"
              />
            </div>
            <div className="hero__badge hero__badge--top">
              <span className="hero__badge-icon"><BadgeCheck aria-hidden="true" /></span>
              <span>
                <strong>28+ brands</strong>
                <small>LG, Samsung, Daikin, Voltas…</small>
              </span>
            </div>
            <div className="hero__badge hero__badge--bottom">
              <span className="hero__badge-icon hero__badge-icon--red"><MapPin aria-hidden="true" /></span>
              <span>
                <strong>RTC Complex, Dwaraka Nagar</strong>
                <small>Serving NAD · Gajuwaka · Pendurthi · Vepagunta</small>
              </span>
            </div>
          </div>
        </div>
        <div className="hero__trust-bar">
          <ul className="section-shell">
            <li><ShieldCheck aria-hidden="true" /> Experienced technicians</li>
            <li><MessageSquareText aria-hidden="true" /> Problem &amp; charges explained first</li>
            <li><Clock3 aria-hidden="true" /> Quick response on call &amp; WhatsApp</li>
            <li><BadgeCheck aria-hidden="true" /> All major brands serviced</li>
          </ul>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-strip" aria-label="Service introduction">
        <div className="section-shell intro-strip__inner">
          <Image className="intro-strip__mark" src="/images/logo-mark.png" alt="" width={44} height={44} aria-hidden="true" />
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
              />
            ))}
          </div>
          <nav className="ac-links" aria-label="All AC services in Vizag">
            <p className="area-label">All AC services in Vizag</p>
            <ul className="area-chips">
              {acPages.map((x) => (
                <li key={x.slug}>
                  <Link href={servicePath(x.slug)}>{x.short} in Vizag</Link>
                </li>
              ))}
              <li>
                <Link href="/ac-brands-vizag/">AC brands we service</Link>
              </li>
            </ul>
          </nav>
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
              src="/images/ac-service-vizag.webp"
              alt="A skilled AC Service Vizag technician providing careful home air conditioner service in Visakhapatnam"
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
              AC Service Vizag provides AC repair, appliance repair, maintenance and installation across Vizag. Owner {BUSINESS.owner} and his
              team focus on quality workmanship, reliable service, fair charges and the comfort of every customer – from a split AC near NAD Junction
              to a washing machine in Gajuwaka.
            </p>
            <div className="about-signoff">
              <span className="about-signoff__seal">
                <Wrench aria-hidden="true" />
              </span>
              <span>
                <strong>{BUSINESS.owner}</strong>
                <small>Owner, AC Service Vizag</small>
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
        text="Serving Visakhapatnam and surrounding areas with dependable AC repair, home appliance repair, installation and care – from our main location at RTC Complex, Dwaraka Nagar to NAD Junction, Gajuwaka, Pendurthi and Vepagunta."
      />
      <FaqSection faqs={HOME_FAQS} title={<>Questions, <em>answered.</em></>} />
      <ContactSection />
    </>
  );
}
