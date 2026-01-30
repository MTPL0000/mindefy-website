import MVPContent from "@/components/MVPDevelopment/MVPContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "MVP Development for Startups (Launch in 12 Weeks) | Mindefy",
  description:
    'Validate your startup idea fast. We build scalable MVPs with fixed timelines and costs. Trusted by bootstrapped founders. Get your roadmap today.',
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
