import { LazyCRMSolutions } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "CRM Software Solutions | Mindefy Technologies",
  description:
    "Delivers custom CRM solutions and CRM software for customer relationship management, featuring CRM development, sales automation, and advanced customer management to drive growth and efficiency.",
  keywords: [
    "crm solutions",
    "customer relationship management",
    "crm development",
    "sales automation",
    "customer management",
    "crm software",
  ],
  openGraph: {
    title: "CRM Software Solutions | Mindefy Technologies",
    description:
      "Delivers custom CRM solutions and CRM software for customer relationship management, featuring CRM development, sales automation, and advanced customer management to drive growth and efficiency.",
    url: "https://mindefy.tech/crm-software-solutions",
  },
  twitter: {
    title: "CRM Software Solutions | Mindefy Technologies",
    description:
      "Delivers custom CRM solutions and CRM software for customer relationship management, featuring CRM development, sales automation, and advanced customer management to drive growth and efficiency.",
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
      <LazyCRMSolutions />
    </>
  );
}
