import { AIOfferingsSection } from "@/components/AIML/AIOfferingsSection";
import { EngagementModelSection } from "@/components/AIML/EngagementModelSection";
import { HeroSection } from "@/components/AIML/HeroSection";
import { ImpactDeliveredSection } from "@/components/AIML/ImpactDeliveredSection";
import { WhyAISection } from "@/components/AIML/WhyAISection";
import { WhyChooseSection } from "@/components/AIML/WhyChooseSection";

export const metadata = {
  title: "Enterprise AI Solutions & Custom Development",
  description:
    "Transform your enterprise with custom AI solutions. We build scalable artificial intelligence systems to drive innovation, automation, and efficiency.",
  keywords: ["Enterprise AI", "Automation"],
  alternates: {
    canonical: "https://mindefy.tech/custom-ai-solutions-enterprises",
  },
  openGraph: {
    title: "Enterprise AI Solutions & Custom Development",
    description:
      "Transform your enterprise with custom AI solutions. We build scalable artificial intelligence systems to drive innovation, automation, and efficiency.",
    url: "https://mindefy.tech/custom-ai-solutions-enterprises",
  },
  twitter: {
    title: "Enterprise AI Solutions & Custom Development",
    description:
      "Transform your enterprise with custom AI solutions. We build scalable artificial intelligence systems to drive innovation, automation, and efficiency.",
  },
};

export const heroData = {
  title: "Custom AI Development",
  subtitle: "Beyond Buzzwords: AI That Works In Production",
  description:
    "Artificial Intelligence is powerful, but only if it’s applied the right way. We help organizations design and deploy AI solutions that are explainable, secure, and production-ready - not just proofs of concept.",
  buttonText: "Demo",
  buttonLink: "#demo",
  backgroundImage: "/images/AI-BG.webp",
};

export const whyAIData = {
  title: "Why AI, Why Now?",
  subtitle:
    "The AI revolution is moving faster than most organizations can keep up with. Companies adopting AI are:",
  cards: [
    {
      percentage: "75%",
      rate: "Impact Rate",
      title: "Innovation Cycles +30%",
      description:
        "Accelerating innovation cycles by up to 30% with Generative AI.",
      icon: "/images/AI-ML/mindefyAI-1.svg",
    },
    {
      percentage: "90%",
      rate: "Impact Rate",
      title: "24/7 Intelligent Agents",
      description:
        "Improving customer experience with 24/7 conversational agents.",
      icon: "/images/AI-ML/mindefyAI-2.svg",
    },
    {
      percentage: "65%",
      rate: "Impact Rate",
      title: "Automation at Scale",
      description:
        "Reducing operational costs by automating repetitive tasks at scale.",
      icon: "/images/AI-ML/mindefyAI-3.svg",
    },
    {
      percentage: "80%",
      rate: "Impact Rate",
      title: "New Revenue Streams",
      description:
        "Unlocking new revenue streams through personalization and product innovation.",
      icon: "/images/AI-ML/mindefyAI-4.svg",
    },
  ],
  ctaText:
    "In today’s market, AI isn’t a choice. It’s the difference between leading and lagging.",
};

