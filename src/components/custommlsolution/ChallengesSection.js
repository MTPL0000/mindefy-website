import Image from "next/image";
import { challengeCards } from "./data";

export default function ChallengesSection() {
  return (
    <section
      id="challenges"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold text-[#2B7575] mb-4">
            CHALLENGES
          </h2>
          <h1 className="text-xl font-normal text-[#333333]">
            Boosting Product Discovery for Busy Mothers
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {challengeCards.map((card, index) => (
            <div key={index} className="text-center max-w-md mx-auto">
              <div
                className={`relative mx-auto mb-4 h-32 ${
                  card.aspectClass || "w-[7.81rem] h-[7.81rem]"
                }`}
              >
                <Image src={card.icon} alt={card.alt} fill loading="lazy" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#000000]">
                {card.title}
              </h3>
              <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
