import { LazySolistack } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "SoliStack: Enterprise System Integration Solutions",
  description:
    "Seamlessly connect your apps with SoliStack. Our enterprise integration services ensure smooth data flow between CRM, ERP, and legacy systems.",
  keywords: ["API Integration", "Enterprise Stack"],
  openGraph: {
    title: "SoliStack: Enterprise System Integration Solutionss",
    description:
      "Seamlessly connect your apps with SoliStack. Our enterprise integration services ensure smooth data flow between CRM, ERP, and legacy systems.",
    url: "https://mindefy.tech/soli-stack-integration-solutions",
  },
  twitter: {
    title: "SoliStack: Enterprise System Integration Solutions",
    description:
      "Seamlessly connect your apps with SoliStack. Our enterprise integration services ensure smooth data flow between CRM, ERP, and legacy systems.",
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
