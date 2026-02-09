export default function ServiceSection({ service }) {
  return (
    <>
      <h3 className="text-lg xl:text-xl font-semibold text-[#000000] text-center mb-9">
        {service.title}
      </h3>
      <div className="space-y-9">
        {service.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base font-normal text-[#000000] leading-relaxed text-left tracking-wide"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}
