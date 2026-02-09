import SolutionCard from "../SolutionCard";

export default function SolutionsSection({
  innovation,
  established,
  solutions,
}) {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:max-w-273.5 mx-auto">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
            {innovation.title}
          </h2>
          <p className="font-normal text-sm sm:text-base lg:text-base text-[#444444] text-justify tracking-wider leading-relaxed">
            {innovation.description}
          </p>
        </div>

        <div className="mb-6 sm:mb-8 lg:mb-9 w-full max-w-3xl lg:w-[55.31rem] mx-auto">
          <h2 className="text-center text-lg sm:text-xl lg:text-3xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
            {established.title}
          </h2>
          <p className="font-normal text-sm sm:text-base lg:text-base text-[#444444] text-justify leading-relaxed px-4 sm:px-0">
            {established.description}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-7 max-w-3xl lg:max-w-[55.31rem] mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
