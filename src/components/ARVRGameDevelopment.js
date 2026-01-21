"use client";

import dynamic from "next/dynamic";
import { arvrData } from "./ARVRGameDevelopment/ARVRData";
import HeroSection from "./ARVRGameDevelopment/sections/HeroSection";

// Lazy load sections below the fold
const ARSection = dynamic(
  () => import("./ARVRGameDevelopment/sections/ARSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const VRSection = dynamic(
  () => import("./ARVRGameDevelopment/sections/VRSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export default function ARVRGameDevelopment() {
  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={arvrData.hero} />

      {/* Below-the-fold sections - Lazy loaded */}
      <ARSection data={arvrData.ar} />

      <VRSection data={arvrData.vr} />

      {/* SEO Schema - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(arvrData.faq),
        }}
      />
    </main>
  );
}
