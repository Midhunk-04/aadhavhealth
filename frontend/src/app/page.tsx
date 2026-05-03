import HomeClient from "./HomeClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aadhav Health Support",
  "image": "https://aadhavhealthsupport.in/assets/hero-bg.png",
  "@id": "https://aadhavhealthsupport.in",
  "url": "https://aadhavhealthsupport.in",
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
  "priceRange": "₹₹"
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
