import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, House, LayoutGrid, MapPin, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { AREAS } from "@/lib/content";
import { BUSINESS, servicePath } from "@/lib/site";
import type { Faq, Feature, Service } from "@/lib/types";
import { CallButton, WhatsAppButton } from "./ContactButtons";
import { AppIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

/* ---------- headings ---------- */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`mb-3 inline-flex items-center gap-2 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] ${light ? "text-sky" : "text-brand"}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: ReactNode; intro?: ReactNode; id: string }) {
  return (
    <div className="mx-auto mb-13 max-w-[740px] text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-[clamp(1.65rem,3.2vw,2.5rem)] font-extrabold">
        {title}
      </h2>
      {intro && <p className="mt-3 text-[1.06rem] text-muted">{intro}</p>}
    </div>
  );
}

export function Section({ children, alt = false, id, labelledBy, className = "" }: { children: ReactNode; alt?: boolean; id?: string; labelledBy?: string; className?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-24 ${alt ? "bg-cloud" : ""} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

/* ---------- trust bar ---------- */
const TRUST = [
  { icon: <House />, title: "Doorstep Service", text: "At your home or office across Vizag & nearby areas" },
  { icon: <LayoutGrid />, title: "6 Service Categories", text: "AC, fridge, washing machine, RO, geyser & electrical" },
  { icon: <Award />, title: "All Major Brands", text: "LG, Samsung, Voltas, Daikin, Whirlpool & more" },
  { icon: <WhatsAppIcon />, title: "Call & WhatsApp Booking", text: `Quick response on ${BUSINESS.phoneShort}` },
];

export function TrustBar() {
  return (
    <section aria-label="Why customers call us" className="relative z-[2] -mt-[78px]">
      <ul className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4.5">
        {TRUST.map((t, i) => (
          <Reveal as="li" key={t.title} delay={i * 0.06} className="flex items-start gap-3.5 rounded-[18px] border border-line bg-white p-5 shadow-lift">
            <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-gradient-to-br from-brand to-navy text-white [&_svg]:size-6" aria-hidden="true">
              {t.icon}
            </span>
            <div>
              <strong className="block font-display leading-snug text-navy">{t.title}</strong>
              <span className="mt-1 block text-[0.88rem] leading-snug text-muted">{t.text}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- service card (homepage grid) ---------- */
export function ServiceCard({ s, extra }: { s: Service; extra?: { href: string; label: string } }) {
  const href = servicePath(s.slug);
  return (
    <Reveal as="article" className="group flex flex-col overflow-hidden rounded-[26px] border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] overflow-hidden bg-[#EAF3FF]">
        <Image
          src={s.image}
          alt={s.alt}
          fill
          sizes="(max-width:767px) 92vw, (max-width:1080px) 46vw, 380px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1.5 font-display text-[0.74rem] font-bold uppercase tracking-[0.08em] text-white">
          {s.cat.replace(" Services", "")}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">
          <Link href={href} className="hover:text-brand">
            {s.cat}
          </Link>
        </h3>
        <p className="mb-4 text-[0.95rem] text-muted">{s.cardText}</p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {s.chips.map((c) => (
            <li key={c} className="rounded-full bg-ice px-2.5 py-1.5 text-[0.8rem] font-semibold text-navy">
              {c}
            </li>
          ))}
        </ul>
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1">
          <MoreLink href={href}>{s.short} in Vizag</MoreLink>
          {extra && <MoreLink href={extra.href}>{extra.label}</MoreLink>}
        </div>
        <div className="mt-auto flex flex-wrap gap-2.5">
          <CallButton size="sm" label="Call" />
          <WhatsAppButton size="sm" label="Enquire" message={s.waMessage} />
        </div>
      </div>
    </Reveal>
  );
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group/l inline-flex items-center gap-1.5 font-display font-bold text-brand hover:text-navy">
      {children}
      <ArrowRight className="size-[18px] transition-transform group-hover/l:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

/* ---------- features ---------- */
export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal
          key={f.title}
          delay={(i % 3) * 0.06}
          className="group relative overflow-hidden rounded-[18px] border border-line bg-white p-7.5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-brand to-accent transition-all duration-500 group-hover:w-full" aria-hidden="true" />
          <span className="mb-4.5 grid size-14 place-items-center rounded-2xl bg-ice text-brand">
            <AppIcon name={f.icon} className="size-7" />
          </span>
          <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
          <p className="text-[0.95rem] text-muted">{f.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- areas ---------- */
export function AreasSection({ title, text }: { title: string; text: string }) {
  return (
    <section id="areas" aria-labelledby="areas-h" className="relative overflow-hidden bg-gradient-to-br from-navy-deep to-navy py-16 text-[#DCE8FF] md:py-24">
      <div className="pointer-events-none absolute -right-48 -top-48 size-[600px] rounded-full bg-[radial-gradient(rgba(8,120,232,.45),transparent_70%)]" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-11 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
        <div>
          <Eyebrow light>Service Area</Eyebrow>
          <h2 id="areas-h" className="mb-4 text-[clamp(1.65rem,3.2vw,2.5rem)] font-extrabold text-white">
            {title}
          </h2>
          <p className="mb-4 text-[#C9D9F7]">{text}</p>
          <p className="mb-6 text-[#C9D9F7]">Not sure if we cover your locality? Call or WhatsApp us and we will confirm.</p>
          <div className="flex flex-wrap gap-3">
            <CallButton />
            <WhatsAppButton label="Check My Area" message="Hi RK Cool Tech Services, do you provide service in my area in Vizag?" />
          </div>
        </div>
        <Reveal>
          <ul className="flex flex-wrap gap-2.5" aria-label="Areas served in Visakhapatnam">
            {[...AREAS, "& surrounding areas"].map((a) => (
              <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 text-[0.9rem] font-medium text-white">
                <MapPin className="size-[15px] text-sky" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ faqs, title }: { faqs: Faq[]; title: string }) {
  return (
    <Section alt id="faq" labelledBy="faq-h">
      <SectionHeading eyebrow="FAQs" title={title} id="faq-h" />
      <div className="mx-auto grid max-w-[860px] gap-3.5">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0} className="group rounded-2xl border border-line bg-white transition open:border-[#CFE0F8] open:shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
              <h3 className="font-display text-[1.05rem] font-bold leading-snug">{f.q}</h3>
              <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-ice text-brand transition group-open:rotate-45 group-open:bg-brand group-open:text-white">
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </summary>
            <p className="px-6 pb-5.5 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({ title, text, message }: { title: string; text: string; message?: string }) {
  return (
    <Section>
      <Reveal className="relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[28px] bg-gradient-to-r from-navy to-brand p-8 text-[#DCE8FF] shadow-lift md:p-12">
        <span className="absolute -bottom-30 -right-15 size-80 rounded-full bg-white/[.08]" aria-hidden="true" />
        <div className="relative">
          <h2 className="mb-2 text-[clamp(1.5rem,2.6vw,2.1rem)] font-extrabold text-white">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="relative flex flex-wrap gap-3">
          <CallButton />
          <WhatsAppButton message={message} />
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- JSON-LD ---------- */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
