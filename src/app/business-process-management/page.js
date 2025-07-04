import { LazyBPM } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Business Process Management (BPM) Solutions",
  description: "Streamline your business operations with BPM solutions by Mindefy Technologies. Optimize workflows, automate processes, and improve efficiency.",
  keywords: ["business process management", "bpm solutions", "workflow automation", "process optimization", "business automation", "operational efficiency"],
  openGraph: {
    title: "Business Process Management (BPM) Solutions - Mindefy Technologies",
    description: "Streamline your business operations with BPM solutions by Mindefy Technologies. Optimize workflows, automate processes, and improve efficiency.",
    url: "https://mindefy.com/business-process-management",
  },
  twitter: {
    title: "Business Process Management (BPM) Solutions - Mindefy Technologies",
    description: "Streamline your business operations with BPM solutions by Mindefy Technologies. Optimize workflows, automate processes, and improve efficiency.",
  },
  alternates: {
    canonical: "https://mindefy.com/business-process-management",
  },
};

export default function BusinessProcessManagementPage() {
  const serviceData = createServiceData({
    name: "Business Process Management (BPM) Solutions",
    description: "Streamline your business operations with BPM solutions by Mindefy Technologies. Optimize workflows, automate processes, and improve efficiency.",
    serviceType: "Business Process Management",
    url: "https://mindefy.com/business-process-management"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Business Process Management", url: "https://mindefy.com/business-process-management" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyBPM />
    </>
  );
}
