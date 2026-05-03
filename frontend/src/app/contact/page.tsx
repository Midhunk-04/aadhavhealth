import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Aadhav Health Support Coimbatore",
  description: "Get in touch with Aadhav Health Support for 24/7 home care and nursing services in Coimbatore. Call us at +91 73589 61021 or visit our office in Sundakkamuthur.",
  keywords: [
    "Contact Home Care Coimbatore",
    "Aadhav Health Support Phone Number",
    "Home Nursing Coimbatore Office",
    "24/7 Healthcare Support Coimbatore",
    "Sundakkamuthur Home Care"
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
