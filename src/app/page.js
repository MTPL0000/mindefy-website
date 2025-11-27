import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Content from "@/components/HomePage/Content";
import Services from "@/components/HomePage/Services";
import YouHour from "@/components/HomePage/YourHour";
import JEGO from "@/components/HomePage/JEGO";
import GreenBill from "@/components/HomePage/GreenBill";
import Testimonials from "@/components/HomePage/Testimonials";
import Blog from "@/components/HomePage/Blog";
import StructuredData, {
  organizationData,
  websiteData,
} from "@/components/StructuredData";

export const metadata = {
  title:
    "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
  description:
    "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
  alternates: { canonical: "https://mindefy.tech" },
  openGraph: {
    title:
      "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
    description:
      "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
    url: "https://mindefy.tech",
  },
  twitter: {
    title:
      "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
    description:
      "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={websiteData} />
      <HeroSection />
      <AboutSection />
      <Content />
      <Services />
      <YouHour />
      <JEGO />
      <GreenBill />
      <Testimonials />
      <Blog />
    </>
  );
}
