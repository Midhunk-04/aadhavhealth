import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aadhavhealthsupport.in'),
  title: {
    default: "Aadhav Health Support | Best Home Care & Nursing in Coimbatore",
    template: "%s | Aadhav Health Support Coimbatore"
  },
  description: "Aadhav Health Support offers premier home care services in Coimbatore, including elderly care, professional home nursing, patient care, and physiotherapy. Trustworthy and compassionate care at your doorstep.",
  keywords: [
    "Home Care Services Coimbatore",
    "Best Home Nursing Coimbatore",
    "Elderly Care Coimbatore",
    "Patient Care Tirupur",
    "Home Nursing Pollachi",
    "Physiotherapy Home Visit Erode",
    "Home Healthcare Mettupalayam",
    "Nursing Bureau Avinashi",
    "Aadhav Health Support Coimbatore",
    "Healthcare at home Tamil Nadu",
    "Senior Citizen Care Coimbatore",
    "Post-operative care Coimbatore"
  ],
  authors: [{ name: "Aadhav Health Support" }],
  creator: "Aadhav Health Support",
  publisher: "Aadhav Health Support",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aadhavhealthsupport.in",
    siteName: "Aadhav Health Support",
    title: "Aadhav Health Support | Expert Home Healthcare in Coimbatore",
    description: "Professional, certified, and compassionate home nursing and elderly care services in Coimbatore. Your family's health is our priority.",
    images: [
      {
        url: "/assets/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Aadhav Health Support Home Care Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhav Health Support | Home Care Coimbatore",
    description: "Expert home nursing and elderly care services in Coimbatore.",
    images: ["/assets/hero-bg.png"],
  },
  alternates: {
    canonical: "https://aadhavhealthsupport.in",
    languages: {
      "en-IN": "https://aadhavhealthsupport.in",
      "ta-IN": "https://aadhavhealthsupport.in/ta",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "provide-your-google-verification-code-here",
  },
  icons: {
    icon: [
      { url: '/assets/favicon.png?v=3', sizes: '48x48', type: 'image/png' },
      { url: '/assets/favicon.png?v=3', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon.png?v=3', sizes: '144x144', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
};


import { Preloader } from "@/components/shared/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", playfair.variable, inter.variable)}>
      <body className={cn("min-h-screen bg-background font-inter antialiased text-foreground")}>
        <Preloader />
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Aadhav Health Support",
                  "image": "https://aadhavhealthsupport.in/assets/logo-transparent.png",
                  "@id": "https://aadhavhealthsupport.in",
                  "url": "https://aadhavhealthsupport.in",
                  "telephone": "+917358961021",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "D No 32 Alagiya Thruchitramb, Guvra Homes PT Colony, Sundakkamuthur, Perur Chettipalayam",
                    "addressLocality": "Coimbatore",
                    "postalCode": "641010",
                    "addressRegion": "TN",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 10.9575,
                    "longitude": 76.9234
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "sameAs": [
                    "https://www.facebook.com/share/p/1aYCvcYdtZ/",
                    "https://www.instagram.com/aadhavhealthsupport?igsh=OHNmcGhzN25rNzBm"
                  ]
                })
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://aadhavhealthsupport.in"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://aadhavhealthsupport.in/services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Pricing",
                      "item": "https://aadhavhealthsupport.in/pricing"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "About",
                      "item": "https://aadhavhealthsupport.in/about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Contact",
                      "item": "https://aadhavhealthsupport.in/contact"
                    }
                  ]
                })
              }}
            />
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
