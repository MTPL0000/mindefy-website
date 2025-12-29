import { LazyMindfulUX } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "UI/UX Design & User Experience Services",
  description:
    "Create intuitive digital products with our UI/UX design agency. We focus on user-centric research, wireframing, and prototyping for higher engagement.",
  keywords: ["UI/UX", "Product Design"],
  openGraph: {
    title: "UI/UX Design & User Experience Services",
    description:
      "Create intuitive digital products with our UI/UX design agency. We focus on user-centric research, wireframing, and prototyping for higher engagement.",
    url: "https://mindefy.tech/mindful-ux-design-user-experience",
  },
  twitter: {
    title: "UI/UX Design & User Experience Services",
    description:
      "Create intuitive digital products with our UI/UX design agency. We focus on user-centric research, wireframing, and prototyping for higher engagement.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mindful-ux-design-user-experience",
  },
};

export default function MindfulUXPage() {
  const serviceData = createServiceData({
    name: "Mindful UX Design Services",
    description:
      "Create exceptional user experiences with mindful UX design services by Mindefy Technologies. User-centered design that focuses on usability and engagement.",
    serviceType: "UX Design",
    url: "https://mindefy.tech/mindful-ux-design-user-experience",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Mindful UX",
      url: "https://mindefy.tech/mindful-ux-design-user-experience",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMindfulUX />
    </>
  );
}
