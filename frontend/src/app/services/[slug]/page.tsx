import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import ServiceClient from "./ServiceClient";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Coimbatore`,
    description: `${service.shortDesc} Aadhav Health Support provides professional ${service.title.toLowerCase()} and home care services in Coimbatore.`,
    keywords: [
      `${service.title} Coimbatore`,
      `${service.tamilTitle}`,
      "Home Care Coimbatore",
      `Best ${service.title.toLowerCase()} service`,
      "Aadhav Health Support"
    ],
    openGraph: {
      title: `${service.title} | Aadhav Health Support Coimbatore`,
      description: service.shortDesc,
      url: `https://aadhavhealthsupport.in/services/${service.slug}`,
      images: [
        {
          url: service.image,
          alt: `${service.title} Home Care Coimbatore`,
        },
      ],
    },
  };
}

export default function ServiceDetailsPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceClient service={service} />;
}
