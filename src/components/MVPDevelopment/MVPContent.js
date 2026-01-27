"use client";

import dynamic from "next/dynamic";
import MVPHero from "./MVPHero";

const ServicesSection = dynamic(() => import("./ServicesSection"), {
  ssr: false,
});

export default function MVPContent() {
  return (
    <div className="min-h-screen bg-white">
      <MVPHero />
      <ServicesSection />
    </div>
  );
}
