import WebApp from "../components/WebApp";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Web Application Development Services",
  description: "Professional web application development services by Mindefy Technologies. Build scalable, responsive web applications using modern frameworks and technologies.",
  keywords: ["web application development", "web app development", "responsive web design", "full stack development", "modern web apps", "custom web applications"],
  openGraph: {
    title: "Web Application Development Services - Mindefy Technologies",
    description: "Professional web application development services by Mindefy Technologies. Build scalable, responsive web applications using modern frameworks and technologies.",
    url: "https://mindefy.com/web-application-development",
  },
  twitter: {
    title: "Web Application Development Services - Mindefy Technologies",
    description: "Professional web application development services by Mindefy Technologies. Build scalable, responsive web applications using modern frameworks and technologies.",
  },
  alternates: {
    canonical: "https://mindefy.com/web-application-development",
  },
};

export default function WebApplicationDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Web Application Development",
    description: "Professional web application development services by Mindefy Technologies. Build scalable, responsive web applications using modern frameworks and technologies.",
    serviceType: "Web Development",
    url: "https://mindefy.com/web-application-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Services", url: "https://mindefy.com/#services" },
    { name: "Web Application Development", url: "https://mindefy.com/web-application-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <WebApp />
    </>
  );
}
