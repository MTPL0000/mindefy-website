import { LazyITC } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "IT Consulting & Technology Strategy Services",
  description:
    "Align technology with business goals using our IT consulting services. We provide strategic roadmaps, digital transformation, and tech advisory for growth.",
  keywords: ["IT Strategy", "Tech Advisory"],
  openGraph: {
    title: "IT Consulting & Technology Strategy Services",
    description:
      "Align technology with business goals using our IT consulting services. We provide strategic roadmaps, digital transformation, and tech advisory for growth.",
    url: "https://mindefy.tech/it-consulting-strategy",
  },
  twitter: {
    title: "IT Consulting & Technology Strategy Services",
    description:
      "Align technology with business goals using our IT consulting services. We provide strategic roadmaps, digital transformation, and tech advisory for growth.",
  },
  alternates: {
    canonical: "https://mindefy.tech/it-consulting-strategy",
  },
};

export default function ITConsultingPage() {
  const serviceData = createServiceData({
    name: "IT Consulting Services",
    description:
      "Professional IT consulting services by Mindefy Technologies. Strategic technology guidance, digital transformation consulting, and technical advisory services.",
    serviceType: "IT Consulting",
    url: "https://mindefy.tech/it-consulting-strategy",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "IT Consulting",
      url: "https://mindefy.tech/it-consulting-strategy",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyITC />
    </>
  );
}
