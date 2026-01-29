import { LazyGenAIChatbot } from "../../utils/lazyLoadService";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Generative AI & Custom Chatbot Development (GPT-4)",
  description:
    "Enhance customer support with AI. We build custom LLM-powered chatbots that understand context and automate complex business queries.",
  keywords: ["GenAI", "LLM", "ChatGPT"],
  openGraph: {
    title: "Generative AI & Chatbot Development Company",
    description:
      "Integrate Generative AI and custom chatbots into your business. We build LLM-powered solutions using ChatGPT, GPT-4, and LLaMA for smarter automation.",
    url: "https://mindefy.tech/generative-ai-chatbot-development",
  },
  twitter: {
    title: "Generative AI & Chatbot Development Company",
    description:
      "Integrate Generative AI and custom chatbots into your business. We build LLM-powered solutions using ChatGPT, GPT-4, and LLaMA for smarter automation.",
  },
  alternates: {
    canonical: "https://mindefy.tech/generative-ai-chatbot-development",
  },
};

export default function Home() {
  // Structured data for the service
  const serviceData = createServiceData({
    name: "Gen AI Chatbot Development Services",
    description:
      "Custom Generative AI chatbot development services with RAG technology for enhanced user engagement and mental health support.",
    serviceType: "AI Chatbot Development",
    url: "https://mindefy.tech/generative-ai-chatbot-development",
  });

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/services" },
    {
      name: "Gen AI Chatbot Development",
      url: "https://mindefy.tech/generative-ai-chatbot-development",
    },
  ]);

  return (
    <main>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyGenAIChatbot />
    </main>
  );
}
