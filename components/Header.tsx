"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { BUSINESS, MAPS_HREF, TEL_HREF, servicePath, waHref } from "@/lib/site";
import { AppIcon, WhatsAppIcon } from "./icons";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#brands", label: "Brands" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDd(false);
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setOpen(false);
    setDd(false);
  };

  return (
    <>
      <a href="#main" className="absolute -left-[999px] top-2 z-[200] bg-[var(--site-ink)] px-4 py-2 text-white focus:left-3">
        Skip to content
      </a>
      <div className="announcement" id="top">
        <span className="announcement__dot" aria-hidden="true" />
        <a className="announcement__loc" href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
          <MapPin aria-hidden="true" />
          <span className="announcement__long">RTC Complex, Dwaraka Nagar, Visakhapatnam</span>
          <span className="announcement__short">RTC Complex, Dwaraka Nagar</span>
        </a>
        <a href={TEL_HREF}>
          <Phone aria-hidden="true" />
          <span>{BUSINESS.phoneDisplay}</span>
        </a>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <Link className="brand-lockup" href="/" aria-label="AC Service Vizag home" onClick={close}>
            <Image src="/images/logo.webp" alt="AC Service Vizag – One Call for All Electrical Repairs" width={700} height={167} priority sizes="300px" />
          </Link>

          <nav className={`main-nav${open ? " main-nav--open" : ""}`} aria-label="Main navigation">
            <Link href="/" onClick={close} aria-current={pathname === "/" ? "page" : undefined}>
              Home
            </Link>
            <div
              ref={ddRef}
              className={`nav-dd${dd ? " is-open" : ""}`}
              onMouseEnter={() => window.matchMedia("(min-width: 821px)").matches && setDd(true)}
              onMouseLeave={() => window.matchMedia("(min-width: 821px)").matches && setDd(false)}
            >
              <button type="button" aria-expanded={dd} aria-haspopup="true" onClick={() => setDd((v) => !v)}>
                Services <ChevronDown aria-hidden="true" />
              </button>
              <div className="nav-dd__menu">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={servicePath(s.slug)} onClick={close} aria-current={pathname === servicePath(s.slug) ? "page" : undefined}>
                    <span>
                      <AppIcon name={s.icon} />
                    </span>
                    {s.short} in Vizag
                  </Link>
                ))}
              </div>
            </div>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="btn header-call" href={TEL_HREF} aria-label={`Call ${BUSINESS.phoneDisplay}`}>
              <span className="live-dot" aria-hidden="true" />
              <Phone aria-hidden="true" className="ring-icon" />
              <span>Call now</span>
            </a>
            <a className="btn header-whatsapp" href={waHref()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp AC Service Vizag">
              <WhatsAppIcon />
              <span>WhatsApp us</span>
            </a>
            <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
