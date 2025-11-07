"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useHeaderHeight from "@/hooks/useHeaderHeight";

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

export default function LogZPage() {
  const headerHeight = useHeaderHeight();
  const [animationStage, setAnimationStage] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasReachedTop, setHasReachedTop] = useState(false);
  const [columnHeight, setColumnHeight] = useState(0);
  const [section2Progress, setSection2Progress] = useState(0);
  const section2Ref = useRef(null);
  const section2WrapperRef = useRef(null);

  // Scroll listener to detect when section 2 reaches top and when it leaves viewport
  useEffect(() => {
    const handleScroll = () => {
      if (section2Ref.current) {
        const rect = section2Ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if section is in viewport and has reached the trigger point
        const isInViewport =
          rect.top <= headerHeight && rect.bottom > headerHeight + 100;

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, hasReachedTop]);

  // Animation sequence - triggers when section reaches top
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
      // Wait for section2WrapperRef to be available
      if (section2WrapperRef.current) {
        const columnElement = section2WrapperRef.current.querySelector(".grid > div:first-child");
        if (columnElement) {
          const height = columnElement.offsetHeight;
          setColumnHeight(height);
        }
      }
    };

    // Delay initial measurement to ensure DOM is ready
    const timer = setTimeout(measureColumnHeight, 100);
    
    // Re-measure on window resize
    window.addEventListener("resize", measureColumnHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureColumnHeight);
    };
  }, [headerHeight]);

  // Scroll-based animation for Section 2 (Offerings)
  useEffect(() => {
    const handleSection2Scroll = () => {
      if (section2WrapperRef.current) {
        const rect = section2WrapperRef.current.getBoundingClientRect();
        const startPoint = headerHeight + 20;
        // Adjusted for 3 columns animation (column 1 is default visible)
        const animationDuration = window.innerHeight * 1.2;

        if (rect.top <= startPoint && rect.bottom > startPoint) {
          const scrolled = startPoint - rect.top;
          // Progress 0-3 for columns 2, 3, 4
          const progress = Math.min(Math.max(scrolled / animationDuration, 0), 1) * 3;
          setSection2Progress(progress);
        } else if (rect.top > startPoint) {
          setSection2Progress(0);
        } else if (rect.bottom <= startPoint) {
          setSection2Progress(3);
        }
      }
    };

    window.addEventListener("scroll", handleSection2Scroll, { passive: true });
    handleSection2Scroll();
    return () => window.removeEventListener("scroll", handleSection2Scroll);
  }, [headerHeight]);

  const cards = [
    {
      icon: "🧠",
      title: "Advanced AI Engineering",
      description:
        "Expertise across NLP, Generative AI, Computer Vision, Reinforcement Learning — engineered to scale, secure, and perform",
    },
    {
      icon: "🎯",
      title: "Custom, Not Off-the-Shelf",
      description:
        "Solutions tailored to your data, ecosystem, and KPIs — no cookie-cutter models",
    },
    {
      icon: "☁️",
      title: "Cloud- and Edge-Ready",
      description:
        "Deploy AI where it matters — on cloud, edge, or hybrid environments seamlessly integrated into your infrastructure",
    },
    {
      icon: "📊",
      title: "Business-Driven Outcomes",
      description:
        "We align every AI solution with real-world metrics — operational efficiency, cost savings, predictive insights",
    },
    {
      icon: "⚙️",
      title: "Robust MLOps & Governance",
      description:
        "Continuous monitoring, compliance, and governability built in — designed for sustainable ROI",
    },
    {
      icon: "🌐",
      title: "Cross-Functional Expertise",
      description:
        "Teams that combine data engineering, AI, cloud and domain knowledge to drive full-stack execution",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section 0: Page Title - Full Viewport */}
      <section
        className="relative flex items-center justify-center bg-red-500 overflow-hidden"
        style={{ height: `calc(100vh - ${headerHeight}px)`, zIndex: 1 }}
      >
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900">
            Log-Z
          </h1>
        </div>
      </section>

      {/* Section 1: Animation Section */}
      <section
        ref={section2Ref}
        className="relative bg-white"
        style={{
          minHeight: "100vh",
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
                flex: animationStage >= 3 ? "0 0 auto" : "1 1 auto",
                paddingTop: animationStage >= 3 ? "20px" : "0px",
                paddingBottom: animationStage >= 3 ? "10px" : "0px",
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
                    className="font-bold"
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
                      color: "#FF6B35",
                      fontSize: animationStage >= 3 ? "2rem" : "3.5rem",
                      marginBottom: animationStage >= 3 ? "0.5rem" : "1.5rem",
                      transition:
                        animationStage >= 3
                          ? "font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96), margin-bottom 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)"
                          : "none",
                    }}
                  >
                    What sets Us apart
                  </motion.h1>
                )}

                {/* Subtitle with sequential left-right animation */}
                <div
                  className="font-semibold text-gray-800 flex justify-center items-center gap-2 flex-wrap"
                  style={{
                    fontSize: animationStage >= 3 ? "1.25rem" : "2rem",
                    transition:
                      animationStage >= 3
                        ? "font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)"
                        : "none",
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
            <div className="flex-1 overflow-hidden px-4 md:px-6 lg:px-8 py-4">
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
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We don't just deliver AI and data solutions — we engineer
                  enterprise-grade intelligence systems that align with your
                  business vision and drive measurable value.
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
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
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 mx-auto">
                      <span className="text-2xl">{card.icon}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base font-bold mb-2 text-center"
                      style={{ color: "#FF6B35" }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 text-center leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Offerings - Scroll-based animation */}
      <div
        ref={section2WrapperRef}
        style={{
          minHeight: columnHeight > 0 ? `calc(100vh + ${columnHeight * 2}px)` : "calc(100vh + 1200px)",
          position: "relative",
        }}
        className="w-full bg-white"
      >
        {/* Sticky container for scroll-based animations */}
        <div
          style={{
            position: "sticky",
            top: `${headerHeight}px`,
            paddingTop: `${headerHeight/4}px`,
            height: `calc(100vh - ${headerHeight}px)`,
            zIndex: 10,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 h-full overflow-hidden pb-4 md:pb-4 lg:pb-8">
            {/* Heading */}
            <div className="text-center font-poppins mb-3 md:mb-4 lg:mb-6 xl:mb-8">
              <h2 className="text-lg font-poppins md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-[#3D3D3D] content-center align-middle">
                Our Offering For Your Automation Needs-
              </h2>
              <h3 className="text-lg font-poppins md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-[#3D3D3D] content-center align-middle">
                <span className="font-semibold font-poppins">
                  The Stack That Powers Your Future.
                </span>
              </h3>
            </div>

            {/* Responsive 4-column cards with staggered scroll animation */}
            <div className="flex items-end justify-center flex-1">
              <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 h-full">
                  {offersCards.map((card, index) => {
                    // Column 1 (index 0) appears by default, others animate on scroll
                    // Calculate animation progress for each column
                    const columnProgress = index === 0 
                      ? 1 // Column 1 always fully visible
                      : Math.max(0, Math.min(1, section2Progress - (index - 1)));
                    
                    // Title and text slide up from bottom
                    const contentTranslateY = (1 - columnProgress) * 100;
                    const contentOpacity = columnProgress;
                    
                    // Learn More button fades in after content
                    const buttonProgress = index === 0
                      ? 1 // Column 1 button always visible
                      : Math.max(0, Math.min(1, (section2Progress - (index - 1) - 0.5) * 2));
                    const buttonOpacity = buttonProgress;
                    
                    // Border animation - slides up from bottom (Learn More position)
                    const borderProgress = index === 0
                      ? 1 // Column 1 border always visible
                      : Math.max(0, Math.min(1, (section2Progress - (index - 1) - 0.3) * 1.5));
                    const borderHeight = borderProgress * 100;

                    return (
                      <div
                        key={index}
                        className="relative py-4 lg:py-5 xl:py-6 2xl:py-7 px-2 lg:px-2.5 xl:px-3 2xl:px-4 flex flex-col justify-between h-full overflow-hidden"
                      >
                        {/* Animated left border - slides up from bottom */}
                        <motion.div
                          className="absolute left-0 bottom-0 w-[1px] bg-[#000000]"
                          animate={{
                            height: `${borderHeight}%`,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          }}
                        />
                        
                        {/* Animated bottom border - appears with left border */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#000000]"
                          animate={{
                            opacity: borderProgress,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                        />
                        
                        {/* Content wrapper with slide-up animation */}
                        <motion.div
                          animate={{
                            y: contentTranslateY,
                            opacity: contentOpacity,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          }}
                        >
                          <h4 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-[#332771] mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-left font-poppins">
                            {card.title}
                          </h4>
                          <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-[#D84326] mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-left leading-relaxed font-poppins">
                            {card.text}
                          </p>
                        </motion.div>
                        
                        {/* Learn More button with fade-in animation */}
                        <motion.a
                          href={card.link}
                          className="w-fit flex items-center text-left text-sm lg:text-base xl:text-lg 2xl:text-xl font-poppins font-medium text-[#000000] hover:text-[#D84326] hover:scale-105 transition-all duration-300"
                          animate={{
                            opacity: buttonOpacity,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          Learn More <span className="ml-2">→</span>
                        </motion.a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
