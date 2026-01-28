import Image from "next/image";

export default function AgileRapidHero() {
  return (
    <section className="mt-28 mx-auto px-4 lg:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-5">
          Agile and Rapid Application Development
        </h1>

        <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[90%] sm:max-w-180 lg:max-w-200 mx-auto px-4 lg:px-0">
          <span className="font-normal">Unleashing </span> the Power of Agile
          <span className="font-normal"> and </span>
          <span className="font-medium">Rapid Application Development</span>
        </p>

        <div className="w-full max-w-[90%] sm:max-w-180 lg:w-241 font-normal mx-auto mb-9 text-justify space-y-5 px-4 lg:px-0">
          <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
            You can rely on Mindefy's unique expertise in RAD Models and Agile
            Development to deliver Unmatched Results.
          </p>
          <p className="text-[0.875rem] sm:text-[1rem] font-medium text-[#444444] leading-relaxed">
            Using our expertise in RAD models and agile development, we
            provide you with customized solutions that meet your unique
            business goals and deliver superior results. Our team of highly
            trained and experienced professionals specializes in rapid
            prototyping, iterative development and rapid feedback loops for
            continuous improvement and adaptability. With Mindefy as your
            trusted partner, you gain a competitive edge by delivering
            solutions that exceed expectations, reduce risk and optimize
            resource allocation. Experience the pinnacle of agile development
            and RAD model services with Mindefy to drive innovation,
            accelerate time to market and propel your business to unparalleled
            success in today's fiercely competitive environment
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-18 px-4 lg:px-0">
          <Image
            src="/images/ARD.webp"
            alt="Hybrid App Development - Developer working with mobile app design"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
