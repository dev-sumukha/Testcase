import React from "react";
import HeroSection from "../components/Code Home/HeroSection";
import FeaturesSection from "../components/Code Home/FeaturesSection";
import LeaderboardSection from "../components/Code Home/LeaderboardSection";
import FooterCTA from "../components/Code Home/FooterCTA";

const CodingPlatformHome = () => {
  return (
    <div className="bg-[#1C1F20] text-white font-lexend min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <LeaderboardSection />
      <FooterCTA />
    </div>
  );
};

export default CodingPlatformHome;