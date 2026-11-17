"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { waHref } from "@/lib/site";

/** Quick enquiry → opens WhatsApp with the details pre-filled (no backend needed). */
export function EnquiryForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const lines = [
      "Hello AC Service Vizag, I would like to book a service.",
      `Name: ${v("name")}`,
      `Service: ${v("service")}`,
      `Area in Vizag: ${v("area")}`,
    ];
    if (v("message")) lines.push(`Problem: ${v("message")}`);
    window.open(waHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} aria-label="Quick WhatsApp enquiry">
      <label htmlFor="eq-name">Your name</label>
      <input id="eq-name" name="name" placeholder="Your name" autoComplete="name" required />
      <label htmlFor="eq-service">Service needed</label>
      <select id="eq-service" name="service" defaultValue={defaultService ?? SERVICES[0].short} required>
        {SERVICES.map((s) => (
          <option key={s.slug}>{s.short}</option>
        ))}
        <option>AC Gas Filling</option>
        <option>Other</option>
      </select>
      <label htmlFor="eq-area">Your area in Vizag</label>
      <input id="eq-area" name="area" placeholder="Your area in Vizag (e.g. Gajuwaka, NAD)" required />
      <label htmlFor="eq-msg">Problem</label>
      <textarea id="eq-msg" name="message" placeholder="What's the problem? (optional)" />
      <button className="btn" type="submit">
        <Send aria-hidden="true" /> Send enquiry on WhatsApp
      </button>
      <p aria-live="polite">{sent ? "WhatsApp opened – just tap send." : "Opens WhatsApp with your details filled in."}</p>
    </form>
  );
}
