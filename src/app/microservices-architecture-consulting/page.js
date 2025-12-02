import { LazyMicroservices } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title:
    "Microservices Architecture Consulting Services | Mindefy Technologies",
  description:
    "Provides microservices architecture consulting services for designing scalable distributed systems, cloud native applications, robust API development, and optimized microservices design with superior performance.",
  keywords: [
    "microservices architecture",
    "distributed systems",
    "scalable applications",
    "api development",
    "cloud native",
    "microservices design",
  ],
  openGraph: {
    title:
      "Microservices Architecture Consulting Services | Mindefy Technologies",
    description:
      "Provides microservices architecture consulting services for designing scalable distributed systems, cloud native applications, robust API development, and optimized microservices design with superior performance.",
    url: "https://mindefy.tech/microservices-architecture-consulting",
  },
  twitter: {
    title:
      "Microservices Architecture Consulting Services | Mindefy Technologies",
    description:
      "Provides microservices architecture consulting services for designing scalable distributed systems, cloud native applications, robust API development, and optimized microservices design with superior performance.",
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
      <LazyMicroservices />
    </>
  );
}
