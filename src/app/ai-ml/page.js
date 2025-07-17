"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AIMLPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="mx-auto font-poppins">
      {/*Hero Section*/}
      <section
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4 py-20 md:py-56"
      >
        <div className="relative aspect-[1/1] w-20 md:w-36 overflow-hidden">
          <Image
            src="/images/logo/mindefy-logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
          <h1 className="text-[#342871] text-3xl md:text-5xl font-bold tracking-normal text-center">
            AI/ML Pages
          </h1>
          <p className="text-[#D84326] text-lg md:text-4xl font-medium tracking-wider text-center">
            Mindefy Technologies Pvt. Ltd.
          </p>
        </div>
      </section>

      {/*About Section*/}
      <section
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="w-full py-72 px-16 flex items-center justify-between gap-22"
      >
        {/* About section text section */}
        <motion.div
          className="flex flex-col justify-start items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
        >
          <motion.p
            className="font-semibold text-4xl text-[#353535]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              delay: 0.2,
            }}
          >
            Unlock the Power of Your Data with Custom Analytics and AI Solutions
          </motion.p>
          <motion.p
            className="font-normal text-xl text-[#444444]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.4,
            }}
          >
            Harness the transformative potential of data analytics and AI to
            boost your business. Our custom solutions blend advanced exploratory
            data analysis (EDA) techniques with powerful machine learning (ML)
            models tailored to your needs.
          </motion.p>
          <motion.p
            className="font-normal text-xl text-[#444444]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.6,
            }}
          >
            With interactive, real-time dashboards using Power BI and Tableau,
            we make it easy to visualize complex data. Whether you're looking to
            predict trends, optimize operations, or uncover hidden insights, our
            expertise ensures actionable, data-driven results that align with
            your goals—efficient, scalable, and future-ready.
          </motion.p>
        </motion.div>
        <div className="relative w-full aspect-[476/473]">
          <Image
            src="/images/ai-ml-1.png"
            alt="unlock the power-Mindefy"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/*Why choose us Section*/}
      <section
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="w-full py-56 px-11 flex items-center justify-between gap-24"
      >
        <motion.div
          className="relative w-full aspect-[523/510.69]"
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1,
          }}
        >
          <Image
            src="/images/ai-ml-2.png"
            alt="unlock the power-Mindefy"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.8,
          }}
        >
          <motion.p
            className="font-bold text-2xl uppercase text-[#FF5225]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              delay: 0.2,
            }}
          >
            Why Choose Us
          </motion.p>
          <motion.div
            className="flex flex-col justify-start items-start gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
          >
            <motion.p
              className="font-normal text-4xl text-[#3D3D3D]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 25,
                delay: 0.4,
              }}
            >
              Empowering businesses to transform data into actionable insights
              with cutting-edge analytics and machine learning.
            </motion.p>
            <motion.p
              className="font-normal text-xl text-[#444444]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.5,
              }}
            >
              We are a team of data specialists committed to transforming raw
              data into actionable intelligence. With our expertise in data
              analytics, machine learning (ML), and AI solutions, we empower
              businesses to make informed decisions. We focus on:
            </motion.p>
            <motion.p
              className="font-normal text-xl text-[#444444]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.6,
              }}
            >
              &bull; Building custom ETL pipelines to consolidate and clean
              data.
              <br />
              &bull; Creating scalable data lakes for organized data storage.
              <br />
              &bull; Integrating business intelligence (BI) tools for real-time,
              accessible insights.
              <br />
              &bull; Deploying ML models that predict trends and automate
              complex tasks.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stacked Cards Section */}
      <section
        ref={containerRef}
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="w-full py-32 px-8 relative"
      >
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-2xl aspect-[742/724.54] opacity-20">
          <Image
            src="/images/ai-ml-2.png"
            alt="unlock the power-Mindefy"
            fill
            className="object-contain -rotate-90"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto min-h-[700vh]">
          <div className="sticky top-25 h-screen overflow-hidden">
            {pageData.map((item, index) => {
              const cardStart = index * 0.15;
              const cardEnd = cardStart + 0.12;
              
              const y = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [400, index * 20] // Stack with 20px offset
              );
              
              const scale = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [0.9, 1 - index * 0.02] // Slight scale decrease for stacking effect
              );
              
              const opacity = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [0, 1]
              );

              return (
                <motion.div
                  key={item.id}
                  className="absolute w-full rounded-4xl backdrop-blur-[40px] flex justify-start items-start p-8 md:p-16 gap-4"
                  style={{
                    background: `radial-gradient(circle, transparent 10%, #CFDBFF 100%)`,
                    // boxShadow: "8px 8px 20px 8px rgba(0, 0, 0, 0.06)",
                    y: y,
                    scale: scale,
                    opacity: opacity,
                    zIndex: index + 1,
                  }}
                >
                  {/* Card shadow layers for depth */}
                  <div className="absolute inset-0 bg-black/5 rounded-4xl transform translate-x-1 translate-y-1 -z-10"></div>
                  <div className="absolute inset-0 bg-black/3 rounded-4xl transform translate-x-2 translate-y-2 -z-20"></div>
                  
                  <p className="font-semibold text-[#517DF0] text-6xl md:text-9xl flex-shrink-0">
                    {item.id}
                  </p>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="font-normal text-2xl md:text-3xl text-[#B237D6]">
                        {item.title1}
                      </p>
                      <p className="font-semibold text-2xl md:text-3xl text-[#517DF0]">
                        {item.title2}
                      </p>
                    </div>
                    <p className="font-normal text-lg md:text-xl text-[#000000] mt-6">
                      {item.description}
                    </p>
                    <div className="font-semibold text-lg md:text-xl text-[#000000] mt-4">
                      {item.points.map((point) => (
                        <p className="mt-2" key={point.heading}>
                          &bull; {point.heading}:{" "}
                          <span className="font-normal">{point.description}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

const pageData = [
  {
    id: 1,
    title1: "Machine Learning",
    title2: "Solutions",
    description:
      "Develop and deploy machine learning models to extract value from your data, predict future trends, and automate complex decision-making processes.",
    points: [
      {
        heading: "Predictive Analytics",
        description:
          "Build regression and classification models to forecast future outcomes (e.g., sales, demand forecasting).",
      },
      {
        heading: "Custom ML Solutions",
        description:
          "Develop models for specific needs, such as Natural Language Processing (NLP), clustering, and anomaly detection.",
      },
      {
        heading: "Model Deployment & Optimization",
        description:
          "Ensure models are production-ready and optimized for performance using tools like TensorFlow, Scikit-Learn, and AWS SageMaker.",
      },
    ],
  },
  {
    id: 2,
    title1: "Exploratory",
    title2: "Data Analysis (EDA)",
    description:
      "Gain deeper insights into your data through rigorous exploratory data analysis. Identify trends, correlations, and patterns that drive business decisions.",
    points: [
      {
        heading: "Data Cleaning & Preparation",
        description:
          "Remove inconsistencies, handle missing values, and ensure your data is ready for analysis.",
      },
      {
        heading: "Descriptive Statistics",
        description:
          "Summarize datasets to understand key metrics such as averages, distributions, and variances.",
      },
      {
        heading: "Visualization",
        description:
          "Using Python libraries like Pandas, Matplotlib, and Seaborn, I'll create graphs and charts to visually uncover hidden insights in your data.",
      },
    ],
  },
  {
    id: 3,
    title1: "Power BI &",
    title2: "Tableau Visualization",
    description:
      "Design and deliver interactive dashboards and visual reports tailored to business needs, providing real-time insights for informed decision-making.",
    points: [
      {
        heading: "Interactive Dashboards",
        description:
          "Build custom dashboards in Power BI and Tableau that allow stakeholders to drill down into specific data points.",
      },
      {
        heading: "Real-Time Data Sync",
        description:
          "Integrate data sources to display real-time data for immediate insights.",
      },
      {
        heading: "Cross-Platform Reporting",
        description:
          "Design reports that are accessible across desktop, mobile, and cloud platforms for flexibility and remote monitoring.",
      },
    ],
  },
  {
    id: 4,
    title1: "End-to-End",
    title2: "Data Pipeline Integration",
    description:
      "Create seamless workflows for data ingestion, transformation, storage, and analysis to ensure efficient data movement across systems.",
    points: [
      {
        heading: "ETL (Extract, Transform, Load)",
        description:
          "Set up data pipelines to collect, clean, and aggregate data from various sources.",
      },
      {
        heading: "Cloud Integration",
        description:
          "Leverage cloud platforms such as AWS, Azure, or Google Cloud to store and manage large datasets.",
      },
    ],
  },
  {
    id: 5,
    title1: "Data Governance",
    title2: "& Security",
    description:
      "Develop and deploy machine learning models to extract value from your data, predict future trends, and automate complex decision-making processes.",
    points: [
      {
        heading: "Data Quality Assurance",
        description:
          "Monitor data accuracy, completeness, and consistency across systems.",
      },
      {
        heading: "Access Control & Encryption",
        description:
          "Implement security measures such as role-based access controls (RBAC) and encryption to protect sensitive information.",
      },
    ],
  },
];