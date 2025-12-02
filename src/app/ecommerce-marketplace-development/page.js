import { LazyEcommerce } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "E-commerce & Marketplace Development Services | Mindefy Technologies",
  description:
    "Delivers custom ecommerce development and marketplace development services, building scalable online stores, multi-vendor platforms, and e-commerce solutions with modern tech stacks.",
  keywords: [
    "ecommerce development",
    "marketplace development",
    "online store",
    "multi-vendor platform",
    "e-commerce solutions",
    "shopping platform",
  ],
  openGraph: {
    title:
      "E-commerce & Marketplace Development Services | Mindefy Technologies",
    description:
      "Delivers custom ecommerce development and marketplace development services, building scalable online stores, multi-vendor platforms, and e-commerce solutions with modern tech stacks.",
    url: "https://mindefy.tech/ecommerce-marketplace-development",
  },
  twitter: {
    title:
      "E-commerce & Marketplace Development Services | Mindefy Technologies",
    description:
      "Delivers custom ecommerce development and marketplace development services, building scalable online stores, multi-vendor platforms, and e-commerce solutions with modern tech stacks.",
  },
  alternates: {
    canonical: "https://mindefy.tech/ecommerce-marketplace-development",
  },
};

export default function EcommerceMarketplacePage() {
  const serviceData = createServiceData({
    name: "E-commerce & Marketplace Development",
    description:
      "Custom e-commerce and marketplace development services by Mindefy Technologies. Build scalable online stores and multi-vendor marketplaces with modern technology.",
    serviceType: "E-commerce Development",
    url: "https://mindefy.tech/ecommerce-marketplace-development",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "E-commerce & Marketplace",
      url: "https://mindefy.tech/ecommerce-marketplace-development",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyEcommerce />
    </>
  );
}
