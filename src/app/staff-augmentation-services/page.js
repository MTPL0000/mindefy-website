import SASContent from "@/components/SAS/SASContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "IT Staff Augmentation Services",
  description:
    "Scale your team with Mindefy's IT staff augmentation. Hire pre-vetted, dedicated developers and engineers to accelerate your software projects immediately.",
  keywords: ["Staffing", "Dedicated Developers"],
  openGraph: {
    title: "IT Staff Augmentation Services",
    description:
      "Scale your team with Mindefy's IT staff augmentation. Hire pre-vetted, dedicated developers and engineers to accelerate your software projects immediately.",
    url: "https://mindefy.tech/staff-augmentation-services",
  },
  twitter: {
    title: "IT Staff Augmentation Services",
    description:
      "Scale your team with Mindefy's IT staff augmentation. Hire pre-vetted, dedicated developers and engineers to accelerate your software projects immediately.",
  },
  alternates: {
    canonical: "https://mindefy.tech/staff-augmentation-services",
  },
};

export default function StaffServicesPage() {
  const serviceData = createServiceData({
    name: "Staff Augmentation Services",
    description:
      "Professional staff augmentation services by Mindefy Technologies. Scale your team with skilled developers, designers, and technical experts on demand.",
    serviceType: "Staff Augmentation",
    url: "https://mindefy.tech/staff-augmentation-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Staff Services",
      url: "https://mindefy.tech/staff-augmentation-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <SASContent />
    </>
  );
}
