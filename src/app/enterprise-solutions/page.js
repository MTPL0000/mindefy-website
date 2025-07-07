import { LazyEnterpriseSolutions } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Enterprise Software Solutions",
  description: "Custom enterprise software solutions by Mindefy Technologies designed to streamline business operations and improve efficiency for large organizations.",
  keywords: ["enterprise software", "business solutions", "custom software development", "enterprise applications", "business automation", "enterprise systems"],
  openGraph: {
    title: "Enterprise Software Solutions - Mindefy Technologies",
    description: "Custom enterprise software solutions by Mindefy Technologies designed to streamline business operations and improve efficiency for large organizations.",
    url: "https://mindefy.com/enterprise-solutions",
  },
  twitter: {
    title: "Enterprise Software Solutions - Mindefy Technologies",
    description: "Custom enterprise software solutions by Mindefy Technologies designed to streamline business operations and improve efficiency for large organizations.",
  },
  alternates: {
    canonical: "https://mindefy.com/enterprise-solutions",
  },
};

export default function EnterpriseSolutionsPage() {
  const serviceData = createServiceData({
    name: "Enterprise Software Solutions",
    description: "Custom enterprise software solutions by Mindefy Technologies designed to streamline business operations and improve efficiency for large organizations.",
    serviceType: "Enterprise Solutions",
    url: "https://mindefy.com/enterprise-solutions"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Enterprise Solutions", url: "https://mindefy.com/enterprise-solutions" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyEnterpriseSolutions />
    </>
  );
}
