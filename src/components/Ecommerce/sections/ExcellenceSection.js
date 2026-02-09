export default function ExcellenceSection({ data }) {
  return (
    <div className="w-full max-w-2xl xl:w-[43.56rem] mx-auto px-4 xl:px-0">
      <div className="mt-5 mb-3">
        <p className="font-semibold text-lg xl:text-3xl text-[#000000] mb-4">
          {data.title}
        </p>
        <p className="ml-0 xl:ml-2.5 font-normal text-base">
          <span className="font-semibold text-lg xl:text-xl">
            Shopify and Magento
          </span>{" "}
          {data.subtitle.replace("Shopify and Magento ", "")}
        </p>
      </div>
      <div
        className="w-full max-w-2xl xl:w-165 mx-auto rounded-xl p-5 bg-[#FFFFFF]"
        style={{
          boxShadow:
            "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="font-semibold text-lg xl:text-xl">{data.highlight}</p>
      </div>
    </div>
  );
}
