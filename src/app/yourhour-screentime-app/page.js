import { LazyYourHour } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "YourHour: Screen Time Control & Digital Wellbeing",
  description:
    "YourHour app helps millions boost productivity. Download our top-rated digital wellbeing solution to track usage, limit screen time, and beat phone addiction.",
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
    title: "YourHour: Screen Time Control & Digital Wellbeing",
    description:
      "YourHour app helps millions boost productivity. Download our top-rated digital wellbeing solution to track usage, limit screen time, and beat phone addiction.",
    url: "https://mindefy.tech/yourhour-screentime-app",
  },
  twitter: {
    title: "YourHour: Screen Time Control & Digital Wellbeing",
    description:
      "YourHour app helps millions boost productivity. Download our top-rated digital wellbeing solution to track usage, limit screen time, and beat phone addiction.",
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
