import ALMLandingPage from "./page";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
  createFAQData,
} from "@/components/StructuredData";

export const metadata = {
  title: "AI & Machine Learning Development Services | Mindefy",
  description:
    "Integrate AI into your business. From predictive analytics to smart automation, we build custom AI solutions that drive real ROI. Consult our experts.",
  keywords: ["AI/ML", "NLP", "Predictive Analytics"],
  alternates: { canonical: "https://mindefy.tech/ai-ml-services" },
  openGraph: {
    title: "Custom AI & Machine Learning Development Company",
    description:
      "Hire expert AI/ML developers for custom recommendation engines, NLP, and predictive analytics. We build intelligent AI solutions for business automation.",
    url: "https://mindefy.tech/ai-ml-services",
  },
  twitter: {
    title: "Custom AI & Machine Learning Development Company",
    description:
      "Hire expert AI/ML developers for custom recommendation engines, NLP, and predictive analytics. We build intelligent AI solutions for business automation.",
  },
};

export default function AIMLPage() {
  const serviceData = createServiceData({
    name: "AI & Machine Learning Services",
    description:
      "Integrate AI into your business. From predictive analytics to smart automation, we build custom AI solutions that drive real ROI.",
    serviceType: "AI Development",
    url: "https://mindefy.tech/ai-ml-services",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "AI & ML Services",
      url: "https://mindefy.tech/ai-ml-services",
    },
  ]);

  const faqData = createFAQData([
    {
      question: "Do you offer Custom AI Engineering?",
      answer:
        "Yes, we provide expertise across NLP, generative AI, computer vision, and reinforcement learning - engineered to scale, secure, and perform.",
    },
    {
      question: "Are your AI solutions custom or off-the-shelf?",
      answer:
        "We build solutions tailored to your data, ecosystem, and KPIs - no cookie-cutter models.",
    },
    {
      question: "Can you deploy AI on Edge devices?",
      answer:
        "Yes, we deploy AI where it matters - on cloud, edge, or hybrid environments - seamlessly integrated into your infrastructure.",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
      <ALMLandingPage />
    </>
  );
}
