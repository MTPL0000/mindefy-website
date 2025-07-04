import { LazyStartupConsulting } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Startup Support & Consulting Services",
  description: "Comprehensive startup support and consulting services by Mindefy Technologies. From ideation to launch, we help startups build successful technology solutions.",
  keywords: ["startup support", "startup consulting", "startup development", "business incubation", "technology startup", "startup advisory"],
  openGraph: {
    title: "Startup Support & Consulting Services - Mindefy Technologies",
    description: "Comprehensive startup support and consulting services by Mindefy Technologies. From ideation to launch, we help startups build successful technology solutions.",
    url: "https://mindefy.com/startup-support",
  },
  twitter: {
    title: "Startup Support & Consulting Services - Mindefy Technologies",
    description: "Comprehensive startup support and consulting services by Mindefy Technologies. From ideation to launch, we help startups build successful technology solutions.",
  },
  alternates: {
    canonical: "https://mindefy.com/startup-support",
  },
};

export default function StartupSupportPage() {
  const serviceData = createServiceData({
    name: "Startup Support & Consulting Services",
    description: "Comprehensive startup support and consulting services by Mindefy Technologies. From ideation to launch, we help startups build successful technology solutions.",
    serviceType: "Startup Consulting",
    url: "https://mindefy.com/startup-support"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Startup Support", url: "https://mindefy.com/startup-support" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyStartupConsulting />
    </>
  );
}
