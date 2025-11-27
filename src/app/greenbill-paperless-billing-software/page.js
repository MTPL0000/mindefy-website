import { LazyGreenBill } from "../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "GreenBill Paperless Billing Software | Mindefy Technologies",
  description:
    "Presents GreenBill, innovative paperless billing software featuring digital billing, invoice management, and comprehensive billing solutions to streamline fintech processes efficiently.",
  keywords: [
    "GreenBill",
    "digital billing",
    "billing software",
    "invoice management",
    "billing solution",
    "fintech",
  ],
  openGraph: {
    title: "GreenBill Paperless Billing Software | Mindefy Technologies",
    description:
      "Presents GreenBill, innovative paperless billing software featuring digital billing, invoice management, and comprehensive billing solutions to streamline fintech processes efficiently.",
    url: "https://mindefy.tech/greenbill-paperless-billing-software",
  },
  twitter: {
    title: "GreenBill Paperless Billing Software | Mindefy Technologies",
    description:
      "Presents GreenBill, innovative paperless billing software featuring digital billing, invoice management, and comprehensive billing solutions to streamline fintech processes efficiently.",
  },
  alternates: {
    canonical: "https://mindefy.tech/greenbill-paperless-billing-software",
  },
};

export default function GreenBillPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Projects", url: "https://mindefy.tech/projects" },
    {
      name: "GreenBill",
      url: "https://mindefy.tech/greenbill-paperless-billing-software",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyGreenBill />
    </>
  );
}
