import { LazyStartupIncubationConsulting } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Startup Incubation & Consulting Services | Mindefy Technologies",
  description:
    "Offers startup incubation and business incubation services with startup accelerator programs, startup mentoring, entrepreneurship support, and business development guidance from concept to market success.",
  keywords: [
    "startup incubation",
    "business incubation",
    "startup accelerator",
    "entrepreneurship support",
    "startup mentoring",
    "business development",
  ],
  openGraph: {
    title: "Startup Incubation & Consulting Services | Mindefy Technologies",
    description:
      "Offers startup incubation and business incubation services with startup accelerator programs, startup mentoring, entrepreneurship support, and business development guidance from concept to market success.",
    url: "https://mindefy.tech/startup-incubation-consulting-services",
  },
  twitter: {
    title: "Startup Incubation & Consulting Services | Mindefy Technologies",
    description:
      "Offers startup incubation and business incubation services with startup accelerator programs, startup mentoring, entrepreneurship support, and business development guidance from concept to market success.",
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
      <LazyStartupIncubationConsulting />
    </>
  );
}
