# Google Business Profile – Setup Guide for AC Service Vizag

Use these details so Google sees the **same business information** on the website and on Google Maps.

## 1. Business details (keep exactly the same everywhere)
| Field | Value |
|---|---|
| Business name | AC Service Vizag *(use the real name only – don't add keywords like "AC Repair Vizag", Google can suspend the listing for that)* |
| Phone | +91 90006 26018 |
| Website | https://acservicevizag.in/ *(change it if the domain is different)* |
| Business type | Service-area business (you visit customers). **Hide the street address** if customers don't come to a shop. |
| Service areas | Visakhapatnam, plus the localities you actually cover (MVP Colony, Madhurawada, Gajuwaka, Seethammadhara, Dwaraka Nagar, PM Palem, Pendurthi …). Google allows up to 20. |
| Hours | Add your **real** working hours. They aren't on the website; add them there too once confirmed. |

## 2. Categories
- **Primary:** Air conditioning repair service
- **Additional** (pick the closest ones in Google's list): Appliance repair service · Refrigerator repair service · Washer & dryer repair service · Water purification company / Water filter supplier · Electrician · Air conditioning contractor

## 3. Business description (paste-ready, under 750 characters)
> AC Service Vizag is a Visakhapatnam-based AC and home appliance service business led by Pro. Ramprasad. We provide AC repair, AC installation and uninstallation, AC gas filling and general service for split and window ACs, along with refrigerator repair, washing machine repair (front load and top load), RO water purifier service, geyser repair and home electrical work. We service all major brands including LG, Samsung, Whirlpool, Haier, Godrej, Voltas, Daikin and Bajaj. Our technicians visit homes, offices and shops across Vizag and surrounding areas. We inspect first and explain the problem and charges before starting any repair. Call or WhatsApp 9000626018 to book. One Call for All Electrical Repairs.

## 4. Services (add each one in the "Services" section)
Use the same names as the website pages and link each to its page:
- AC Repair → /ac-repair-service-vizag/
- AC Installation → /ac-installation-vizag/
- AC Gas Filling, AC General Service → /ac-repair-service-vizag/
- Refrigerator Repair → /refrigerator-repair-vizag/
- Washing Machine Repair → /washing-machine-repair-vizag/
- RO Water Purifier Service → /ro-service-vizag/
- Geyser Repair → /geyser-repair-vizag/
- Electrical Services → /electrical-services-vizag/

Tip: to see Google traffic in analytics, use this as the website link in GBP:
`https://acservicevizag.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp`

## 5. Photos
- Upload **real** photos: logo, cover image, the technician at work, before/after AC coil cleaning, installations done, the service vehicle.
- Name the files clearly before uploading, e.g. `ac-repair-vizag-mvp-colony.jpg`.
- Add new photos every week or two. Fresh activity helps your local ranking.
- **Website photos:** replace the illustrations in `public/images/` with real job photos in the same size (800×600 WebP, hero 1200×900), using the same file names.

## 6. Reviews (genuine only)
- After every completed job, send the customer your GBP review link on WhatsApp:
  *"Thank you for choosing AC Service Vizag! If you're happy with the service, please share a quick review: <your review link>"*
- Get your review link from GBP → "Ask for reviews".
- Reply to every review, good or bad, politely and within a day or two.
- **Never** buy reviews, write fake ones or offer discounts in exchange for reviews. Google removes them and can suspend the listing.
- Don't add rating stars or review numbers to the website schema unless they come from a real, verifiable review system.

## 7. After the website is live
1. Google Search Console → add property → verify. Paste the code into `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel → Settings → Environment Variables and redeploy, or upload Google's HTML file to the root folder.
2. Submit `https://acservicevizag.in/sitemap.xml` in Search Console.
3. Use URL Inspection → "Request indexing" for the homepage and all 7 service pages.
4. Test structured data: https://search.google.com/test/rich-results
5. Use the same name and phone on JustDial, Sulekha, Facebook and Instagram (NAP consistency).
6. Post on GBP regularly: summer AC service offers, monsoon tips and so on.

Ranking takes time and depends on reviews, the GBP listing, competition and links. This website gives you the technical SEO foundation. It does **not** guarantee a ranking position.
