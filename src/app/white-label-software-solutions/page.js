import { LazyWhiteLabel } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "White Label Software Development Solutions",
  description:
    "Expand your agency's portfolio with our white label software services. We build high-quality, unbranded software that you can resell as your own.",
  keywords: ["White Label", "SaaS", "Reseller"],
  openGraph: {
    title: "White Label Software Development Solutions",
    description:
      "Expand your agency's portfolio with our white label software services. We build high-quality, unbranded software that you can resell as your own.",
    url: "https://mindefy.tech/white-label-software-solutions",
  },
  twitter: {
    title: "White Label Software Development Solutions",
    description:
      "Expand your agency's portfolio with our white label software services. We build high-quality, unbranded software that you can resell as your own.",
  },
  alternates: {
    canonical: "https://mindefy.tech/white-label-software-solutions",
  },
};

export default function WhiteLabelSolutionsPage() {
  const serviceData = createServiceData({
    name: "White Label Solutions & Development",
    description:
      "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
    serviceType: "White Label Solutions",
    url: "https://mindefy.tech/white-label-software-solutions",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "White Label Solutions",
      url: "https://mindefy.tech/white-label-software-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyWhiteLabel />
    </>
  );
}
