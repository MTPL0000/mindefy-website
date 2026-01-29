import IOSContent from "@/components/IOS/IOSContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Custom iOS App Development Company | Enterprise Grade",
  description:
    "Premium iOS app development for fintech and enterprise. We build secure, scalable iPhone apps with seamless UX. Hire dedicated iOS developers in India.",
  keywords: ["iOS", "Swift", "iPhone Apps"],
  openGraph: {
    title: "iOS App Development Services & Company",
    description:
      "Hire top iOS developers for custom iPhone and iPad apps. We build secure, high-performance native iOS applications using Swift and Objective-C.",
    url: "https://mindefy.tech/ios-app-development-services",
  },
  twitter: {
    title: "iOS App Development Services & Company",
    description:
      "Hire top iOS developers for custom iPhone and iPad apps. We build secure, high-performance native iOS applications using Swift and Objective-C.",
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
      <IOSContent />
    </>
  );
}
