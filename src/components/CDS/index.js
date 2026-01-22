"use client";

import dynamic from "next/dynamic";
import CDSHero from "./CDSHero";

// Lazy load below-the-fold sections with lightweight placeholders
const CDSCloudServices = dynamic(() => import("./CDSCloudServices"), {
  loading: () => (
    <div className="min-h-96 bg-white animate-pulse flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-4 w-full max-w-sm mx-auto h-80" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

const CDSDevOps = dynamic(() => import("./CDSDevOps"), {
  loading: () => (
    <div className="min-h-96 bg-white animate-pulse flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-4 h-48" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

export default function CDS() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Loaded immediately for SEO */}
      <CDSHero />
      
      {/* Below-the-fold sections - Lazy loaded */}
      <CDSCloudServices />
      <CDSDevOps />
    </div>
  );
}
