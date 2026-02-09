import Image from "next/image";
import FeatureCard from "../FeatureCard";

export default function ApproachSection({ approach, features }) {
  return (
    <>
      <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-251 mb-8 lg:mb-15 px-4 sm:px-6 lg:px-0">
        <div className="text-[#2E0473] w-full lg:w-241 mx-0 lg:mx-5 text-lg sm:text-xl lg:text-3xl font-medium mb-2 lg:mb-2.5">
          <p>What sets us apart</p>
        </div>
        <div className="font-normal mx-0 lg:mx-5 text-sm sm:text-base lg:text-base text-justify text-[#000000]">
          <p>
            is our commitment to offering these services separately from
            development, allowing you the flexibility to choose only the
            consulting part that suits your needs.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-full sm:max-w-4xl lg:max-w-290 mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-8 lg:mb-15">
            <div className="mb-8 lg:mb-15 h-auto lg:h-21 mx-auto text-center w-full sm:max-w-lg lg:w-[32.81rem] font-semibold text-lg sm:text-xl lg:text-3xl px-4 sm:px-0">
              <p>{approach.title}</p>
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-120.5 mx-auto mb-12 lg:mb-29">
              <Image
                src={approach.image}
                alt={approach.imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-xs sm:max-w-4xl lg:w-249.5 mx-auto flex flex-col mb-8 lg:mb-15 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            <FeatureCard feature={features[0]} index={0} />
            <FeatureCard feature={features[1]} index={1} />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            <FeatureCard feature={features[2]} index={2} />
            <FeatureCard feature={features[3]} index={3} />
          </div>
        </div>
      </section>
    </>
  );
}
