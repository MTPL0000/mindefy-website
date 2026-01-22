"use client";

import Image from "next/image";

export default function MindfulUXHero() {
  return (
    <>
      <div
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4 py-20 md:py-56"
      >
        <div className="relative aspect-square w-20 md:w-36 overflow-hidden">
          <Image
            src="/images/logo/mindefy-logo.svg"
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className="text-[#342871] text-5xl md:text-7xl font-semibold tracking-normal text-center">
            MindfulUX
          </h1>
          <p className="text-[#D84326] text-lg md:text-2xl font-medium tracking-wider text-center">
            A Design Studio
          </p>
        </div>
      </div>

      <div
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
      >
        <div className="m-auto max-w-7xl px-4 md:px-8 py-16 md:py-56 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#262626] text-center">
              About
            </h3>
            <span className="text-[#262626] text-lg md:text-xl font-normal text-center">
              Mindful UX - Design Studio
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-6 md:gap-8 max-w-4xl">
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              One-of-a-kind blend of comprehensive "All Designs" services,
              conveniently available under one umbrella.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Conducting meticulous UX research to crafting and delivering the
              final prototype, along with captivating graphics, we've got you
              covered.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Our team specializes in providing end-to-end design solutions,
              ensuring a seamless and cohesive design journey from start to
              finish.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              A keen focus on user experience, we employ industry-leading
              methodologies to create intuitive and visually stunning designs
              that captivate your target audience.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Experience the convenience and expertise of our all-in-one design
              services as we bring your vision to life, leaving a lasting
              impression on your users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