export const aiOfferingsData = {
  title: "Our AI Offerings",
  subtitle: "Comprehensive Al solutions tailored to your enterprise needs",
  offerings: [
    {
      icon: "/images/AI-ML/generative-icon.svg",
      title: "Generative AI",
      subtitle: "Reimagine how your teams create, collaborate, and innovate.",
      items: [
        {
          title: "Marketing Content Automation",
          description: "Campaigns, blogs, and product descriptions in minutes.",
        },
        {
          title: "AI-Assisted Design",
          description:
            "Prototypes, ad creatives, and UI drafts in your brand style.",
        },
        {
          title: "Synthetic Data",
          description:
            "Train models safely when real data is scarce or sensitive.",
        },
        {
          title: "What makes us different?",
          description:
            "Every copilot is enterprise-tuned for compliance, accuracy, and scalability.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/home-icon.svg",
      title: "RAG Architecture",
      subtitle:
        "Hallucination is the enemy of enterprise AI. That’s why we build Retrieval-Augmented Generation (RAG) systems that ground AI in your trusted data.",
      items: [
        {
          title: "Ingest",
          description:
            "Enterprise data is embedded into a secure vector store.",
        },
        {
          title: "Retrieve",
          description: "Only the most relevant knowledge is pulled.",
        },
        {
          title: "Generate",
          description: "The LLM creates answers backed by facts.",
        },
        {
          title: "Verify",
          description:
            "Every response is explainable, traceable, and auditable.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/brain-icon.svg",
      title: "Agentic Workflow Intelligence",
      subtitle:
        "AI that doesn’t just “chat,” it does the work. Our multi-agent AI systems handle workflows across industries:",
      items: [
        {
          title: "Insurance",
          description:
            "One agent extracts claims, another validates policies, another processes payouts.",
        },
        {
          title: "Logistics",
          description:
            "AI forecasts demand, optimizes routes, and coordinates shipments.",
        },
        {
          title: "Finance",
          description:
            "Autonomous agents reconcile, flag fraud, and generate compliance reports.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/vision-icon.svg",
      title: "Computer Vision",
      subtitle:
        "We help enterprises see what matters most in their operations.",
      items: [
        {
          title: "Automated Defect Detection",
          description: "Spot quality issues in manufacturing instantly.",
        },
        {
          title: "Smart Retail Analytics",
          description:
            "Track shelf stock, customer flows, and product engagement.",
        },
        {
          title: "OCR-Driven IDP",
          description: "Digitize paperwork with high-accuracy text extraction.",
        },
        {
          title: "Medical Imaging",
          description: "Support diagnosis with AI-powered insights on scans.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/hypothesis-icon.svg",
      title: "Predictive AI & Decision Intelligence",
      subtitle:
        "Turn data into foresight. Our predictive models transform businesses from reactive to proactive.",
      items: [
        {
          title: "Predictive Maintenance",
          description: "Reduce downtime with failure forecasts.",
        },
        {
          title: "Fraud Detection",
          description: "Spot anomalies in transactions in real time.",
        },
        {
          title: "Churn Modeling",
          description: "Keep customers before they leave.",
        },
        {
          title: "Demand Forecasting",
          description: "Align supply with market shifts.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/chatbot-icon.svg",
      title: "Conversational AI",
      subtitle:
        "AI that listens, understands, and speaks human - delivering intelligent, natural interactions across every channel.",
      items: [
        {
          title: "Language Intelligence (NLP + NLU)",
          description: "Understand context, emotion, and intent.",
        },
        {
          title: "Knowledge & Document AI",
          description:
            "Summarize, retrieve, and interact with complex data instantly.",
        },
        {
          title: "Voice Intelligence",
          description:
            "Power assistants and call centers with real-time speech understanding.",
        },
      ],
    },
  ],
};

export const whyChooseData = {
  title: "Why Enterprises Choose Us",
  image: "/images/AI-ML/chooseUs-img.webp",
  points: [
    {
      text: "Full-Stack AI Expertise – From generative design to predictive intelligence.",
    },
    {
      text: "Data-Grounded RAG Systems – Accuracy and compliance you can trust.",
    },
    {
      text: "Agentic Workflow Automation – Beyond chat, into execution.",
    },
    {
      text: "Enterprise-Grade Platforms – Built with governance, MLOps, and scale in mind.",
    },
  ],
  buttonText: "Let’s Talk AI",
};

export const engagementModelData = {
  title: "Our Engagement Model",
  steps: [
    {
      number: "1",
      icon: "/images/AI-ML/search-icon.svg",
      title: "Discovery",
      description: "Define business priorities and quick wins.",
    },
    {
      number: "2",
      icon: "/images/AI-ML/bulb-icon.svg",
      title: "Prototype",
      description: "Build a working demo in 4–6 weeks.",
    },
    {
      number: "3",
      icon: "/images/AI-ML/rocket-icon.svg",
      title: "Enterprise Rollout",
      description: "Integrate AI with business systems and scale securely.",
    },
    {
      number: "4",
      icon: "/images/AI-ML/trend-icon.svg",
      title: "Continuous Evolution",
      description: "Model monitoring, retraining, and governance.",
    },
  ],
};

export const impactDeliveredData = {
  title: "Impact Delivered",
  impacts: [
    {
      icon: "/images/AI-ML/glob-icon.svg",
      title: "E-Commerce Innovator",
      description:
        "Elevated online shopping journeys with personalized recommendations, dynamic pricing intelligence, and smarter customer engagement.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare Provider",
      description:
        "Accelerated document processing with intelligent automation, giving doctors more time for patient care.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "Retail Giant",
      description:
        "Enhanced customer experience with AI-powered recommendations, driving stronger upsell and cross-sell opportunities.",
    },
    {
      icon: "/images/AI-ML/logistic-icon.svg",
      title: "Logistics Enterprise",
      description:
        "Optimized delivery routes with predictive AI, lowering operational costs and improving on-time performance.",
    },
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "Global Manufacturing",
      description:
        "Improved product quality and reduced defect escapes through AI-driven visual inspection.",
    },
  ],
  ctaText:
    "We don’t just deploy AI — we partner with you to build a future-ready, intelligent enterprise.",
};

export default function Page() {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={whyAIData} />
      <AIOfferingsSection data={aiOfferingsData} />
      <WhyChooseSection data={whyChooseData} />
      <EngagementModelSection data={engagementModelData} />
      <ImpactDeliveredSection data={impactDeliveredData} />
    </div>
  );
}
