import GenAIChatbot from "../components/GenAIChatbot";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Gen AI Chatbot Development Services",
  description: "Custom Generative AI chatbot development services by Mindefy Technologies. Build intelligent conversational AI solutions with RAG technology for enhanced user engagement and mental health support.",
  keywords: [
    "gen ai chatbot", "generative ai chatbot", "AI chatbot development", "RAG chatbot", 
    "conversational AI", "mental health chatbot", "AI companion", "chatbot development",
    "retrieval augmented generation", "AI conversation", "intelligent chatbot", "custom chatbot"
  ],
  openGraph: {
    title: "Gen AI Chatbot Development Services - Mindefy Technologies",
    description: "Custom Generative AI chatbot development services by Mindefy Technologies. Build intelligent conversational AI solutions with RAG technology for enhanced user engagement and mental health support.",
    url: "https://mindefy.tech/gen-ai-chatbot",
  },
  twitter: {
    title: "Gen AI Chatbot Development Services - Mindefy Technologies",
    description: "Custom Generative AI chatbot development services by Mindefy Technologies. Build intelligent conversational AI solutions with RAG technology for enhanced user engagement and mental health support.",
  },
  alternates: {
    canonical: "https://mindefy.tech/gen-ai-chatbot",
  },
};

export default function Home() {
  // Structured data for the service
  const serviceData = createServiceData({
    name: "Gen AI Chatbot Development Services",
    description: "Custom Generative AI chatbot development services with RAG technology for enhanced user engagement and mental health support.",
    serviceType: "AI Chatbot Development",
    url: "https://mindefy.tech/gen-ai-chatbot"
  });

  // Breadcrumb structured data
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/services" },
    { name: "Gen AI Chatbot Development", url: "https://mindefy.tech/gen-ai-chatbot" }
  ]);

  return (
    <main>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <GenAIChatbot />
    </main>
  );
}