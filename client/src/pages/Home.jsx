import Navbar from "../components/Home Page/Navbar";
import HeroSection from "../components/Home Page/HeroSection";
import FeaturesSection from "../components/Home Page/FeaturesSection";
import TestimonialsSection from "../components/Home Page/TestimonialsSection";
import BlogPreviewSection from "../components/Home Page/BlogPreviewSection";
import CodingPlatformSection from "../components/Home Page/CodingPlatformSection";
import Footer from "../components/Home Page/Footer";

const Home = () => {
  return (
    <div className="bg-[#1C1F20] text-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CodingPlatformSection />
      <Footer />
    </div>
  );
};

export default Home;
