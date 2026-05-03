import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Plans | Aadhav Health Support Coimbatore",
  description: "Affordable and transparent pricing for home care, elderly care, and nursing services in Coimbatore. No hidden charges. Customized care plans for every family.",
  keywords: [
    "Home Care Pricing Coimbatore",
    "Home Nursing Charges Coimbatore",
    "Elderly Care Cost Coimbatore",
    "Affordable Patient Care Coimbatore",
    "Baby Care Rates Coimbatore"
  ],
};

export default function PricingPage() {
  return <PricingClient />;
}
