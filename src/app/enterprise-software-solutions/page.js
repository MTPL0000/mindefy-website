import { LazyEnterpriseSolutions } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Enterprise Software Solutions | Mindefy Technologies",
  description:
    "Delivers custom enterprise software solutions and enterprise applications through expert custom software development, business automation, and scalable enterprise systems to streamline operations for large organizations.",
  keywords: [
    "enterprise software",
    "business solutions",
    "custom software development",
    "enterprise applications",
    "business automation",
    "enterprise systems",
  ],
  openGraph: {
    title: "Enterprise Software Solutions | Mindefy Technologies",
    description:
      "Delivers custom enterprise software solutions and enterprise applications through expert custom software development, business automation, and scalable enterprise systems to streamline operations for large organizations.",
    url: "https://mindefy.tech/enterprise-software-solutions",
  },
  twitter: {
    title: "Enterprise Software Solutions | Mindefy Technologies",
    description:
      "Delivers custom enterprise software solutions and enterprise applications through expert custom software development, business automation, and scalable enterprise systems to streamline operations for large organizations.",
  },
  alternates: {
    canonical: "https://mindefy.tech/enterprise-software-solutions",
  },
};

export default function EnterpriseSolutionsPage() {
  const serviceData = createServiceData({
    name: "Enterprise Software Solutions",
    description:
      "Custom enterprise software solutions by Mindefy Technologies designed to streamline business operations and improve efficiency for large organizations.",
    serviceType: "Enterprise Solutions",
    url: "https://mindefy.tech/enterprise-software-solutions",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Enterprise Solutions",
      url: "https://mindefy.tech/enterprise-software-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyEnterpriseSolutions />
    </>
  );
}
