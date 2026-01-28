"use client";

import dynamic from "next/dynamic";
import StartupIncubationHero from "./StartupIncubationHero";

const StartupIncubationFeatures = dynamic(() => import("./StartupIncubationFeatures"), {
  ssr: false,
});

export default function StartupIncubationContent() {
  return (
    <div className="min-h-screen bg-white">
      <StartupIncubationHero />
      <StartupIncubationFeatures />
    </div>
  );
}
