import Image from "next/image";

export default function BPMHero() {
  return (
    <>
      <section className="mt-20 md:mt-24 lg:mt-28 mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto text-center">
          <h1 className="text-[#FF5225] text-sm md:text-base lg:text-base font-bold tracking-widest uppercase mb-4 md:mb-5 lg:mb-5">
            Buisness Process Management
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#000000] mb-4 md:mb-6 lg:mb-7 leading-tight max-w-[95%] md:max-w-160 lg:max-w-180 xl:max-w-200 mx-auto px-2 md:px-0">
            Revolutionize Your Business with <br className="hidden md:block" />
            Mindefy's Business Process Management
          </p>

          <div className="w-full max-w-[95%] md:max-w-180 lg:max-w-220 xl:w-241 font-normal mx-auto mb-6 md:mb-8 lg:mb-9 text-justify space-y-4 md:space-y-5 lg:space-y-7 px-2 md:px-4 lg:px-6 xl:px-0">
            <p className="text-sm md:text-base lg:text-base text-[#444444] leading-relaxed">
              To thrive, your business needs to be at the forefront of
              innovation, and Mindefy's BPM solutions are the key to this
              transformation. In this fast-paced environment, it's not just
              about offering a great product or service; it's about efficiently
              managing your processes to ensure optimal resource utilization and
              unwavering customer satisfaction. This is where Mindefy excels,
              providing state-of-the-art BPM solutions designed to revolutionize
              your organization's operations.
            </p>
          </div>

          <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-120.5 mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-20">
            <Image
              src="/images/WAD.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full max-w-[95%] md:max-w-220 lg:max-w-260 xl:w-273.5 mx-auto mb-12 md:mb-16 lg:mb-20 flex flex-col lg:flex-row xl:flex-row justify-between gap-6 lg:gap-8 xl:gap-0 px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full lg:w-[60%] xl:w-149.5 my-4 md:my-6 lg:my-8 xl:my-9">
          <div className="mx-2 md:mx-3 lg:mx-4 xl:mx-2.5 mt-2 md:mt-2.5 mb-4 md:mb-5">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#000000]">
              What is Business Process Management (BPM)?
            </p>
          </div>
          <div className="mx-2 md:mx-3 lg:mx-4 xl:mx-2.5 mb-2 md:mb-2.5">
            <p className="font-normal text-sm md:text-base lg:text-base text-justify text-[#444444] leading-relaxed tracking-wide">
              Business Process Management is the amalgamation of art and
              science, focused on optimizing your organization's processes to
              enhance performance, efficiency, and agility. BPM encompasses a
              spectrum of activities, including analyzing, designing,
              implementing, and continually improving processes to achieve
              strategic goals. Mindefy's BPM solutions are meticulously tailored
              to your specific needs, ensuring that your business functions with
              the precision and reliability of a well-oiled machine.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg lg:w-[35%] xl:w-93 h-48 md:h-56 lg:h-64 xl:h-93 relative mx-auto lg:mx-0 xl:mx-0">
          <Image
            src="/images/SIS11.webp"
            alt="Code Reusability"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
