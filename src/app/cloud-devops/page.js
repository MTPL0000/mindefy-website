import CDS from "../components/CDS";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Cloud & DevOps Solutions",
  description: "Professional cloud and DevOps solutions by Mindefy Technologies. Streamline your development lifecycle with cloud infrastructure and automated deployment.",
  keywords: ["cloud solutions", "devops services", "cloud infrastructure", "aws", "azure", "kubernetes", "docker", "ci/cd"],
  openGraph: {
    title: "Cloud & DevOps Solutions - Mindefy Technologies",
    description: "Professional cloud and DevOps solutions by Mindefy Technologies. Streamline your development lifecycle with cloud infrastructure and automated deployment.",
    url: "https://mindefy.com/cloud-devops",
  },
  twitter: {
    title: "Cloud & DevOps Solutions - Mindefy Technologies",
    description: "Professional cloud and DevOps solutions by Mindefy Technologies. Streamline your development lifecycle with cloud infrastructure and automated deployment.",
  },
  alternates: {
    canonical: "https://mindefy.com/cloud-devops",
  },
};

export default function CloudDevOpsPage() {
  const serviceData = createServiceData({
    name: "Cloud & DevOps Solutions",
    description: "Professional cloud and DevOps solutions by Mindefy Technologies. Streamline your development lifecycle with cloud infrastructure and automated deployment.",
    serviceType: "Cloud & DevOps",
    url: "https://mindefy.com/cloud-devops"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Cloud & DevOps", url: "https://mindefy.com/cloud-devops" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <CDS />
    </>
  );
}
