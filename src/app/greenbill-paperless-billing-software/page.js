import GreenBillContent from "@/components/GreenBill/GreenBillContent";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "GreenBill: Paperless GST Billing & Invoicing Software",
  description:
    "The eco-friendly billing solution for retail. Send digital receipts, manage GST invoicing, and save paper. Ideal for supermarkets and shops.",
  keywords: ["FinTech", "Paperless Billing"],
  openGraph: {
    title: "GreenBill: Digital Paperless Billing Software",
    description:
      "Discover GreenBill, the eco-friendly digital billing solution. Eliminate paper waste and streamline invoicing ",
    url: "https://mindefy.tech/greenbill-paperless-billing-software",
  },
  twitter: {
    title: "GreenBill: Digital Paperless Billing Software",
    description:
      "Discover GreenBill, the eco-friendly digital billing solution. Eliminate paper waste and streamline invoicing ",
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
      <GreenBillContent />
    </>
  );
}
