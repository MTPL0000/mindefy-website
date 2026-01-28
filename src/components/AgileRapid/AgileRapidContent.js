"use client";

import dynamic from "next/dynamic";
import AgileRapidHero from "./AgileRapidHero";

const AgileRapidFeatures = dynamic(() => import("./AgileRapidFeatures"), {
  ssr: false,
});

export default function AgileRapidContent() {
  return (
    <div className="min-h-screen bg-white">
      <AgileRapidHero />
      <AgileRapidFeatures />
    </div>
  );
}
