import { LazySpector } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Spector Analytics Software | Mindefy Technologies",
  description:
    "Presents Spector.ai, the leading 360° asset health platform powered by AI asset management and AI agents for asset performance, asset integrity, and industrial sustainability.",
  keywords: [
    "spector.ai",
    "asset health platform",
    "AI asset management",
    "AI agents",
    "asset performance",
    "sustainability",
    "machine learning",
    "asset integrity",
  ],
  openGraph: {
    title: "Spector Analytics Software | Mindefy Technologies",
    description:
      "Presents Spector.ai, the leading 360° asset health platform powered by AI asset management and AI agents for asset performance, asset integrity, and industrial sustainability.",
    url: "https://mindefy.tech/spector-analytics-software",
  },
  twitter: {
    title: "Spector Analytics Software | Mindefy Technologies",
    description:
      "Presents Spector.ai, the leading 360° asset health platform powered by AI asset management and AI agents for asset performance, asset integrity, and industrial sustainability.",
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
