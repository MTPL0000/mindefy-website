import AboutSection from "./components/HomePage/AboutSection";
import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import Content from "./components/HomePage/Content";
import Services from "./components/HomePage/Services";
import YouHour from "./components/HomePage/YourHour";
import JEGO from "./components/HomePage/JEGO";
import GreenBill from "./components/HomePage/GreenBill";
import Testimonials from "./components/HomePage/Testimonials";
import Footer from "./components/HomePage/Footer";
import Blog from "./components/HomePage/Blog";
import ContactUs from "./components/HomePage/ContactUs";
import StructuredData, { organizationData, websiteData } from "./components/StructuredData";
import LazyLoadWrapper from "./components/LazyLoadWrapper";

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={websiteData} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Content />
      
      {/* Lazy load sections below the fold */}
      <LazyLoadWrapper>
        <Services />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <YouHour />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <JEGO />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <GreenBill />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <Testimonials />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <Blog />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <ContactUs />
      </LazyLoadWrapper>
      
      <Footer />
    </>
  );
}
