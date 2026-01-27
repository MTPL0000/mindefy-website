"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "./HeroSection";

const WhyAISection = dynamic(() => import("./WhyAISection").then(mod => ({ default: mod.WhyAISection })), {
  ssr: false,
});

const AIOfferingsSection = dynamic(() => import("./AIOfferingsSection").then(mod => ({ default: mod.AIOfferingsSection })), {
  ssr: false,
});

const WhyChooseSection = dynamic(() => import("./WhyChooseSection").then(mod => ({ default: mod.WhyChooseSection })), {
  ssr: false,
});

const EngagementModelSection = dynamic(() => import("./EngagementModelSection").then(mod => ({ default: mod.EngagementModelSection })), {
  ssr: false,
});

const ImpactDeliveredSection = dynamic(() => import("./ImpactDeliveredSection").then(mod => ({ default: mod.ImpactDeliveredSection })), {
  ssr: false,
});

export default function CustomAIContent({ 
  heroData, 
  whyAIData, 
  aiOfferingsData, 
  whyChooseData, 
  engagementModelData, 
  impactDeliveredData 
}) {
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
