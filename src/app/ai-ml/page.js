"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIMLPage() {
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
        <div className="relative w-full aspect-[523/510.69]">
          <Image
            src="/images/ai-ml-2.png"
            alt="unlock the power-Mindefy"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <p className="font-bold text-2xl uppercase text-[#FF5225]">
            Why Choose Us
          </p>
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="font-normal text-4xl text-[#3D3D3D]">
              Empowering businesses to transform data into actionable insights
              with cutting-edge analytics and machine learning.
            </p>
            <p className="font-normal text-xl text-[#444444]">
              We are a team of data specialists committed to transforming raw
              data into actionable intelligence. With our expertise in data
              analytics, machine learning (ML), and AI solutions, we empower
              businesses to make informed decisions. We focus on:
            </p>
            <p className="font-normal text-xl text-[#444444]">
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
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
