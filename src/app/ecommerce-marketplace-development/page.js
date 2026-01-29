import { LazyEcommerce } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "E-commerce & Multi-Vendor Marketplace Development",
  description:
    "Build the next Amazon or Etsy. We develop scalable multi-vendor marketplaces with custom commission structures and secure payment gateways.",
  keywords: ["Marketplace", "Multi - vendor", "Retail"],
  openGraph: {
    title: "E-commerce & Marketplace Development Services",
    description:
      "Build scalable multi-vendor marketplaces and e-commerce platforms. Our developers create secure, high-conversion shopping experiences for global retail.",
    url: "https://mindefy.tech/ecommerce-marketplace-development",
  },
  twitter: {
    title: "E-commerce & Marketplace Development Services",
    description:
      "Build scalable multi-vendor marketplaces and e-commerce platforms. Our developers create secure, high-conversion shopping experiences for global retail.",
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
