import { LazyWhiteLabel } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "White Label Solutions & Development",
  description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
  keywords: ["white label solutions", "custom branding", "reseller solutions", "white label software", "partner solutions", "branded applications"],
  openGraph: {
    title: "White Label Solutions & Development - Mindefy Technologies",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
    url: "https://mindefy.tech/white-label-solutions",
  },
  twitter: {
    title: "White Label Solutions & Development - Mindefy Technologies",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
  },
  alternates: {
    canonical: "https://mindefy.tech/white-label-solutions",
  },
};

export default function WhiteLabelSolutionsPage() {
  const serviceData = createServiceData({
    name: "White Label Solutions & Development",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
    serviceType: "White Label Solutions",
    url: "https://mindefy.tech/white-label-solutions"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "White Label Solutions", url: "https://mindefy.tech/white-label-solutions" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyWhiteLabel />
    </>
  );
}
