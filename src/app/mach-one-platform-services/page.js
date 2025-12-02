import { LazyMachONE } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "MachOne Platform Services | Mindefy Technologies",
  description:
    "MachOne platform offers a high-performance, scalable enterprise solution with lightning-fast processing and exceptional reliability, leveraging MACH architecture for modularity, flexibility, and rapid scalability.",
  keywords: [
    "mach one",
    "high performance",
    "enterprise solution",
    "fast processing",
    "scalable platform",
    "business software",
  ],
  openGraph: {
    title: "MachOne Platform Services | Mindefy Technologies",
    description:
      "MachOne platform offers a high-performance, scalable enterprise solution with lightning-fast processing and exceptional reliability, leveraging MACH architecture for modularity, flexibility, and rapid scalability.",
    url: "https://mindefy.tech/mach-one-platform-services",
  },
  twitter: {
    title: "MachOne Platform Services | Mindefy Technologies",
    description:
      "MachOne platform offers a high-performance, scalable enterprise solution with lightning-fast processing and exceptional reliability, leveraging MACH architecture for modularity, flexibility, and rapid scalability.",
  },
  alternates: {
    canonical: "https://mindefy.tech/mach-one-platform-services",
  },
};

export default function MachOnePage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    {
      name: "Mach One",
      url: "https://mindefy.tech/mach-one-platform-services",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyMachONE />
    </>
  );
}
