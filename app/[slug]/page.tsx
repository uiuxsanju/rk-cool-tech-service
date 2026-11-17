import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { BRANDS, SERVICES, getService } from "@/lib/content";
import { servicePath, waHref } from "@/lib/site";
import { serviceGraph } from "@/lib/schema";
import { AREA_PAGES, getAreaPage } from "@/lib/areas";
import { SERVICE_KEYWORDS } from "@/lib/keywords";
import { AreaLanding, areaMetadata } from "@/components/AreaLanding";
import { AppIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { LogoStamp } from "@/components/LogoStamp";
import {
  AreaSection, CallButton, CenterHeading, ContactSection, Eyebrow, FaqSection, JsonLd, ProcessSection, ReasonsSection,
  SplitHeading, WhatsAppButton,
} from "@/components/blocks";

const AC_BRAND_SLUGS = ["lg", "samsung", "voltas", "daikin", "whirlpool", "blue-star", "hitachi", "carrier", "panasonic", "haier", "godrej", "lloyd"];

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [...SERVICES.map((s) => ({ slug: s.slug })), ...AREA_PAGES.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaPage(slug);
  if (area) return areaMetadata(area);
  const s = getService(slug);
  if (!s) return {};
  const path = servicePath(s.slug);
  return {
    title: { absolute: s.title },
    description: s.desc,
    keywords: SERVICE_KEYWORDS[s.slug],
    alternates: { canonical: path },
    openGraph: { title: s.title, description: s.desc, url: path, images: [{ url: s.image, alt: s.alt }] },
    twitter: { title: s.title, description: s.desc, images: [s.image] },
  };
}

/** Splits "AC Repair Service in Vizag – Split & Window AC Experts" into main + accent part. */
function splitH1(h1: string) {
  const [main, accent] = h1.split(" – ");
  return { main, accent };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaPage(slug);
  if (area) return <AreaLanding a={area} />;
  const s = getService(slug);
  if (!s) notFound();

  const { main, accent } = splitH1(s.h1);
  const noun = s.short.replace(/ (Repair|Service|Services|Installation)$/, "");
  const related = SERVICES.filter((r) => r.slug !== s.slug);
  const isAc = s.cat === "AC Services";

  return (
    <>
      <JsonLd data={serviceGraph(s)} />

      {/* HERO */}
      <section className="page-hero" aria-labelledby="ph-h">
        <div className="section-shell page-hero__inner">
          <nav aria-label="Breadcrumb" style={{ gridColumn: "1 / -1" }}>
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li aria-current="page">{s.short} in Vizag</li>
            </ol>
          </nav>
          <div>
            <Eyebrow>{s.cat.toUpperCase()} · VISAKHAPATNAM</Eyebrow>
            <h1 id="ph-h">
              {main}
              {accent && (
                <>
                  {" "}
                  <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– {accent}</em>
                </>
              )}
            </h1>
            <p className="page-hero__lead">{s.lead}</p>
            <div className="hero__actions">
              <CallButton />
              <WhatsAppButton message={s.waMessage} label="WhatsApp enquiry" />
            </div>
            <div className="hero__trust">
              <span className="trust-mark"><ShieldCheck aria-hidden="true" /></span>
              <span>Doorstep service</span>
              <i aria-hidden="true" />
              <span>Charges explained first</span>
              <i aria-hidden="true" />
              <span>All major brands</span>
            </div>
          </div>
          <div className="page-hero__visual">
            <Image src={s.image} alt={s.alt} width={1024} height={576} priority sizes="(max-width:820px) 92vw, 560px" />
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="services-section section-pad" aria-labelledby="off-h">
        <div className="section-shell">
          <SplitHeading
            id="off-h"
            eyebrow="SERVICES OFFERED"
            title={<>Our {s.short.replace(/ Services?$/, "")} services<br /><em>in Vizag.</em></>}
            aside="Tap “Enquire” on any service – WhatsApp opens with your request already typed."
          />
          <div className="offer-grid">
            {s.offers.map((o, i) => (
              <Reveal as="article" key={o.title} delay={(i % 2) * 0.05} className="offer">
                <span className="offer__icon"><AppIcon name={s.icon} /></span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <a href={waHref(`Hi AC Service Vizag, I need ${o.title} in Vizag.`)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Enquire about {o.title}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THIS SERVICE */}
      <section className="about-section section-pad" aria-labelledby="ab-h">
        <div className="section-shell prose-split">
          <div>
            <Eyebrow>{s.short.toUpperCase()} IN VISAKHAPATNAM</Eyebrow>
            <h2 id="ab-h" className="h-display">{s.aboutHeading}</h2>
            {s.about.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
            <div className="hero__actions" style={{ marginTop: 22 }}>
              <CallButton />
              <WhatsAppButton message={s.waMessage} />
            </div>
          </div>
          <Reveal className="about-visual">
            <Image src={s.image} alt={`${s.short} in Visakhapatnam by AC Service Vizag`} width={1024} height={576} sizes="(max-width:820px) 92vw, 540px" />
            <LogoStamp />
          </Reveal>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="process-section section-pad" aria-labelledby="pr-h">
        <div className="section-shell">
          <CenterHeading
            id="pr-h"
            eyebrow="COMMON PROBLEMS"
            title={<>Common {noun} problems <em>we fix.</em></>}
            intro="Facing one of these? Call or WhatsApp us with the symptom – it helps our technician come prepared."
          />
          <div className="problem-grid">
            {s.problems.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.05} className="problem">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="about-section section-pad section-pad--tight" aria-labelledby="bs-h">
        <div className="section-shell">
          <p className="area-label" id="bs-h">Brands we service for {s.short.toLowerCase()} in Vizag</p>
          <ul className="area-chips">
            {(isAc ? BRANDS.filter((b) => AC_BRAND_SLUGS.includes(b.slug)) : BRANDS).map((b) => (
              <li key={b.slug}>{isAc ? <Link href={`/ac-brands-vizag/#${b.slug}`}>{b.name}</Link> : b.name}</li>
            ))}
          </ul>
          <p className="brands-note" style={{ marginTop: 12 }}>Independent multi-brand service – not an authorised service centre of these brands.</p>
        </div>
      </section>

      <ReasonsSection title={<>Why choose AC Service Vizag for <em>{s.short.toLowerCase()}.</em></>} />
      <ProcessSection />
      <AreaSection
        title={<>{s.short} across<br /><em>Visakhapatnam.</em></>}
        text={`We provide ${s.short.toLowerCase()} at homes, apartments, offices and shops throughout Vizag city and surrounding areas.`}
      />
      <FaqSection faqs={s.faqs} title={<>{s.short} in Vizag – <em>FAQs.</em></>} />

      {/* RELATED */}
      <section className="services-section section-pad" aria-labelledby="rel-h">
        <div className="section-shell">
          <SplitHeading id="rel-h" eyebrow="MORE SERVICES" title={<>Related services <em>in Vizag.</em></>} />
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} className="related" href={servicePath(r.slug)}>
                <Image src={r.image} alt="" width={192} height={144} sizes="96px" />
                <span>
                  <strong>{r.short} in Vizag</strong>
                  <small>{r.cardTitle}</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title={<>Need {s.short.toLowerCase()}<br /><em>in Vizag today?</em></>}
        text="Call or WhatsApp Pro. Ramprasad to book a doorstep visit. We’ll explain the problem and the charges before any work begins."
        message={s.waMessage}
        defaultService={s.short}
      />
    </>
  );
}
