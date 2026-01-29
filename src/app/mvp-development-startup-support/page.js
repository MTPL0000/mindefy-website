import MVPContent from "@/components/MVPDevelopment/MVPContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Android App Experts (Builders of 4.5M+ User Apps)",
  description:
    'Hire the team behind "YourHour." We build battery-optimized, high-retention Android apps that scale to millions. Deep expertise in background services.',
  keywords: ["MVP", "Startups", "Prototype"],
  openGraph: {
    title: "MVP Development Services for Startups",
    description:
      "Launch fast with our MVP development services. We build scalable prototypes and Minimum Viable Products to help startups validate ideas and raise capital.",
    url: "https://mindefy.tech/mvp-development-startup-support",
  },
  twitter: {
    title: "MVP Development Services for Startups",
    description:
      "Launch fast with our MVP development services. We build scalable prototypes and Minimum Viable Products to help startups validate ideas and raise capital.",
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
      <MVPContent />
    </>
  );
}
