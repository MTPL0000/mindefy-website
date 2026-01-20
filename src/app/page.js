import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Services from "@/components/HomePage/Services";
import StructuredData, {
  organizationData,
  websiteData,
} from "@/components/StructuredData";
import LazyHomeSections from "@/components/HomePage/LazyHomeSections";

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
      <LazyHomeSections />
    </>
  );
}
