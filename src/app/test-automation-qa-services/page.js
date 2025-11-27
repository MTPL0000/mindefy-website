import { LazyTestAutomation } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Test Automation & QA Services | Mindefy Technologies",
  description:
    "Delivers comprehensive test automation and quality assurance services to ensure software reliability, enhanced performance, and adherence to quality standards through automated testing strategies.",
  keywords: [
    "test automation",
    "qa services",
    "software testing",
    "quality assurance",
    "automated testing",
    "software quality",
  ],
  openGraph: {
    title: "Test Automation & QA Services | Mindefy Technologies",
    description:
      "Delivers comprehensive test automation and quality assurance services to ensure software reliability, enhanced performance, and adherence to quality standards through automated testing strategies.",
    url: "https://mindefy.tech/test-automation-qa-services",
  },
  twitter: {
    title: "Test Automation & QA Services | Mindefy Technologies",
    description:
      "Delivers comprehensive test automation and quality assurance services to ensure software reliability, enhanced performance, and adherence to quality standards through automated testing strategies.",
  },
  alternates: {
    canonical: "https://mindefy.tech/test-automation-qa-services",
  },
};

export default function TestAutomationQAPage() {
  const serviceData = createServiceData({
    name: "Test Automation & QA Services",
    description:
      "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
    serviceType: "Quality Assurance",
    url: "https://mindefy.tech/test-automation-qa-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Test Automation & QA",
      url: "https://mindefy.tech/test-automation-qa-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyTestAutomation />
    </>
  );
}
