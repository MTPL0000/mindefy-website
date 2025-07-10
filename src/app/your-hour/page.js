import { LazyYourHour } from "../utils/lazyLoadService";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Your Hour - Time Management App",
  description: "Your Hour is an innovative time management and productivity app developed by Mindefy Technologies. Take control of your digital life and boost productivity.",
  keywords: ["your hour", "time management", "productivity app", "digital wellness", "time tracking", "mobile app"],
  openGraph: {
    title: "Your Hour - Time Management App - Mindefy Technologies",
    description: "Your Hour is an innovative time management and productivity app developed by Mindefy Technologies. Take control of your digital life and boost productivity.",
    url: "https://mindefy.tech/your-hour",
  },
  twitter: {
    title: "Your Hour - Time Management App - Mindefy Technologies",
    description: "Your Hour is an innovative time management and productivity app developed by Mindefy Technologies. Take control of your digital life and boost productivity.",
  },
  alternates: {
    canonical: "https://mindefy.tech/your-hour",
  },
};

export default function YourHourPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Products", url: "https://mindefy.tech/#products" },
    { name: "Your Hour", url: "https://mindefy.tech/your-hour" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyYourHour />
    </>
  );
}
