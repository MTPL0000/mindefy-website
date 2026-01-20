import Image from "next/image";
import { interviewCards, personaCards } from "./data";

export default function UserResearchSection() {
  return (
    <>
      <div className="w-full max-w-286 mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
        <div className="mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-15">
          <div className="flex flex-col justify-between items-start gap-6">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
              <div>
                <h4 className="text-[#F690A1] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2">
                  <span className="w-6 sm:w-8" role="img" aria-label="pin">📍</span> Preparation
                </h4>
                <p className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold mt-1 uppercase">USER RESEARCH</p>
              </div>
              <div>
                <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">Research Plan</h4>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                  <ul className="list-disc list-inside text-[#2B7575] font-normal text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Survey</li>
                    <li>Interview</li>
                    <li>Personas</li>
                  </ul>
                  <ul className="list-disc list-inside text-[#2B7575] font-normal text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Empathy Map</li>
                    <li>User Journey</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal mt-4 leading-relaxed">
              User research is a process to find out the user point of view, their frustrations and their struggle to get their understanding. I have two used methods which contributed hugely in addition to my own findings
            </p>
          </div>
          <div>
            <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <div className="bg-[#F88598] w-2 sm:w-2.5 h-8 sm:h-11"></div>SURVEY
            </h3>
            <p className="w-full max-w-246 text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              I did survey with <strong className="font-bold text-[#2B7575]">394 potential users</strong> in combination with interviews from individual conversation to know their <strong className="font-bold text-[#2B7575]">views, experience</strong> and to collect <strong className="font-bold text-[#2B7575]">quantitive and qualitative data</strong>. the target audience were between the age 21–50 Years old
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative">
                <Image src={`/images/projects/EFS-${num}.png`} alt="image" width={566} height={370} className="object-contain w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-286 mx-auto px-4 sm:px-6 mt-5">
        <div className="mx-auto flex flex-col gap-8 sm:gap-12">
          <div>
            <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <div className="bg-[#F88598] w-2 sm:w-2.5 h-8 sm:h-11 uppercase"></div>INTERVIEW
            </h3>
            <p className="w-full max-w-246 text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              From the survey that I have done, I did filtering, and got 2 people for direct interview. I did online interviews using Zoom and invited them at different times.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {interviewCards.map((item, idx) => (
              <div key={idx} className="relative bg-[#CBEBEB] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14 w-full max-w-142 mx-auto h-auto min-h-72 sm:min-h-80 lg:h-92 flex flex-col justify-end">
                <div className="absolute top-4 sm:top-6 right-6 sm:right-9 text-[#E9F6F6] text-[6rem] sm:text-[8rem] lg:text-[12rem] leading-none font-serif select-none">&rdquo;</div>
                <div className="mb-4 sm:mb-7">
                  <h4 className="text-[#52B7B7] font-bold text-base sm:text-lg mb-1">{item.name}</h4>
                  <p className="text-[#F88598] text-xs sm:text-sm font-normal">{item.role}</p>
                </div>
                <p className="text-[#377D7D] text-sm sm:text-base lg:text-lg font-normal leading-6 sm:leading-8">{item.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 mt-4">
        <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative flex flex-col gap-2 items-center pt-12 sm:pt-16 pb-16 sm:pb-24">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">User Persona</h2>
            <p className="text-[#377D7D] text-sm sm:text-base font-normal text-center w-full md:w-150 lg:w-188 px-4">
              It embodies the characteristics, goals, motivations, and behaviors of real users, serving as a reference point for design and decision-making processes in UX/UI development
            </p>
          </div>
        </div>
        <div className="max-w-300 mx-auto mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start px-4 sm:px-6">
          <div className="mt-6 sm:mt-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="relative mx-auto sm:mx-0 shrink-0">
                <Image src="/images/projects/EF-8.png" alt="image" width={172} height={172} className="object-contain w-32 h-32 sm:w-[172px] sm:h-[172px]" loading="lazy" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-[#52B7B7] text-xl sm:text-2xl font-bold mb-1">Rachna Rajora</h3>
                <i className="bg-[#CBEBEB] text-[#377D7D] px-4 sm:px-6 rounded-sm text-xs sm:text-sm font-semibold">"Explorer"</i>
                <ul className="text-[#377D7D] text-xs sm:text-[10px] font-medium list-disc list-inside mt-4 sm:mt-5 mb-4 space-y-1 sm:space-y-2">
                  <li>Female</li>
                  <li>Age: 32 Years</li>
                  <li>Housewife</li>
                  <li>Bangalore</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed mt-6 sm:mt-8 mb-2"></div>
            <h4 className="text-[#F88598] font-bold text-base sm:text-lg">Bio</h4>
            <p className="w-full max-w-2xl text-[#377D7D] font-normal text-justify text-sm sm:text-base lg:text-lg mt-2 leading-relaxed">
              Hi I am Rachana. I am from Neemuch but I live in Bangalore. My family was neither too open but mother has been always supportive and because of her I have achieved a lot of things in my life. I have done graduation and a diploma in hospitality. I have learned a lot from my career as I used to keep changing my jobs. I started my own business as well in Gurgaon. My business was my achievement I was so proud of and now being a mother is my another achievement as I love this phase of my life. I have a small and beautiful family of a baby boy, my dog, and my husband. I love doing DIY projects, painting, and traveling. Thanks
            </p>
          </div>
          <div className="relative mx-auto lg:ml-10 xl:ml-20">
            <Image src="/images/projects/EF-9.png" alt="image" width={545} height={608} className="object-contain w-full max-w-[400px] lg:max-w-[545px] h-auto" loading="lazy" />
          </div>
        </div>
        <div className="max-w-300 mx-auto mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left px-4 sm:px-6">
          {personaCards.map((card, i) => (
            <div key={i} className="bg-[#CBEBEB] mb-3 p-4 sm:p-6 lg:p-8 rounded-md shadow-sm flex flex-col gap-2">
              <h4 className="text-[#377D7D] font-bold text-base sm:text-lg mb-2 sm:mb-3">{card.title}</h4>
              <ul className="text-[#377D7D] ml-2 text-xs sm:text-sm font-medium list-disc list-inside space-y-1 sm:space-y-2">
                {card.items.map((item, j) => (<li key={j}>{item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
