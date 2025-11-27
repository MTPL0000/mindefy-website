import { LazyStartupConsulting } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Startup Support & Consulting Services | Mindefy Technologies",
  description:
    "Offers comprehensive startup support and startup consulting services, guiding startups through ideation to launch with expertise in business incubation, technology startup solutions, and startup advisory for scalable success.",
  keywords: [
    "startup support",
    "startup consulting",
    "startup development",
    "business incubation",
    "technology startup",
    "startup advisory",
  ],
  openGraph: {
    title: "Startup Support & Consulting Services | Mindefy Technologies",
    description:
      "Offers comprehensive startup support and startup consulting services, guiding startups through ideation to launch with expertise in business incubation, technology startup solutions, and startup advisory for scalable success.",
    url: "https://mindefy.tech/startup-support-consulting",
  },
  twitter: {
    title: "Startup Support & Consulting Services | Mindefy Technologies",
    description:
      "Offers comprehensive startup support and startup consulting services, guiding startups through ideation to launch with expertise in business incubation, technology startup solutions, and startup advisory for scalable success.",
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
