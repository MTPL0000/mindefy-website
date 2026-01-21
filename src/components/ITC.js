"use client";

import dynamic from "next/dynamic";
import { itcData } from "./ITC/ITCData";
import HeroSection from "./ITC/sections/HeroSection";

// Lazy load sections below the fold
const ApproachSection = dynamic(() => import("./ITC/sections/ApproachSection"), {
  loading: () => <div className="h-96" />,
});

const CaseStudySection = dynamic(() => import("./ITC/sections/CaseStudySection"), {
  loading: () => <div className="h-96" />,
});

const AdvantagesSection = dynamic(() => import("./ITC/sections/AdvantagesSection"), {
  loading: () => <div className="h-96" />,
});

const SolutionsSection = dynamic(() => import("./ITC/sections/SolutionsSection"), {
  loading: () => <div className="h-96" />,
});

export default function ITC() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={itcData.hero} />

      {/* Below-the-fold sections - Lazy loaded */}
      <ApproachSection approach={itcData.approach} features={itcData.features} />

      <CaseStudySection data={itcData.caseStudy} />

      <AdvantagesSection data={itcData.advantages} />

      <SolutionsSection
        tailored={itcData.tailoredSolutions}
        innovation={itcData.innovationFocus}
        partnership={itcData.collaborativePartnership}
      />
    </div>
  );
}
