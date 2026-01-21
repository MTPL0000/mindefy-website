import dynamic from "next/dynamic";
import { mlData } from "@/components/MachineLearning/MLData";
import { HeroSection } from "@/components/AIML/HeroSection";

// Lazy load sections below the fold
const WhyAISection = dynamic(() => import("@/components/AIML/WhyAISection").then(mod => ({ default: mod.WhyAISection })), {
  loading: () => <div className="h-96" />,
});

const ImpactDeliveredSection = dynamic(() => import("@/components/AIML/ImpactDeliveredSection").then(mod => ({ default: mod.ImpactDeliveredSection })), {
  loading: () => <div className="h-96" />,
});

const AIOfferingsSection = dynamic(() => import("@/components/AIML/AIOfferingsSection").then(mod => ({ default: mod.AIOfferingsSection })), {
  loading: () => <div className="h-96" />,
});

const BusinessImpactSection = dynamic(() => import("@/components/AIML/BusinessImpactSection"), {
  loading: () => <div className="h-96" />,
});

export const metadata = {
  title: "Machine Learning Services & Consulting",
  description:
    "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
  keywords: ["ML Consulting", " Data Science"],
  openGraph: {
    title: "Machine Learning Services & Consulting",
    description:
      "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
    url: "https://mindefy.tech/machine-learning-services",
  },
  twitter: {
    title: "Machine Learning Services & Consulting",
    description:
      "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
  },
  alternates: {
    canonical: "https://mindefy.tech/machine-learning-services",
  },
};

export default function Page() {
  return (
    <div>
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={mlData.hero} />

      {/* Below-the-fold sections - Lazy loaded */}
      <WhyAISection data={mlData.ourMLApart} />
      <ImpactDeliveredSection data={mlData.mlInAction} />
      <AIOfferingsSection data={mlData.ourMLStack} />
      <BusinessImpactSection data={mlData.businessImpact} />
    </div>
  );
}
