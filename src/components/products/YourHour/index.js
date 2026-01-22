"use client";

import dynamic from "next/dynamic";
import YourHourHero from "./YourHourHero";
import SectionLoader from "../../ui/SectionLoader";

const YourHourSections = dynamic(() => import("./YourHourSections"), {
  loading: () => <SectionLoader minHeight="min-h-screen" />,
  ssr: true,
});

export default function YourHourProduct() {
  return (
    <section className="bg-white mx-auto px-0">
      {/* Hero Section - Loaded immediately for SEO */}
      <YourHourHero />

      {/* Below-the-fold sections - Lazy loaded */}
      <YourHourSections />
    </section>
  );
}
