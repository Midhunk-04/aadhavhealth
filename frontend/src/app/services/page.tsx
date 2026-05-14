import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Home Care Services | Aadhav Health Support Coimbatore",
  description: "Explore our comprehensive range of home care services in Coimbatore, including elderly care, patient care, home nursing, and baby care. Quality medical and non-medical support.",
  keywords: [
    "Home Care Services List Coimbatore",
    "Elderly Care Coimbatore Pricing",
    "Home Nursing Coimbatore Services",
    "Baby Care Coimbatore",
    "Patient Care at Home Coimbatore"
  ],
  openGraph: {
    title: "Our Home Care Services | Aadhav Health Support Coimbatore",
    description: "Expert home nursing, elderly care, and patient care services in Coimbatore. Discover how we can help you today.",
    url: "https://aadhavhealthsupport.in/services",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
