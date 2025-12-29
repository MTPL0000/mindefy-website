import { LazyHAD } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Hybrid Mobile App Development Services",
  description:
    "Build cost-effective apps with our hybrid development services. We use React Native and Flutter to deliver native-like performance on iOS and Android.",
  keywords: ["React Native", "Flutter", "Cross-Platform"],
  openGraph: {
    title: "Hybrid Mobile App Development Services",
    description:
      "Build cost-effective apps with our hybrid development services. We use React Native and Flutter to deliver native-like performance on iOS and Android.",
    url: "https://mindefy.tech/hybrid-app-development-services",
  },
  twitter: {
    title: "Hybrid Mobile App Development Services",
    description:
      "Build cost-effective apps with our hybrid development services. We use React Native and Flutter to deliver native-like performance on iOS and Android.",
  },
  alternates: {
    canonical: "https://mindefy.tech/hybrid-app-development-services",
  },
};

export default function HybridAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Hybrid App Development",
    description:
      "Cross-platform hybrid app development services by Mindefy Technologies. Build apps that work seamlessly on both iOS and Android platforms with single codebase.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.tech/hybrid-app-development-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Hybrid App Development",
      url: "https://mindefy.tech/hybrid-app-development-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyHAD />
    </>
  );
}
