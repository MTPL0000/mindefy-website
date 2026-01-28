import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import UnityUnrealContent from "@/components/UnityUnreal/UnityUnrealContent";

export const metadata = {
  title: "Unity & Unreal Engine Development Services",
  description:
    "Build high-fidelity 3D experiences. Our Unity and Unreal Engine developers create stunning games, simulations, and enterprise AR/VR applications.",
  keywords: ["Unity", "Unreal", "3D"],
  openGraph: {
    title: "Unity & Unreal Engine Development Services",
    description:
      "Build high-fidelity 3D experiences. Our Unity and Unreal Engine developers create stunning games, simulations, and enterprise AR/VR applications.",
    url: "https://mindefy.tech/unity-unreal-engine-development",
  },
  twitter: {
    title: "Unity & Unreal Engine Development Services",
    description:
      "Build high-fidelity 3D experiences. Our Unity and Unreal Engine developers create stunning games, simulations, and enterprise AR/VR applications.",
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
      <UnityUnrealContent />
    </>
  );
}
