"use client";

import dynamic from "next/dynamic";
import { ecommerceData } from "./Ecommerce/EcommerceData";
import HeroSection from "./Ecommerce/sections/HeroSection";
import ExcellenceSection from "./Ecommerce/sections/ExcellenceSection";

// Lazy load sections below the fold
const ShopifySection = dynamic(
  () => import("./Ecommerce/sections/ShopifySection"),
  {
    loading: () => <div className="h-96" />,
  }
);

const MagentoSection = dynamic(
  () => import("./Ecommerce/sections/MagentoSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Loaded immediately for LCP */}
      <HeroSection data={ecommerceData.hero} />

      <ExcellenceSection data={ecommerceData.excellence} />

      {/* Below-the-fold sections - Lazy loaded */}
      <ShopifySection data={ecommerceData.shopify} />

      <MagentoSection data={ecommerceData.magento} />
    </div>
  );
}
