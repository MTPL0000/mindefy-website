"use client";

import dynamic from "next/dynamic";
import UnityUnrealHero from "./UnityUnrealHero";

const UnityUnrealFeatures = dynamic(() => import("./UnityUnrealFeatures"), {
  ssr: false,
});

export default function UnityUnrealContent() {
  return (
    <div className="min-h-screen bg-white">
      <UnityUnrealHero />
      <UnityUnrealFeatures />
    </div>
  );
}
