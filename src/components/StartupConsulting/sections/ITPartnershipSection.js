import ServiceCard from "../ServiceCard";

export default function ITPartnershipSection({ data }) {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-250 mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-15">
          <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-semibold text-[#1E1E1E]">
            {data.title}
          </h2>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-15 max-w-241.5 mx-auto">
          {data.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
