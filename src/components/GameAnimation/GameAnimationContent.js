"use client";

import dynamic from "next/dynamic";
import GameAnimationHero from "./GameAnimationHero";

const GameAnimationFeatures = dynamic(() => import("./GameAnimationFeatures"), {
  ssr: false,
});

export default function GameAnimationContent() {
  return (
    <div className="min-h-screen bg-white">
      <GameAnimationHero />
      <GameAnimationFeatures />
    </div>
  );
}
