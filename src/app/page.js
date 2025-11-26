import AboutSection from "./components/HomePage/AboutSection";
import HeroSection from "./components/HomePage/HeroSection";
import Content from "./components/HomePage/Content";
import Services from "./components/HomePage/Services";
import YouHour from "./components/HomePage/YourHour";
import JEGO from "./components/HomePage/JEGO";
import GreenBill from "./components/HomePage/GreenBill";
import Testimonials from "./components/HomePage/Testimonials";
import Blog from "./components/HomePage/Blog";
import StructuredData, {
  organizationData,
  websiteData,
} from "./components/StructuredData";

export const metadata = {
  title: "Mindefy Technologies - AI, Apps & Web, and Digital Transformation",
  description:
    "We build AI solutions, mobile apps, and modern web platforms that drive outcomes.",
  alternates: { canonical: "https://mindefy.tech" },
  openGraph: {
    title: "Mindefy Technologies - AI, Apps & Web, and Digital Transformation",
    description:
      "We build AI solutions, mobile apps, and modern web platforms that drive outcomes.",
    url: "https://mindefy.tech",
  },
  twitter: {
    title: "Mindefy Technologies - AI, Apps & Web, and Digital Transformation",
    description:
      "We build AI solutions, mobile apps, and modern web platforms that drive outcomes.",
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
