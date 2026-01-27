import CRMContent from "@/components/CRMSolutions/CRMContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Custom CRM Software Development & Integration",
  description:
    "Boost sales with custom CRM software solutions. We develop and integrate tailored CRM platforms to streamline customer management and automation.",
  keywords: ["Custom CRM", "Salesforce"],
  openGraph: {
    title: "Custom CRM Software Development & Integration",
    description:
      "Boost sales with custom CRM software solutions. We develop and integrate tailored CRM platforms to streamline customer management and automation.",
    url: "https://mindefy.tech/crm-software-solutions",
  },
  twitter: {
    title: "Custom CRM Software Development & Integration",
    description:
      "Boost sales with custom CRM software solutions. We develop and integrate tailored CRM platforms to streamline customer management and automation.",
  },
  alternates: {
    canonical: "https://mindefy.tech/crm-software-solutions",
  },
};

export default function CRMSolutionsPage() {
  const serviceData = createServiceData({
    name: "CRM Solutions & Development",
    description:
      "Custom CRM solutions by Mindefy Technologies to manage customer relationships effectively and boost business growth with advanced customer management systems.",
    serviceType: "CRM Solutions",
    url: "https://mindefy.tech/crm-software-solutions",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "CRM Solutions",
      url: "https://mindefy.tech/crm-software-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <CRMContent />
    </>
  );
}
