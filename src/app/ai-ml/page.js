"use client";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import useHeaderHeight from "@/hooks/useHeaderHeight";
import { ChevronDown } from "lucide-react";

const cardData = [
  {
    icon: "/images/ai/icons.png",
    title: "Advanced AI Engineering",
    description:
      "Expertise across NLP, generative AI, computer vision, reinforcement learning — engineered to scale, secure, and perform",
  },
  {
    icon: "/images/ai/icons-2.png",
    title: "Custom, Not Off-the-Shelf",
    description:
      "Solutions tailored to your data, ecosystem, and KPIs — no cookie-cutter models",
  },
  {
    icon: "/images/ai/icons-3.png",
    title: "Cloud- and Edge-Ready",
    description:
      "Deploy AI where it matters — on cloud, edge, or hybrid environments — seamlessly integrated into your infrastructure",
  },
  {
    icon: "/images/ai/icons-4.png",
    title: "Business-Driven Outcomes",
    description:
      "We align every AI solution with real-world metrics — operational efficiency, cost savings, predictive insights",
  },
  {
    icon: "/images/ai/icons-5.png",
    title: "Robust MLOps & Governance",
    description:
      "Continuous monitoring, compliance, and governability built in — designed for sustainable ROI",
  },
  {
    icon: "/images/ai/icons-6.png",
    title: "Cross-Functional Expertise",
    description:
      "Teams that combine data engineering, AI, cloud and domain knowledge to drive full-stack execution",
  },
];

const offersCards = [
  {
    title: "AI Solutions",
    text: "Build Intelligent Systems That Learn, Adapt, And Automate Complex Decisions — From GenAI To NLP And Computer Vision.",
    link: "/custom-AI-solution",
  },
  {
    title: "Machine Learning (ML)",
    text: "Design, Train, And Deploy Models That Predict, Classify, And Optimize — Using Structured And Unstructured Data.",
    link: "/machine-learning",
  },
  {
    title: "Data Engineering & Analytics",
    text: "Transform Raw Data Into A Strategic Asset — We Build Reliable Pipelines, Scalable Data Lakes, And Intelligent Warehouses That Power Insightful Dashboards, Business Intelligence, And Advanced Analytics. From Data Collection To Decision-Making, We Engineer The Entire Journey.",
    link: "/data-engineering",
  },
  {
    title: "Cloud Engineering Services",
    text: "Build And Scale With The Power Of The Cloud. We Design Secure, High-Performance Cloud Infrastructures That Support AI, Data, And Modern Applications—Ensuring Speed, Flexibility, And Resilience Across AWS, Azure, And GCP.",
    link: "/cloud-engineering",
  },
];

