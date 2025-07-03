import LowCode from "../components/LowCode";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Low-Code Development Services",
  description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
  keywords: ["low-code development", "no-code solutions", "rapid application development", "visual development", "low-code platform", "application modernization"],
  openGraph: {
    title: "Low-Code Development Services - Mindefy Technologies",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    url: "https://mindefy.com/low-code-development",
  },
  twitter: {
    title: "Low-Code Development Services - Mindefy Technologies",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
  },
  alternates: {
    canonical: "https://mindefy.com/low-code-development",
  },
};

export default function LowCodeDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Low-Code Development Services",
    description: "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    serviceType: "Low-Code Development",
    url: "https://mindefy.com/low-code-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Low-Code Development", url: "https://mindefy.com/low-code-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LowCode />
    </>
  );
}
