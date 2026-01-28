"use client";

import dynamic from "next/dynamic";
import LowCodeHero from "./LowCodeHero";

const LowCodeFeatures = dynamic(() => import("./LowCodeFeatures"), {
  ssr: false,
});

export default function LowCodeContent() {
  return (
    <div className="min-h-screen bg-white">
      <LowCodeHero />
      <LowCodeFeatures />
    </div>
  );
}
