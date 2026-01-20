import Image from "next/image";

export default function InformationArchitectureSection() {
  return (
    <>
      <div className="w-full mx-auto mt-20 px-6 bg-[#E8F4F4] relative overflow-hidden">
        <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative flex flex-col gap-2 items-center pb-24">
            <h2 className="text-[#52B7B7] text-5xl font-extrabold">Information Architecture</h2>
            <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-full md:w-150 lg:w-188">
              People often use the word "Information Architecture" to mean the menus on website or apps, but thats not really correct. while menus are a part of IA. they're really only one part of it. Information architecture is all about organisation of information in a clear and logical way. such organisation follows a clear purpose helping users navigate complex sets of information
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <Image src="/images/EF-INFO.webp" alt="Main UI with annotations" width={1147} height={1600} className="object-contain" loading="lazy" />
        </div>
      </div>
      <div className="w-full mx-auto px-6 bg-[#E9F6F6] relative overflow-hidden">
        <div className="relative top-56 w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative z-12 flex flex-col gap-2 items-center pb-16 sm:pb-24">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">UI Design</h2>
            <p className="text-[#377D7D] leading-relaxed text-sm sm:text-base font-normal text-center w-full md:w-150 lg:w-188 px-4">
              Every components layout structures, and color combinations are backed by strong human psychology of perceiving experiences quoted by sir Don Norman in the book - The design of everyday Things.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/images/UIDesgin.webp" alt="Main UI with annotations" width={1440} height={2000} className="object-contain w-full h-auto" loading="lazy" />
        </div>
      </div>
    </>
  );
}
