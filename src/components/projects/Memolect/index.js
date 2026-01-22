"use client";

import dynamic from "next/dynamic";
import MemolectHero from "./MemolectHero";
import SectionLoader from "../../ui/SectionLoader";

const MemolectSections = dynamic(() => import("./MemolectSections"), {
  loading: () => <SectionLoader minHeight="min-h-screen" />,
  ssr: true,
});

export default function MemolectFlashcardsCaseStudy() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero + Product Overview - Loaded immediately for SEO */}
      <MemolectHero />

      {/* Below-the-fold sections - Lazy loaded */}
      <MemolectSections />
    </div>
  );
}
