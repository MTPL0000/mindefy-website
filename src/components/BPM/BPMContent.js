"use client";

import dynamic from "next/dynamic";
import BPMHero from "./BPMHero";

const BPMFeatures = dynamic(() => import("./BPMFeatures"), {
  ssr: false,
});

export default function BPMContent() {
  return (
    <div className="min-h-screen bg-white">
      <BPMHero />
      <BPMFeatures />
    </div>
  );
}
