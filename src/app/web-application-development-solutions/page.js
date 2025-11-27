import { LazyWebApp } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Web Application Development Services in USA | Mindefy Technologies",
  description:
    "Offers professional web application development services in the USA, building scalable, responsive, and custom web applications using modern frameworks and technologies to enhance performance and user experience.",
  keywords: [
    "web application development",
    "web app development",
    "responsive web design",
    "full stack development",
    "modern web apps",
    "custom web applications",
  ],
  openGraph: {
    title: "Web Application Development Services in USA | Mindefy Technologies",
    description:
      "Offers professional web application development services in the USA, building scalable, responsive, and custom web applications using modern frameworks and technologies to enhance performance and user experience.",
    url: "https://mindefy.tech/web-application-development-solutions",
  },
  twitter: {
    title: "Web Application Development Services in USA | Mindefy Technologies",
    description:
      "Offers professional web application development services in the USA, building scalable, responsive, and custom web applications using modern frameworks and technologies to enhance performance and user experience.",
  },
  alternates: {
    canonical: "https://mindefy.tech/web-application-development-solutions",
  },
};

export default function WebApplicationDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Web Application Development",
    description:
      "Professional web application development services by Mindefy Technologies. Build scalable, responsive web applications using modern frameworks and technologies.",
    serviceType: "Web Development",
    url: "https://mindefy.tech/web-application-development-solutions",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Web Application Development",
      url: "https://mindefy.tech/web-application-development-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyWebApp />
    </>
  );
}
