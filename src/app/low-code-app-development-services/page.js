import LowCodeContent from "@/components/LowCode/LowCodeContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Low Code App Development Services",
  description:
    "Build business apps 10x faster with low-code development. We use platforms like OutSystems and Mendix to deliver rapid, scalable enterprise solutions.",
  keywords: ["Low Code", "No Code", "Rapid Dev"],
  openGraph: {
    title: "Low Code App Development Services",
    description:
      "Build business apps 10x faster with low-code development. We use platforms like OutSystems and Mendix to deliver rapid, scalable enterprise solutions.",
    url: "https://mindefy.tech/low-code-app-development-services",
  },
  twitter: {
    title: "Low Code App Development Services",
    description:
      "Build business apps 10x faster with low-code development. We use platforms like OutSystems and Mendix to deliver rapid, scalable enterprise solutions.",
  },
  alternates: {
    canonical: "https://mindefy.tech/low-code-app-development-services",
  },
};

export default function LowCodeDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Low-Code Development Services",
    description:
      "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    serviceType: "Low-Code Development",
    url: "https://mindefy.tech/low-code-app-development-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Low-Code Development",
      url: "https://mindefy.tech/low-code-app-development-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LowCodeContent />
    </>
  );
}
