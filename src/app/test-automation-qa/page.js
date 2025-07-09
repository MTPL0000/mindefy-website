import { LazyTestAutomation } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Test Automation & QA Services",
  description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
  keywords: ["test automation", "qa services", "software testing", "quality assurance", "automated testing", "software quality"],
  openGraph: {
    title: "Test Automation & QA Services - Mindefy Technologies",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
    url: "https://mindefy.tech/test-automation-qa",
  },
  twitter: {
    title: "Test Automation & QA Services - Mindefy Technologies",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
  },
  alternates: {
    canonical: "https://mindefy.tech/test-automation-qa",
  },
};

export default function TestAutomationQAPage() {
  const serviceData = createServiceData({
    name: "Test Automation & QA Services",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
    serviceType: "Quality Assurance",
    url: "https://mindefy.tech/test-automation-qa"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Test Automation & QA", url: "https://mindefy.tech/test-automation-qa" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyTestAutomation />
    </>
  );
}
