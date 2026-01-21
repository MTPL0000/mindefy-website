import Image from "next/image";

export default function ARSection({ data }) {
  return (
    <section
      className="bg-white px-4 xl:px-0"
      aria-labelledby="ar-development-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-center">
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <div className="relative w-[20rem] sm:w-88 lg:w-100 xl:w-100 h-80 sm:h-88 lg:h-100 xl:h-100 lg:ml-2.5">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2
              id="ar-development-heading"
              className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8"
            >
              {data.title}
            </h2>

            <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
              {data.description}
            </p>

            <div className="mb-4 lg:mb-3">
              <h3 className="text-[#444444] font-normal mb-3">
                Our AR Development Services Include:
              </h3>
              <ul className="text-sm text-[#444444] space-y-2">
                {data.services.map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
              {data.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
