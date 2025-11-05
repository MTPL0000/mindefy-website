"use client";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { useHeaderVisibility } from "@/hooks/useHeaderVisibility";
import useHeaderHeight from "@/hooks/useHeaderHeight";

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

export default function ImprovedCopyPage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [section1Progress, setSection1Progress] = useState(0);
  const [section3Progress, setSection3Progress] = useState(0);
  const [section5Progress, setSection5Progress] = useState(0);
  const [section6Progress, setSection6Progress] = useState(0);
  const [section3ScrollProgress, setSection3ScrollProgress] = useState(0);
  const [section3AnimationStarted, setSection3AnimationStarted] = useState(false);
  const [section3AnimationTime, setSection3AnimationTime] = useState(0);
  const headerHeight = useHeaderHeight();
  const isHeaderVisible = useHeaderVisibility();

  // console.log(section6Progress)

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

      // Calculate section 3 trigger - only when section reaches top
      const section3Element = document.getElementById("section-3");
      if (section3Element) {
        const rect = section3Element.getBoundingClientRect();
        
        // Very aggressive trigger - start animation when section is 100px from top
        if (rect.top <= 100 && !section3AnimationStarted) {
          setSection3AnimationStarted(true);
          setSection3AnimationTime(Date.now());
        }
        
        // Reset animation when section goes out of viewport (either direction)
        if ((rect.top > window.innerHeight || rect.bottom < 0) && section3AnimationStarted) {
          setSection3AnimationStarted(false);
          setSection3AnimationTime(0);
          setSection3ScrollProgress(0);
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
  }, [headerHeight, zoomControls, contentZoomControls, cardControls, section3AnimationStarted]);

  // Time-based animation for section 3 after trigger
  useEffect(() => {
    if (section3AnimationStarted && section3AnimationTime > 0) {
      const animationDuration = 2500; // 2.5 seconds total animation (faster)
      const interval = setInterval(() => {
        const elapsed = Date.now() - section3AnimationTime;
        const progress = Math.min(1, elapsed / animationDuration);
        setSection3ScrollProgress(progress * 4); // Scale to 0-4 for existing animation logic
        
        if (progress >= 1) {
          clearInterval(interval);
        }
      }, 16); // ~60fps

      return () => clearInterval(interval);
    } else if (!section3AnimationStarted && section3ScrollProgress > 0) {
      // Handle reverse animation when scrolling away
      const reverseInterval = setInterval(() => {
        setSection3ScrollProgress(prev => {
          const newProgress = Math.max(0, prev - 0.15); // Faster reverse animation
          if (newProgress <= 0) {
            clearInterval(reverseInterval);
            return 0;
          }
          return newProgress;
        });
      }, 16);

      return () => clearInterval(reverseInterval);
    }
  }, [section3AnimationStarted, section3AnimationTime]);

  // Header visibility animation effect
  useEffect(() => {
    const header = document.querySelector('nav');
    if (header) {
      if (isHeaderVisible) {
        // Show header with slide down animation
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-out';
      } else {
        // Hide header with slide up animation
        header.style.transform = `translateY(-${headerHeight}px)`;
        header.style.transition = 'transform 0.3s ease-in';
      }
    }
  }, [isHeaderVisible, headerHeight]);

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
        style={{ height: "100vh" }}
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

                <button className="bg-[#34333D] text-white font-poppins px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg xl:text-xl font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile/Tablet static content */}
          <div className="lg:hidden text-center max-w-lg mx-auto px-4">
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

            <button className="bg-[#34333D] text-white font-poppins px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer w-full md:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section - Wrapper with scroll-based animation */}
      <div
        id="section-3-wrapper"
        style={{
          minHeight: "100vh",
          position: "relative",
        }}
        className="w-full bg-white"
      >
        {/* Sticky container - Large screen animated version only */}
        <div
          id="section-3"
          className="hidden lg:block"
          style={{
            position: "sticky",
            top: "0px",
            zIndex: 10,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center lg:mt-[5%] xl:mt-[6%] px-[4.58%] h-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            {/* Center Animation Layer - Title and subtitle animate in center */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-4 lg:px-6 xl:px-8"
              style={{
                opacity: section3ScrollProgress < 2.5 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Title - zoom in from center */}
              <motion.h2
                className="font-poppins font-medium text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[10%] lg:tracking-[20%] text-[#FF5225] align-middle"
                style={{
                  scale:
                    section3ScrollProgress < 1
                      ? Math.max(0, section3ScrollProgress)
                      : 1,
                  opacity:
                    section3ScrollProgress < 1
                      ? Math.max(0, section3ScrollProgress)
                      : 1,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                What sets Us apart
              </motion.h2>

              {/* Subtitle - Smart slides from left, Scalable & Strategic staggered from right */}
              <div className="flex justify-center items-center space-x-1 lg:space-x-2 xl:space-x-3">
                {["Smart.", "Scalable.", "Strategic."].map((word, index) => {
                  const wordProgress = Math.max(
                    0,
                    Math.min(
                      1,
                      section3ScrollProgress -
                        1 -
                        (index > 0 ? (index - 1) * 0.3 : 0)
                    )
                  );
                  let translateX = 0;

                  if (index === 0) {
                    // Smart - slides from left
                    translateX = (1 - wordProgress) * -200;
                  } else {
                    // Scalable & Strategic - slide from right (staggered)
                    translateX = (1 - wordProgress) * 200;
                  }

                  return (
                    <motion.span
                      key={word}
                      className="font-poppins font-normal text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-[#3D3D3D] align-middle tracking-normal"
                      style={{
                        x: translateX,
                        opacity: wordProgress,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            {/* Final Position Layer - Slide up animation with all content */}
            <motion.div
              className="flex flex-col items-center justify-center w-full h-full px-4 lg:px-6 xl:px-8 pb-4 lg:pb-6"
              style={{
                y: Math.max(
                  0,
                  (1 - Math.max(0, Math.min(1, section3ScrollProgress - 2.5))) *
                    100
                ),
                opacity: Math.max(0, Math.min(1, section3ScrollProgress - 2.5)),
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Title at final position */}
              <h2 className="font-poppins font-medium text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[10%] lg:tracking-[15%] text-[#FF5225] mb-2 lg:mb-3">
                What sets Us apart
              </h2>

              {/* Subtitle at final position */}
              <div className="flex justify-center items-center space-x-1 lg:space-x-2 xl:space-x-3 mb-3 lg:mb-4">
                {["Smart.", "Scalable.", "Strategic."].map((word) => (
                  <span
                    key={word}
                    className="font-poppins font-normal text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#3D3D3D]"
                  >
                    {word}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-inter font-normal text-xs lg:text-sm xl:text-base text-center text-[#444444] mb-3 lg:mb-4 xl:mb-5 max-w-[60%] lg:max-w-[55%] xl:max-w-[50%] mx-auto">
                We don't just deliver AI and data solutions — we engineer
                enterprise-grade intelligence systems that align with your
                business vision and drive measurable value.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 w-full max-w-5xl lg:max-w-6xl">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 lg:p-4 xl:p-5 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex flex-col items-center text-center min-h-[120px] lg:min-h-[140px] xl:min-h-[160px]"
                  >
                    <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center mb-2 lg:mb-3">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base xl:text-lg font-poppins font-semibold text-[#FF5225] mb-2 lg:mb-3 text-center leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs lg:text-xs xl:text-sm font-poppins text-gray-600 text-center leading-relaxed flex-1 flex items-center">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile/Tablet static version */}
        <div className="lg:hidden py-12 px-4 md:px-6">
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
      </div>

      {/* Case Study 1 - Gen AI Chatbot */}
      <div
        id="section-4"
        className="hidden w-full lg:flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white"
        // style={{ height: "100vh" }}
      >
        {/* Large screen animated version */}
        <section className="w-full h-full items-center justify-center px-[8.33%] lg:px-[8.33%] xl:px-[8.33%] 2xl:px-[8.33%] py-[13.05%] lg:py-[13.05%] xl:py-[13.05%] 2xl:py-[13.05%]">
          <div className="container mx-auto w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Left side - Phone mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className="relative w-8/12 sm:w-7/12 md:w-6/12 lg:w-9/12 xl:w-10/12 2xl:w-11/12"
                style={{ aspectRatio: "1200/1600" }}
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
              <h2 className="text-2xl font-poppins sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#262626] mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                Gen AI-Chatbot
              </h2>
              <p className="text-sm font-poppins sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal text-[#000000] mb-5 lg:mb-7 xl:mb-9 2xl:mb-11 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
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
                className="inline-block font-poppins bg-[#231F20] text-white px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-xs text-base lg:text-base xl:text-xl 2xl:text-2xl font-semibold hover:bg-gray-800 transition-colors duration-300"
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
        className="lg:hidden w-full flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white"
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
                  className="inline-block font-poppins bg-[#231F20] text-white px-8 py-3 rounded-xs text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto"
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
        className="hidden w-full lg:flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white"
        // style={{ height: "100vh" }}
      >
        {/* Large screen animated version */}
        <section className="w-full h-full items-center justify-center px-[8.33%] lg:px-[8.33%] xl:px-[8.33%] 2xl:px-[8.33%] py-[13.05%] lg:py-[13.05%] xl:py-[13.05%] 2xl:py-[13.05%]">
          <div className="container mx-auto max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Left side - Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-poppins sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#262626] mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                ML Driven Recommendations
              </h2>
              <p className="text-sm font-poppins sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal text-[#000000] mb-5 lg:mb-7 xl:mb-9 2xl:mb-11 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
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
                href="/early-foods"
                className="inline-block font-poppins bg-[#231F20] text-white px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-xs text-base lg:text-base xl:text-xl 2xl:text-2xl font-semibold hover:bg-gray-800 transition-colors duration-300"
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
        className="lg:hidden w-full flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white"
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
                  href="/early-foods"
                  className="inline-block font-poppins bg-[#231F20] text-white px-8 py-3 rounded-xs text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto"
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
          minHeight: "calc(100vh + 1200px)",
          position: "relative",
        }}
        className="w-full bg-white hidden lg:block"
      >
        {/* Sticky container - Large screen animated version only */}
        <div
          id="section-6"
          style={{
            position: "sticky",
            top: "0px",
            height: "100vh",
            zIndex: 10,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <motion.div
            className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 pt-6 lg:pt-8 h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            {/* Heading */}
            <motion.div
              className="text-center font-poppins mb-6 md:mb-8 lg:mb-10 xl:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              }}
            >
              <h2 className="text-xl font-poppins md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-[#3D3D3D] mb-2">
                Our Offering For Your Automation Needs-
              </h2>
              <h3 className="text-xl font-poppins md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#3D3D3D]">
                <span className="font-semibold font-poppins">
                  The Stack That Powers Your Future.
                </span>
              </h3>
            </motion.div>

            {/* Responsive 4-column cards with staggered scroll animation */}
            <div className="flex items-end justify-center flex-1">
              <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
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
                      index === 0 ? 0 : (1 - columnProgress) * 600; // Increased animation distance for better timing

                    return (
                      <motion.div
                        key={index}
                        className={`py-4 lg:py-5 xl:py-6 2xl:py-7 px-2 lg:px-2.5 xl:px-3 2xl:px-4 flex flex-col justify-between bg-white h-[37.3rem] lg:h-[37.3rem] xl:h-[37.3rem] 2xl:h-[37.3rem] border-b border-l border-t-none border-r-none border-[#000000] transition-colors duration-300`}
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
