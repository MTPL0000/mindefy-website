import DigitalTransformation from "../components/DigitalTransformation";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Digital Transformation Services",
  description: "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
  keywords: ["digital transformation", "business modernization", "technology upgrade", "enterprise transformation", "digital strategy", "business automation"],
  openGraph: {
    title: "Digital Transformation Services - Mindefy Technologies",
    description: "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
    url: "https://mindefy.com/digital-transformation",
  },
  twitter: {
    title: "Digital Transformation Services - Mindefy Technologies",
    description: "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
  },
  alternates: {
    canonical: "https://mindefy.com/digital-transformation",
  },
};

export default function DigitalTransformationPage() {
  const serviceData = createServiceData({
    name: "Digital Transformation",
    description: "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
    serviceType: "Digital Transformation",
    url: "https://mindefy.com/digital-transformation"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Digital Transformation", url: "https://mindefy.com/digital-transformation" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <DigitalTransformation />
    </>
  );
}
