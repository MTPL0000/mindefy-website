"use client";

import dynamic from "next/dynamic";
import CRMHero from "./CRMHero";

const CRMFeatures = dynamic(() => import("./CRMFeatures"), {
  ssr: false,
});

export default function CRMContent() {
  return (
    <div className="min-h-screen bg-white">
      <CRMHero />
      <CRMFeatures />
    </div>
  );
}
