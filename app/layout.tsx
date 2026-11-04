import type { Metadata, Viewport } from "next";
import { Anybody, Geist, Geist_Mono, Manrope, Montserrat } from "next/font/google";
import { SITE_URL } from "@/site";
import "./globals.css";

const anybody = Anybody({ subsets: ["latin"], axes: ["wdth"], variable: "--font-anybody" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
// Seloira brand fonts, only used inside the booking-screen illustration.
const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-manrope" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700", variable: "--font-montserrat" });

const description =
  "Darrel Idiagbor, senior software engineer and tech lead. I build products end to end, from the design system to the database.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Darrel Idiagbor",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Darrel Idiagbor", title: "Darrel Idiagbor", description },
  twitter: { card: "summary_large_image", creator: "@idiagbordarrel" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0D1A" },
    { media: "(prefers-color-scheme: light)", color: "#F2F3F9" },
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darrel Idiagbor",
  jobTitle: "Senior Software Engineer",
  url: SITE_URL,
  sameAs: ["https://linkedin.com/in/darrelidiagbor", "https://github.com/Darrellbor"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [anybody, geist, geistMono, manrope, montserrat].map((f) => f.variable).join(" ");
  return (
    <html lang="en" className={fonts}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
