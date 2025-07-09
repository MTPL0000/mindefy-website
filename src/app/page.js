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
