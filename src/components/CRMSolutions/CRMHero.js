import Image from "next/image";

export default function CRMHero() {
  return (
    <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-base font-bold tracking-widest uppercase mb-5">
          CRM Solutions
        </h1>

        <p className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-200 mx-auto px-4">
          <span className="font-normal">Unleash the </span>Power of Connections
          <span className="font-normal"> with </span>Mindefy's CRM Mastery
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 px-4 lg:text-justify text-left space-y-5">
          <p className="text-base text-[#444444] leading-relaxed">
            Mindefy , your trusted partner in the art of forging meaningful
            relationships with your customers. In today's dynamic business
            world, customer relationships are the lifeblood of success. But to
            truly excel, you need more than just CRM software; you need a CRM
            solution that takes your business to the next level.
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-6">
          <Image
            src="/images/CRM.webp"
            alt="Web Application Development - Developer working with web applications"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
