import GenAIChatbot from "@/components/GenAIChatbot";
import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Generative AI Chatbot Development Services  | Mindefy Technologies",
  description:
    "Offers generative AI chatbot development services, building custom AI chatbot development, RAG chatbot, and conversational AI solutions for enhanced engagement and mental health support.",
  keywords: [
    "gen ai chatbot",
    "generative ai chatbot",
    "AI chatbot development",
    "RAG chatbot",
    "conversational AI",
    "mental health chatbot",
    "AI companion",
    "chatbot development",
    "retrieval augmented generation",
    "AI conversation",
    "intelligent chatbot",
    "custom chatbot",
  ],
  openGraph: {
    title: "Generative AI Chatbot Development Services  | Mindefy Technologies",
    description:
      "Offers generative AI chatbot development services, building custom AI chatbot development, RAG chatbot, and conversational AI solutions for enhanced engagement and mental health support.",
    url: "https://mindefy.tech/generative-ai-chatbot-development",
  },
  twitter: {
    title: "Generative AI Chatbot Development Services  | Mindefy Technologies",
    description:
      "Offers generative AI chatbot development services, building custom AI chatbot development, RAG chatbot, and conversational AI solutions for enhanced engagement and mental health support.",
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
      <GenAIChatbot />
    </main>
  );
}
