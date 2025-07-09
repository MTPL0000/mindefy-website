import { LazySpector } from "../utils/lazyLoadService";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Spector.ai - AI-Driven Asset Health Platform",
  description: "Spector.ai is a leader in 360° Asset Health Platform and solutions based on AI and AI Agents. Maximize asset performance, integrity, and sustainability with advanced AI-driven insights.",
  keywords: [
    "spector.ai", "asset health platform", "AI asset management", "AI agents", "asset performance", "sustainability", "machine learning", "asset integrity"
  ],
  openGraph: {
    title: "Spector.ai - AI-Driven Asset Health Platform - Mindefy Technologies",
    description: "Spector.ai is a leader in 360° Asset Health Platform and solutions based on AI and AI Agents. Maximize asset performance, integrity, and sustainability with advanced AI-driven insights.",
    url: "https://mindefy.com/spector",
  },
  twitter: {
    title: "Spector.ai - AI-Driven Asset Health Platform - Mindefy Technologies",
    description: "Spector.ai is a leader in 360° Asset Health Platform and solutions based on AI and AI Agents. Maximize asset performance, integrity, and sustainability with advanced AI-driven insights.",
  },
  alternates: {
    canonical: "https://mindefy.com/spector",
  },
};

export default function SpectorPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Projects", url: "https://mindefy.com/projects" },
    { name: "Spector.ai", url: "https://mindefy.com/spector" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazySpector />
    </>
  );
}
