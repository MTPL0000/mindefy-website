"use client";

import dynamic from "next/dynamic";
import TestAutomationHero from "./TestAutomationHero";

const TestingServices = dynamic(() => import("./TestingServices"), {
  ssr: false,
});

export default function TestAutomationContent() {
  return (
    <div className="min-h-screen bg-white">
      <TestAutomationHero />
      <TestingServices />
    </div>
  );
}
