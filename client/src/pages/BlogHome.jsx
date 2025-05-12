import HeroSection from "../components/Blog Home/HeroSection";
import FeaturesSection from "../components/Blog Home/FeaturesSection";
import AIPromoSection from "../components/Blog Home/AIPromoSection";
import BlogIntro from "../components/Blog Home/BlogIntro";
import FeaturedBlog from "../components/Blog Home/FeaturedBlog";
import BlogsSection from "../components/Blog Home/BlogsSection";
import FooterCTA from "../components/Blog Home/FooterCTA";

const BlogHome = () => {
  return (
    <div className="bg-[#1C1F20] text-white font-lexend">
      <HeroSection />
      <FeaturesSection />
      <AIPromoSection />
      <BlogIntro />
      <FeaturedBlog />
      <BlogsSection />
      <FooterCTA />
    </div>
  );
};

export default BlogHome;
