const HeroSection = () => {
    return (
      <section className="flex items-center justify-center text-center px-4 py-20 sm:py-28">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 animate-gradient">
          Code. Learn. Conquer.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
          A sleek developer platform for coding practice, tech blogs, quizzes, and interview prep.
        </p>
        <a href="#"
           className="inline-block bg-[#EF5F07] text-white px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-medium hover:scale-105 hover:shadow-lg transition duration-300 focus:ring-2 ring-[#EF5F07]">
          Start Your Journey
        </a>
      </div>
    </section>
    );
  };
  
  export default HeroSection;
  