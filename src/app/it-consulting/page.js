import { LazyITC } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "IT Consulting Services",
  description: "Professional IT consulting services by Mindefy Technologies. Strategic technology guidance, digital transformation consulting, and technical advisory services.",
  keywords: ["it consulting", "technology consulting", "digital strategy", "technical advisory", "it solutions", "technology guidance"],
  openGraph: {
    title: "IT Consulting Services - Mindefy Technologies",
    description: "Professional IT consulting services by Mindefy Technologies. Strategic technology guidance, digital transformation consulting, and technical advisory services.",
    url: "https://mindefy.tech/it-consulting",
  },
  twitter: {
    title: "IT Consulting Services - Mindefy Technologies",
    description: "Professional IT consulting services by Mindefy Technologies. Strategic technology guidance, digital transformation consulting, and technical advisory services.",
  },
  alternates: {
    canonical: "https://mindefy.tech/it-consulting",
  },
};

export default function ITConsultingPage() {
  const serviceData = createServiceData({
    name: "IT Consulting Services",
    description: "Professional IT consulting services by Mindefy Technologies. Strategic technology guidance, digital transformation consulting, and technical advisory services.",
    serviceType: "IT Consulting",
    url: "https://mindefy.tech/it-consulting"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "IT Consulting", url: "https://mindefy.tech/it-consulting" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyITC />
    </>
  );
}
