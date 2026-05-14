import Script from "next/script";
import CareersClient from "./CareersClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Aadhav Health Support Coimbatore",
  description: "Join our team of compassionate healthcare professionals in Coimbatore. We are hiring home nurses, caregivers, and physiotherapists. Build a rewarding career in home healthcare.",
  keywords: [
    "Healthcare Jobs Coimbatore",
    "Home Nurse Vacancy Coimbatore",
    "Caregiver Jobs Tamil Nadu",
    "Nursing Careers Coimbatore",
    "Join Aadhav Health Support"
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Home Nurse and Caregiver Positions",
  "description": "Aadhav Health Support is hiring compassionate home nurses, elderly caregivers, and physiotherapists for home care services in Coimbatore and surrounding areas. We offer competitive pay, free training, and accommodation.",
  "datePosted": "2024-05-01",
  "validThrough": "2025-05-01",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Aadhav Health Support",
    "sameAs": "https://aadhavheathsupport.in",
    "logo": "https://aadhavheathsupport.in/assets/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Peelamedu",
      "addressLocality": "Coimbatore",
      "addressRegion": "TN",
      "postalCode": "641004",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 15000,
      "maxValue": 45000,
      "unitText": "MONTH"
    }
  }
};

export default function CareersPage() {
  return (
    <>
      <Script
        id="job-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersClient />
    </>
  );
}
