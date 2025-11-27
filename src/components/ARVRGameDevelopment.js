"use client";
import Image from "next/image";

export default function ARVRGameDevelopment() {
  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            AR/VR Game Development
          </h1>

          {/* Main Title */}
          <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto px-4 xl:px-0">
            Redefine Reality with Engaging AR/VR Game
            <br className="hidden sm:block"></br>Experiences
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[61.375rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem] px-4 xl:px-0">
            <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
              Unlock new dimensions of immersion with our advanced AR and VR
              game development services. Our team crafts highly interactive,
              visually stunning virtual experiences tailored for training
              simulations, educational tools, and next-level entertainment. From
              concept to deployment, we leverage the latest technologies and
              platforms—including Oculus Rift, HTC Vive, Meta Quest, and mobile
              AR—to create intuitive, real-time environments that respond to
              every movement and interaction. Whether you're building a serious
              game for skill development or an immersive storytelling
              experience, we ensure seamless integration of gameplay mechanics,
              spatial audio, and intuitive controls. With us, your audience
              doesn't just play—they step inside the world you envision.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-12 lg:mb-20">
            <Image
              src="/images/ARVR1.png"
              alt="AR VR Game Development Services - Immersive Augmented and Virtual Reality Solutions by Mindefy Technologies"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* AR Development Section */}
      <section
        className="bg-white px-4 xl:px-0"
        aria-labelledby="ar-development-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-[20rem] sm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:ml-2.5">
                <Image
                  src="/images/ARVR2.png"
                  alt="Augmented Reality AR Development Services - Mobile AR Apps and ARKit ARCore Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full">
              <h2
                id="ar-development-heading"
                className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8"
              >
                Augmented Reality (AR) Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we develop custom AR applications that
                enhance real-world environments with digital overlays. Using
                cutting-edge tools like ARKit, ARCore, and Unity 3D, we create
                solutions for gaming, retail, education, and training that boost
                user engagement and interactivity.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Our AR Development Services Include:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>• Mobile AR games and applications (iOS & Android)</li>
                  <li>• Marker-based and marker less AR experiences</li>
                  <li>• Real-time object recognition & tracking</li>
                  <li>• 3D object rendering in real-world environments</li>
                  <li>• AR for product demos, tours, and brand engagement</li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Take your audience beyond screens and into the world around them
                with powerful AR content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VR Development Section */}
      <section
        className="bg-white mb-12 lg:mb-20 px-4 xl:px-0 mt-12 lg:mt-0"
        aria-labelledby="vr-development-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Content */}
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2
                id="vr-development-heading"
                className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8"
              >
                Virtual Reality (VR) Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we design VR applications that
                transport users into fully immersive, interactive environments.
                From VR games to enterprise simulations, we leverage
                technologies like Unreal Engine, Unity, and VR hardware (Oculus,
                HTC Vive, Meta Quest) to deliver high-quality, intuitive, and
                lifelike experiences.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Our VR Development Services Include:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>• VR games and training simulations</li>
                  <li>• 360° environments and virtual tours</li>
                  <li>• Hand gesture & motion-based interaction</li>
                  <li>
                    • Custom VR apps for healthcare, education, real estate &
                    more
                  </li>
                  <li>
                    • Support for Oculus Rift, HTC Vive, Meta Quest, and more
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Engage users like never before with virtual worlds that feel
                real and unforgettable.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[20rem] sanimationm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:mr-2.5">
                <Image
                  src="/images/ARVR3.png"
                  alt="Virtual Reality VR Development Services - Oculus Meta Quest Unity Unreal Engine Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Schema - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What AR/VR platforms does Mindefy Technologies support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We support major AR/VR platforms including Unity 3D, Unreal Engine, ARKit, ARCore, Oculus Rift, HTC Vive, Meta Quest, and mobile AR solutions for iOS and Android.",
                },
              },
              {
                "@type": "Question",
                name: "What types of AR/VR applications can you develop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We develop AR/VR games, training simulations, educational tools, 360° virtual tours, product demonstrations, and enterprise applications for various industries including healthcare, education, and real estate.",
                },
              },
              {
                "@type": "Question",
                name: "How long does AR/VR development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Development timelines vary based on project complexity, ranging from simple AR apps (4-8 weeks) to complex VR experiences (3-6 months). We provide detailed timelines during project consultation.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
