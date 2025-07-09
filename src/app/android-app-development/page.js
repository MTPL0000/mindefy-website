import { LazyAAD } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Android App Development Services",
  description: "Professional Android app development services by Mindefy Technologies. Build native Android applications with cutting-edge technology and expert developers.",
  keywords: ["android app development", "native android apps", "android development services", "mobile app development", "kotlin development", "java development"],
  openGraph: {
    title: "Android App Development Services - Mindefy Technologies",
    description: "Professional Android app development services by Mindefy Technologies. Build native Android applications with cutting-edge technology and expert developers.",
    url: "https://mindefy.tech/android-app-development",
  },
  twitter: {
    title: "Android App Development Services - Mindefy Technologies",
    description: "Professional Android app development services by Mindefy Technologies. Build native Android applications with cutting-edge technology and expert developers.",
  },
  alternates: {
    canonical: "https://mindefy.tech/android-app-development",
  },
};

export default function AndroidAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Android App Development",
    description: "Professional Android app development services by Mindefy Technologies. Build native Android applications with cutting-edge technology and expert developers.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.tech/android-app-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Android App Development", url: "https://mindefy.tech/android-app-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyAAD />
    </>
  );
}
