"use client";

import dynamic from "next/dynamic";
import AADHero from "./AADHero";

const ProcessSteps = dynamic(() => import("./ProcessSteps"), {
  ssr: false,
});

export default function AADContent() {
  return (
    <div className="min-h-screen bg-white">
      <AADHero />
      <ProcessSteps />
    </div>
  );
}
