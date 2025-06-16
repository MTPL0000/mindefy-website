import AboutSection from "./components/Home Page/AboutSection";
import HeroSection from "./components/Home Page/HeroSection";
import Navbar from "./components/Home Page/Navbar";
import Content from "./components/Home Page/Content";
import Services from "./components/Home Page/Services";
import YouHour from "./components/Home Page/YourHour";
import JEGO from "./components/Home Page/JEGO";
import GreenBill from "./components/Home Page/GreenBill";
import Testimonials from "./components/Home Page/Testimonials";
import Footer from "./components/Home Page/Footer";
import Blog from "./components/Home Page/Blog";

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
