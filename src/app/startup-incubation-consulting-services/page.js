import StartupIncubationContent from "@/components/StartupIncubation/StartupIncubationContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Startup Incubation & Consulting | Tech for Equity",
  description:
    "More than just dev. We partner with founders to provide technical mentorship, product strategy, and MVP development support.",
  keywords: ["Incubation", "Tech Strategy"],
  openGraph: {
    title: "Startup Incubation & Tech Consulting Services",
    description:
      "From concept to exit. We provide startup incubation and tech consulting, offering product strategy, CTO services, and engineering resources for founders.",
    url: "https://mindefy.tech/startup-incubation-consulting-services",
  },
  twitter: {
    title: "Startup Incubation & Tech Consulting Services",
    description:
      "From concept to exit. We provide startup incubation and tech consulting, offering product strategy, CTO services, and engineering resources for founders.",
  },
  alternates: {
    canonical: "https://mindefy.tech/startup-incubation-consulting-services",
  },
};

export default function StartupIncubationConsultingPage() {
  const serviceData = createServiceData({
    name: "Startup Incubation & Consulting Services",
    description:
      "Professional startup incubation and consulting services by Mindefy Technologies. Nurture your startup from concept to market with expert guidance and support.",
    serviceType: "Startup Incubation",
    url: "https://mindefy.tech/startup-incubation-consulting-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Startup Incubation",
      url: "https://mindefy.tech/startup-incubation-consulting-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <StartupIncubationContent />
    </>
  );
}
