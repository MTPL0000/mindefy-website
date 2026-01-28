import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import GameAnimationContent from "@/components/GameAnimation/GameAnimationContent";

export const metadata = {
  title: "Game Animation & 3D Graphics Services",
  description:
    "Bring your games to life with our 3D animation and game graphics services. We create stunning visual assets, characters, and environments for mobile & PC.",
  keywords: ["3D Animation", "Game Art"],
  openGraph: {
    title: "Game Animation & 3D Graphics Services",
    description:
      "Bring your games to life with our 3D animation and game graphics services. We create stunning visual assets, characters, and environments for mobile & PC.",
    url: "https://mindefy.tech/game-animation-graphics",
  },
  twitter: {
    title: "Game Animation & 3D Graphics Services",
    description:
      "Bring your games to life with our 3D animation and game graphics services. We create stunning visual assets, characters, and environments for mobile & PC.",
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
      <GameAnimationContent />
    </>
  );
}
