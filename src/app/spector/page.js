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
    url: "https://mindefy.tech/spector",
  },
  twitter: {
    title: "Spector.ai - AI-Driven Asset Health Platform - Mindefy Technologies",
    description: "Spector.ai is a leader in 360° Asset Health Platform and solutions based on AI and AI Agents. Maximize asset performance, integrity, and sustainability with advanced AI-driven insights.",
  },
  alternates: {
    canonical: "https://mindefy.tech/spector",
  },
};

export default function SpectorPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    { name: "Spector.ai", url: "https://mindefy.tech/spector" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazySpector />
    </>
  );
}
