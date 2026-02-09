export default function SupportCard({ card }) {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4">
        {card.title}
      </h3>
      <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
        {card.description}
      </p>
    </div>
  );
}
