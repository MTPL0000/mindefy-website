import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import UnityUnreal from "@/components/unityunreal";

export const metadata = {
  title: "Unity & Unreal Engine Development Services | Mindefy Technologies",
  description:
    "Offers expert Unity and Unreal Engine development services specializing in 2D and 3D game animation, immersive game development, and cutting-edge technologies to create engaging, high-performance gaming experiences.",
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
    title: "Unity & Unreal Engine Development Services | Mindefy Technologies",
    description:
      "Offers expert Unity and Unreal Engine development services specializing in 2D and 3D game animation, immersive game development, and cutting-edge technologies to create engaging, high-performance gaming experiences.",
    url: "https://mindefy.tech/unity-unreal-engine-development",
  },
  twitter: {
    title: "Unity & Unreal Engine Development Services | Mindefy Technologies",
    description:
      "Offers expert Unity and Unreal Engine development services specializing in 2D and 3D game animation, immersive game development, and cutting-edge technologies to create engaging, high-performance gaming experiences.",
  },
  alternates: {
    canonical: "https://mindefy.tech/unity-unreal-engine-development",
  },
};

export default function UnityUnrealPage() {
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
      <UnityUnreal />
    </>
  );
}
