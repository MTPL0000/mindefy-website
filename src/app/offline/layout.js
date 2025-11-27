import OfflinePage from "./page";

export const metadata = {
  title: "Offline | Mindefy Technologies",
  description: "You are offline. Please check your connection and try again.",
  robots: { index: false, follow: false },
};

export default function OfflineLayout() {
  return <OfflinePage />;
}
