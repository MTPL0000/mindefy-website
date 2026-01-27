"use client";

import Image from "next/image";

export default function ResourceModels() {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-[90%] md:max-w-310.5 mx-auto">
        <div className="text-center">
          <p className="text-[#FF5225] mx-auto text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] font-bold tracking-widest uppercase mb-4 md:mb-6">
            Resourcing Models at Mindefy
          </p>
          <h2 className="text-center text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-6 md:mb-8 lg:mb-11 px-2 md:px-0">
            <span className="font-normal">Resource </span>Long-term/Short-Term
            <span className="font-normal"> Assignments</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
          {[
            {
              title: "Full-time",
              desc: "At Mindefy, we understand the importance of having dedicated professionals to drive your projects forward. Our full-time resource augmentation service allows you to seamlessly integrate highly skilled individuals into your team for both long-term and short-term assignments. We carefully select professionals who possess the expertise and cultural fit required for your project. By providing consistent support, we ensure continuity, stability, and optimal productivity throughout the duration of your project.",
              img: "/images/SAS1.svg",
            },
            {
              title: "Part-time",
              desc: "For projects that require flexibility and agility, our part-time resource augmentation service is the perfect solution. Whether you need specialized expertise on a limited basis or additional support during peak workloads, we offer highly qualified professionals who seamlessly integrate into your team. This model allows you to optimize resource allocation, effectively manage costs, and maintain project momentum.",
              img: "/images/SAS2.svg",
            },
            {
              title: "Activity or Task-based Contracts",
              desc: "For projеcts that rеquirе flеxibility and agility, our part-timе rеsourcе еxpansion sеrvicеs arе thе pеrfеct solution. Whеthеr you nееd еxpеrts for a limitеd timе or additional support during pеak work pеriods, wе providе highly qualifiеd spеcialists who can sеamlеssly intеgratе into your tеam. This modеl hеlps you optimizе rеsourcе allocation еffеctivеly and managе costs ",
              img: "/images/SAS3.svg",
            },
            {
              title: "Remote (Offshore)",
              desc: "Our rеmotе outsourcing options allow you to lеvеragе our highly skillеd profеssionals working from our wеll-еquippеd dеvеlopmеnt officеs. Our Advancеd collaboration tools and еfficiеnt communication channеls еnsurе еasy and smooth coordination and еffеctivе projеct managеmеnt rеgardlеss of gеographic boundariеs.",
              img: "/images/SAS4.svg",
            },
            {
              title: "Onsite",
              desc: "If your project demands close collaboration and direct interaction, we can deploy resources to work at your premises. This enables real-time coordination, enhanced communication, and seamless integration with your existing team.",
              img: "/images/SAS5.svg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 md:p-6 w-full md:w-[20rem] lg:w-99.5 flex flex-col items-center text-center"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full md:w-[18rem] lg:w-87.5 h-12 md:h-16 lg:h-18 mb-3 md:mb-4.5">
                <h3 className="font-semibold text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]">
                  {item.title}
                </h3>
              </div>
              <div className="relative w-40 md:w-48 lg:w-55.5 h-36 md:h-44 lg:h-49.5 mb-3 md:mb-4.5">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-[0.75rem] md:text-sm font-normal pb-4 md:pb-7 w-full md:w-[18rem] lg:w-87.5 text-[#444444] leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
