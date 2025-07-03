import WhiteLabel from "../components/WhiteLabel";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "White Label Solutions & Development",
  description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
  keywords: ["white label solutions", "custom branding", "reseller solutions", "white label software", "partner solutions", "branded applications"],
  openGraph: {
    title: "White Label Solutions & Development - Mindefy Technologies",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
    url: "https://mindefy.com/white-label-solutions",
  },
  twitter: {
    title: "White Label Solutions & Development - Mindefy Technologies",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
  },
  alternates: {
    canonical: "https://mindefy.com/white-label-solutions",
  },
};

export default function WhiteLabelSolutionsPage() {
  const serviceData = createServiceData({
    name: "White Label Solutions & Development",
    description: "Custom white label solutions by Mindefy Technologies. Rebrand and customize our proven software solutions for your business needs and market them as your own.",
    serviceType: "White Label Solutions",
    url: "https://mindefy.com/white-label-solutions"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "White Label Solutions", url: "https://mindefy.com/white-label-solutions" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <WhiteLabel />
    </>
  );
}
