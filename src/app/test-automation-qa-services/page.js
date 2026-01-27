import TestAutomationContent from "@/components/TestAutomation/TestAutomationContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Software Test Automation & QA Services",
  description:
    "Ensure zero bugs with our QA and test automation services. We provide rigorous performance, security, and regression testing for flawless software.",
  keywords: ["QA", "Automation Testing"],
  openGraph: {
    title: "Software Test Automation & QA Services",
    description:
      "Ensure zero bugs with our QA and test automation services. We provide rigorous performance, security, and regression testing for flawless software.",
    url: "https://mindefy.tech/test-automation-qa-services",
  },
  twitter: {
    title: "Software Test Automation & QA Services",
    description:
      "Ensure zero bugs with our QA and test automation services. We provide rigorous performance, security, and regression testing for flawless software.",
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
      <TestAutomationContent />
    </>
  );
}
