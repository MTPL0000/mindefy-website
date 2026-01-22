"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "Mindful Wellness",
    subtitle: "Detox your digital habits",
    description:
      "The ultimate mobile application designed to help you break your digital addictions and focus on what really matters. Over 10 million users and 70,000+ positive feedbacks on the Play Store, Yourhour is the go-to solution for anyone looking to improve their digital wellness.",
    image: "/images/mfux-1.webp",
    aspectRatio: "aspect-[1.5/1]",
    productLink:
      "https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe&hl=en_IN&gl=US",
    caseStudyLink: "/yourhour-screentime-app",
    imagePosition: "left",
  },
  {
    title: "Flashcard Learning",
    subtitle: "Memory Training | Productivity",
    description:
      "Memolect is a flashcard-based learning app designed to make knowledge retention easier through interactive and adaptive learning modes. It allows users to create personalized flashcards, explore chosen subjects, and enhance recall with engaging study experiences.",
    image: "/images/memolect.webp",
    aspectRatio: "aspect-square",
    productLink: null,
    caseStudyLink: "/memolect-learning-app",
    imagePosition: "right",
  },
  {
    title: "AI Asset Management",
    subtitle: "Automate System Maintenance",
    description:
      "Spector.ai is a leader in 360o Asset Health Platform and solutions based on AI and AI Agents. Our platform and solutions help you capture more value while maximizing your asset performance and integrity and achieving sustainability goals.",
    image: "/images/mfux-2.webp",
    aspectRatio: "aspect-[1.8/1]",
    productLink: "https://spector.ai/",
    caseStudyLink: "/spector-analytics-software",
    imagePosition: "left",
  },
  {
    title: "OTT/Video Streaming",
    subtitle: "Entertainment | EdTech",
    description:
      "A video streaming platform designed to help you have access to precise courses and talks from world-renowned mentors in the fields of psychology, yoga, and the tools and knowledge you need to live your life in full spectrum, and achieve True Fulfilment.",
    image: "/images/mfux-3.webp",
    aspectRatio: "aspect-[1.8/1]",
    productLink:
      "https://play.google.com/store/apps/details?id=com.miraclelensapp",
    caseStudyLink: "/jego-ott-platform",
    imagePosition: "right",
  },
  {
    title: "E-Commerce",
    subtitle: "Superfoods E-commerce",
    description:
      "A video streaming platform designed to help you have access to precise courses and talks from world-renowned mentors in the fields of psychology, yoga, and the tools and knowledge you need to live your life in full spectrum, and achieve True Fulfilment.",
    image: "/images/mfux-4.webp",
    aspectRatio: "aspect-[1.8/1]",
    productLink: "https://earlyfoods.com/",
    caseStudyLink: "/early-foods-e-commerce",
    imagePosition: "left",
  },
  {
    title: "Paperless Billing",
    subtitle: "Digital Receipts for Everyone",
    description:
      "The app's powerful OCR technology captures all necessary details from the hard copy bill and generates a digital bill. This not only helps to organize expenses but also contributes to the preservation of the planet.",
    image: "/images/mfux-5.webp",
    aspectRatio: "aspect-[1.8/1]",
    productLink: null,
    caseStudyLink: "/greenbill-paperless-billing-software",
    imagePosition: "right",
  },
  {
    title: "Business Suite",
    subtitle: "Oil Industry OPS Management",
    description:
      "Machone is a Dubai based Oil Industry Consultants, To cater the need of Oil industry Machone provides strong end to end services from start to end that any Oil industry working at any level will need.",
    image: "/images/mfux-6.webp",
    aspectRatio: "aspect-2/1",
    productLink: null,
    caseStudyLink: "/mach-one-platform-services",
    imagePosition: "left",
  },
  {
    title: "Delivery Suite",
    subtitle: "Delivery Business Management",
    description:
      "Super Easy Optemize and manage your delivery business, Soliroute provides you auto optemize route for deliveries and assigns it to the drivers. There is a Driver App that help manage realtime data of delivery statuses for the admin and driver.",
    image: "/images/mfux-7.webp",
    aspectRatio: "aspect-[1.8/1]",
    productLink: null,
    caseStudyLink: "/soli-stack-integration-solutions",
    imagePosition: "right",
  },
];

function CaseStudyCard({ study, index }) {
  const isImageLeft = study.imagePosition === "left";
  const bgGradient =
    index % 2 === 0
      ? "bg-linear-to-bl from-gray-50 via-purple-50 to-pink-100"
      : "bg-linear-to-br from-gray-50 via-purple-50 to-pink-100";

  return (
    <section className={`m-auto w-full ${bgGradient} px-4 md:px-16 py-12 md:py-32`}>
      <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
        {/* Image */}
        <div
          className={`relative ${study.aspectRatio} w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div
          className={`w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-5 text-center lg:text-left mx-auto lg:mx-0 ${
            isImageLeft ? "lg:order-2" : "order-2 lg:order-1"
          }`}
        >
          <div className="flex flex-col items-center lg:items-start justify-center gap-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
              {study.title}
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
              {study.subtitle}
            </h3>
          </div>

          {study.productLink && (
            <a
              href={study.productLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
            >
              {"{Link to Product}"}
            </a>
          )}

          <p className="text-[#000000] text-sm md:text-base font-normal">
            {study.description}
          </p>

          <a
            href={study.caseStudyLink}
            className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
          >
            Case Study
            <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
              <Image
                src="/images/arrow-icon.svg"
                alt="arrow"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function MindfulUXCaseStudies() {
  return (
    <>
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={index} study={study} index={index} />
      ))}
    </>
  );
}
