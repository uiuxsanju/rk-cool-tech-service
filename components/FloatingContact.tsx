import { Phone } from "lucide-react";
import { BUSINESS, TEL_HREF, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Floating round buttons (tablet/desktop) + sticky bottom bar (mobile). */
export function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-6 right-5.5 z-[90] hidden flex-col gap-3.5 md:flex" aria-label="Quick contact">
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp RK Cool Tech Services"
          className="group relative grid size-[60px] place-items-center rounded-full bg-wa text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,.45)] transition hover:scale-110"
        >
          <span className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-wa" aria-hidden="true" />
          <WhatsAppIcon className="size-7" />
          <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-[0.82rem] font-semibold opacity-0 transition group-hover:opacity-100">
            WhatsApp us
          </span>
        </a>
        <a
          href={TEL_HREF}
          aria-label="Call RK Cool Tech Services"
          className="group relative grid size-[60px] place-items-center rounded-full bg-accent text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,.45)] transition hover:scale-110"
        >
          <Phone className="size-7" aria-hidden="true" />
          <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-[0.82rem] font-semibold opacity-0 transition group-hover:opacity-100">
            Call {BUSINESS.phoneShort}
          </span>
        </a>
      </div>

      <nav
        aria-label="Contact bar"
        className="fixed inset-x-0 bottom-0 z-[95] grid grid-cols-2 gap-2.5 border-t border-line bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-10px_30px_-10px_rgba(8,43,112,.3)] md:hidden"
      >
        <a href={TEL_HREF} className="flex h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-accent font-display font-extrabold tracking-wide text-white">
          <Phone className="size-6" aria-hidden="true" />
          CALL NOW
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-wa font-display font-extrabold tracking-wide text-white"
        >
          <WhatsAppIcon className="size-6" />
          WHATSAPP
        </a>
      </nav>
    </>
  );
}
