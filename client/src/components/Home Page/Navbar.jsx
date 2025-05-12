import { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 backdrop-blur-md bg-[#1C1F20]/90 border-b border-[#EF5F07]/10 sticky top-0 z-50">
        
        {/* Animated Logo */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-wide animate-text-gradient bg-gradient-to-r from-[#EF5F07] via-orange-300 to-white bg-clip-text text-transparent">
          &gt;_TESTCASE
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-md">
          <a href="#" className="hover:text-[#EF5F07] transition">Home</a>
          <a href="#" className="hover:text-[#EF5F07] transition">Blogs</a>
          <a href="#" className="hover:text-[#EF5F07] transition">Tutorials</a>
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => setShowSignup(true)}
            className="bg-[#EF5F07] text-sm px-4 py-1.5 rounded-md hover:scale-105 transition focus:ring-2 ring-[#EF5F07]"
          >
            Sign Up
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="border border-[#EF5F07] text-sm px-4 py-1.5 rounded-md hover:bg-[#EF5F07] hover:text-black transition focus:ring-2 ring-[#EF5F07]"
          >
            Log In
          </button>
        </div>
      </header>

      {/* Modals */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
};

export default Navbar;
