"use client";

import dynamic from "next/dynamic";
import HeroSection from "./earlyfoods/HeroSection";

const DesignProcessSection = dynamic(() => import("./earlyfoods/DesignProcessSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const UXAuditSection = dynamic(() => import("./earlyfoods/UXAuditSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const UserResearchSection = dynamic(() => import("./earlyfoods/UserResearchSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const EmpathyMapSection = dynamic(() => import("./earlyfoods/EmpathyMapSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const UserJourneySection = dynamic(() => import("./earlyfoods/UserJourneySection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const ExtensiveResearchSection = dynamic(() => import("./earlyfoods/ExtensiveResearchSection"), {
  loading: () => <div className="min-h-96 bg-[#E8F4F4] animate-pulse" />,
});

const CompetitorAnalysisSection = dynamic(() => import("./earlyfoods/CompetitorAnalysisSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const MarketResearchSection = dynamic(() => import("./earlyfoods/MarketResearchSection"), {
  loading: () => <div className="min-h-96 bg-[#E9F6F6] animate-pulse" />,
});

const VisualDesignSection = dynamic(() => import("./earlyfoods/VisualDesignSection"), {
  loading: () => <div className="min-h-96 bg-[#eaf6f6] animate-pulse" />,
});

const InformationArchitectureSection = dynamic(() => import("./earlyfoods/InformationArchitectureSection"), {
  loading: () => <div className="min-h-96 bg-[#E8F4F4] animate-pulse" />,
});

export default function EarlyFoods() {
  return (
    <div className="bg-[#E9F6F6]">
      <section className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12">
        <HeroSection />
        <DesignProcessSection />
        <UXAuditSection />
        <UserResearchSection />
        <EmpathyMapSection />
        <UserJourneySection />
        <ExtensiveResearchSection />
        <CompetitorAnalysisSection />
        <MarketResearchSection />
        <VisualDesignSection />
        <InformationArchitectureSection />
      </section>
    </div>
  );
}
