# AC Service Vizag – SEO Implementation Report

Domain: https://acservicevizag.in · Stack: Next.js 16 (App Router) · Date: 17 Nov 2026

> No ranking or indexing is claimed. All checks below were run on a local production build (`next build && next start`).
> Rankings depend on Google, competition, Google Business Profile and reviews, and take time.

## 1. Pages (22 indexable URLs in sitemap.xml)

| URL | Title | H1 |
|---|---|---|
| `/` | AC Service Vizag \| AC Repair & Installation in Visakhapatnam | Professional AC Service & Repair in Visakhapatnam |
| `/ac-service-vizag/` | AC Service in Vizag \| Split & Window AC Servicing at Home | AC Service in Vizag – Split & Window AC Servicing at Your Home |
| `/ac-repair-service-vizag/` | AC Repair in Vizag \| Split & Window AC Repair by AC Technicians | AC Repair in Vizag – Split & Window AC Technicians at Your Doorstep |
| `/ac-installation-vizag/` | AC Installation in Vizag \| Split & Window AC Fitting & Uninstallation | AC Installation in Vizag – Neat, Safe & Correctly Fitted |
| `/ac-gas-filling-vizag/` | AC Gas Filling in Vizag \| AC Gas Leakage Repair & Recharge | AC Gas Filling in Vizag – Leak Detection, Repair & Gas Charging |
| `/ac-cleaning-service-vizag/` | AC Cleaning Service in Vizag \| Jet Pump Coil & Blower Cleaning | AC Cleaning Service in Vizag – Deep Coil & Blower Cleaning |
| `/ac-maintenance-vizag/` | AC Maintenance in Vizag \| Preventive AC Care for Homes & Offices | AC Maintenance in Vizag – Preventive Care for Homes & Offices |
| `/ac-amc-service-vizag/` | AC AMC Service in Vizag \| Annual Maintenance Contract for ACs | AC AMC Service in Vizag – Annual Maintenance Contract |
| `/electrical-services-vizag/` | Electrical Repair in Vizag \| Electrician for Home Wiring & MCB | Electrical Repair in Vizag – Electrician for Wiring, MCB & DB Work |
| `/refrigerator-repair-vizag/`, `/washing-machine-repair-vizag/`, `/ro-service-vizag/`, `/geyser-repair-vizag/` | Unique titles per appliance | Unique H1 per appliance |
| `/ac-brands-vizag/` | AC Brands We Service in Vizag \| LG, Samsung, Voltas, Daikin & More | AC Brands We Service in Vizag |
| `/service-areas/` | AC Service Areas in Vizag \| Dwaraka Nagar, Gajuwaka, NAD, MVP Colony | AC Service Areas in Vizag |
| `/ac-service-dwaraka-nagar/`, `-nad/`, `-gajuwaka/`, `-pendurthi/`, `-vepagunta/` | AC Service in {Area}, Vizag \| AC Repair & Electrician | AC Service & Electrician in {Area} |
| `/about/` | About AC Service Vizag \| AC Repair & Electrical Experts in Visakhapatnam | About AC Service Vizag |
| `/contact/` | Contact AC Service Vizag \| Book AC Service & Repair in Visakhapatnam | Contact AC Service Vizag |

Every page has a unique title and meta description, one H1, a canonical URL, Open Graph and Twitter tags, breadcrumbs and JSON-LD.
Verified locally: 22/22 URLs return HTTP 200, 0 duplicate titles, 0 duplicate descriptions, 0 noindex, all canonicals correct, all images have alt text, all JSON-LD parses, 0 broken internal links.

## 2. Keywords
- `lib/keywords.ts` holds the primary, secondary and per-page keyword lists from the brief, used in meta keywords.
- Keywords are placed naturally in titles, H1s, intro text, FAQs and internal-link anchors. No hidden text and no keyword stuffing.
- Location keywords: 5 main areas have their own pages with area-specific copy. The other localities (MVP Colony, Madhurawada, Seethammadhara, Akkayyapalem, Gopalapatnam, Rushikonda, PM Palem, Kancharapalem, Madhavadhara, Marripalem and more) are covered on `/service-areas/` with anchor sections. They do not get separate thin pages, to avoid doorway or duplicate content.
- **Anakapalle was NOT added.** It is a separate town outside Vizag city. Add it only if the owner confirms service there.

