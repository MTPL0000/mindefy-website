"use client";

import dynamic from "next/dynamic";
import MindfulUXHero from "./MindfulUXHero";
import SectionLoader from "../ui/SectionLoader";

const MindfulUXCaseStudies = dynamic(() => import("./MindfulUXCaseStudies"), {
  loading: () => <SectionLoader minHeight="min-h-screen" />,
  ssr: true,
});

export default function MindfulUX() {
  return (
    <section className="mx-auto">
      {/* Hero + About Section - Loaded immediately for SEO */}
      <MindfulUXHero />

      {/* Case Studies - Lazy loaded */}
      <MindfulUXCaseStudies />
    </section>
  );
}
