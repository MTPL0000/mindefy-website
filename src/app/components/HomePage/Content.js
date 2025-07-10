import Image from "next/image";

export default function Content() {
  return (
    <div className="container  max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Mission Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-6 sm:mb-8">
          <h4 className="text-sm sm:text-base text-[#FF5225] font-bold uppercase text-center md:text-left lg:ml-3">
            Who We Are
          </h4>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
          {/* Step Number */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="w-12 h-20 sm:w-16 sm:h-24 lg:w-[4.56rem] lg:h-[5.68rem] relative">
              <Image
                src="/images/1.svg"
                alt="Step 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mission Content */}
          <div className="flex-1 order-3 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black">
              Our
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 sm:mb-6 lg:mb-[1.62rem]">
              Mission
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0">
              Our mission is to empower businesses with cutting-edge technology
              solutions that propel growth, enhance efficiency, and drive
              sustainable success. As a conscious and aware team, we always
              strive to make an effort to create and design modern apps that
              play a considerable role in enhancing the life of users and
              benefit society at large.
            </p>
            {/* <a
              href="#"
              className="text-purple-600 font-semibold inline-flex items-center gap-2 hover:underline transition-colors"
            >
              READ MORE
              <span className="text-xl">&#8594;</span>
            </a> */}
          </div>

          {/* Mission Icon */}
          <div className="flex-shrink-0 order-2 lg:order-3">
            <div className="w-40 h-36 sm:w-48 sm:h-44 lg:w-[14.37rem] lg:h-[13.28rem]">
              <img
                src="/images/Switch.webp"
                alt="Mission Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-6 sm:mb-8">
          <h4 className="text-sm sm:text-base text-[#FF5225] font-bold uppercase text-center md:text-left lg:ml-3">
            What We Strive For
          </h4>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
          {/* Step Number */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="w-12 h-20 sm:w-16 sm:h-24 lg:w-[4.56rem] lg:h-[5.68rem] relative">
              <Image
                src="/images/2.svg"
                alt="Step 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mission Content */}
          <div className="flex-1 order-3 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black">
              Our
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 sm:mb-6 lg:mb-[1.62rem]">
              Vision
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0">
              Our goal at Mindefy is to be the top option for companies looking
              for disruptive technology solutions worldwide.in enhancing the
              life of users and benefit society at large.
            </p>
            {/* <a
              href="#"
              className="text-purple-600 font-semibold inline-flex items-center gap-2 hover:underline transition-colors"
            >
              READ MORE
              <span className="text-xl">&#8594;</span>
            </a> */}
          </div>

          {/* Mission Icon */}
          <div className="flex-shrink-0 order-2 lg:order-3">
            <div className="w-40 h-36 sm:w-48 sm:h-44 lg:w-[14.37rem] lg:h-[13.28rem]">
              <img
                src="/images/binoculours.webp"
                alt="Mission Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-6 sm:mb-8">
          <h4 className="text-sm sm:text-base text-[#FF5225] font-bold uppercase text-center md:text-left lg:ml-3">
            Guiding Principles
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start gap-4 lg:gap-6 ">
          {/* Step Number */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="w-12 h-20 sm:w-16 sm:h-24 lg:w-[4.56rem] lg:h-[5.68rem] relative">
              <Image
                src="/images/3.svg"
                alt="Step 3"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Values Content */}
          <div className="flex-1 order-3 lg:order-2 text-center lg:text-left">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black">
                Our
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 sm:mb-6 lg:mb-[1.62rem]">
                Values
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0">
                With an emphasis on innovation, agility, and quality in
                execution, we are motivated by a client-centric philosophy.
              </p>
            </div>
            {/* <a
              href="#"
              className="text-purple-600 font-semibold inline-flex items-center gap-2 hover:underline transition-colors"
            >
              READ MORE <span className="text-xl">→</span>
            </a> */}
          </div>

          {/* Values Icon */}
          <div className="flex-shrink-0 order-2 lg:order-3">
            <div className="w-40 h-36 sm:w-48 sm:h-44 lg:w-[14.375rem] lg:h-[13.28rem] relative">
              <Image
                src="/images/diamond.webp"
                alt="Values Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Values Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        <div className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] mx-auto mb-2 sm:mb-3">
            <Image
              src="/images/bulb.svg"
              alt="Innovation"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base font-semibold">Innovation</p>
        </div>
        <div className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] mx-auto mb-2 sm:mb-3">
            <Image
              src="/images/growth.svg"
              alt="Growth"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base font-semibold">Growth</p>
        </div>
        <div className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] mx-auto mb-2 sm:mb-3">
            <Image
              src="/images/teamwork.svg"
              alt="Teamwork"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base font-semibold">Teamwork</p>
        </div>
        <div className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] mx-auto mb-2 sm:mb-3">
            <Image
              src="/images/commitment.svg"
              alt="Commitment"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base font-semibold">Commitment</p>
        </div>
        <div className="text-center col-span-2 sm:col-span-1">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] mx-auto mb-2 sm:mb-3">
            <Image
              src="/images/positivity.svg"
              alt="Positivity"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base font-semibold">Positivity</p>
        </div>
      </div>
    </div>
  );
}
