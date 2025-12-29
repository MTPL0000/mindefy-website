import { LazyMachONE } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "MACH One Platform & Architecture Services",
  description:
    "Modernize your tech stack with MACH architecture. We build Microservices, API-first, Cloud-native, and Headless solutions for future-proof agility.",
  keywords: ["MACH", "Headless", "Microservices"],
  openGraph: {
    title: "MACH One Platform & Architecture Services",
    description:
      "Modernize your tech stack with MACH architecture. We build Microservices, API-first, Cloud-native, and Headless solutions for future-proof agility.",
    url: "https://mindefy.tech/mach-one-platform-services",
  },
  twitter: {
    title: "MACH One Platform & Architecture Services",
    description:
      "Modernize your tech stack with MACH architecture. We build Microservices, API-first, Cloud-native, and Headless solutions for future-proof agility.",
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
