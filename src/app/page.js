import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import Blog from "@/components/HomePage/Blog";
import StructuredData, {
  organizationData,
  websiteData,
} from "@/components/StructuredData";
import ProductShowcase from "@/components/HomePage/ProductShowCase";
import {
  yourHourContent,
  JEGOContent,
  memolectContent,
} from "@/config/contents";
import FAQSection from "@/components/HomePage/FAQs";
import CTAPanel from "@/components/HomePage/CTAPanel";
import BlueprintSection from "@/components/HomePage/BluePrint";
import IndustriesSection from "@/components/HomePage/IndustryCard";

export const metadata = {
  title: "AI Solutions & Digital Transformation Company",
  description:
    "Mindefy is a top digital transformation company offering custom AI solutions, mobile app development, and cloud engineering for global enterprises.",
  keywords: ["AI", "Mobile Apps", "Digital Transformation"],
  alternates: { canonical: "https://mindefy.tech" },
  openGraph: {
    title: "AI Solutions & Digital Transformation Company",
    description:
      "Mindefy is a top digital transformation company offering custom AI solutions, mobile app development, and cloud engineering for global enterprises.",
    url: "https://mindefy.tech",
  },
  twitter: {
    title: "AI Solutions & Digital Transformation Company",
    description:
      "Mindefy is a top digital transformation company offering custom AI solutions, mobile app development, and cloud engineering for global enterprises.",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={websiteData} />
      <HeroSection />
      <Services />
      <AboutSection />
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
