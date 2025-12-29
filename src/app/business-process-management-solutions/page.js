import { LazyBPM } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Business Process Management (BPM) Solutions",
  description:
    "Streamline operations with custom Business Process Management (BPM) software. We automate complex workflows to reduce costs and improve enterprise agility.",
  keywords: ["BPM", "Workflow Automation"],
  openGraph: {
    title: "Business Process Management (BPM) Solutions",
    description:
      "Streamline operations with custom Business Process Management (BPM) software. We automate complex workflows to reduce costs and improve enterprise agility.",
    url: "https://mindefy.tech/business-process-management-solutions",
  },
  twitter: {
    title: "Business Process Management (BPM) Solutions",
    description:
      "Streamline operations with custom Business Process Management (BPM) software. We automate complex workflows to reduce costs and improve enterprise agility.",
  },
  alternates: {
    canonical: "https://mindefy.tech/business-process-management-solutions",
  },
};

export default function BusinessProcessManagementPage() {
  const serviceData = createServiceData({
    name: "Business Process Management (BPM) Solutions",
    description:
      "Streamline your business operations with BPM solutions by Mindefy Technologies. Optimize workflows, automate processes, and improve efficiency.",
    serviceType: "Business Process Management",
    url: "https://mindefy.tech/business-process-management-solutions",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Business Process Management",
      url: "https://mindefy.tech/business-process-management-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyBPM />
    </>
  );
}
