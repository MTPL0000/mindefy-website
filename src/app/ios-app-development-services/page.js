import IOSContent from "@/components/IOS/IOSContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
  createFAQData,
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

  const faqData = createFAQData([
    {
      question: "What is your iOS app development process?",
      answer:
        "Our process includes Brain-Mapping of requirements, User Stories and UI/UX Figma Creation, and Agile Development to speed your iOS app to market.",
    },
    {
      question: "Why choose Mindefy for iOS Development?",
      answer:
        "We build secure, high-performance native iOS applications using Swift and Objective-C, ensuring seamless UX and enterprise-grade security.",
    },
    {
      question: "How do you handle requirements gathering?",
      answer:
        "We start with a comprehensive brain mapping session to understand your app concept, goals and target audience.",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
      <IOSContent />
    </>
  );
}
