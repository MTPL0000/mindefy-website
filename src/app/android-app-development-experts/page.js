import AADContent from "@/components/AAD/AADContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Android App Development Company",
  description:
    "Hire Mindefy's expert Android developers. We build scalable, secure, and high-performance native Android apps using Kotlin and Java for global ",
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