export default function ALMLandingPage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [section1Progress, setSection1Progress] = useState(0);
  const [section5Progress, setSection5Progress] = useState(0);
  const [section6Progress, setSection6Progress] = useState(0);
  const [animationStage, setAnimationStage] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasReachedTop, setHasReachedTop] = useState(false);
  const section3Ref = useRef(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const headerHeight = useHeaderHeight();

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = headerHeight; // Add some padding below header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Use Framer Motion's animation controls
  const zoomControls = useAnimation();
  const contentZoomControls = useAnimation();
  const cardControls = useAnimation();

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      
      setScrollProgress(scrollPercent);

      // Calculate section 1 progress (Image Zoom section) - scroll-based
      const section1Element = document.getElementById("section-1");
      if (section1Element) {
        const rect = section1Element.getBoundingClientRect();
        const section3Element = document.getElementById("section-3");
        
        if (section3Element) {
          const section3Rect = section3Element.getBoundingClientRect();
          const section1Top = window.scrollY + rect.top;
          const section3Top = window.scrollY + section3Rect.top;
          
          // Calculate progress from when section 1 top reaches viewport top to when section 3 reaches top
          const startPoint = section1Top; // When section 1 reaches top (header will be hidden)
          
          // Progress: 0 when section 1 is below start point, 1 when section 3 reaches top
          let progress = 0;
          if (scrollTop >= startPoint) {
            // Section 1 has started scrolling up
            const totalDistance = section3Top - startPoint;
            const currentDistance = scrollTop - startPoint;
            progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
          }
          
          setSection1Progress(progress);
          
          // Apply zoom animation based on scroll progress
          zoomControls.set({
            scale: 1 + progress * 14, // Scale from 1 to 15
            opacity: 1 - progress * 0.7, // Opacity from 1 to 0.3
            filter: `blur(${progress * 8}px)`, // Blur from 0 to 8px
          });

          contentZoomControls.set({
            scale: 1 + progress * 14, // Scale from 1 to 15
            opacity: 1 - progress, // Opacity from 1 to 0
          });

          // Animate cards based on progress
          if (progress > 0.5) {
            const cardProgress = (progress - 0.5) / 0.5; // 0 to 1 after 50% scroll
            cardControls.set((i) => ({
              y: 100 - cardProgress * 100,
              opacity: cardProgress,
            }));
          }
        }
      }

      // Calculate section 3 trigger - Log-Z animation pattern
      if (section3Ref.current) {
        const rect = section3Ref.current.getBoundingClientRect();
        
        // Check if section is in viewport and has reached the trigger point
        const isInViewport = rect.top <= headerHeight && rect.bottom > headerHeight + 100;
        
        if (isInViewport) {
          if (!hasReachedTop) {
            setHasReachedTop(true);
          }
        } else {
          // Reset when section is out of the trigger zone
          if (hasReachedTop) {
            setHasReachedTop(false);
            setAnimationStage(0);
            setShowContent(false);
          }
        }
      }

      // Calculate section 5 progress (Offerings section)
      const section5Element = document.getElementById("section-5");
      if (section5Element) {
        const rect = section5Element.getBoundingClientRect();
        const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setSection5Progress(elementProgress);
      }

      // Calculate section 6 progress (Cards column animation)
      // Use scroll position directly for smooth, jank-free animation
      const section6WrapperElement = document.getElementById("section-6-wrapper");
      if (section6WrapperElement) {
        const wrapperRect = section6WrapperElement.getBoundingClientRect();
        const wrapperTop = window.scrollY + wrapperRect.top;
        const triggerPoint = wrapperTop; // When wrapper reaches top
        
        // Calculate progress based on scroll position
        const scrollDistance = window.scrollY - triggerPoint;
        const animationDuration = window.innerHeight * 1.5; // Longer animation window (1.5x viewport)
        
        if (scrollDistance >= 0 && scrollDistance <= animationDuration) {
          const progress = scrollDistance / animationDuration;
          setSection6Progress(progress * 4); // Continuous progress 0-4 for smooth animation
        } else if (scrollDistance > animationDuration) {
          setSection6Progress(4); // Keep at max
        } else {
          setSection6Progress(0); // Reset before trigger
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, zoomControls, contentZoomControls, cardControls, hasReachedTop]);

  // Animation sequence - triggers when section reaches top (Log-Z pattern)
  useEffect(() => {
    if (!hasReachedTop) return;

    const timers = [];

    // Stage 1: Title zoom in (starts immediately when section reaches top)
    timers.push(
      setTimeout(() => {
        setAnimationStage(1);
      }, 200)
    );

    // Stage 2: Subtitle animation after title (0.2s + 1s title duration)
    timers.push(
      setTimeout(() => {
        setAnimationStage(2);
      }, 1200)
    );

    // Stage 3: Move to top after all subtitle words complete (1.2s + 3s subtitle duration = 4.2s, trigger at 5s)
    timers.push(
      setTimeout(() => {
        setAnimationStage(3);
        setShowContent(true); // Show content when starting to move up
      }, 5000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [hasReachedTop]);

  // Measure column height dynamically for animation calculations
  useEffect(() => {
    const measureColumnHeight = () => {
      const columnElement = document.querySelector("#section-6 .grid > div:first-child");
      if (columnElement) {
        const height = columnElement.offsetHeight;
        setColumnHeight(height);
      }
    };

    // Initial measurement
    measureColumnHeight();
    
    // Re-measure on window resize
    window.addEventListener("resize", measureColumnHeight);
    
    return () => window.removeEventListener("resize", measureColumnHeight);
  }, [headerHeight]);

  
  // Animation variants for cleaner code
  const sectionVariants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Video Section - Large screens only */}
      <div
        id="section-0"
        className="hidden lg:block w-full items-center justify-center bg-black"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/hero_copy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile/Tablet Video Section - Responsive aspect ratio */}
      <div className="lg:hidden w-full bg-black">
        <video
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/hero_copy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Image Zoom Section */}
      <div
        id="section-1"
        className="w-full flex items-center justify-center relative overflow-hidden"
        // style={{ height: `calc(100vh - ${headerHeight}px)` }}
        style={{ height: "100vh" }}
      >
        {/* Animated background for large screens only */}
        <motion.div
          className="hidden lg:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/bg-copy.png)" }}
          animate={zoomControls}
          initial={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        />

        {/* Static background for smaller screens */}
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/bg-copy.png)" }}
        />

        <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          {/* Large screen animated content */}
          <div className="hidden lg:block">
            <motion.div
              className="text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto"
              initial={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                animate={contentZoomControls}
                initial={{ scale: 1, opacity: 1 }}
              >
                <h1 className="mb-6 font-poppins text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-normal text-[#3D3D3D]">
                  <div>Built With Data. Powered By AI.</div>
                  <div className="font-semibold mt-2">
                    Delivered For Impact.
                  </div>
                </h1>

                <div className="space-y-4 text-base lg:text-lg xl:text-xl font-poppins text-gray-700 mb-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                  <p>
                    AI turns data into action. We help businesses unlock that
                    power — through tailored, scalable solutions.
                  </p>
                  <p>
                    We architect intelligence from raw data. Precision-built.
                    Algorithm-driven. Future-proof.
                  </p>
                  <p>
                    What if your data could think? We don't just imagine it — we
                    engineer it.
                  </p>
                  <p>
                    Intelligence isn't just learned. It's designed — through
                    data, algorithms, and intent.
                  </p>
                </div>

                <button 
                  onClick={() => scrollToSection("section-3")}
                  className="bg-[#34333D] text-white font-poppins px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg xl:text-xl font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                >
                  <ChevronDown className="w-7 h-7" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile/Tablet static content */}
          <div id="section-3-mobile" className="lg:hidden text-center max-w-lg mx-auto px-4">
            <h1 className="mb-6 font-poppins text-xl md:text-2xl font-normal text-[#3D3D3D] leading-tight">
              <div>Built With Data.</div>
              <div className="font-semibold mt-1">Powered By AI.</div>
              <div className="font-semibold mt-1">Delivered For Impact.</div>
            </h1>

            <div className="space-y-4 text-sm md:text-base font-poppins text-gray-700 mb-8 leading-relaxed">
              <p>
                AI turns data into action. We help businesses unlock that power
                through tailored, scalable solutions.
              </p>
              <p>
                We architect intelligence from raw data. Precision-built.
                Algorithm-driven. Future-proof.
              </p>
              <p>
                What if your data could think? We don't just imagine it — we
                engineer it.
              </p>
            </div>

            <button 
            onClick={() => scrollToSection("section-3")} 
            className="bg-[#34333D] text-white font-poppins px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              <ChevronDown className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Animation Section - Large screen only */}
      <section
        id="section-3"
        ref={section3Ref}
        className="hidden lg:block relative bg-white"
        style={{ 
          minHeight: '100vh',
          zIndex: 2,
        }}
      >
        {/* Sticky container for animations */}
        <div 
          className="sticky bg-white overflow-hidden"
          style={{ 
            top: `${headerHeight}px`,
            height: `calc(100vh)`,
            zIndex: 10,
          }}
        >
          {/* Animated content wrapper */}
          <motion.div
            className="relative h-full flex flex-col overflow-hidden"
            initial={false}
          >
            {/* Title and Subtitle Container */}
            <motion.div
              className="flex items-center justify-center"
              animate={{
                flex: animationStage >= 3 ? '0 0 auto' : '1 1 auto',
                paddingTop: animationStage >= 3 ? '20px' : '0px',
                paddingBottom: animationStage >= 3 ? '10px' : '0px',
              }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
            <div className="text-center px-4">
              {/* Title with zoom in animation */}
              {animationStage >= 1 && (
                <motion.h1
                  className="font-poppins font-medium"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.0,
                    ease: "easeOut",
                  }}
                  style={{ 
                    color: "#FF5225",
                    fontSize: animationStage >= 3 ? '1.5rem' : '3rem',
                    // marginBottom: animationStage >= 3 ? '0.5rem' : '1.5rem',
                    transition: animationStage >= 3 ? 'font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96), margin-bottom 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)' : 'none',
                    verticalAlign: 'middle',
                  }}
                >
                  What sets Us apart
                </motion.h1>
              )}

              {/* Subtitle with sequential left-right animation */}
              <div 
                className="font-poppins font-normal text-gray-800 flex justify-center items-center gap-2 flex-wrap"
                style={{
                  fontSize: animationStage >= 3 ? '2.5rem' : '5rem',
                  transition: animationStage >= 3 ? 'font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)' : 'none',
                  verticalAlign: "middle",
                }}
              >
                {animationStage >= 2 && (
                  <>
                    {/* First word: Smart - from left */}
                    <motion.span
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 0,
                      }}
                    >
                      Smart.
                    </motion.span>
                    {/* Second word: Scalable - from right, starts after Smart completes */}
                    <motion.span
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 1.0,
                      }}
                    >
                      Scalable.
                    </motion.span>
                    {/* Third word: Strategic - from right, starts after Scalable completes */}
                    <motion.span
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 2.0,
                      }}
                    >
                      Strategic.
                    </motion.span>
                  </>
                )}
              </div>
            </div>
            </motion.div>

            {/* Content Section - Flexible to fill remaining space */}
            <div className="flex-1 overflow-hidden px-4 md:px-6 lg:px-8">
            {/* Description */}
            <motion.div
              className="max-w-4xl mx-auto text-center mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: showContent ? 1 : 0,
                y: showContent ? 0 : 50,
              }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <p className="text-sm md:text-base text-[#444444] leading-relaxed">
                We don't just deliver AI and data solutions — we engineer
                enterprise-grade intelligence systems that align with your
                business vision and drive measurable value.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: showContent ? 1 : 0,
                    y: showContent ? 0 : 60,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + index * 0.08,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-3 mx-auto">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-poppins font-semibold mb-2 text-center"
                    style={{ color: "#FF5225" }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-poppins text-gray-600 text-center leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile/Tablet static version */}
      <div className="lg:hidden py-12 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-poppins font-medium text-lg md:text-xl text-[#FF5225] text-center align-middle mb-1">
            What sets Us apart
          </h2>

          {/* Subtitle */}
          <div className="flex flex-row justify-center items-center space-x-1 mb-2">
            {["Smart.", "Scalable.", "Strategic."].map((word) => (
              <span
                key={word}
                className="font-poppins font-normal text-base md:text-lg text-[#3D3D3D] text-center"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="font-inter font-normal text-sm text-center text-[#444444] mb-10 max-w-lg mx-auto leading-relaxed">
            We don't just deliver AI and data solutions — we engineer
            enterprise-grade intelligence systems that align with your
            business vision and drive measurable value.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm md:text-base font-poppins font-semibold text-[#FF5225] mb-3 text-center leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-poppins text-gray-600 text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study 1 - Gen AI Chatbot */}
      <div
        id="section-4"
        className="hidden w-full lg:flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB99] to-white"
      >
        {/* Large screen animated version */}
        <section className="w-full h-full items-center justify-center px-[8.33%] lg:px-[8.33%] xl:px-[8.33%] 2xl:px-[8.33%]">
          <div className="container mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Left side - Phone mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className="relative h-[20rem] lg:h-[35rem] xl:h-[38rem] aspect-[3/4]"
              >
                <img
                  src="/images/YH-MN.gif"
                  alt="Gen AI-Chatbot Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-poppins sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#262626] mb-3 lg:mb-5 xl:mb-7 2xl:mb-9">
                Gen AI-Chatbot
              </h2>
              <p className="text-xs font-poppins sm:text-xs lg:text-sm xl:text-base 2xl:text-lg font-normal text-[#000000] mb-5 lg:mb-7 xl:mb-9 2xl:mb-11 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
                YourHour was originally designed to monitor and reduce daily
                screen time with alerts. Facing rising demand for mental health
                support, the team enhanced the app by integrating a
                Retrieval-Augmented Generation (RAG) AI chatbot. This "AI
                companion" continued screen-time coaching while also answering
                mental health questions, providing personalized advice on
                anxiety or depression, and offering companionship—based on how
                screen time affects health and emotional well-being.
              </p>
              <a
                href="/gen-ai-chatbot"
                className="inline-block font-poppins bg-[#231F20] text-white px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-xs text-base lg:text-base xl:text-xl 2xl:text-2xl font-semibold hover:bg-gray-800 transition-colors duration-300 hover:cursor-pointer"
              >
                Case Study →
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/*Case Study 1 - Gen AI Chatbot: Mobile/Tablet static version */}
      <div
        id="section-4"
        className="lg:hidden w-full flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB99] to-white"
        // style={{ height: "100vh" }}
      >
        <section className="w-full py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-8 md:space-y-10">
              {/* Phone mockup */}
              <div
                className="w-3/4 md:w-2/3 lg:w-1/2"
                style={{ aspectRatio: "1200/1600" }}
              >
                <img
                  src="/images/YH-MN.gif"
                  alt="Gen AI-Chatbot Interface"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-poppins font-medium text-[#262626] mb-6">
                  Gen AI-Chatbot
                </h2>
                <p className="text-sm md:text-base font-poppins font-normal text-[#000000] mb-8 leading-relaxed">
                  YourHour was originally designed to monitor and reduce daily
                  screen time with alerts. Facing rising demand for mental
                  health support, the team enhanced the app by integrating a
                  Retrieval-Augmented Generation (RAG) AI chatbot. This "AI
                  companion" continued screen-time coaching while also answering
                  mental health questions, providing personalized advice on
                  anxiety or depression, and offering companionship—based on how
                  screen time affects health and emotional well-being.
                </p>
                <a
                  href="/gen-ai-chatbot"
                  className="inline-block font-poppins bg-[#231F20] text-white px-8 py-3 rounded-xs text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto hover:cursor-pointer"
                >
                  Case Study →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Case Study 2 - ML Driven Recommendations */}
      <div
        id="section-5"
        className="hidden w-full lg:flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB99] to-white"
        // style={{ height: "100vh" }}
      >
        {/* Large screen animated version */}
        <section className="w-full h-full items-center justify-center px-[8.33%] lg:px-[8.33%] xl:px-[8.33%] 2xl:px-[8.33%]">
          <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Left side - Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-poppins sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#262626] mb-3 lg:mb-5 xl:mb-7 2xl:mb-9">
                ML Driven Recommendations
              </h2>
              <p className="text-xs font-poppins sm:text-xs lg:text-sm xl:text-base 2xl:text-lg font-normal text-[#000000] mb-5 lg:mb-7 xl:mb-9 2xl:mb-11 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
                EarlyFoods, an e-commerce platform offering millet-based
                products for new and expecting mothers, found customers missing
                relevant items—limiting cart value. To solve this, we
                recommended an AI-driven recommendation engine. They added it on
                product pages using a hybrid of collaborative and content-based
                filtering to deliver personalized suggestions. This has boosted
                average order value, enhanced product discovery, and
                strengthened customer trust.
              </p>
              <a
                href="/custom-ml-solution"
                className="inline-block font-poppins bg-[#231F20] text-white px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-xs text-base lg:text-base xl:text-xl 2xl:text-2xl font-semibold hover:bg-gray-800 transition-colors duration-300 hover:cursor-pointer"
              >
                Case Study →
              </a>
            </motion.div>

            {/* Right side - Laptop mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className="relative w-8/12 sm:w-7/12 md:w-6/12 lg:w-9/12 xl:w-10/12 2xl:w-11/12"
                style={{ aspectRatio: "1200/1600" }}
              >
                <img
                  src="/images/ai/early-foods.png"
                  alt="ML Driven Recommendations Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Case Study 2 - ML Driven Recommendations: Mobile/Tablet static version */}
      <div
        id="section-5"
        className="lg:hidden w-full flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB99] to-white"
      >
        <section className="w-full py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-8 md:space-y-10">
              {/* Laptop mockup */}
              <div className="w-5/6 md:w-4/5 lg:w-3/4 aspect-[11/7]">
                <img
                  src="/images/ai/early-foods.png"
                  alt="ML Driven Recommendations Interface"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-poppins font-medium text-[#262626] mb-6">
                  ML Driven Recommendations
                </h2>
                <p className="text-sm md:text-base font-poppins font-normal text-[#000000] mb-8 leading-relaxed">
                  EarlyFoods, an e-commerce platform offering millet-based
                  products for new and expecting mothers, found customers
                  missing relevant items—limiting cart value. To solve this, we
                  recommended an AI-driven recommendation engine. They added it
                  on product pages using a hybrid of collaborative and
                  content-based filtering to deliver personalized suggestions.
                  This has boosted average order value, enhanced product
                  discovery, and strengthened customer trust.
                </p>
                <a
                  href="/custom-ml-solution"
                  className="inline-block font-poppins bg-[#231F20] text-white px-8 py-3 rounded-xs text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto hover:cursor-pointer"
                >
                  Case Study →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 6 - Our Offering For Your Automation Needs */}
      <div
        id="section-6-wrapper"
        style={{
          // minHeight: columnHeight > 0 ? `calc(100vh + ${columnHeight * 2}px)` : "calc(100vh + 1600px)",
          minHeight: `calc(100vh + ${columnHeight * 2}px)`,
          position: "relative",
        }}
        className="w-full bg-white hidden lg:block"
      >
        {/* Sticky container - Large screen animated version only */}
        <div
          id="section-6"
          style={{
            position: "sticky",
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
            zIndex: 10,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <motion.div
            className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 pt-4 lg:pt-6 h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            {/* Heading */}
            <motion.div
              className="text-center font-poppins mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              }}
            >
              <h2 className="text-xl font-poppins md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-[#3D3D3D] content-center align-middle">
                Our Offering For Your Automation Needs-
              </h2>
              <h3 className="text-xl font-poppins md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#3D3D3D] content-center align-middle">
                <span className="font-semibold font-poppins">
                  The Stack That Powers Your Future.
                </span>
              </h3>
            </motion.div>

            {/* Responsive 4-column cards with staggered scroll animation */}
            <div className="flex items-end justify-center flex-1">
              <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 h-full">
                  {offersCards.map((card, index) => {
                    // Calculate column translation based on section6Progress
                    // First column (index 0) is fixed, others animate
                    const columnProgress =
                      index === 0
                        ? 1
                        : Math.max(
                            0,
                            Math.min(1, section6Progress - (index - 1))
                          );
                    const translateY =
                      index === 0 ? 0 : (1 - columnProgress) * (columnHeight); // Dynamic animation distance based on column height

                    return (
                      <motion.div
                        key={index}
                        className={`py-4 lg:py-5 xl:py-6 2xl:py-7 px-2 lg:px-2.5 xl:px-3 2xl:px-4 flex flex-col justify-between h-full border-b border-l border-t-none border-r-none border-[#000000] transition-colors duration-300`}
                        style={{
                          transform: `translateY(${translateY}px)`,
                          opacity: 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                      >
                        <div>
                          <h4 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-[#332771] mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-left font-poppins">
                            {card.title}
                          </h4>
                          <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-[#D84326] mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-left leading-relaxed font-poppins">
                            {card.text}
                          </p>
                        </div>
                        <a
                          href={card.link}
                          className="w-fit flex items-center text-left text-sm lg:text-base xl:text-lg 2xl:text-xl font-poppins font-medium text-[#000000] hover:text-[#D84326] hover:scale-105 transition-all duration-300"
                        >
                          Learn More <span className="ml-2">→</span>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 6 - Our Offering For Your Automation Needs: Mobile/Tablet static version */}
      <div className="w-full bg-white lg:hidden">
        <div className="py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <div className="text-center font-poppins mb-12">
              <h2 className="text-lg md:text-xl font-normal text-[#3D3D3D] mb-3">
                Our Offering For Your Automation Needs-
              </h2>
              <h3 className="text-lg md:text-xl font-medium text-[#3D3D3D]">
                <span className="font-semibold font-poppins">
                  The Stack That Powers Your Future.
                </span>
              </h3>
            </div>

            {/* Static cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {offersCards.map((card, index) => (
                <div
                  key={index}
                  className="group py-6 md:py-8 px-4 md:px-6 flex flex-col justify-between bg-white border border-[#000000] rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300"
                >
                  <div>
                    <h4 className="text-base md:text-lg font-normal text-[#332771] mb-4 text-left font-poppins leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-sm md:text-base text-[#D84326] mb-6 text-left leading-relaxed font-poppins">
                      {card.text}
                    </p>
                  </div>
                  <a
                    href={card.link}
                    className="w-fit flex items-center text-left text-sm md:text-base font-poppins font-medium text-[#000000] hover:text-[#D84326] hover:scale-105 transition-all duration-300"
                  >
                    Learn More <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
