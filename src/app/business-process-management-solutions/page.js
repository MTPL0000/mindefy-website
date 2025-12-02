import { LazyBPM } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Business Process Management Solutions | Mindefy Technologies",
  description:
    "Provides business process management (BPM) solutions, workflow automation, process optimization, and business automation to streamline operations and boost operational efficiency.",
  keywords: [
    "business process management",
    "bpm solutions",
    "workflow automation",
    "process optimization",
    "business automation",
    "operational efficiency",
  ],
  openGraph: {
    title: "Business Process Management Solutions | Mindefy Technologies",
    description:
      "Provides business process management (BPM) solutions, workflow automation, process optimization, and business automation to streamline operations and boost operational efficiency.",
    url: "https://mindefy.tech/business-process-management-solutions",
  },
  twitter: {
    title: "Business Process Management Solutions | Mindefy Technologies",
    description:
      "Provides business process management (BPM) solutions, workflow automation, process optimization, and business automation to streamline operations and boost operational efficiency.",
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
