"use client";

import dynamic from "next/dynamic";
import DTHero from "./DTHero";

const ServicesTimeline = dynamic(() => import("./ServicesTimeline"));

const WhyChooseSection = dynamic(() => import("./WhyChooseSection"));

export default function DTContent() {
  return (
    <div className="min-h-screen bg-white">
      <DTHero />
      <ServicesTimeline />
      <WhyChooseSection />
    </div>
  );
}
