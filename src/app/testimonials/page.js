import { LazyTestimonialsMore } from "../utils/lazyLoadService";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Client Testimonials & Reviews",
  description: "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
  keywords: ["testimonials", "client reviews", "customer feedback", "success stories", "client satisfaction", "recommendations"],
  openGraph: {
    title: "Client Testimonials & Reviews - Mindefy Technologies",
    description: "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
    url: "https://mindefy.tech/testimonials",
  },
  twitter: {
    title: "Client Testimonials & Reviews - Mindefy Technologies",
    description: "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
  },
  alternates: {
    canonical: "https://mindefy.tech/testimonials",
  },
};

export default function TestimonialsMorePage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Testimonials", url: "https://mindefy.tech/testimonials" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyTestimonialsMore />
    </>
  );
}
