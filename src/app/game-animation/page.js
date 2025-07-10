import { LazyIOS } from "../utils/lazyLoadService"; 
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";
import GameAnimation from "../components/gameAnimation";


export const metadata = {
  title: "Game Animation & Development Services - Mindefy Technologies",
  description: "Professional 2D and 3D game animation and development services by Mindefy Technologies. Create immersive gaming experiences with cutting-edge animation and game development technologies.",
  keywords: ["game animation", "game development", "2D game animation", "3D game animation", "game art", "unity development", "unreal engine", "mobile game development", "game design"],
  openGraph: {
    title: "Game Animation & Development Services - Mindefy Technologies",
    description: "Professional 2D and 3D game animation and development services by Mindefy Technologies. Create immersive gaming experiences with cutting-edge animation and game development technologies.",
    url: "https://mindefy.tech/game-animation",
  },
  twitter: {
    title: "Game Animation & Development Services - Mindefy Technologies",
    description: "Professional 2D and 3D game animation and development services by Mindefy Technologies. Create immersive gaming experiences with cutting-edge animation and game development technologies.",
  },
  alternates: {
    canonical: "https://mindefy.tech/game-animation",
  },
};

export default function gameAnimation() {
  const serviceData = createServiceData({
    name: "Game Animation & Development",
    description: "Professional 2D and 3D game animation and development services by Mindefy Technologies. Create immersive gaming experiences with cutting-edge animation and game development technologies.",
    serviceType: "Game Development",
    url: "/game-animation"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Game Animation & Development", url: "https://mindefy.tech/game-animation" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <GameAnimation/>
    </>
  );
}
