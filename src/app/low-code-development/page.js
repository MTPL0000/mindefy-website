import { LazyLowCode } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Low-Code Development Services",
  description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
  keywords: ["low-code development", "no-code solutions", "rapid application development", "visual development", "low-code platform", "application modernization"],
  openGraph: {
    title: "Low-Code Development Services - Mindefy Technologies",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    url: "https://mindefy.tech/low-code-development",
  },
  twitter: {
    title: "Low-Code Development Services - Mindefy Technologies",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
  },
  alternates: {
    canonical: "https://mindefy.tech/low-code-development",
  },
};

export default function LowCodeDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Low-Code Development Services",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    serviceType: "Low-Code Development",
    url: "https://mindefy.tech/low-code-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Low-Code Development", url: "https://mindefy.tech/low-code-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyLowCode />
    </>
  );
}
