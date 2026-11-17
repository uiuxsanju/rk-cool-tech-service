import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { CallButton, Eyebrow, WhatsAppButton } from "./blocks";

export function PageHero({ crumb, eyebrow, title, lead, image, alt, message }: {
  crumb: string; eyebrow: string; title: ReactNode; lead: string; image: string; alt: string; message?: string;
}) {
  return (
    <section className="page-hero" aria-labelledby="ph-h">
      <div className="section-shell page-hero__inner">
        <nav aria-label="Breadcrumb" style={{ gridColumn: "1 / -1" }}>
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="ph-h">{title}</h1>
          <p className="page-hero__lead">{lead}</p>
          <div className="hero__actions">
            <CallButton />
            <WhatsAppButton message={message} label="WhatsApp us" />
          </div>
          <div className="hero__trust">
            <span className="trust-mark"><ShieldCheck aria-hidden="true" /></span>
            <span>Doorstep service</span>
            <i aria-hidden="true" />
            <span>Charges explained first</span>
          </div>
        </div>
        <div className="page-hero__visual">
          <Image src={image} alt={alt} width={1024} height={576} priority sizes="(max-width:820px) 92vw, 560px" />
        </div>
      </div>
    </section>
  );
}
