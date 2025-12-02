import { LazySAS } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Staff Augmentation & Services | Mindefy Technologies",
  description:
    "Provides staff augmentation services to scale teams with skilled developers, remote developers, offshore development, team augmentation, and technical staff experts on demand for flexibility and cost efficiency.",
  keywords: [
    "staff augmentation",
    "team augmentation",
    "skilled developers",
    "technical staff",
    "offshore development",
    "remote developers",
  ],
  openGraph: {
    title: "Staff Augmentation & Services | Mindefy Technologies",
    description:
      "Provides staff augmentation services to scale teams with skilled developers, remote developers, offshore development, team augmentation, and technical staff experts on demand for flexibility and cost efficiency.",
    url: "https://mindefy.tech/staff-augmentation-services",
  },
  twitter: {
    title: "Staff Augmentation & Services | Mindefy Technologies",
    description:
      "Provides staff augmentation services to scale teams with skilled developers, remote developers, offshore development, team augmentation, and technical staff experts on demand for flexibility and cost efficiency.",
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
      <LazySAS />
    </>
  );
}
