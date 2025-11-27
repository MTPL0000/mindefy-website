import { LazyDigitalTransformation } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Digital Transformation Consulting | Mindefy Technologies",
  description:
    "Offers comprehensive digital transformation consulting services to modernize business processes and technology infrastructure. Our expertise includes strategic digital strategy, business modernization, enterprise transformation, technology upgrades, and business automation. We help enterprises embrace the digital age with tailored solutions that drive efficiency, innovation, and growth.",
  keywords: [
    "digital transformation",
    "business modernization",
    "technology upgrade",
    "enterprise transformation",
    "digital strategy",
    "business automation",
  ],
  openGraph: {
    title: "Digital Transformation Consulting | Mindefy Technologies",
    description:
      "Offers comprehensive digital transformation consulting services to modernize business processes and technology infrastructure. Our expertise includes strategic digital strategy, business modernization, enterprise transformation, technology upgrades, and business automation. We help enterprises embrace the digital age with tailored solutions that drive efficiency, innovation, and growth.",
    url: "https://mindefy.tech/digital-transformation-consulting",
  },
  twitter: {
    title: "Digital Transformation Consulting | Mindefy Technologies",
    description:
      "Offers comprehensive digital transformation consulting services to modernize business processes and technology infrastructure. Our expertise includes strategic digital strategy, business modernization, enterprise transformation, technology upgrades, and business automation. We help enterprises embrace the digital age with tailored solutions that drive efficiency, innovation, and growth.",
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
      <LazyDigitalTransformation />
    </>
  );
}
