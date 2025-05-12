import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center text-center px-4 py-20 sm:py-28 bg-[#1C1F20]">
      <div>
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 animate-gradient bg-gradient-to-r from-[#EF5F07] via-orange-300 to-white bg-clip-text text-transparent"
        >
          Create, collaborate, and scale your blogs and docs.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
          A powerful platform to build and grow developer content, with AI tools and community reach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block bg-[#EF5F07] text-black px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300 focus:ring-2 ring-[#EF5F07]"
          >
            Start Writing
          </a>
          <a
            href="#blogs"
            className="inline-block border border-[#EF5F07] text-[#EF5F07] px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#EF5F07]/10 transition duration-300"
          >
            Explore Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
