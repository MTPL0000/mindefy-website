import { LazyIOS } from "../utils/lazyLoadService"; 
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "iOS App Development Services",
  description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
  keywords: ["ios app development", "iphone app development", "ipad app development", "swift development", "native ios apps", "apple app development"],
  openGraph: {
    title: "iOS App Development Services - Mindefy Technologies",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
    url: "https://mindefy.com/ios-app-development",
  },
  twitter: {
    title: "iOS App Development Services - Mindefy Technologies",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
  },
  alternates: {
    canonical: "https://mindefy.com/ios-app-development",
  },
};

export default function IOSAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "iOS App Development",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.com/ios-app-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "iOS App Development", url: "https://mindefy.com/ios-app-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyIOS />
    </>
  );
}
