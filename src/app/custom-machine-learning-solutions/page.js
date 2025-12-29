import CustomMLSolution from "@/components/CustomMLSolution";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Custom Machine Learning Solutions Company",
  description:
    "Hire expert ML engineers for custom machine learning solutions. We develop predictive models and algorithms tailored to your specific business data.",
  keywords: ["Custom ML", "Predictive Models"],
  openGraph: {
    title: "Custom Machine Learning Solutions Company",
    description:
      "Hire expert ML engineers for custom machine learning solutions. We develop predictive models and algorithms tailored to your specific business data.",
    url: "https://mindefy.tech/custom-machine-learning-solutions",
  },
  twitter: {
    title: "Custom Machine Learning Solutions Company",
    description:
      "Hire expert ML engineers for custom machine learning solutions. We develop predictive models and algorithms tailored to your specific business data.",
  },
  alternates: {
    canonical: "https://mindefy.tech/custom-machine-learning-solutions",
  },
};

export default function Home() {
  // Structured data for the service
  const serviceData = createServiceData({
    name: "Custom ML Solutions & Machine Learning Development",
    description:
      "Custom machine learning solutions and AI development services. Build intelligent recommendation engines, predictive models, and ML-driven applications for your business.",
    serviceType: "Machine Learning Development",
    url: "https://mindefy.tech/custom-machine-learning-solutions",
  });

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Custom ML Solutions",
      url: "https://mindefy.tech/custom-machine-learning-solutions",
    },
  ]);

  return (
    <main>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <CustomMLSolution />
    </main>
  );
}
