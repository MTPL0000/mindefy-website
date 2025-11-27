import { LazySolistack } from "../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "SoliStack Integration Solutions | Mindefy Technologies",
  description:
    "SoliStack delivers modern development stack solutions for building scalable applications with integrated tech stack, seamless modern platform capabilities, and efficient integrated solutions.",
  keywords: [
    "soli stack",
    "development stack",
    "modern platform",
    "scalable applications",
    "integrated solution",
    "tech stack",
  ],
  openGraph: {
    title: "SoliStack Integration Solutions | Mindefy Technologiess",
    description:
      "SoliStack delivers modern development stack solutions for building scalable applications with integrated tech stack, seamless modern platform capabilities, and efficient integrated solutions.",
    url: "https://mindefy.tech/soli-stack-integration-solutions",
  },
  twitter: {
    title: "SoliStack Integration Solutions | Mindefy Technologies",
    description:
      "SoliStack delivers modern development stack solutions for building scalable applications with integrated tech stack, seamless modern platform capabilities, and efficient integrated solutions.",
  },
  alternates: {
    canonical: "https://mindefy.tech/soli-stack-integration-solutions",
  },
};

export default function SoliStackPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    {
      name: "Soli Stack",
      url: "https://mindefy.tech/soli-stack-integration-solutions",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazySolistack />
    </>
  );
}
