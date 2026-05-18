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
  description: "Aadhav Health Support: Premier home care in Coimbatore. Expert elderly care, nursing, & physiotherapy. Compassionate, certified care at your doorstep.",
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
    "Post-operative care Coimbatore",
    "Caretaker Coimbatore",
    "Caretaker service Coimbatore",
    "Ayah service Coimbatore",
    "Bystander service Coimbatore",
    "Home nurse Coimbatore",
    "24 hour home nursing Coimbatore",
    "24 hour nursing service Tamil Nadu",
    "Bedridden patient care at home",
    "Palliative care Coimbatore",
    "Stroke patient home care Coimbatore",
    "Dementia care Coimbatore",
    "Post surgery care at home Tamil Nadu",
    "Baby care at home Coimbatore",
    "Postnatal care Coimbatore",
    "Doctor home visit Coimbatore",
    "வீட்டு நர்சிங் சேவை",
    "முதியோர் பராமரிப்பு கோயம்புத்தூர்",
    "வீட்டு மருத்துவ சேவை கோயம்புத்தூர்",
    "நோயாளி பராமரிப்பு சேவை",
    "Home care near me Coimbatore",
    "Best home healthcare Coimbatore"
  ],
  authors: [{ name: "Aadhav Health Support" }],
  creator: "Aadhav Health Support",
  publisher: "Aadhav Health Support",
  formatDetection: {
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aadhavhealthsupport.in",
    siteName: "Aadhav Health Support",
    title: "Aadhav Health Support | Expert Home Healthcare in Coimbatore",
    description: "Professional, certified, and compassionate home nursing and elderly care services in Coimbatore.",
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
    google: "REPLACE_WITH_REAL_CODE", // TODO: Replace with real GSC verification code from search.google.com/search-console
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
                  "@graph": [
                    {
                      "@type": ["LocalBusiness", "MedicalBusiness"],
                      "@id": "https://aadhavhealthsupport.in/#business",
                      "name": "Aadhav Health Support",
                      "url": "https://aadhavhealthsupport.in",
                      "logo": "https://www.aadhavhealthsupport.in/assets/logo-transparent.png",
                      "image": "https://aadhavhealthsupport.in/assets/hero-bg.png",
                      "description": "Professional home healthcare services in Coimbatore including elderly care, home nursing, physiotherapy, patient care, postnatal care, and doctor home visits.",
                      "telephone": "+91-7358961021",
                      "email": "aadhavhealthsupport@gmail.com",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "D No 32 Alagiya Thruchitramb, Guvra Homes PT Colony, Sundakkamuthur, Perur Chettiipalayam",
                        "addressLocality": "Coimbatore",
                        "addressRegion": "Tamil Nadu",
                        "postalCode": "641010",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "11.0168",
                        "longitude": "76.9558"
                      },
                      "areaServed": [
                        "Coimbatore", "Tirupur", "Pollachi", "Erode", "Mettupalayam", "Avinashi"
                      ],
                      "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "23:59"
                      },
                      "sameAs": [
                        "https://www.facebook.com/share/p/1aYCvcYdtZ/",
                        "https://www.instagram.com/aadhavhealthsupport"
                      ],
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Home Healthcare Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Elderly Care",
                              "url": "https://aadhavhealthsupport.in/services/elderly-care-coimbatore",
                              "description": "Compassionate support and assistance for seniors at home in Coimbatore."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Home Nursing Services",
                              "url": "https://aadhavhealthsupport.in/services/home-nursing-care-coimbatore",
                              "description": "Skilled home nursing care and medical support in Coimbatore."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Patient Care",
                              "url": "https://aadhavhealthsupport.in/services/patient-care-coimbatore",
                              "description": "Professional monitoring and patient care services in Coimbatore."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Physiotherapy at Home",
                              "url": "https://aadhavhealthsupport.in/services/physiotherapy-home-visit-coimbatore",
                              "description": "Personalized physiotherapy home visits in Coimbatore for recovery."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Postnatal and Baby Care",
                              "url": "https://aadhavhealthsupport.in/services/postnatal-baby-care-coimbatore",
                              "description": "Nurturing care for newborns and support for new mothers."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Doctor Home Visit",
                              "url": "https://aadhavhealthsupport.in/services/doctor-home-visit-coimbatore",
                              "description": "Professional medical consultation at your doorstep in Coimbatore."
                            }
                          }
                        ]
                      }
                    },
                    {
                      "@type": "FAQPage",
                      "@id": "https://aadhavhealthsupport.in/#faq",
                      "mainEntity": [
                        {
                          "@type": "Question",
                          "name": "What types of home care services do you provide?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We provide comprehensive home healthcare including elderly care, professional home nursing, patient care, postnatal baby care, physiotherapy, and doctor home visits across Coimbatore and surrounding regions including Tirupur, Pollachi, Erode, Mettupalayam, and Avinashi."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Are your nurses and caregivers certified?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, all our staff members are certified professionals who undergo strict background checks and regular training to ensure the highest standards of medical care and safety."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Do you offer 24/7 home nursing services in Coimbatore?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We offer both 12-hour (day/night) and 24-hour (stay-in) home nursing services depending on the patient's requirements in Coimbatore and nearby areas."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How do I book a home care service with Aadhav Health Support?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can book a service by calling us directly at +91 7358961021 or by filling out the consultation form on our contact page at aadhavhealthsupport.in/contact."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Which areas do you serve in Tamil Nadu?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We primarily serve Coimbatore, Tirupur, Pollachi, Erode, Mettupalayam, and Avinashi. We are expanding to other nearby regions as well."
                          }
                        }
                      ]
                    },
                    {
                      "@type": "WebSite",
                      "@id": "https://aadhavhealthsupport.in/#website",
                      "url": "https://aadhavhealthsupport.in",
                      "name": "Aadhav Health Support",
                      "description": "Premier home healthcare services in Coimbatore — elderly care, nursing, physiotherapy, patient care, and more.",
                      "inLanguage": ["en-IN", "ta"]
                    }
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
