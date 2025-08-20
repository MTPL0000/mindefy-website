import CustomMLSolution from "../components/CustomMLSolution";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Custom ML Solutions & Machine Learning Development",
  description: "Custom machine learning solutions and AI development services by Mindefy Technologies. Build intelligent recommendation engines, predictive models, and ML-driven applications for your business.",
  keywords: [
    "custom ml solutions", "machine learning development", "AI recommendation engine", "predictive modeling", 
    "collaborative filtering", "content-based filtering", "ML algorithms", "artificial intelligence development",
    "data science services", "ML consulting", "AI solutions", "machine learning consulting"
  ],
  openGraph: {
    title: "Custom ML Solutions & Machine Learning Development - Mindefy Technologies",
    description: "Custom machine learning solutions and AI development services by Mindefy Technologies. Build intelligent recommendation engines, predictive models, and ML-driven applications for your business.",
    url: "https://mindefy.tech/custom-ml-solution",
  },
  twitter: {
    title: "Custom ML Solutions & Machine Learning Development - Mindefy Technologies",
    description: "Custom machine learning solutions and AI development services by Mindefy Technologies. Build intelligent recommendation engines, predictive models, and ML-driven applications for your business.",
  },
  alternates: {
    canonical: "https://mindefy.tech/custom-ml-solution",
  },
};

export default function Home() {
  // Structured data for the service
  const serviceData = createServiceData({
    name: "Custom ML Solutions & Machine Learning Development",
    description: "Custom machine learning solutions and AI development services. Build intelligent recommendation engines, predictive models, and ML-driven applications for your business.",
    serviceType: "Machine Learning Development",
    url: "https://mindefy.tech/custom-ml-solution"
  });

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Custom ML Solutions", url: "https://mindefy.tech/custom-ml-solution" }
  ]);

  return (
    <main>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <CustomMLSolution />
    </main>
  );
}