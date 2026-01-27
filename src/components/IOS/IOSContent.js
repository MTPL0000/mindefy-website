"use client";

import dynamic from "next/dynamic";
import IOSHero from "./IOSHero";

const ProcessSection = dynamic(() => import("./ProcessSection"), {
  ssr: false,
});

export default function IOSContent() {
  return (
    <div className="min-h-screen bg-white">
      <IOSHero />
      <ProcessSection />
    </div>
  );
}
