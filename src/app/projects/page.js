import { ProjectDropdown } from "../components/HomePage/ProjectDropdown";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Our Projects & Case Studies",
  description: "Explore our successful projects and case studies at Mindefy Technologies. Discover how we've helped businesses achieve their digital transformation goals.",
  keywords: ["projects", "case studies", "portfolio", "success stories", "client work", "digital transformation"],
  openGraph: {
    title: "Our Projects & Case Studies - Mindefy Technologies",
    description: "Explore our successful projects and case studies at Mindefy Technologies. Discover how we've helped businesses achieve their digital transformation goals.",
    url: "https://mindefy.com/projects",
  },
  twitter: {
    title: "Our Projects & Case Studies - Mindefy Technologies",
    description: "Explore our successful projects and case studies at Mindefy Technologies. Discover how we've helped businesses achieve their digital transformation goals.",
  },
  alternates: {
    canonical: "https://mindefy.com/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Projects", url: "https://mindefy.com/projects" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects & Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and case studies. Discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards would go here */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-gray-600">
                We're currently updating our project showcase. Check back soon for detailed case studies and success stories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
