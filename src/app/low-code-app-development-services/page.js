import { LazyLowCode } from "../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Low-Code App Development Services | Mindefy Technologies",
  description:
    "Accelerates digital transformation with low-code development services, enabling rapid application development, no-code solutions, visual development, and low-code platforms for faster app building.",
  keywords: [
    "low-code development",
    "no-code solutions",
    "rapid application development",
    "visual development",
    "low-code platform",
    "application modernization",
  ],
  openGraph: {
    title: "Low-Code App Development Services | Mindefy Technologies",
    description:
      "Accelerates digital transformation with low-code development services, enabling rapid application development, no-code solutions, visual development, and low-code platforms for faster app building.",
    url: "https://mindefy.tech/low-code-app-development-services",
  },
  twitter: {
    title: "Low-Code App Development Services | Mindefy Technologies",
    description:
      "Accelerates digital transformation with low-code development services, enabling rapid application development, no-code solutions, visual development, and low-code platforms for faster app building.",
  },
  alternates: {
    canonical: "https://mindefy.tech/low-code-app-development-services",
  },
};

export default function LowCodeDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Low-Code Development Services",
    description:
      "Accelerate your digital transformation with low-code development services by Mindefy Technologies. Build applications faster with minimal traditional coding.",
    serviceType: "Low-Code Development",
    url: "https://mindefy.tech/low-code-app-development-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Low-Code Development",
      url: "https://mindefy.tech/low-code-app-development-services",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyLowCode />
    </>
  );
}
