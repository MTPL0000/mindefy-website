import { LazyAboutUs } from "../../utils/lazyLoadService";

export const metadata = {
  title: "About Mindefy: Top Technology Innovation Partner",
  description:
    "We are a global technology partner delivering AI, cloud, and software solutions. Learn how our expert engineering teams help businesses scale and innovate.",
  keywords: ["Tech Partner", "Software Agency"],
  openGraph: {
    title: "About Mindefy: Top Technology Innovation Partner",
    description:
      "We are a global technology partner delivering AI, cloud, and software solutions. Learn how our expert engineering teams help businesses scale and innovate.",
    url: "https://mindefy.tech/about-us-technology-innovators",
  },
  twitter: {
    title: "About Mindefy: Top Technology Innovation Partner",
    description:
      "We are a global technology partner delivering AI, cloud, and software solutions. Learn how our expert engineering teams help businesses scale and innovate.",
  },
  alternates: {
    canonical: "https://mindefy.tech/about-us-technology-innovators",
  },
};

export default function AboutUs() {
  return <LazyAboutUs />;
}
