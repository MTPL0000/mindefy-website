import Image from "next/image";

export default function GameAnimationHero() {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-widest uppercase mb-5">
          2D & 3D Game Animation
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
          Immersive Game Animation That Brings
          <br className="hidden sm:block"></br> Worlds to Life
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
          <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
            Our in-house animation team brings every frame to life with
            creativity, precision, and storytelling finesse. Whether it's
            charming pixel art, smooth 2D animations, or hyper-realistic 3D
            models, we craft visuals that captivate and engage. We specialize in
            character rigging, dynamic environment animation, and immersive UI
            transitions—ensuring that every movement feels natural and
            purposeful. From indie projects to AAA titles, we tailor our
            animation style to fit your game's tone, narrative, and gameplay
            mechanics. The result? Visually rich experiences that resonate
            deeply with your audience and elevate the overall gameplay to the
            next level.
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-12 lg:mb-20">
          <Image
            src="/images/GA1.svg"
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
