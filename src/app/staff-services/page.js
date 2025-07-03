import SAS from "../components/SAS";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Staff Augmentation Services",
  description: "Professional staff augmentation services by Mindefy Technologies. Scale your team with skilled developers, designers, and technical experts on demand.",
  keywords: ["staff augmentation", "team augmentation", "skilled developers", "technical staff", "offshore development", "remote developers"],
  openGraph: {
    title: "Staff Augmentation Services - Mindefy Technologies",
    description: "Professional staff augmentation services by Mindefy Technologies. Scale your team with skilled developers, designers, and technical experts on demand.",
    url: "https://mindefy.com/staff-services",
  },
  twitter: {
    title: "Staff Augmentation Services - Mindefy Technologies",
    description: "Professional staff augmentation services by Mindefy Technologies. Scale your team with skilled developers, designers, and technical experts on demand.",
  },
  alternates: {
    canonical: "https://mindefy.com/staff-services",
  },
};

export default function StaffServicesPage() {
  const serviceData = createServiceData({
    name: "Staff Augmentation Services",
    description: "Professional staff augmentation services by Mindefy Technologies. Scale your team with skilled developers, designers, and technical experts on demand.",
    serviceType: "Staff Augmentation",
    url: "https://mindefy.com/staff-services"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Staff Services", url: "https://mindefy.com/staff-services" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <SAS />
    </>
  );
}
