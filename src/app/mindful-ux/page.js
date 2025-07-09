import { LazyMindfulUX } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Mindful UX Design Services",
  description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
  keywords: ["ux design", "user experience design", "ui design", "mindful design", "user interface", "design thinking"],
  openGraph: {
    title: "Mindful UX Design Services - Mindefy Technologies",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
    url: "https://mindefy.tech/mindful-ux",
  },
  twitter: {
    title: "Mindful UX Design Services - Mindefy Technologies",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mindful-ux",
  },
};

export default function MindfulUXPage() {
  const serviceData = createServiceData({
    name: "Mindful UX Design Services",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
    serviceType: "UX Design",
    url: "https://mindefy.tech/mindful-ux"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Mindful UX", url: "https://mindefy.tech/mindful-ux" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMindfulUX />
    </>
  );
}
