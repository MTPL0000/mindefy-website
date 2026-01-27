import Image from "next/image";

export default function GreenBillHero() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 lg:gap-24 pt-16">
      <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12 mt-8 px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
          <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
            GreenBill
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
              GreenBill{" "}
              <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                A Sustainable Solution <br />
              </span>
            </span>
            <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
              For{" "}
              <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                Digital Bill{" "}
              </span>
              Management
            </span>
          </div>
        </div>
        <span className="text-sm lg:text-base font-normal text-[#000000] text-justify">
          An innovative application developed by Mindefy, designed to
          revolutionize digital bill generation and management while promoting
          environmental sustainability. With a strong focus on environmental
          sustainability and efficiency, GreenBill is revolutionizing the way
          businesses generate and manage bills. Say goodbye to paper waste and
          embrace a paperless future with our comprehensive suite of apps:
          Merchant, Admin, and Customer.
        </span>
      </div>

      <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(26,204,64,0.57)_52.4%,rgba(254,254,254,0.6)_100%)]">
        <div className="m-auto relative aspect-video md:aspect-2/1 w-full max-w-280 overflow-hidden">
          <Image
            src="/images/projects/DB-1.webp"
            alt="GreenBill Dashboard"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
