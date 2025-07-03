import TestAutomation from "../components/TestAutomation";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Test Automation & QA Services",
  description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
  keywords: ["test automation", "qa services", "software testing", "quality assurance", "automated testing", "software quality"],
  openGraph: {
    title: "Test Automation & QA Services - Mindefy Technologies",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
    url: "https://mindefy.com/test-automation-qa",
  },
  twitter: {
    title: "Test Automation & QA Services - Mindefy Technologies",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
  },
  alternates: {
    canonical: "https://mindefy.com/test-automation-qa",
  },
};

export default function TestAutomationQAPage() {
  const serviceData = createServiceData({
    name: "Test Automation & QA Services",
    description: "Comprehensive test automation and quality assurance services by Mindefy Technologies to ensure software reliability, performance, and quality standards.",
    serviceType: "Quality Assurance",
    url: "https://mindefy.com/test-automation-qa"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Test Automation & QA", url: "https://mindefy.com/test-automation-qa" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <TestAutomation />
    </>
  );
}
