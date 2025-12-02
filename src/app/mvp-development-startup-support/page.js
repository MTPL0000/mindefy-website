import { LazyMVPDevelopment } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "MVP Development & Startup Support Services | Mindefy Technologies",
  description:
    "Provides MVP development services for startups, delivering minimum viable product solutions with rapid prototyping, product validation, startup development, and accelerated market launch.",
  keywords: [
    "mvp development",
    "minimum viable product",
    "startup development",
    "prototype development",
    "rapid development",
    "product validation",
  ],
  openGraph: {
    title: "MVP Development & Startup Support Services | Mindefy Technologies",
    description:
      "Provides MVP development services for startups, delivering minimum viable product solutions with rapid prototyping, product validation, startup development, and accelerated market launch.",
    url: "https://mindefy.tech/mvp-development-startup-support",
  },
  twitter: {
    title: "MVP Development & Startup Support Services | Mindefy Technologies",
    description:
      "Provides MVP development services for startups, delivering minimum viable product solutions with rapid prototyping, product validation, startup development, and accelerated market launch.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mvp-development-startup-support",
  },
};

export default function MVPDevelopmentPage() {
  const serviceData = createServiceData({
    name: "MVP Development",
    description:
      "Minimum Viable Product (MVP) development services by Mindefy Technologies for startups and enterprises. Launch faster with validated ideas and rapid prototyping.",
    serviceType: "MVP Development",
    url: "https://mindefy.tech/mvp-development-startup-support",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "MVP Development",
      url: "https://mindefy.tech/mvp-development-startup-support",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMVPDevelopment />
    </>
  );
}
