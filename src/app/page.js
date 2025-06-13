import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Services from "./components/Services";
import YouHour from "./components/YourHour";
import JEGO from "./components/JEGO";
import GreenBill from "./components/GreenBill";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Content />
      <Services />
      <YouHour />
      <JEGO />
      <GreenBill />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}
