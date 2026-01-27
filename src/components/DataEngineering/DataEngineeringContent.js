"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/AIML/HeroSection";

const WhyAISection = dynamic(
  () => import("@/components/AIML/WhyAISection").then((mod) => ({ default: mod.WhyAISection })),
  { ssr: false }
);

const AIOfferingsSection = dynamic(
  () => import("@/components/AIML/AIOfferingsSection").then((mod) => ({ default: mod.AIOfferingsSection })),
  { ssr: false }
);

const ImpactDeliveredSection = dynamic(
  () => import("@/components/AIML/ImpactDeliveredSection").then((mod) => ({ default: mod.ImpactDeliveredSection })),
  { ssr: false }
);

const WhyChooseSection = dynamic(
  () => import("@/components/AIML/WhyChooseSection").then((mod) => ({ default: mod.WhyChooseSection })),
  { ssr: false }
);

export default function DataEngineeringContent({ 
  heroData, 
  ourEngineerStack, 
  whatWeExcelAt, 
  worldImpact, 
  positioningStatement 
}) {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={ourEngineerStack} />
      <AIOfferingsSection data={whatWeExcelAt} />
      <ImpactDeliveredSection data={worldImpact} />
      <WhyChooseSection data={positioningStatement} />
    </div>
  );
}
