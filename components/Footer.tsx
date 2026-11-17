import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { AREA_PAGES } from "@/lib/areas";
import { BUSINESS, MAIL_HREF, MAPS_HREF, TEL_HREF, servicePath, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="AC Service Vizag home">
            <Image src="/images/logo.webp" alt="AC Service Vizag logo" width={700} height={167} sizes="240px" />
          </Link>
          <p>Professional AC repair, appliance repair, installation and electrical care for homes across Visakhapatnam (Vizag). Owner: {BUSINESS.owner}.</p>
          <span className="footer-tagline">ONE CALL FOR ALL ELECTRICAL REPAIRS.</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about/">About us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/ac-brands-vizag/">AC brands</Link>
          <Link href="/service-areas/">Service areas</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/contact/">Contact us</Link>
        </div>
        <div className="footer-column">
          <h2>Our services</h2>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={servicePath(s.slug)}>
              {s.short} in Vizag
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href={TEL_HREF} className="inline-flex items-center gap-2">
            <Phone className="size-3.5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a href={waHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            <WhatsAppIcon className="size-3.5" />
            WhatsApp us
          </a>
          <a href={MAIL_HREF} className="inline-flex items-center gap-2 break-all">
            <Mail className="size-3.5 shrink-0" aria-hidden="true" />
            {BUSINESS.email}
          </a>
          <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2">
            <MapPin className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
            <span>
              RTC Complex, Dwaraka Nagar,
              <br />
              Visakhapatnam, Andhra Pradesh
            </span>
          </a>
        </div>
      </div>
      <nav className="section-shell footer-areas" aria-label="AC service areas in Vizag">
        <strong>AC service &amp; electrician in:</strong>
        {AREA_PAGES.map((a) => (
          <Link key={a.slug} href={servicePath(a.slug)}>{a.name}</Link>
        ))}
      </nav>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} AC Service Vizag. All rights reserved.</span>
        <a href="#top">
          Back to top <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
