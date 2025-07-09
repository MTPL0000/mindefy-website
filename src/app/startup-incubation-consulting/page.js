import { LazyStartupIncubationConsulting } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Startup Incubation & Consulting Services",
  description: "Professional startup incubation and consulting services by Mindefy Technologies. Nurture your startup from concept to market with expert guidance and support.",
  keywords: ["startup incubation", "business incubation", "startup accelerator", "entrepreneurship support", "startup mentoring", "business development"],
  openGraph: {
    title: "Startup Incubation & Consulting Services - Mindefy Technologies",
    description: "Professional startup incubation and consulting services by Mindefy Technologies. Nurture your startup from concept to market with expert guidance and support.",
    url: "https://mindefy.tech/startup-incubation-consulting",
  },
  twitter: {
    title: "Startup Incubation & Consulting Services - Mindefy Technologies",
    description: "Professional startup incubation and consulting services by Mindefy Technologies. Nurture your startup from concept to market with expert guidance and support.",
  },
  alternates: {
    canonical: "https://mindefy.tech/startup-incubation-consulting",
  },
};

export default function StartupIncubationConsultingPage() {
  const serviceData = createServiceData({
    name: "Startup Incubation & Consulting Services",
    description: "Professional startup incubation and consulting services by Mindefy Technologies. Nurture your startup from concept to market with expert guidance and support.",
    serviceType: "Startup Incubation",
    url: "https://mindefy.tech/startup-incubation-consulting"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Startup Incubation", url: "https://mindefy.tech/startup-incubation-consulting" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyStartupIncubationConsulting />
    </>
  );
}
