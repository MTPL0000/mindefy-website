"use client";

import dynamic from "next/dynamic";
import MicroservicesHero from "./MicroservicesHero";

const BenefitsSection = dynamic(() => import("./BenefitsSection"), {
  ssr: false,
});

const ApproachSection = dynamic(() => import("./ApproachSection"), {
  ssr: false,
});

export default function MicroservicesContent() {
  return (
    <div className="min-h-screen bg-white">
      <MicroservicesHero />
      <BenefitsSection />
      <ApproachSection />
    </div>
  );
}
