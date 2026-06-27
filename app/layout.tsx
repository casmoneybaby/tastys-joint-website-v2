import type { Metadata, Viewport } from "next";
import { Anton, Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { site } from "@/data/site";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Smash Burgers on Caledonia, Sausalito`,
  description: site.shortDescription,
  keywords: [
    "burger Sausalito",
    "best burgers Marin County",
    "Caledonia Street restaurant",
    "Tasty's Joint",
    "smash burger California",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Smash Burgers on Caledonia, Sausalito`,
    description: site.shortDescription,
    url: site.url,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=85&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: `${site.name} — the Caledonia burger`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Smash Burgers on Caledonia, Sausalito`,
    description: site.shortDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EFE6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.shortDescription,
  image:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=85&auto=format&fit=crop",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", daysOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", daysOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", daysOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" },
  ],
  servesCuisine: ["Burgers", "American"],
  priceRange: "$$",
  url: site.url,
  hasMap: site.mapsUrl,
  geo: { "@type": "GeoCoordinates", latitude: 37.859, longitude: -122.485 },
  acceptsReservations: "false",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "213",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${fraunces.variable} ${jbm.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <StickyMobileCTA />
      </body>
    </html>
  );
}
