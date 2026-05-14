import HomeClient from "./HomeClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aadhav Health Support",
  "image": "https://aadhavheathsupport.in/assets/hero-bg.png",
  "@id": "https://aadhavheathsupport.in",
  "url": "https://aadhavheathsupport.in",
  "telephone": "+917358961021",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Peelamedu",
    "addressLocality": "Coimbatore",
    "addressRegion": "TN",
    "postalCode": "641004",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tirupur" },
    { "@type": "City", "name": "Pollachi" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Mettupalayam" },
    { "@type": "City", "name": "Avinashi" }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0267,
    "longitude": 77.0102
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/aadhavhealthsupport",
    "https://www.instagram.com/aadhavhealthsupport"
  ],
  "priceRange": "₹₹",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Elderly Care",
          "description": "Professional assistance and companionship for seniors in their own homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Nursing",
          "description": "Certified nursing care including injections, dressing, and medical monitoring."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Physiotherapy",
          "description": "Expert physiotherapy sessions delivered at the comfort of your home."
        }
      }
    ]
  },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of home care services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive home healthcare including elderly care, professional home nursing, patient care, postnatal baby care, physiotherapy, and doctor home visits across Coimbatore and surrounding regions."
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
      "name": "Do you offer 24/7 home nursing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer both 12-hour (day/night) and 24-hour (stay-in) services depending on the patient's requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a service with Aadhav Health Support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a service by calling us directly at +91 7358961021 or by filling out the consultation form on our contact page."
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
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
