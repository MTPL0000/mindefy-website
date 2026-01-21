"use client";

import dynamic from "next/dynamic";
import { startupData } from "./StartupConsulting/StartupData";
import HeroSection from "./StartupConsulting/sections/HeroSection";

// Lazy load sections below the fold
const UserCentricSection = dynamic(
  () => import("./StartupConsulting/sections/UserCentricSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const ComprehensiveSupportSection = dynamic(
  () => import("./StartupConsulting/sections/ComprehensiveSupportSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const ITPartnershipSection = dynamic(
  () => import("./StartupConsulting/sections/ITPartnershipSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export default function StartupConsulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={startupData.hero} />

      {/* Below-the-fold sections - Lazy loaded */}
      <UserCentricSection data={startupData.userCentric} />

      <ComprehensiveSupportSection data={startupData.comprehensiveSupport} />

      <ITPartnershipSection data={startupData.itPartnership} />
    </div>
  );
}
