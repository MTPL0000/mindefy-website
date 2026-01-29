import EarlyFoods from "@/components/projects/EarlyFoods";

export const metadata = {
  title: "Case Study: Early Foods Custom E-commerce App",
  description:
    "How we built a D2C organic food platform. Read the case study on custom cart flows, seamless payments, and scaling e-commerce transactions.",
  keywords: ["E-commerce", "AI Recommendation"],
  alternates: { canonical: "https://mindefy.tech/early-foods-e-commerce" },
  openGraph: {
    title: "Case Study: Early Foods E-Commerce AI Solution",
    description:
      "How Mindefy built a scalable e-commerce platform for Early Foods. Learn how our AI recommendation engines boosted sales and customer retention.",
    url: "https://mindefy.tech/early-foods-e-commerce",
  },
  twitter: {
    title: "Case Study: Early Foods E-Commerce AI Solution",
    description:
      "How Mindefy built a scalable e-commerce platform for Early Foods. Learn how our AI recommendation engines boosted sales and customer retention.",
  },
};

export default function EarlyFoodsPage() {
  return <EarlyFoods />;
}
