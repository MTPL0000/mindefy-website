import Image from "next/image";
import ServiceSection from "../ServiceSection";

export default function MagentoSection({ data }) {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="max-w-6xl xl:max-w-290 mx-auto">
        <div
          className={`flex flex-col lg:flex-row ${data.bgColor} rounded-xl py-10 px-4 xl:px-2.5`}
        >
          <div className="flex-1 w-full xl:w-136 ml-0 xl:ml-2.5 mb-6 lg:mb-0">
            <p
              className={`text-xl xl:text-[1.75rem] font-semibold uppercase ${data.titleColor}`}
            >
              {data.title}
            </p>
            <p
              className={`text-xl xl:text-[1.75rem] mb-3 font-normal ${data.titleColor}`}
            >
              {data.subtitle}
            </p>
            <p
              className={`text-[1rem] w-full xl:w-136 tracking-wide font-normal ${data.textColor} leading-relaxed text-justify`}
            >
              {data.description}
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm xl:w-[35.06rem] h-32 md:h-48 xl:h-56.5 relative">
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

        <div className="mt-15 w-full max-w-3xl xl:w-185.5 mx-auto space-y-15">
          {data.services.map((service, index) => (
            <ServiceSection key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
