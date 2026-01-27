import DTContent from "@/components/DigitalTransformation/DTContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Enterprise Digital Transformation Consulting",
  description:
    "Future-proof your business with our digital transformation consulting. We implement AI, cloud, and automation strategies to drive operational efficiency.",
  keywords: ["Digital Strategy", "Enterprise Tech"],
  openGraph: {
    title: "Enterprise Digital Transformation Consulting",
    description:
      "Future-proof your business with our digital transformation consulting. We implement AI, cloud, and automation strategies to drive operational efficiency.",
    url: "https://mindefy.tech/digital-transformation-consulting",
  },
  twitter: {
    title: "Enterprise Digital Transformation Consulting",
    description:
      "Future-proof your business with our digital transformation consulting. We implement AI, cloud, and automation strategies to drive operational efficiency.",
  },
  alternates: {
    canonical: "https://mindefy.tech/digital-transformation-consulting",
  },
};

export default function DigitalTransformationPage() {
  const serviceData = createServiceData({
    name: "Digital Transformation",
    description:
      "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
    serviceType: "Digital Transformation",
    url: "https://mindefy.tech/digital-transformation-consulting",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Digital Transformation",
      url: "https://mindefy.tech/digital-transformation-consulting",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <DTContent />
    </>
  );
}
