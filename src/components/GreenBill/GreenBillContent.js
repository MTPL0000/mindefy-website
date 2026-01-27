"use client";

import dynamic from "next/dynamic";
import GreenBillHero from "./GreenBillHero";

const FeaturesSection = dynamic(() => import("./FeaturesSection"), {
  ssr: false,
});

export default function GreenBillContent() {
  return (
    <div className="m-auto bg-white">
      <GreenBillHero />
      <FeaturesSection />
    </div>
  );
}
