import { LazyCDS } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Cloud & DevOps Engineering | Mindefy Technologies",
  description:
    "Offers professional cloud solutions and DevOps services to streamline development life cycles with robust cloud infrastructure, automated deployment, and seamless integration of AWS, Azure, Kubernetes, Docker, and CI/CD pipelines.",
  keywords: [
    "cloud solutions",
    "devops services",
    "cloud infrastructure",
    "aws",
    "azure",
    "kubernetes",
    "docker",
    "ci/cd",
  ],
  openGraph: {
    title: "Cloud & DevOps Engineering | Mindefy Technologies",
    description:
      "Offers professional cloud solutions and DevOps services to streamline development life cycles with robust cloud infrastructure, automated deployment, and seamless integration of AWS, Azure, Kubernetes, Docker, and CI/CD pipelines.",
    url: "https://mindefy.tech/cloud-devops-engineering",
  },
  twitter: {
    title: "Cloud & DevOps Engineering | Mindefy Technologies",
    description:
      "Offers professional cloud solutions and DevOps services to streamline development life cycles with robust cloud infrastructure, automated deployment, and seamless integration of AWS, Azure, Kubernetes, Docker, and CI/CD pipelines.",
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
