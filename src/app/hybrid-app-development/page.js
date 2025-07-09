import { LazyHAD } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Hybrid App Development Services",
  description: "Cross-platform hybrid app development services by Mindefy Technologies. Build apps that work seamlessly on both iOS and Android platforms with single codebase.",
  keywords: ["hybrid app development", "cross platform development", "react native", "flutter development", "ionic development", "cross platform mobile apps"],
  openGraph: {
    title: "Hybrid App Development Services - Mindefy Technologies",
    description: "Cross-platform hybrid app development services by Mindefy Technologies. Build apps that work seamlessly on both iOS and Android platforms with single codebase.",
    url: "https://mindefy.tech/hybrid-app-development",
  },
  twitter: {
    title: "Hybrid App Development Services - Mindefy Technologies",
    description: "Cross-platform hybrid app development services by Mindefy Technologies. Build apps that work seamlessly on both iOS and Android platforms with single codebase.",
  },
  alternates: {
    canonical: "https://mindefy.tech/hybrid-app-development",
  },
};

export default function HybridAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Hybrid App Development",
    description: "Cross-platform hybrid app development services by Mindefy Technologies. Build apps that work seamlessly on both iOS and Android platforms with single codebase.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.tech/hybrid-app-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Hybrid App Development", url: "https://mindefy.tech/hybrid-app-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyHAD />
    </>
  );
}
