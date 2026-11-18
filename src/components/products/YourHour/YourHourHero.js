"use client";

import Image from "next/image";

export default function YourHourHero() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative mb-12 w-full overflow-hidden bg-center bg-no-repeat"
        style={{
          aspectRatio: "9 / 5",
          backgroundImage: "url('/images/CaseStudy-Hero-image.webp')",
          backgroundSize: "100% 100%"
        }}
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get YourHour on Google Play"
          className="absolute z-10 block"
          style={{ left: "72.7%", top: "8%", width: "12.9%", height: "6%" }}
        >
          <Image
            src="/images/CaseStudy-play-store.svg"
            alt="Case Study"
            loading="lazy"
            width={185}
            height={56}
            className="block h-full w-full"
          />
        </a>
        <a
          href="https://apps.apple.com/in/app/yourhour-screen-time-control/id6784166547"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download YourHour on the App Store"
          className="absolute z-10 block"
          style={{ left: "86%", top: "8%", width: "11.6%", height: "6%" }}
        >
          <Image
            src="/images/CaseStudy-app-store.svg"
            alt="Case Study"
            loading="lazy"
            width={167}
            height={56}
            className="block h-full w-full"
          />
        </a>
      </div>

      {/* Section with content */}
      <div className="max-w-5xl px-4 py-6 mx-auto">
        <p className="text-sm md:text-base font-poppins font-normal text-[#444444] leading-relaxed">
          YourHour is a revolutionary mobile application designed to empower
          individuals to take charge of their digital lives. With an array of
          intuitive features and insights, YourHour offers a comprehensive
          solution to help users achieve a healthier balance between screen time
          and real-life experiences. By tracking and analyzing screen time
          usage, setting personalized reminders, and providing a focus mode for
          uninterrupted productivity.
        </p>
        <p className="mt-7 text-sm md:text-base font-poppins font-normal text-[#444444] leading-relaxed">
          In a world where smartphones have become an integral part of our daily
          routines, it's easy to lose track of time and succumb to excessive
          screen time. YourHour comes to the rescue with its comprehensive suite
          of features that help users monitor and manage their screen usage
          effectively. By tracking screen time, analyzing app usage patterns,
          and setting personalized reminders, YourHour encourages users to
          develop healthier screen habits and strike a balance between the
          virtual and real worlds. By setting goals and achieving milestones,
          the app motivates users on their journey to improved productivity,
          enhanced wellbeing, and increased mindfulness.
        </p>
      </div>
    </>
  );
}
