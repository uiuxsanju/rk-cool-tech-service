import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { BUSINESS, TEL_HREF, servicePath, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="RK Cool Tech Services home">
            <Image src="/images/rk-logo.webp" alt="RK Cool Tech Services" width={700} height={238} sizes="169px" />
          </Link>
          <p>Professional AC repair, appliance repair, installation and electrical care for homes across Visakhapatnam (Vizag). Owner: {BUSINESS.owner}.</p>
          <span className="footer-tagline">YOUR COMFORT, OUR PRIORITY.</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#brands">Brands</Link>
          <Link href="/#why-us">Why us</Link>
          <Link href="/#areas">Service areas</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
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
          <span>
            Visakhapatnam,
            <br />
            Andhra Pradesh, India
          </span>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} RK Cool Tech Services. All rights reserved.</span>
        <a href="#top">
          Back to top <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
