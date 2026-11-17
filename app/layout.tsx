import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Floating } from "@/components/Floating";
import { MotionProvider } from "@/components/MotionProvider";
import { GSC_VERIFICATION, SITE_URL } from "@/lib/site";
import { HOME_KEYWORDS } from "@/lib/keywords";
import "./globals.css";

// Self-hosted variable fonts – same families as the Lovable design (Manrope + DM Sans)
const display = localFont({ src: "./fonts/manrope.woff2", variable: "--font-display", display: "swap", weight: "200 800" });
const body = localFont({ src: "./fonts/dm-sans.woff2", variable: "--font-body", display: "swap", weight: "100 1000" });

export const viewport: Viewport = { themeColor: "#2f6fb5", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AC Service Vizag | AC Repair & Installation in Visakhapatnam", template: "%s" },
  description:
    "Looking for AC service in Vizag? Get professional AC repair, servicing, installation, maintenance and electrical repair services in Visakhapatnam. Contact AC Service Vizag today.",
  applicationName: "AC Service Vizag",
  keywords: HOME_KEYWORDS,
  category: "Home services",
  formatDetection: { telephone: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AC Service Vizag",
    images: [{ url: "/images/ac-service-vizag.jpg", width: 1536, height: 1024, alt: "AC Service Vizag technician servicing an air conditioner in a Vizag home" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/ac-service-vizag.jpg"] },
  other: { "geo.region": "IN-AP", "geo.placename": "Visakhapatnam", "geo.position": "17.7244;83.3048", ICBM: "17.7244, 83.3048" },
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
