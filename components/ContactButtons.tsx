import { Phone } from "lucide-react";
import { BUSINESS, TEL_HREF, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-display font-bold leading-none text-white transition duration-200 hover:-translate-y-0.5";
const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm [&_svg]:size-4",
  md: "px-6 py-3.5 text-base [&_svg]:size-5",
};

export function CallButton({ label = "Call Now", size = "md", className = "" }: { label?: string; size?: Size; className?: string }) {
  return (
    <a
      href={TEL_HREF}
      aria-label={`Call RK Cool Tech Services on ${BUSINESS.phoneDisplay}`}
      className={`${base} ${sizes[size]} bg-accent shadow-[0_10px_24px_-10px_rgba(239,51,64,.7)] hover:bg-accent-dark ${className}`}
    >
      <Phone aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  size = "md",
  className = "",
}: {
  message?: string;
  label?: string;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} – chat with RK Cool Tech Services on WhatsApp`}
      className={`${base} ${sizes[size]} bg-wa shadow-[0_10px_24px_-10px_rgba(37,211,102,.7)] hover:bg-wa-dark ${className}`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}
