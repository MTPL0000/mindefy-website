"use client";

import dynamic from "next/dynamic";
import DTHero from "./DTHero";

const ServicesTimeline = dynamic(() => import("./ServicesTimeline"), {
  ssr: false,
});

const WhyChooseSection = dynamic(() => import("./WhyChooseSection"), {
  ssr: false,
});

export default function DTContent() {
  return (
    <div className="min-h-screen bg-white">
      <DTHero />
      <ServicesTimeline />
      <WhyChooseSection />
    </div>
  );
}
