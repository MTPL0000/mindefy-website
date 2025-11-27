import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import GameAnimation from "@/components/gameAnimation";

export const metadata = {
  title: "Game Animation & Graphics Services | Mindefy Technologies",
  description:
    "Provides expert game animation and game development services, creating immersive 2D game animation, 3D game animation, game art with Unity development and Unreal Engine.",
  keywords: [
    "game animation",
    "game development",
    "2D game animation",
    "3D game animation",
    "game art",
    "unity development",
    "unreal engine",
    "mobile game development",
    "game design",
  ],
  openGraph: {
    title: "Game Animation & Graphics Services | Mindefy Technologies",
    description:
      "Provides expert game animation and game development services, creating immersive 2D game animation, 3D game animation, game art with Unity development and Unreal Engine.",
    url: "https://mindefy.tech/game-animation-graphics",
  },
  twitter: {
    title: "Game Animation & Graphics Services | Mindefy Technologies",
    description:
      "Provides expert game animation and game development services, creating immersive 2D game animation, 3D game animation, game art with Unity development and Unreal Engine.",
  },
  alternates: {
    canonical: "https://mindefy.tech/game-animation-graphics",
  },
};

export default function gameAnimation() {
  const serviceData = createServiceData({
    name: "Game Animation & Development",
    description:
      "Professional 2D and 3D game animation and development services by Mindefy Technologies. Create immersive gaming experiences with cutting-edge animation and game development technologies.",
    serviceType: "Game Development",
    url: "/game-animation-graphics",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "Game Animation & Development",
      url: "https://mindefy.tech/game-animation-graphics",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <GameAnimation />
    </>
  );
}
