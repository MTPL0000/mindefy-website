import { LazyMVPDevelopment } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "MVP Development Services",
  description: "Minimum Viable Product (MVP) development services by Mindefy Technologies for startups and enterprises. Launch faster with validated ideas and rapid prototyping.",
  keywords: ["mvp development", "minimum viable product", "startup development", "prototype development", "rapid development", "product validation"],
  openGraph: {
    title: "MVP Development Services - Mindefy Technologies",
    description: "Minimum Viable Product (MVP) development services by Mindefy Technologies for startups and enterprises. Launch faster with validated ideas and rapid prototyping.",
    url: "https://mindefy.com/mvp-development",
  },
  twitter: {
    title: "MVP Development Services - Mindefy Technologies",
    description: "Minimum Viable Product (MVP) development services by Mindefy Technologies for startups and enterprises. Launch faster with validated ideas and rapid prototyping.",
  },
  alternates: {
    canonical: "https://mindefy.com/mvp-development",
  },
};

export default function MVPDevelopmentPage() {
  const serviceData = createServiceData({
    name: "MVP Development",
    description: "Minimum Viable Product (MVP) development services by Mindefy Technologies for startups and enterprises. Launch faster with validated ideas and rapid prototyping.",
    serviceType: "MVP Development",
    url: "https://mindefy.com/mvp-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "MVP Development", url: "https://mindefy.com/mvp-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMVPDevelopment />
    </>
  );
}
