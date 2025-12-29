import { LazyStartupConsulting } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Strategic Startup Support & Tech Consulting",
  description:
    "Comprehensive tech support for startups. We offer product roadmap planning, engineering strategy, and consulting to help you scale your venture.",
  keywords: ["Mentorship", "Product Roadmap"],
  openGraph: {
    title: "Strategic Startup Support & Tech Consulting",
    description:
      "Comprehensive tech support for startups. We offer product roadmap planning, engineering strategy, and consulting to help you scale your venture.",
    url: "https://mindefy.tech/startup-support-consulting",
  },
  twitter: {
    title: "Strategic Startup Support & Tech Consulting",
    description:
      "Comprehensive tech support for startups. We offer product roadmap planning, engineering strategy, and consulting to help you scale your venture.",
  },
  alternates: {
    canonical: "https://mindefy.tech/startup-support-consulting",
  },
};

export default function StartupSupportPage() {
  const serviceData = createServiceData({
    name: "Startup Support & Consulting Services",
    description:
      "Comprehensive startup support and consulting services by Mindefy Technologies. From ideation to launch, we help startups build successful technology solutions.",
    serviceType: "Startup Consulting",
    url: "https://mindefy.tech/startup-support-consulting",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Startup Support",
      url: "https://mindefy.tech/startup-support-consulting",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyStartupConsulting />
    </>
  );
}
