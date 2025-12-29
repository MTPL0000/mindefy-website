import { LazyCDS } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Cloud DevOps Engineering & Infrastructure Services",
  description:
    "Accelerate release cycles with expert Cloud DevOps services. We specialize in CI/CD automation, AWS/Azure migration, and secure infrastructure management.",
  keywords: ["DevOps", "CI / CD", "AWS / Azure"],
  openGraph: {
    title: "Cloud DevOps Engineering & Infrastructure Services",
    description:
      "Accelerate release cycles with expert Cloud DevOps services. We specialize in CI/CD automation, AWS/Azure migration, and secure infrastructure management.",
    url: "https://mindefy.tech/cloud-devops-engineering",
  },
  twitter: {
    title: "Cloud DevOps Engineering & Infrastructure Services",
    description:
      "Accelerate release cycles with expert Cloud DevOps services. We specialize in CI/CD automation, AWS/Azure migration, and secure infrastructure management.",
  },
  alternates: {
    canonical: "https://mindefy.tech/cloud-devops-engineering",
  },
};

export default function CloudDevOpsPage() {
  const serviceData = createServiceData({
    name: "Cloud & DevOps Solutions",
    description:
      "Professional cloud and DevOps solutions by Mindefy Technologies. Streamline your development lifecycle with cloud infrastructure and automated deployment.",
    serviceType: "Cloud & DevOps",
    url: "https://mindefy.tech/cloud-devops-engineering",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Cloud & DevOps",
      url: "https://mindefy.tech/cloud-devops-engineering",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyCDS />
    </>
  );
}
