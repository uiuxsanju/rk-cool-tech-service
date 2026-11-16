import Link from "next/link";

export function LogoMark({ className = "size-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rk-lm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0878E8" />
          <stop offset="1" stopColor="#082B70" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#rk-lm)" />
      <g stroke="#fff" strokeWidth="3.2" strokeLinecap="round" fill="none">
        <path d="M32 12v40M14.7 22l34.6 20M14.7 42l34.6-20" />
        <path d="M26 16l6 6 6-6M26 48l6-6 6 6" />
      </g>
      <circle cx="50" cy="14" r="6" fill="#EF3340" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="RK Cool Tech Services – home">
      <LogoMark className="size-10 shrink-0 md:size-11" />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={`font-display text-base font-extrabold tracking-tight md:text-lg ${dark ? "text-white" : "text-navy"}`}>
          RK COOL TECH
        </span>
        <span className="mt-1 font-display text-[0.64rem] font-bold tracking-[0.32em] text-brand">SERVICES</span>
      </span>
    </Link>
  );
}
