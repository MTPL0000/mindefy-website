import Ecommerce from "../components/Ecommerce";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "E-commerce & Marketplace Development",
  description: "Custom e-commerce and marketplace development services by Mindefy Technologies. Build scalable online stores and multi-vendor marketplaces with modern technology.",
  keywords: ["ecommerce development", "marketplace development", "online store", "multi-vendor platform", "e-commerce solutions", "shopping platform"],
  openGraph: {
    title: "E-commerce & Marketplace Development - Mindefy Technologies",
    description: "Custom e-commerce and marketplace development services by Mindefy Technologies. Build scalable online stores and multi-vendor marketplaces with modern technology.",
    url: "https://mindefy.com/ecommerce-marketplace",
  },
  twitter: {
    title: "E-commerce & Marketplace Development - Mindefy Technologies",
    description: "Custom e-commerce and marketplace development services by Mindefy Technologies. Build scalable online stores and multi-vendor marketplaces with modern technology.",
  },
  alternates: {
    canonical: "https://mindefy.com/ecommerce-marketplace",
  },
};

export default function EcommerceMarketplacePage() {
  const serviceData = createServiceData({
    name: "E-commerce & Marketplace Development",
    description: "Custom e-commerce and marketplace development services by Mindefy Technologies. Build scalable online stores and multi-vendor marketplaces with modern technology.",
    serviceType: "E-commerce Development",
    url: "https://mindefy.com/ecommerce-marketplace"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "E-commerce & Marketplace", url: "https://mindefy.com/ecommerce-marketplace" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <Ecommerce />
    </>
  );
}
