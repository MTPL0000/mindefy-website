import { LazyCRMSolutions } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "CRM Solutions & Development",
  description: "Custom CRM solutions by Mindefy Technologies to manage customer relationships effectively and boost business growth with advanced customer management systems.",
  keywords: ["crm solutions", "customer relationship management", "crm development", "sales automation", "customer management", "crm software"],
  openGraph: {
    title: "CRM Solutions & Development - Mindefy Technologies",
    description: "Custom CRM solutions by Mindefy Technologies to manage customer relationships effectively and boost business growth with advanced customer management systems.",
    url: "https://mindefy.tech/crm-solutions",
  },
  twitter: {
    title: "CRM Solutions & Development - Mindefy Technologies",
    description: "Custom CRM solutions by Mindefy Technologies to manage customer relationships effectively and boost business growth with advanced customer management systems.",
  },
  alternates: {
    canonical: "https://mindefy.tech/crm-solutions",
  },
};

export default function CRMSolutionsPage() {
  const serviceData = createServiceData({
    name: "CRM Solutions & Development",
    description: "Custom CRM solutions by Mindefy Technologies to manage customer relationships effectively and boost business growth with advanced customer management systems.",
    serviceType: "CRM Solutions",
    url: "https://mindefy.tech/crm-solutions"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "CRM Solutions", url: "https://mindefy.tech/crm-solutions" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyCRMSolutions />
    </>
  );
}
