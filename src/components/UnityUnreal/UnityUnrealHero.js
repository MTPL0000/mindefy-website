import Image from "next/image";

export default function UnityUnrealHero() {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-widest uppercase mb-5">
          Unity 3D & Unreal Engine Development
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
          Building Dynamic, Cross-Platform Games with the Industry's Best
          Engines
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
          <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
            At Mindefy Technologies, we specialize in crafting immersive,
            performance-driven games powered by the industry's most trusted
            engines—Unity 3D and Unreal Engine. Whether you're targeting mobile
            devices, consoles, desktops, or AR/VR headsets, our team brings deep
            technical expertise and creative precision to every project. We
            harness the full capabilities of these platforms—from real-time
            rendering and physics-based interactions to complex animation
            systems and multiplayer networking—to build games that are visually
            stunning, responsive, and highly engaging.
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-12 lg:mb-20">
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
  );
}
