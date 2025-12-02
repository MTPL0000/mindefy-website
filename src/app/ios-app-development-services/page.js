import { LazyIOS } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "iOS App Development Services | Mindefy Technologies",
  description:
    "Offers expert iOS app development services, building native iPhone app development and iPad app development with Swift development for high-performance native iOS apps.",
  keywords: [
    "ios app development",
    "iphone app development",
    "ipad app development",
    "swift development",
    "native ios apps",
    "apple app development",
  ],
  openGraph: {
    title: "iOS App Development Services | Mindefy Technologies",
    description:
      "Offers expert iOS app development services, building native iPhone app development and iPad app development with Swift development for high-performance native iOS apps.",
    url: "https://mindefy.tech/ios-app-development-services",
  },
  twitter: {
    title: "iOS App Development Services | Mindefy Technologies",
    description:
      "Offers expert iOS app development services, building native iPhone app development and iPad app development with Swift development for high-performance native iOS apps.",
  },
  alternates: {
    canonical: "https://mindefy.tech/ios-app-development-services",
  },
};

export default function IOSAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "iOS App Development",
    description:
      "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.tech/ios-app-development-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "iOS App Development",
      url: "https://mindefy.tech/ios-app-development-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyIOS />
    </>
  );
}
