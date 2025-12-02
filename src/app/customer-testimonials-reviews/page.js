import { LazyTestimonialsMore } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Customer Testimonials & Reviews | Mindefy Technologies",
  description:
    "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
  keywords: [
    "testimonials",
    "client reviews",
    "customer feedback",
    "success stories",
    "client satisfaction",
    "recommendations",
  ],
  openGraph: {
    title: "Customer Testimonials & Reviews | Mindefy Technologies",
    description:
      "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
    url: "https://mindefy.tech/customer-testimonials-reviews",
  },
  twitter: {
    title: "Customer Testimonials & Reviews | Mindefy Technologies",
    description:
      "Read what our clients say about Mindefy Technologies. Discover testimonials and reviews from satisfied customers who have experienced our exceptional services.",
  },
  alternates: {
    canonical: "https://mindefy.tech/customer-testimonials-reviews",
  },
};

export default function TestimonialsMorePage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    {
      name: "Testimonials",
      url: "https://mindefy.tech/customer-testimonials-reviews",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyTestimonialsMore />
    </>
  );
}
