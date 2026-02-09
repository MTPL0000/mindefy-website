import SupportCard from "../SupportCard";

export default function ComprehensiveSupportSection({ data }) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-opacity-1 bg-linear-to-br from-[#f6d6ce] via-[#e6e2fc] to-[#dee6ff]">
      <div className="relative z-10 max-w-360 mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-semibold text-[#000000]">
            {data.title}
          </h2>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-15">
          <p className="font-medium text-sm sm:text-base w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[43.81rem] text-center mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 max-w-290 mx-auto">
          {data.cards.map((card, index) => (
            <SupportCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
