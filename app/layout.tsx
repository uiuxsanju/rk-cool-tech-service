import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Floating } from "@/components/Floating";
import { MotionProvider } from "@/components/MotionProvider";
import { GSC_VERIFICATION, SITE_URL } from "@/lib/site";
import "./globals.css";

// Self-hosted variable fonts – same families as the Lovable design (Manrope + DM Sans)
const display = localFont({ src: "./fonts/manrope.woff2", variable: "--font-display", display: "swap", weight: "200 800" });
const body = localFont({ src: "./fonts/dm-sans.woff2", variable: "--font-body", display: "swap", weight: "100 1000" });

export const viewport: Viewport = { themeColor: "#2f6fb5", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "RK Cool Tech Services | AC Repair & Appliance Service in Vizag", template: "%s" },
  description:
    "AC repair & appliance service in Vizag – NAD, Gajuwaka, Pendurthi, Vepagunta & RTC Complex. AC, fridge, washing machine, RO, geyser & electrical. Call 9000626018.",
  applicationName: "RK Cool Tech Services",
  formatDetection: { telephone: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "RK Cool Tech Services",
    images: [{ url: "/images/rk-hero.jpg", width: 1536, height: 1024, alt: "RK Cool Tech technician servicing an air conditioner in a Vizag home" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/rk-hero.jpg"] },
  other: { "geo.region": "IN-AP", "geo.placename": "Visakhapatnam" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Floating />
        </MotionProvider>
      </body>
    </html>
  );
}
