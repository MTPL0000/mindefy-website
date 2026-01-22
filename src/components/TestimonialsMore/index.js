"use client";

import dynamic from "next/dynamic";
import TestimonialsHeader from "./TestimonialsHeader";
import SectionLoader from "../ui/SectionLoader";

const TestimonialsGrid = dynamic(() => import("./TestimonialsGrid"), {
  loading: () => <SectionLoader minHeight="min-h-96" />,
  ssr: true,
});

export default function TestimonialsMore() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-8 px-4 md:py-12 md:px-6 xl:py-16 xl:px-4">
        <div className="max-w-327.5 mx-auto">
          {/* Header - Loaded immediately for SEO */}
          <TestimonialsHeader />

          {/* Testimonials Grid - Lazy loaded */}
          <TestimonialsGrid />
        </div>
      </main>
    </div>
  );
}
