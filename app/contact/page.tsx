import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, MAIL_HREF, MAPS_HREF, TEL_HREF, waHref } from "@/lib/site";
import { pageMeta, simplePageGraph } from "@/lib/pages";
import { PageHero } from "@/components/PageHero";
import { ContactSection, Eyebrow, JsonLd } from "@/components/blocks";

const PATH = "/contact/";
const TITLE = "Contact AC Service Vizag | Book AC Service & Repair in Visakhapatnam";
const DESC = "Contact AC Service Vizag to book AC service, AC repair, installation or electrical repair in Visakhapatnam. Call or WhatsApp 9000626018 – RTC Complex, Dwaraka Nagar.";

export const metadata: Metadata = pageMeta(PATH, TITLE, DESC, ["contact AC service Vizag", "book AC service Visakhapatnam", "AC repair phone number Vizag"]);

const MAP_EMBED = "https://maps.google.com/maps?q=RTC+Complex+Dwaraka+Nagar+Visakhapatnam&z=15&output=embed";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={simplePageGraph(PATH, "Contact AC Service Vizag", DESC, "ContactPage")} />
      <PageHero
        crumb="Contact"
        eyebrow="CONTACT · VISAKHAPATNAM"
        title={<>Contact AC Service Vizag <em style={{ color: "var(--accent-text)", fontStyle: "normal" }}>– Book a Doorstep Visit</em></>}
        lead="Call or WhatsApp with your appliance, the problem and your area in Vizag. We confirm a convenient time and explain charges before starting any work."
        image="/images/services/split-ac-service-vizag.webp"
        alt="Split AC – book AC service in Vizag"
      />

      <section className="about-section section-pad" aria-labelledby="ct-h">
        <div className="section-shell prose-split">
          <div>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h2 id="ct-h" className="h-display">Business details</h2>
            <ul className="contact-list">
              <li><Phone aria-hidden="true" /><span><small>Phone</small><a href={TEL_HREF}>{BUSINESS.phoneDisplay}</a></span></li>
              <li><MessageCircle aria-hidden="true" /><span><small>WhatsApp</small><a href={waHref()} target="_blank" rel="noopener noreferrer">{BUSINESS.phoneDisplay}</a></span></li>
              <li><Mail aria-hidden="true" /><span><small>Email</small><a href={MAIL_HREF}>{BUSINESS.email}</a></span></li>
              <li><MapPin aria-hidden="true" /><span><small>Main location</small><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">RTC Complex, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh</a></span></li>
            </ul>
            <p>Owner: <strong>{BUSINESS.owner}</strong></p>
          </div>
          <div className="map-embed">
            <iframe
              title="AC Service Vizag – RTC Complex, Dwaraka Nagar on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
