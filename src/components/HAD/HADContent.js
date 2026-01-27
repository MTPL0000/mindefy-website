"use client";

import dynamic from "next/dynamic";
import HADHero from "./HADHero";

const HADFeatures = dynamic(() => import("./HADFeatures"), {
  ssr: false,
});

export default function HADContent() {
  return (
    <div className="min-h-screen bg-white">
      <HADHero />
      <HADFeatures />
    </div>
  );
}
