import { Metadata } from "next";
import CareersClient from "./CareersClient";

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

export default function CareersPage() {
  return <CareersClient />;
}
