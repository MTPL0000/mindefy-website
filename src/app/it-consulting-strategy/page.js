import { LazyITC } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "IT Consulting & Strategy | Mindefy Technologies",
  description:
    "Offers professional IT consulting services with strategic technology consulting, digital strategy, and expert technical advisory to drive digital transformation and optimize IT solutions for business growth.",
  keywords: [
    "it consulting",
    "technology consulting",
    "digital strategy",
    "technical advisory",
    "it solutions",
    "technology guidance",
  ],
  openGraph: {
    title: "IT Consulting & Strategy | Mindefy Technologies",
    description:
      "Offers professional IT consulting services with strategic technology consulting, digital strategy, and expert technical advisory to drive digital transformation and optimize IT solutions for business growth.",
    url: "https://mindefy.tech/it-consulting-strategy",
  },
  twitter: {
    title: "IT Consulting & Strategy | Mindefy Technologies",
    description:
      "Offers professional IT consulting services with strategic technology consulting, digital strategy, and expert technical advisory to drive digital transformation and optimize IT solutions for business growth.",
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
