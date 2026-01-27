import MicroservicesContent from "@/components/Microservices/MicroservicesContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Microservices Architecture Consulting Services",
  description:
    "Transition to a scalable microservices architecture. Our consulting services help you break down monoliths into resilient, independent services.",
  keywords: ["Microservices", "API", "Scalability"],
  openGraph: {
    title: "Microservices Architecture Consulting Services",
    description:
      "Transition to a scalable microservices architecture. Our consulting services help you break down monoliths into resilient, independent services.",
    url: "https://mindefy.tech/microservices-architecture-consulting",
  },
  twitter: {
    title: "Microservices Architecture Consulting Services",
    description:
      "Transition to a scalable microservices architecture. Our consulting services help you break down monoliths into resilient, independent services.",
  },
  alternates: {
    canonical: "https://mindefy.tech/microservices-architecture-consulting",
  },
};

export default function MicroservicesArchitecturePage() {
  const serviceData = createServiceData({
    name: "Microservices Architecture Development",
    description:
      "Design and develop scalable microservices architecture by Mindefy Technologies for modern, distributed applications with enhanced performance and reliability.",
    serviceType: "Architecture Development",
    url: "https://mindefy.tech/microservices-architecture-consulting",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Microservices Architecture",
      url: "https://mindefy.tech/microservices-architecture-consulting",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <MicroservicesContent />
    </>
  );
}
