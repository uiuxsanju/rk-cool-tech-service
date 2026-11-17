import { Phone } from "lucide-react";
import { TEL_HREF, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Floating WhatsApp + Call buttons (tablet/desktop) and sticky contact bar (mobile). */
export function Floating() {
  return (
    <>
      <div className="floating">
        <a className="floating__wa" href={waHref()} target="_blank" rel="noopener noreferrer" aria-label="Contact AC Service Vizag on WhatsApp">
          <WhatsAppIcon />
        </a>
        <a className="floating__call" href={TEL_HREF} aria-label="Call AC Service Vizag">
          <span className="floating__pulse" aria-hidden="true" />
          <Phone aria-hidden="true" className="ring-icon" />
        </a>
      </div>
      <nav className="mobile-bar" aria-label="Quick contact">
        <a className="mobile-bar__call" href={TEL_HREF}>
          <span className="live-dot" aria-hidden="true" />
          <Phone aria-hidden="true" className="ring-icon" />
          CALL NOW
        </a>
        <a className="mobile-bar__wa" href={waHref()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          WHATSAPP
        </a>
      </nav>
    </>
  );
}
