import AgileRapidContent from "@/components/AgileRapid/AgileRapidContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Agile & Rapid Software Development Services",
  description:
    "Speed to market without chaos. Our agile squads deliver working software in 2-week sprints using Scrum and CI/CD best practices.",
  keywords: ["Agile", "Scrum", "Rapid Prototyping"],
  openGraph: {
    title: "Agile Software Development & Rapid Prototyping",
    description:
      "Accelerate launch times with our Agile development services. We use Scrum and rapid prototyping to deliver high-quality software with faster iterations.",
    url: "https://mindefy.tech/agile-rapid-development-practices",
  },
  twitter: {
    title: "Agile Software Development & Rapid Prototyping",
    description:
      "Accelerate launch times with our Agile development services. We use Scrum and rapid prototyping to deliver high-quality software with faster iterations.",
  },
  alternates: {
    canonical: "https://mindefy.tech/agile-rapid-development-practices",
  },
};

export default function AgileRapidDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Agile & Rapid Development Services",
    description:
      "Accelerate your product development with agile and rapid development methodologies by Mindefy Technologies. Fast, iterative, and flexible development approach.",
    serviceType: "Agile Development",
    url: "https://mindefy.tech/agile-rapid-development-practices",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Agile & Rapid Development",
      url: "https://mindefy.tech/agile-rapid-development-practices",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <AgileRapidContent />
    </>
  );
}
