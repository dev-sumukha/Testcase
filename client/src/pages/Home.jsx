import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogPreviewSection from "../components/BlogPreviewSection";
import CodingPlatformSection from "../components/CodingPlatformSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#1C1F20] text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* Coding Features Section */}
      <CodingPlatformSection />
      <Footer />
    </div>
  );
};

export default Home;
