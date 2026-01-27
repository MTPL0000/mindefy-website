"use client";

import dynamic from "next/dynamic";
import WebAppHero from "./WebAppHero";

const StacksSection = dynamic(() => import("./StacksSection"), {
  ssr: false,
});

const MERNAndAdvantages = dynamic(() => import("./MERNAndAdvantages"), {
  ssr: false,
});

export default function WebAppContent() {
  return (
    <div className="min-h-screen bg-white">
      <WebAppHero />
      <StacksSection />
      <MERNAndAdvantages />
    </div>
  );
}
