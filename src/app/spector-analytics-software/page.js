import { LazySpector } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Spector Analytics: AI-Driven Asset Health",
  description:
    "Optimize industrial performance with Spector Analytics. Our AI-driven platform offers predictive maintenance and real-time asset health monitoring.",
  keywords: ["Asset Management", "Predictive Maintenance"],
  openGraph: {
    title: "Spector Analytics: AI-Driven Asset Health",
    description:
      "Optimize industrial performance with Spector Analytics. Our AI-driven platform offers predictive maintenance and real-time asset health monitoring.",
    url: "https://mindefy.tech/spector-analytics-software",
  },
  twitter: {
    title: "Spector Analytics: AI-Driven Asset Health",
    description:
      "Optimize industrial performance with Spector Analytics. Our AI-driven platform offers predictive maintenance and real-time asset health monitoring.",
  },
  alternates: {
    canonical: "https://mindefy.tech/spector-analytics-software",
  },
};

export default function SpectorPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    {
      name: "Spector.ai",
      url: "https://mindefy.tech/spector-analytics-software",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazySpector />
    </>
  );
}
