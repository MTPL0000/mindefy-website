import SolutionCard from "../SolutionCard";

export default function SolutionsSection({
  tailored,
  innovation,
  partnership,
}) {
  return (
    <section className="mt-8 lg:mt-15">
      <div className="max-w-full sm:max-w-5xl lg:max-w-290 mx-auto px-4 sm:px-6 lg:px-0">
        {/* Tailored Solutions */}
        <div className="p-2 lg:p-2.5 mb-8 lg:mb-15">
          <div className="text-center mb-8 lg:mb-11">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-3 lg:mb-4">
              {tailored.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] leading-relaxed max-w-full sm:max-w-2xl lg:max-w-214.5 mx-auto px-2 sm:px-0">
              {tailored.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {tailored.cards.map((card, index) => (
              <SolutionCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Focus */}
      <div className="max-w-full sm:max-w-5xl lg:max-w-290 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="p-2 lg:p-2.5 mb-8 lg:mb-15">
          <div className="text-center mb-8 lg:mb-11">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-3 lg:mb-4">
              {innovation.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] leading-relaxed max-w-full sm:max-w-2xl lg:max-w-214.5 mx-auto px-2 sm:px-0">
              {innovation.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {innovation.cards.map((card, index) => (
              <SolutionCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Collaborative Partnership */}
      <div className="max-w-full sm:max-w-5xl lg:max-w-290 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="p-2 lg:p-2.5 mb-8 lg:mb-15">
          <div className="text-center mb-8 lg:mb-11">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-3 lg:mb-4">
              {partnership.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] leading-relaxed max-w-full sm:max-w-2xl lg:max-w-214.5 mx-auto px-2 sm:px-0">
              {partnership.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {partnership.cards.map((card, index) => (
              <SolutionCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
