"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/AIML/HeroSection";

const WhyAISection = dynamic(
  () => import("@/components/AIML/WhyAISection").then((mod) => ({ default: mod.WhyAISection }))
);

const AIOfferingsSection = dynamic(
  () => import("@/components/AIML/AIOfferingsSection").then((mod) => ({ default: mod.AIOfferingsSection }))
);

const ImpactDeliveredSection = dynamic(
  () => import("@/components/AIML/ImpactDeliveredSection").then((mod) => ({ default: mod.ImpactDeliveredSection }))
);

export default function CloudContent({ heroData, ourCloudServices, ourCloudEdge, outcomesDelivered }) {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={ourCloudServices} />
      <AIOfferingsSection data={ourCloudEdge} />
      <ImpactDeliveredSection data={outcomesDelivered} />
    </div>
  );
}
