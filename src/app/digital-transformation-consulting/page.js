import DTContent from "@/components/DigitalTransformation/DTContent";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
  createFAQData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Digital Transformation Consulting | Modernize Your Business",
  description:
    "Move beyond legacy systems. We help enterprises digitize processes, adopt cloud technologies, and improve operational efficiency.",
  keywords: ["Digital Strategy", "Enterprise Tech"],
  openGraph: {
    title: "Enterprise Digital Transformation Consulting",
    description:
      "Future-proof your business with our digital transformation consulting. We implement AI, cloud, and automation strategies to drive operational efficiency.",
    url: "https://mindefy.tech/digital-transformation-consulting",
  },
  twitter: {
    title: "Enterprise Digital Transformation Consulting",
    description:
      "Future-proof your business with our digital transformation consulting. We implement AI, cloud, and automation strategies to drive operational efficiency.",
  },
  alternates: {
    canonical: "https://mindefy.tech/digital-transformation-consulting",
  },
};

export default function DigitalTransformationPage() {
  const serviceData = createServiceData({
    name: "Digital Transformation",
    description:
      "Comprehensive digital transformation services by Mindefy Technologies to modernize your business processes and technology infrastructure for the digital age.",
    serviceType: "Digital Transformation",
    url: "https://mindefy.tech/digital-transformation-consulting",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Digital Transformation",
      url: "https://mindefy.tech/digital-transformation-consulting",
    },
  ]);

  const faqData = createFAQData([
    {
      question: "What sets Mindefy apart for Digital Transformation?",
      answer:
        "We act as a Service-Based Product Development Company, treating your projects with the same passion and dedication as our own products, resulting in a holistic vision and innovative solutions.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We have extensive experience in healthcare, finance, retail, and other sectors, allowing us to provide tailored solutions that address unique industry needs.",
    },
    {
      question: "What is your approach to digital transformation?",
      answer:
        "We take a holistic approach, examining your processes, people, and technology landscape to identify areas for improvement and develop comprehensive strategies.",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
      <DTContent />
    </>
  );
}
