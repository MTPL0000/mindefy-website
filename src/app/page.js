import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Services from "./components/Services";
import YouHour from "./components/YourHour";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Content />
      <Services />
      <YouHour />
    </>
  );
}
