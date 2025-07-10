"use client";
import Image from "next/image";

export default function UnityUnreal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Unity 3D & Unreal Engine Development
          </p>

          {/* Main Title */}
          <h1 className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto px-4 xl:px-0">
            Building Dynamic, Cross-Platform Games with the Industry’s Best
            Engines
          </h1>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[61.375rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem] px-4 xl:px-0">
            <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
              At Mindefy Technologies, we specialize in crafting immersive,
              performance-driven games powered by the industry’s most trusted
              engines—Unity 3D and Unreal Engine. Whether you're targeting
              mobile devices, consoles, desktops, or AR/VR headsets, our team
              brings deep technical expertise and creative precision to every
              project. We harness the full capabilities of these platforms—from
              real-time rendering and physics-based interactions to complex
              animation systems and multiplayer networking—to build games that
              are visually stunning, responsive, and highly engaging.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-12 lg:mb-20">
            <Image
              src="/images/GD-UR.webp"
              alt="Game Animation - Immersive 2D and 3D game animation services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2D Game Art & Development Section */}
      <section className="bg-white px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-[20rem] sm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:ml-2.5">
                <Image
                  src="/images/GD-UR1.webp"
                  alt="2D Game Art & Development"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8">
                Unity 3D Game Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we use Unity 3D to develop
                high-performance 2D, 3D, and AR/VR games that run seamlessly
                across platforms. Known for its flexibility and rapid
                development capabilities, Unity is ideal for mobile, web, and
                lightweight console experiences. Our team builds interactive,
                visually appealing, and scalable games that bring your vision to
                life.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Unity 3D Services:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>
                    • 2D/3D game development for Android, iOS, PC, and Web
                  </li>
                  <li>• AR/VR development using Unity’s XR toolkit</li>
                  <li>• Lightweight games with high frame rate optimization</li>
                  <li>• In-app purchases, ads, and multiplayer integration</li>
                  <li>• Rapid prototyping and faster time to market</li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Unity 3D is perfect for both startups and enterprises looking
                for powerful yet agile game solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Game Art & Development Section */}
      <section className="bg-white mb-12 lg:mb-20 px-4 xl:px-0 mt-12 lg:mt-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Content */}
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8">
                Unreal Engine Game Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we craft high-end gaming experiences
                using Unreal Engine, the powerhouse behind many AAA titles. With
                advanced rendering, real-time lighting, and physics-based
                environments, Unreal is ideal for visually intensive and complex
                gameplay projects across PC, console, and VR.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Unreal Engine Services:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>
                    • High-fidelity 3D game development for PC, console & VR
                  </li>
                  <li>• Realistic environments, lighting, and VFX</li>
                  <li>• Simulation and training experiences</li>
                  <li>• Multiplayer architecture and network optimization </li>
                  <li>• Blueprint and C++ scripting for custom logic</li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Choose Unreal Engine when you want to push visual and
                technical boundaries
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[20rem] sm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:mr-2.5">
                <Image
                  src="/images/GD-UR2.webp"
                  alt="3D Game Art & Development"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
