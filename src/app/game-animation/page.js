import { LazyIOS } from "../utils/lazyLoadService"; 
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";
import GameAnimation from "../components/gameAnimation";


export const metadata = {
  title: "game development",
  description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
  keywords: ["ios app development", "iphone app development", "ipad app development", "swift development", "native ios apps", "apple app development"],
  openGraph: {
    title: "iOS App Development Services - Mindefy Technologies",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
    url: "https://mindefy.tech/ios-app-development",
  },
  twitter: {
    title: "iOS App Development Services - Mindefy Technologies",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
  },
  alternates: {
    canonical: "https://mindefy.tech/ios-app-development",
  },
};

export default function gameAnimation() {
  const serviceData = createServiceData({
    name: "Game Development",
    description: "Expert iOS app development services by Mindefy Technologies. Create native iPhone and iPad applications with Swift and cutting-edge iOS technologies.",
    serviceType: "Mobile App Development",
    url: "/game-animation"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "iOS App Development", url: "https://mindefy.tech/ios-app-development" }
  ]);

  return (
    <>
      {/* <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyIOS /> */}
      <div>
      
      </div>
      <GameAnimation/>
    </>
  );
}
