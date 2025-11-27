import { LazyWhiteLabel } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "White Label Software Solutions | Mindefy Technologies",
  description:
    "Provides white label software solutions for seamless custom branding, enabling resellers to rebrand proven white label solutions, branded applications, and partner solutions as their own with rapid time-to-market.",
  keywords: [
    "white label solutions",
    "custom branding",
    "reseller solutions",
    "white label software",
    "partner solutions",
    "branded applications",
  ],
  openGraph: {
    title: "White Label Software Solutions | Mindefy Technologies",
    description:
      "Provides white label software solutions for seamless custom branding, enabling resellers to rebrand proven white label solutions, branded applications, and partner solutions as their own with rapid time-to-market.",
    url: "https://mindefy.tech/white-label-software-solutions",
  },
  twitter: {
    title: "White Label Software Solutions | Mindefy Technologies",
    description:
      "Provides white label software solutions for seamless custom branding, enabling resellers to rebrand proven white label solutions, branded applications, and partner solutions as their own with rapid time-to-market.",
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
