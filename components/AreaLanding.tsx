import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { AREA_PAGES, type AreaPage } from "@/lib/areas";
import { HOME_KEYWORDS } from "@/lib/keywords";
import { areaGraph } from "@/lib/schema";
import { MAPS_HREF, servicePath } from "@/lib/site";
import { LogoStamp } from "./LogoStamp";
import { Reveal } from "./Reveal";
import {
  CallButton, ContactSection, Eyebrow, FaqSection, JsonLd, ProcessSection, ReasonsSection, SplitHeading, WhatsAppButton,
} from "./blocks";

export function areaMetadata(a: AreaPage): Metadata {
  const path = servicePath(a.slug);
  return {
    title: { absolute: a.title },
    description: a.desc,
    keywords: [
      `AC service ${a.name}`, `AC repair ${a.name}`, `electrician ${a.name}`, `AC service in ${a.name} Vizag`,
      `AC gas filling ${a.name}`, `AC installation ${a.name}`, ...HOME_KEYWORDS.slice(0, 6),
    ],
    alternates: { canonical: path },
    openGraph: { title: a.title, description: a.desc, url: path, images: [{ url: "/images/ac-service-vizag.jpg", alt: a.h1 }] },
    twitter: { title: a.title, description: a.desc, images: ["/images/ac-service-vizag.jpg"] },
  };
}

export function AreaLanding({ a }: { a: AreaPage }) {
  const [main, accent] = a.h1.split(" – ");
  const msg = `Hi AC Service Vizag, I need a service in ${a.name}, Vizag.`;
  const others = AREA_PAGES.filter((x) => x.slug !== a.slug);

  return (
    <>
      <JsonLd data={areaGraph(a)} />

      <section className="page-hero" aria-labelledby="ph-h">
        <div className="section-shell page-hero__inner">
          <nav aria-label="Breadcrumb" style={{ gridColumn: "1 / -1" }}>
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#areas">Service areas</Link></li>
              <li aria-current="page">AC Service in {a.name}</li>
            </ol>
          </nav>
          <div>
            <Eyebrow>{a.name.toUpperCase()} · VISAKHAPATNAM</Eyebrow>
            <h1 id="ph-h">
              {main}{" "}
              {accent && <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– {accent}</em>}
            </h1>
            <p className="page-hero__lead">{a.lead}</p>
            <div className="hero__actions">
              <CallButton />
              <WhatsAppButton message={msg} label="WhatsApp enquiry" />
            </div>
            <div className="hero__trust">
              <span className="trust-mark"><ShieldCheck aria-hidden="true" /></span>
              <span>Doorstep service in {a.name}</span>
              <i aria-hidden="true" />
              <span>Charges explained first</span>
            </div>
          </div>
          <div className="page-hero__visual">
            <Image src="/images/ac-service-vizag.webp" alt={`AC service technician in ${a.name}, Vizag`} width={1536} height={1024} priority sizes="(max-width:820px) 92vw, 560px" />
          </div>
        </div>
      </section>

      {/* Services available in this area */}
      <section className="services-section section-pad" aria-labelledby="as-h">
        <div className="section-shell">
          <SplitHeading
            id="as-h"
            eyebrow={`SERVICES IN ${a.name.toUpperCase()}`}
            title={<>AC service, electrician &amp; repairs<br /><em>in {a.name}.</em></>}
            aside="Tap a service to see full details, common problems and FAQs."
          />
          <div className="related-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} className="related" href={servicePath(s.slug)}>
                <Image src={s.image} alt="" width={192} height={144} sizes="96px" />
                <span>
                  <strong>{s.short} in {a.name}</strong>
                  <small>{s.cardTitle} · Vizag</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the area */}
      <section className="about-section section-pad" aria-labelledby="ab-h">
        <div className="section-shell prose-split">
          <div>
            <Eyebrow>AC SERVICE VIZAG IN {a.name.toUpperCase()}</Eyebrow>
            <h2 id="ab-h" className="h-display">Your local AC technician &amp; electrician in {a.name}</h2>
            {a.about.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            <p className="area-label">Also covering near {a.name}</p>
            <ul className="area-chips" aria-label={`Localities near ${a.name}`}>
              {a.nearby.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <a className="main-loc" href={MAPS_HREF} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}>
              <span className="main-loc__icon"><MapPin aria-hidden="true" /></span>
              <span>
                <small>Main location</small>
                <strong>RTC Complex, Dwaraka Nagar</strong>
                <em>Visakhapatnam, Andhra Pradesh · Open in Google Maps</em>
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <Reveal className="about-visual">
            <Image src="/images/services/ac-repair-visakhapatnam.webp" alt={`AC repair and service in ${a.name}, Visakhapatnam`} width={1024} height={576} sizes="(max-width:820px) 92vw, 540px" />
            <LogoStamp />
          </Reveal>
        </div>
      </section>

      <ReasonsSection title={<>Why {a.name} homes choose <em>AC Service Vizag.</em></>} />
      <ProcessSection />
      <FaqSection faqs={a.faqs} title={<>AC service in {a.name} – <em>FAQs.</em></>} />

      {/* Other areas – internal links */}
      <section className="services-section section-pad" aria-labelledby="oa-h">
        <div className="section-shell">
          <SplitHeading id="oa-h" eyebrow="OTHER SERVICE AREAS" title={<>AC service &amp; electrician <em>across Vizag.</em></>} />
          <ul className="area-chips area-chips--primary area-links">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={servicePath(o.slug)}><MapPin aria-hidden="true" /> AC service in {o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection
        title={<>Need AC service or an electrician<br /><em>in {a.name} today?</em></>}
        text={`Call or WhatsApp Pro. Ramprasad to book a doorstep visit in ${a.name}. We’ll explain the problem and the charges before any work begins.`}
        message={msg}
      />
    </>
  );
}
