import { LazyYourHour } from "../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "YourHour – Screen Time & Digital Wellbeing App by Mindefy",
  description:
    "YourHour is a powerful screen time and mobile addiction tracker app created by Mindefy Technologies. Take control of your digital habits, improve focus, and boost productivity with smart insights.",
  keywords: [
    "YourHour",
    "YourHour ScreenTime App",
    "screen time tracker",
    "phone timer lock app",
    "mobile addiction control app",
    "phone addiction controller",
    "screentime for kids",
    "screen time control",
    "screen time app",
    "screen time app usage tracker",
    "screen time helper",
    "screen time parental control",
    "digital wellbeing app",
    "digital Detox app",
    "digital wellness app",
    "productivity app",
  ],
  openGraph: {
    title: "YourHour – Screen Time & Digital Wellbeing App by Mindefy",
    description:
      "YourHour is a powerful screen time and mobile addiction tracker app created by Mindefy Technologies. Take control of your digital habits, improve focus, and boost productivity with smart insights.",
    url: "https://mindefy.tech/yourhour-screentime-app",
  },
  twitter: {
    title: "YourHour – Screen Time & Digital Wellbeing App by Mindefy",
    description:
      "YourHour is a powerful screen time and mobile addiction tracker app created by Mindefy Technologies. Take control of your digital habits, improve focus, and boost productivity with smart insights.",
  },
  alternates: {
    canonical: "https://mindefy.tech/yourhour-screentime-app",
  },
};

export default function YourHourPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Products", url: "https://mindefy.tech/#products" },
    { name: "YourHour", url: "https://mindefy.tech/yourhour-screentime-app" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyYourHour />
    </>
  );
}
