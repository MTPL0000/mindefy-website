"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useHeaderHeight from "@/hooks/useHeaderHeight";

export default function LogZPage() {
  const headerHeight = useHeaderHeight();
  const [animationStage, setAnimationStage] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasReachedTop, setHasReachedTop] = useState(false);
  const section2Ref = useRef(null);

  // Scroll listener to detect when section 2 reaches top and when it leaves viewport
  useEffect(() => {
    const handleScroll = () => {
      if (section2Ref.current) {
        const rect = section2Ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if section has reached the top (accounting for header)
        if (rect.top <= headerHeight && rect.bottom > 0) {
          if (!hasReachedTop) {
            setHasReachedTop(true);
          }
        } 
        // Reset if section is completely out of viewport (scrolled past or above)
        else if (rect.bottom < 0 || rect.top > viewportHeight) {
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
      }, 100)
    );

    // Stage 2: Subtitle animation after title (0.1s + 0.5s title duration)
    timers.push(
      setTimeout(() => {
        setAnimationStage(2);
      }, 600)
    );

    // Stage 3: Move to top after all subtitle words complete (0.6s + 2.1s subtitle duration)
    timers.push(
      setTimeout(() => {
        setAnimationStage(3);
        setShowContent(true); // Show content when starting to move up
      }, 2700)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [hasReachedTop]);

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
                  className="font-bold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{ 
                    color: "#FF6B35",
                    fontSize: animationStage >= 3 ? '2rem' : '3.5rem',
                    marginBottom: animationStage >= 3 ? '0.5rem' : '1.5rem',
                    transition: animationStage >= 3 ? 'font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96), margin-bottom 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)' : 'none',
                  }}
                >
                  What sets Us apart
                </motion.h1>
              )}

              {/* Subtitle with sequential left-right animation */}
              <div 
                className="font-semibold text-gray-800 flex justify-center items-center gap-2 flex-wrap"
                style={{
                  fontSize: animationStage >= 3 ? '1.25rem' : '2rem',
                  transition: animationStage >= 3 ? 'font-size 1s cubic-bezier(0.43, 0.13, 0.23, 0.96)' : 'none',
                }}
              >
                {animationStage >= 2 && (
                  <>
                    {/* First word: Smart - from left */}
                    <motion.span
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
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
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.7,
                      }}
                    >
                      Scalable.
                    </motion.span>
                    {/* Third word: Strategic - from right, starts after Scalable completes */}
                    <motion.span
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 1.4,
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
    </div>
  );
}
