import AADContent from "@/components/AAD/AADContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Android App Experts (Builders of 4.5M+ User Apps)",
  description:
    'Hire the team behind "YourHour." We build battery-optimized, high-retention Android apps that scale to millions. Deep expertise in background services.',
  keywords: ["Android", "Kotlin", " Mobile App Dev"],
  openGraph: {
    title: "Android App Development Company",
    description:
      "Hire Mindefy's expert Android developers. We build scalable, secure, and high-performance native Android apps using Kotlin and Java for global ",
    url: "https://mindefy.tech/android-app-development-experts",
  },
  twitter: {
    title: "Android App Development Company",
    description:
      "Hire Mindefy's expert Android developers. We build scalable, secure, and high-performance native Android apps using Kotlin and Java for global ",
  },
  alternates: {
    canonical: "https://mindefy.tech/android-app-development-experts",
  },
};

export default function AndroidAppDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Android App Development",
    description:
      "Professional Android app development services by Mindefy Technologies. Build native Android applications with cutting-edge technology and expert developers.",
    serviceType: "Mobile App Development",
    url: "https://mindefy.tech/android-app-development-experts",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Android App Development",
      url: "https://mindefy.tech/android-app-development-experts",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <AADContent />
    </>
  );
}
