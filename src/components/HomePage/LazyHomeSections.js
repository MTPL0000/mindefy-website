"use client";

import dynamic from "next/dynamic";
import {
  yourHourContent,
  JEGOContent,
  memolectContent,
} from "@/config/contents";

const ProductShowcase = dynamic(() => import("./ProductShowCase"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

const Testimonials = dynamic(() => import("./Testimonials"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

const BlueprintSection = dynamic(() => import("./BluePrint"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

const IndustriesSection = dynamic(() => import("./IndustryCard"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

const CTAPanel = dynamic(() => import("./CTAPanel"), {
  loading: () => <div className="min-h-48 bg-white animate-pulse" />,
});

const Blog = dynamic(() => import("./Blog"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

const FAQSection = dynamic(() => import("./FAQs"), {
  loading: () => <div className="min-h-96 bg-white animate-pulse" />,
});

export default function LazyHomeSections() {
  return (
    <>
      <ProductShowcase imagePosition="right" data={yourHourContent} />
      <ProductShowcase imagePosition="left" data={JEGOContent} />
      <ProductShowcase imagePosition="right" data={memolectContent} />
      <Testimonials />
      <BlueprintSection />
      <IndustriesSection />
      <CTAPanel />
      <Blog />
      <FAQSection />
    </>
  );
}