## 3. Technical SEO
- Next.js Metadata API on every route; `metadataBase` = SITE_URL.
- `app/sitemap.ts` generates all 22 canonical URLs. `app/robots.ts` allows all and points to the sitemap.
- `trailingSlash: true` for consistent URLs. A 301 redirect sends `www.acservicevizag.in` to `https://acservicevizag.in` (in `next.config.ts`).
- Custom 404 page (noindex, follow) with links to the services.
- Breadcrumb navigation plus BreadcrumbList schema on all inner pages.
- Internal linking:
  - header Services menu (12 services)
  - home "All AC services" links
  - related-services grid on every service page
  - brand chips that link to brand sections
  - area chips and footer area links
  - About / Brands / Areas / Contact links in the header and footer

## 4. Structured data (JSON-LD)
- `HVACBusiness` + `Electrician` (LocalBusiness), with:
  - name and alternate names
  - phone and email
  - address: RTC Complex, Dwaraka Nagar, Visakhapatnam
  - geo and Google Maps link
  - areaServed
  - OfferCatalog of all services
  - keywords
- `Service` on every service page and area page; `FAQPage` on the home, service and area pages.
- `AboutPage` and `ContactPage` on About and Contact; `WebSite` and `WebPage` on the home page.
- **Not included (must not be invented):** opening hours, ratings, reviews and social profiles. Add them only with real data from the owner or Google Business Profile.
- **Geo coordinates are approximate.** `17.7244, 83.3048` is near RTC Complex. Replace it with the exact Google Maps pin in `lib/schema.ts` and `app/layout.tsx`.

## 5. Image SEO
- Descriptive WebP filenames:
  - `ac-service-vizag.webp/.jpg` (main and OG image)
  - `services/ac-repair-visakhapatnam.webp`
  - `ac-installation-vizag.webp`
  - `split-ac-service-vizag.webp`
  - `ac-gas-filling-vizag.webp`
  - `ac-cleaning-service-vizag.webp`
  - `ac-maintenance-vizag.webp`
  - `ac-amc-service-vizag.webp`
  - `electrical-repair-vizag.webp`
  - `refrigerator-repair-vizag.webp`
  - `washing-machine-repair-vizag.webp`
  - `ro-service-vizag.webp`
  - `geyser-repair-vizag.webp`
- next/image provides AVIF/WebP, responsive `sizes`, width and height attributes, `priority` for above-the-fold images and lazy loading for the rest.
- The descriptive ALT texts contain no keyword stuffing.
- Old images (`rk-hero.jpg`, `services/ac.webp`, etc.) are no longer used and can be deleted.
- `scripts/fetch-images.mjs` no longer runs on dev/build.

## 6. Performance (local Lighthouse, mobile)
| Page | Perf | A11y | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` | 88 | 100 | 100 | 100 | 0.9 s | 0 |
| `/ac-service-vizag/` | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/contact/` | 93 | 100 | 100 | 100 | 3.0 s* | 0 |

\*The Google map iframe could not load in the test sandbox. It is lazy-loaded and does not block rendering.

The site already uses self-hosted fonts, server rendering, static generation for all pages, and LazyMotion for animations.

## 7. Content & honesty rules followed
- No invented prices, warranties, years of experience, certifications, ratings or reviews.
- The brand page states clearly that AC Service Vizag is an independent multi-brand service, **not an authorised service centre**.
- **The AMC page needs the owner's confirmation.** It describes AMC terms as "agreed before the AMC starts". Confirm with the owner that AMC is offered, or remove `ac-amc-service-vizag` from `SERVICES` in `lib/content.ts`.

## 8. After deployment – Google Search Console checklist
1. Add the domain property `acservicevizag.in` (DNS TXT), or set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel.
2. Submit `https://acservicevizag.in/sitemap.xml`.
3. Use URL Inspection to request indexing for `/`, `/ac-service-vizag/`, `/ac-repair-service-vizag/` and `/electrical-services-vizag/`.
4. Watch Pages (indexing), Core Web Vitals and Enhancements (FAQ, Breadcrumbs).
5. Validate schema at https://search.google.com/test/rich-results.
6. In Vercel, set `acservicevizag.in` as the primary domain and `www` to redirect to it.

## 9. Local SEO actions (off-site)
- **Google Business Profile:**
  - name: AC SERVICE VIZAG
  - primary category: Air conditioning repair service; secondary category: Electrician
  - same address, phone and website as the site
  - real opening hours and photos
- Ask real customers for Google reviews.
- Keep the same name, phone and address on Justdial, Sulekha, IndiaMART and Facebook.
