import Image from "next/image";

export default function VRSection({ data }) {
  return (
    <section
      className="bg-white mb-12 lg:mb-20 px-4 xl:px-0 mt-12 lg:mt-0"
      aria-labelledby="vr-development-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-center">
          <div className="flex-1 w-full order-2 lg:order-1">
            <h2
              id="vr-development-heading"
              className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8"
            >
              {data.title}
            </h2>

            <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
              {data.description}
            </p>

            <div className="mb-4 lg:mb-3">
              <h3 className="text-[#444444] font-normal mb-3">
                Our VR Development Services Include:
              </h3>
              <ul className="text-sm text-[#444444] space-y-2">
                {data.services.map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm sm:text-base text-[#444444] text-justify leading-relaxed">
              {data.footer}
            </p>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[20rem] sm:w-88 lg:w-100 xl:w-100 h-80 sm:h-88 lg:h-100 xl:h-100 lg:mr-2.5">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
