import dynamic from "next/dynamic";
import AboutUsHero from "./AboutUsHero";
import SectionLoader from "../ui/SectionLoader";

const AboutUsValues = dynamic(() => import("./AboutUsValues"), {
  loading: () => <SectionLoader minHeight="min-h-96" />,
  ssr: true,
});

export default function AboutUsPage() {
  return (
    <section className="mx-auto bg-white">
      {/* Hero + Customer Delight - Loaded immediately for SEO */}
      <AboutUsHero />

      {/* Guiding Principles - Lazy loaded */}
      <AboutUsValues />
    </section>
  );
}
