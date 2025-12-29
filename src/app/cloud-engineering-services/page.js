import { AIOfferingsSection } from "@/components/AIML/AIOfferingsSection";
import { HeroSection } from "@/components/AIML/HeroSection";
import { ImpactDeliveredSection } from "@/components/AIML/ImpactDeliveredSection";
import { WhyAISection } from "@/components/AIML/WhyAISection";

export const metadata = {
  title: "Cloud Engineering & Migration Services",
  description:
    "Scalable cloud architecture and migration services. We help enterprises move to the cloud securely, optimizing performance and reducing infrastructure costs.",
  keywords: ["Cloud Migration", "Architecture"],
  alternates: { canonical: "https://mindefy.tech/cloud-engineering-services" },
  openGraph: {
    title: "Cloud Engineering & Migration Services",
    description:
      "Scalable cloud architecture and migration services. We help enterprises move to the cloud securely, optimizing performance and reducing infrastructure costs.",
    url: "https://mindefy.tech/cloud-engineering-services",
  },
  twitter: {
    title: "Cloud Engineering & Migration Services",
    description:
      "Scalable cloud architecture and migration services. We help enterprises move to the cloud securely, optimizing performance and reducing infrastructure costs.",
  },
};

export const heroData = {
  title: "Cloud Engineering - Powering AI, Data & Scale",
  subtitle: "The cloud is more than infrastructure",
  description:
    "It’s the foundation for intelligence, speed, and innovation. We design cloud ecosystems that don’t just run your workloads - they fuel AI, accelerate ML, and scale your business with confidence.",
  buttonText: "Demo",
  buttonLink: "#demo",
  backgroundImage: "/images/CLD-BG.webp",
};

export const ourCloudServices = {
  title: "Our Cloud Services",
  cards: [
    {
      title: "Cloud Strategy & Migration",
      description:
        "Discovery, TCO analysis, phased migration, hybrid cloud adoption",
      icon: "/images/AI-ML/strategy.svg",
    },
    {
      title: "Cloud-Native Engineering",
      description:
        "Microservices, Kubernetes, serverless, multi-region HA & DR",
      icon: "/images/AI-ML/native.svg",
    },
    {
      title: "Cloud for AI/ML",
      description:
        "GPU clusters, ML pipelines with CI/CD, streaming + batch optimization",
      icon: "/images/AI-ML/cloud-AI-ML.svg",
    },
    {
      title: "Cloud Security & Compliance",
      description:
        "IAM, RBAC, zero-trust, encryption, compliance certifications",
      icon: "/images/AI-ML/cloud-security.svg",
    },
    {
      title: "DevOps & FinOps",
      description:
        "CI/CD, IaC, autoscaling, reserved instance planning, cost governance",
      icon: "/images/AI-ML/ci-cd.svg",
    },
  ],
};

export const ourCloudEdge = {
  title: "Our Cloud Edge",
  offerings: [
    {
      icon: "/images/AI-ML/edgeStrategy.svg",
      title: "Cloud Strategy That Works",
      subtitle:
        "We help enterprises move to the cloud with confidence — balancing cost, performance, and risk. From discovery and TCO analysis to phased migrations with rollback safety, our strategies ensure transformation without disruption.",
    },
    {
      icon: "/images/AI-ML/edgeNative.svg",
      title: "Cloud-Native by Design",
      subtitle:
        "Microservices, Kubernetes, and serverless — we architect for agility. Our multi-region, disaster-ready designs keep businesses always on and always fast.",
    },
    {
      icon: "/images/AI-ML/edgeAI.svg",
      title: "Cloud for AI & ML",
      subtitle:
        "Your AI ambitions deserve the right foundation. We build GPU-powered clusters, scalable ML pipelines, and data flows optimized for training, inference, and real-time intelligence.",
    },
    {
      icon: "/images/AI-ML/edge-security.svg",
      title: "Secure & Compliant, Always",
      subtitle:
        "Zero-trust architectures, enterprise IAM, encryption everywhere, and compliance frameworks (HIPAA, GDPR, SOC2) built in from day one. Security is not an afterthought — it’s part of the blueprint.",
    },
    {
      icon: "/images/AI-ML/edgeCICD.svg",
      title: "DevOps + FinOps Synergy",
      subtitle:
        "We combine automation with financial discipline. With IaC (Terraform, CloudFormation), CI/CD pipelines, autoscaling, and cost-optimization strategies, your cloud is both efficient and predictable.",
    },
  ],
};

export const outcomesDelivered = {
  title: "Outcomes Delivered",
  impacts: [
    {
      icon: "/images/AI-ML/glob-icon.svg",
      title: "Retail",
      description:
        "Scaled infrastructure dynamically during peak Black Friday traffic - saving $180K while maintaining zero downtime.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      description:
        "Executed migration of 200+ applications with zero downtime through phased deployment and compliance automation.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "FinTech",
      description:
        "Optimized multi-cloud infrastructure to cut costs by 40% and boost transaction performance across regions.",
    },
  ],
};

export default function Page() {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={ourCloudServices} />
      <AIOfferingsSection data={ourCloudEdge} />
      <ImpactDeliveredSection data={outcomesDelivered} />
    </div>
  );
}
