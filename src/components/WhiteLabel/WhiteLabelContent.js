"use client";

import dynamic from "next/dynamic";
import WhiteLabelHero from "./WhiteLabelHero";

const WhiteLabelFeatures = dynamic(() => import("./WhiteLabelFeatures"), {
  ssr: false,
});

export default function WhiteLabelContent() {
  return (
    <div className="min-h-screen bg-white">
      <WhiteLabelHero />
      <WhiteLabelFeatures />
    </div>
  );
}
