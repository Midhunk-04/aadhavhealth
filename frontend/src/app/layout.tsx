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
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", playfair.variable, inter.variable)}>
      <body className={cn("min-h-screen bg-background font-inter antialiased text-foreground")}>
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
