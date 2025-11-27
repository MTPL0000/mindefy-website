import { LazyMindfulUX } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Mindful UX Design & User Experience Services | Mindefy Technologies",
  description:
    "Delivers mindful UX design and user experience design services with user-centered UI design, design thinking, and intuitive user interface solutions that boost usability, engagement, and mindfulness.",
  keywords: [
    "ux design",
    "user experience design",
    "ui design",
    "mindful design",
    "user interface",
    "design thinking",
  ],
  openGraph: {
    title:
      "Mindful UX Design & User Experience Services | Mindefy Technologies",
    description:
      "Delivers mindful UX design and user experience design services with user-centered UI design, design thinking, and intuitive user interface solutions that boost usability, engagement, and mindfulness.",
    url: "https://mindefy.tech/mindful-ux-design-user-experience",
  },
  twitter: {
    title:
      "Mindful UX Design & User Experience Services | Mindefy Technologies",
    description:
      "Delivers mindful UX design and user experience design services with user-centered UI design, design thinking, and intuitive user interface solutions that boost usability, engagement, and mindfulness.",
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
