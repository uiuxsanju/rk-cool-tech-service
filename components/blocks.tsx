import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Mail, MapPin, Phone, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { AREAS, BRANDS, PRIMARY_AREAS, STEPS, WHY } from "@/lib/content";
import { areaPageFor } from "@/lib/areas";
import { BUSINESS, MAIL_HREF, MAPS_HREF, TEL_HREF, servicePath, waHref } from "@/lib/site";
import type { Faq, Service } from "@/lib/types";
import { AppIcon, WhatsAppIcon } from "./icons";
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";

/* ---------- small pieces ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" /> {children}
    </p>
  );
}

export function CallButton({ label = "Call now", className = "call-button" }: { label?: string; className?: string }) {
  return (
    <a className={`btn ${className}`} href={TEL_HREF} aria-label={`${label} – ${BUSINESS.phoneDisplay}`}>
      <span className="live-dot" aria-hidden="true" />
      <Phone aria-hidden="true" className="ring-icon" /> {label}
    </a>
  );
}

export function WhatsAppButton({ message, label = "WhatsApp us", className = "whatsapp-button" }: { message?: string; label?: string; className?: string }) {
  return (
    <a className={`btn ${className}`} href={waHref(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon /> {label}
    </a>
  );
}

export function SplitHeading({ eyebrow, title, aside, id }: { eyebrow: string; title: ReactNode; aside?: ReactNode; id: string }) {
  return (
    <div className="section-heading--split">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="h-display">
          {title}
        </h2>
      </div>
      {aside && <p className="section-heading__aside">{aside}</p>}
    </div>
  );
}

export function CenterHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: ReactNode; intro?: ReactNode; id: string }) {
  return (
    <div className="section-heading--center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="h-display">
        {title}
      </h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

/* ---------- service card ---------- */
export function ServiceCard({ s, index, extraLink }: { s: Service; index: number; extraLink?: { href: string; label: string } }) {
  const href = servicePath(s.slug);
  const shown = s.chips.slice(0, 6);
  const more = s.chips.length - shown.length;
  return (
    <Reveal as="article" delay={(index % 3) * 0.06} className="svc">
      <Link href={href} className="svc__media" tabIndex={-1} aria-hidden="true">
        <Image src={s.image} alt={s.alt} fill sizes="(max-width:700px) 92vw, (max-width:1000px) 46vw, 372px" />
        <span className="svc__num">{String(index + 1).padStart(2, "0")}</span>
        <span className="svc__icon">
          <AppIcon name={s.icon} />
        </span>
      </Link>
      <div className="svc__body">
        <p className="svc__cat">{s.cat}</p>
        <h3 className="svc__title">
          <Link href={href}>{s.cardTitle}</Link>
        </h3>
        <p className="svc__text">{s.cardText}</p>
        <ul className="svc__tags" aria-label={`${s.cardTitle} services`}>
          {shown.map((c) => (
            <li key={c}>{c}</li>
          ))}
          {more > 0 && <li className="svc__more">+{more} more</li>}
        </ul>
        {extraLink && (
          <Link className="svc__extra" href={extraLink.href}>
            Also: {extraLink.label} <ArrowRight aria-hidden="true" />
          </Link>
        )}
        <div className="svc__actions">
          <Link className="svc__btn svc__btn--details" href={href} aria-label={`${s.short} in Vizag – view details`}>
            View details <ArrowRight aria-hidden="true" />
          </Link>
          <a className="svc__btn svc__btn--wa" href={waHref(s.waMessage)} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${s.short} on WhatsApp`}>
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- reasons ---------- */
export function ReasonsSection({ title }: { title?: ReactNode }) {
  return (
    <section className="reasons-section section-pad" id="why-us" aria-labelledby="why-h">
      <div className="section-shell">
        <CenterHeading
          id="why-h"
          eyebrow="THE AC SERVICE VIZAG DIFFERENCE"
          title={title ?? <>Care you can <em>feel good about.</em></>}
          intro="Professional service, with people and homes always in mind."
        />
        <div className="reasons-grid">
          {WHY.map((w, i) => (
            <Reveal as="article" key={w.title} delay={i * 0.05} className="reason-item">
              <span className="reason-item__icon">
                <AppIcon name={w.icon} />
              </span>
              <span className="reason-item__number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- brands (auto-scrolling logo strip) ---------- */
function LogoRow({ items, reverse = false }: { items: typeof BRANDS; reverse?: boolean }) {
  // The list is rendered twice so the CSS animation can loop seamlessly; the copy is hidden from screen readers.
  return (
    <div className={`marquee${reverse ? " marquee--reverse" : ""}`}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group" aria-hidden={copy === 1 ? true : undefined}>
            {items.map((b) => (
              <li key={b.slug} className="logo-tile" title={`${b.name} service in Vizag`}>
                <Image src={`/brands/logos/${b.slug}.webp`} alt={copy === 0 ? `${b.name} logo` : ""} width={b.w} height={b.h} sizes="180px" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function BrandsSection() {
  const half = Math.ceil(BRANDS.length / 2);
  return (
    <section className="brands-section" id="brands" aria-labelledby="brands-h">
      <div className="section-shell">
        <div className="brands-head">
          <div>
            <Eyebrow>CARE FOR THE BRANDS YOU OWN</Eyebrow>
            <h2 id="brands-h" className="h-display">
              {BRANDS.length}+ brands.
              <br />
              <em>Expert attention.</em>
            </h2>
          </div>
          <p className="section-heading__aside">
            ACs, refrigerators, washing machines, RO purifiers, geysers and electrical appliances from every leading brand – serviced at your
            doorstep in Vizag.
          </p>
        </div>
      </div>
      <div className="marquee-wrap" aria-label="Brands we service">
        <LogoRow items={BRANDS.slice(0, half)} />
        <LogoRow items={BRANDS.slice(half)} reverse />
      </div>
      <div className="section-shell">
        <div className="brands-note">
          <BadgeCheck aria-hidden="true" />
          <span>
            Repair, service and installation for all major appliance brands. Brand names and logos belong to their respective owners; AC Service
            Vizag is an independent service provider, not an authorised service centre.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- process ---------- */
export function ProcessSection() {
  return (
    <section className="process-section section-pad" id="process" aria-labelledby="proc-h">
      <div className="section-shell">
        <SplitHeading
          id="proc-h"
          eyebrow="HOW IT WORKS"
          title={<>From “hello” to<br /><em>all taken care of.</em></>}
          aside="No long process. Four simple steps – a friendly conversation, the right help, and your home back to its routine."
        />
        <ol className="flow">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className={`flow__step${i === STEPS.length - 1 ? " flow__step--done" : ""}`}>
              <div className="flow__top">
                <span className="flow__icon">
                  <AppIcon name={s.icon} />
                </span>
                <span className="flow__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span className="flow__label">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && (
                <span className="flow__arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              )}
            </Reveal>
          ))}
        </ol>
        <Reveal className="flow-cta">
          <div>
            <strong>Ready to book? It takes less than a minute.</strong>
            <span>Doorstep service across Visakhapatnam · All major brands</span>
          </div>
          <div className="flow-cta__actions">
            <CallButton />
            <WhatsAppButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- service area ---------- */
export function AreaSection({ title, text }: { title: ReactNode; text: string }) {
  return (
    <section className="area-section" id="areas" aria-labelledby="area-h">
      <div className="section-shell area-grid">
        <div className="area-copy">
          <Eyebrow>CLOSE TO HOME</Eyebrow>
          <h2 id="area-h" className="h-display">
            {title}
          </h2>
          <p>{text}</p>
          <a className="main-loc" href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
            <span className="main-loc__icon"><MapPin aria-hidden="true" /></span>
            <span>
              <small>Main location</small>
              <strong>RTC Complex, Dwaraka Nagar</strong>
              <em>Visakhapatnam, Andhra Pradesh · Open in Google Maps</em>
            </span>
            <ArrowRight aria-hidden="true" />
          </a>
          <p className="area-label">Main service areas</p>
          <ul className="area-chips area-chips--primary" aria-label="Main service areas in Visakhapatnam">
            {PRIMARY_AREAS.map((a) => {
              const page = areaPageFor(a);
              return (
                <li key={a}>
                  {page ? (
                    <Link href={servicePath(page.slug)} title={`AC service in ${page.name}, Vizag`}>
                      <MapPin aria-hidden="true" /> {a}
                    </Link>
                  ) : (
                    <><MapPin aria-hidden="true" /> {a}</>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="area-label">Also serving</p>
          <ul className="area-chips" aria-label="Other localities we serve in Visakhapatnam">
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
            <li>&amp; nearby areas</li>
          </ul>
          <a className="text-link" href={waHref("Hi AC Service Vizag, do you provide service in my area in Vizag?")} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" /> Check if we cover your area <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="area-map" aria-hidden="true">
          <div className="area-map__grid" />
          <span className="area-map__road area-map__road--one" />
          <span className="area-map__road area-map__road--two" />
          <span className="area-map__road area-map__road--three" />
          <span className="area-map__coast" />
          <span className="area-map__pin">
            <MapPin />
          </span>
          <span className="area-map__label">RTC COMPLEX · DWARAKA NAGAR</span>
          <span className="area-map__compass">
            N <ArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ faqs, title }: { faqs: Faq[]; title: ReactNode }) {
  return (
    <section className="faq-section section-pad" id="faq" aria-labelledby="faq-h">
      <div className="section-shell">
        <CenterHeading id="faq-h" eyebrow="GOOD TO KNOW" title={title} />
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <span aria-hidden="true">
                  <Plus />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
export function ContactSection({ title, text, message, defaultService }: { title?: ReactNode; text?: string; message?: string; defaultService?: string }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-h">
      <div className="contact-section__rule" />
      <div className="section-shell contact-inner">
        <div>
          <Eyebrow>WHEN HOME NEEDS A HAND</Eyebrow>
          <h2 id="contact-h" className="h-display">
            {title ?? <>Let’s get things<br /><em>working again.</em></>}
          </h2>
          <p>{text ?? "Tell us what’s happening. We’ll help you figure out what comes next – call or WhatsApp for AC and appliance service anywhere in Vizag."}</p>
          <ul className="contact-points">
            {["Doorstep service across Visakhapatnam", "Problem & charges explained before work", "All major appliance brands", "Quick booking on call or WhatsApp"].map((t) => (
              <li key={t}>
                <Check aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <Reveal className="contact-details">
          <span className="contact-details__label">YOUR LOCAL SERVICE CONTACT</span>
          <strong>{BUSINESS.owner}</strong>
          <span>AC SERVICE VIZAG.in · Visakhapatnam</span>
          <a className="contact-details__phone" href={TEL_HREF}>
            <Phone aria-hidden="true" /> {BUSINESS.phoneDisplay}
          </a>
          <a className="contact-details__addr" href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" /> RTC Complex, Dwaraka Nagar, Visakhapatnam
          </a>
          <a className="contact-details__addr contact-details__mail" href={MAIL_HREF}>
            <Mail aria-hidden="true" /> {BUSINESS.email}
          </a>
          <div className="contact-details__actions">
            <CallButton className="contact-call" />
            <WhatsAppButton className="contact-whatsapp" label="WhatsApp" message={message} />
          </div>
          <EnquiryForm defaultService={defaultService} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- JSON-LD ---------- */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
