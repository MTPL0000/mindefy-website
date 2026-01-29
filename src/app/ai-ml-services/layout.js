import ALMLandingPage from "./page";

export const metadata = {
  title: "AI & Machine Learning Development Services | Mindefy",
  description:
    "Integrate AI into your business. From predictive analytics to smart automation, we build custom AI solutions that drive real ROI. Consult our experts.",
  keywords: ["AI/ML", "NLP", "Predictive Analytics"],
  alternates: { canonical: "https://mindefy.tech/ai-ml-services" },
  openGraph: {
    title: "Custom AI & Machine Learning Development Company",
    description:
      "Hire expert AI/ML developers for custom recommendation engines, NLP, and predictive analytics. We build intelligent AI solutions for business automation.",
    url: "https://mindefy.tech/ai-ml-services",
  },
  twitter: {
    title: "Custom AI & Machine Learning Development Company",
    description:
      "Hire expert AI/ML developers for custom recommendation engines, NLP, and predictive analytics. We build intelligent AI solutions for business automation.",
  },
};

export default function AIMLPage() {
  return <ALMLandingPage />;
}
