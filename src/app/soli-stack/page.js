import { LazySolistack } from "../utils/lazyLoadService";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Soli Stack - Modern Development Stack",
  description: "Soli Stack is a modern development stack solution by Mindefy Technologies. Build scalable applications with our integrated technology platform.",
  keywords: ["soli stack", "development stack", "modern platform", "scalable applications", "integrated solution", "tech stack"],
  openGraph: {
    title: "Soli Stack - Modern Development Stack - Mindefy Technologies",
    description: "Soli Stack is a modern development stack solution by Mindefy Technologies. Build scalable applications with our integrated technology platform.",
    url: "https://mindefy.tech/soli-stack",
  },
  twitter: {
    title: "Soli Stack - Modern Development Stack - Mindefy Technologies",
    description: "Soli Stack is a modern development stack solution by Mindefy Technologies. Build scalable applications with our integrated technology platform.",
  },
  alternates: {
    canonical: "https://mindefy.tech/soli-stack",
  },
};

export default function SoliStackPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    { name: "Soli Stack", url: "https://mindefy.tech/soli-stack" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazySolistack />
    </>
  );
}
