import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Aadhav Health Support Coimbatore",
  description: "Learn about Aadhav Health Support's mission, vision, and our dedicated team of healthcare professionals providing home care services in Coimbatore since 2024.",
  keywords: [
    "About Aadhav Health Support",
    "Home Care Coimbatore Story",
    "Healthcare Mission Coimbatore",
    "Professional Caregivers Coimbatore",
    "Certified Nurses Coimbatore Team"
  ],
  openGraph: {
    title: "Our Story | Aadhav Health Support Coimbatore",
    description: "Healing happens best where the heart is — at home. Learn about our compassionate home care journey.",
    url: "https://aadhavhealthsupport.in/about",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
