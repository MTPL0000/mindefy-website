"use client";

import dynamic from "next/dynamic";
import { spectorData } from "./Spector/SpectorData";
import HeroSection from "./Spector/sections/HeroSection";

// Lazy load sections below the fold
const IntroOverviewSection = dynamic(
  () => import("./Spector/sections/IntroOverviewSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const FeaturesSection = dynamic(
  () => import("./Spector/sections/FeaturesSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const DesignProcessSection = dynamic(
  () => import("./Spector/sections/DesignProcessSection"),
  {
    loading: () => <div className="h-64" />,
  }
);

const VisualAssetsSection = dynamic(
  () => import("./Spector/sections/VisualAssetsSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const WebsiteDesignSection = dynamic(
  () => import("./Spector/sections/WebsiteDesignSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export default function Spector() {
  return (
    <div className="m-auto bg-white">
      <section className="flex flex-col items-center justify-center gap-8 md:gap-16 lg:gap-24 pt-8 md:pt-16">
        {/* Hero Section - Loaded immediately for LCP */}
        <HeroSection data={spectorData.hero} />

        {/* Below-the-fold sections - Lazy loaded */}
        <IntroOverviewSection
          introduction={spectorData.introduction}
          overview={spectorData.overview}
        />

        <FeaturesSection data={spectorData.features} />

        <DesignProcessSection data={spectorData.designProcess} />

        <VisualAssetsSection data={spectorData.visualAssets} />

        <WebsiteDesignSection data={spectorData.websiteDesign} />
      </section>
    </div>
  );
}
