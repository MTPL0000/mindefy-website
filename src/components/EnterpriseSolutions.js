"use client";

import dynamic from "next/dynamic";
import { enterpriseData } from "./EnterpriseSolutions/EnterpriseData";
import HeroSection from "./EnterpriseSolutions/sections/HeroSection";

// Lazy load sections below the fold
const SolutionsSection = dynamic(
  () => import("./EnterpriseSolutions/sections/SolutionsSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const CustomizedSection = dynamic(
  () => import("./EnterpriseSolutions/sections/CustomizedSection"),
  {
    loading: () => <div className="h-64" />,
  }
);

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={enterpriseData.hero} />

      {/* Below-the-fold sections - Lazy loaded */}
      <SolutionsSection
        innovation={enterpriseData.innovation}
        established={enterpriseData.established}
        solutions={enterpriseData.solutions}
      />

      <CustomizedSection data={enterpriseData.customized} />
    </div>
  );
}
