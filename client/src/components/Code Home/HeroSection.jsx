import React from "react";

const HeroSection = () => (
  <section className="flex items-center justify-center text-center px-6 py-24 bg-[#1C1F20]">
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-gradient bg-gradient-to-r from-[#EF5F07] via-yellow-400 to-white bg-clip-text text-transparent">
        Crack Coding Interviews. One Problem at a Time.
      </h1>
      <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
        Practice DSA, compete in contests, and level up your problem-solving with real-time analytics.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/practice" className="px-6 py-3 bg-[#EF5F07] text-black font-semibold rounded-full hover:scale-105 transition">
          Start Solving 🚀
        </a>
        <a href="/contests" className="px-6 py-3 border border-[#EF5F07] text-[#EF5F07] rounded-full hover:bg-[#EF5F07]/10 transition">
          Join Contests
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;