import AdvantageCard from "../AdvantageCard";

export default function AdvantagesSection({ data }) {
  return (
    <section className="mt-8 lg:mt-15">
      <div className="max-w-full sm:max-w-4xl lg:max-w-241.5 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mb-8 lg:mb-10">
          <h2 className="p-2 lg:p-2.5 text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-[#000000] mb-4 lg:mb-6 text-center lg:text-left">
            The Advantages of Selecting
            <br className="hidden lg:block" />
            Mindefy's IT Consulting Services
          </h2>
          <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] font-normal leading-relaxed max-w-full lg:max-w-236.5 mx-auto text-justify">
            {data.description}
          </p>
        </div>

        <div className="space-y-4 lg:space-y-6 mx-auto w-full lg:w-[60.18rem]">
          {data.items.map((item, index) => (
            <AdvantageCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
