import FeatureCard from "../FeatureCard";

export default function FeaturesSection({ data }) {
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-[#FF5722] text-xl md:text-2xl font-medium uppercase">
          {data.tag}
        </p>
        <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#333333] text-center">
          Actionable Insights by AI and Generative AI Asset{" "}
          <span className="block md:inline">Health Platform</span>
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 md:gap-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-4xl">
          <FeatureCard feature={data.items[0]} />
          <FeatureCard feature={data.items[1]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-4xl">
          <FeatureCard feature={data.items[2]} />
          <FeatureCard feature={data.items[3]} />
        </div>
      </div>
    </div>
  );
}
