import { LazyMachONE } from "../utils/lazyLoadService";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Mach One - High-Performance Solution",
  description: "Mach One is a high-performance solution developed by Mindefy Technologies. Experience lightning-fast processing and exceptional reliability.",
  keywords: ["mach one", "high performance", "enterprise solution", "fast processing", "scalable platform", "business software"],
  openGraph: {
    title: "Mach One - High-Performance Solution - Mindefy Technologies",
    description: "Mach One is a high-performance solution developed by Mindefy Technologies. Experience lightning-fast processing and exceptional reliability.",
    url: "https://mindefy.tech/mach-one",
  },
  twitter: {
    title: "Mach One - High-Performance Solution - Mindefy Technologies",
    description: "Mach One is a high-performance solution developed by Mindefy Technologies. Experience lightning-fast processing and exceptional reliability.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mach-one",
  },
};

export default function MachOnePage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    { name: "Mach One", url: "https://mindefy.tech/mach-one" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyMachONE />
    </>
  );
}
