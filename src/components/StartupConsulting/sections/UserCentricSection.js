import Image from "next/image";

export default function UserCentricSection({ data }) {
  return (
    <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-300 xl:w-290 mb-12 sm:mb-16 md:mb-20 mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="w-full lg:w-191.5 mb-6 lg:mb-0">
        <div className="font-semibold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] text-[#000000] mb-4 sm:mb-5 text-center lg:text-left">
          <p>{data.title}</p>
        </div>
        <div className="font-normal text-[0.875rem] sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mb-4 sm:mb-6" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="relative w-60 sm:w-[18rem] md:w-[20rem] lg:w-93 lg:ml-5 my-3.5 h-60 sm:h-72 md:h-80 lg:h-93.5 mx-auto">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
