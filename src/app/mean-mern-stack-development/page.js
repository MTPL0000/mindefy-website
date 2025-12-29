import { LazyMeanMern } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "MEAN & MERN Stack Development Company",
  description:
    "Hire full-stack developers for MEAN and MERN stack projects. We build dynamic web applications using MongoDB, Express, React/Angular, and Node.js.",
  keywords: ["MEAN", "MERN", "Full Stack"],
  openGraph: {
    title: "MEAN & MERN Stack Development Company",
    description:
      "Hire full-stack developers for MEAN and MERN stack projects. We build dynamic web applications using MongoDB, Express, React/Angular, and Node.js.",
    url: "https://mindefy.tech/mean-mern-stack-development",
  },
  twitter: {
    title: "MEAN & MERN Stack Development Company",
    description:
      "Hire full-stack developers for MEAN and MERN stack projects. We build dynamic web applications using MongoDB, Express, React/Angular, and Node.js.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mean-mern-stack-development",
  },
};

export default function MeanMernStackDevelopmentPage() {
  const serviceData = createServiceData({
    name: "MEAN & MERN Stack Development",
    description:
      "Full-stack MEAN and MERN development services by Mindefy Technologies. Build modern web applications using MongoDB, Express.js, Angular/React, and Node.js.",
    serviceType: "Full Stack Development",
    url: "https://mindefy.tech/mean-mern-stack-development",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "MEAN & MERN Stack Development",
      url: "https://mindefy.tech/mean-mern-stack-development",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMeanMern />
    </>
  );
}
