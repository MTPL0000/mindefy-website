import MindfulUX from "../components/MindfulUX";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Mindful UX Design Services",
  description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
  keywords: ["ux design", "user experience design", "ui design", "mindful design", "user interface", "design thinking"],
  openGraph: {
    title: "Mindful UX Design Services - Mindefy Technologies",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
    url: "https://mindefy.com/mindful-ux",
  },
  twitter: {
    title: "Mindful UX Design Services - Mindefy Technologies",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
  },
  alternates: {
    canonical: "https://mindefy.com/mindful-ux",
  },
};

export default function MindfulUXPage() {
  const serviceData = createServiceData({
    name: "Mindful UX Design Services",
    description: "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
    serviceType: "UX Design",
    url: "https://mindefy.com/mindful-ux"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Mindful UX", url: "https://mindefy.com/mindful-ux" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <MindfulUX />
    </>
  );
}
