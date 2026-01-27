"use client";

import dynamic from "next/dynamic";
import SASHero from "./SASHero";

const ResourceModels = dynamic(() => import("./ResourceModels"), {
  ssr: false,
});

export default function SASContent() {
  return (
    <div className="min-h-screen bg-white">
      <SASHero />
      <ResourceModels />
    </div>
  );
}
