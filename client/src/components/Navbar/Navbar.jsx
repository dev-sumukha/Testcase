import { useState } from "react";
import LoginModal from "../Home Page/LoginModal";
import SignupModal from "../Home Page/SignupModal";
import { Link } from "react-router";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 sticky top-0 z-50 bg-[#1C1F20] border-b border-[#EF5F07]/20 shadow-md backdrop-blur-md">
        
        {/* Animated Logo */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-wide animate-text-gradient bg-gradient-to-r from-[#EF5F07] via-orange-400 to-white bg-clip-text text-transparent">
          &gt;_TESTCASE
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-md">
          <Link to="/" className="text-white hover:text-[#EF5F07] transition">Home</Link>
          <Link to="/blogHome" className="text-white hover:text-[#EF5F07] transition">Blogs</Link>
          <Link to="/codeHome" className="text-white hover:text-[#EF5F07] transition">Practice</Link>
          <Link to="/blogHome" className="text-white hover:text-[#EF5F07] transition">Docs</Link>
          <Link to="/blogHome" className="text-white hover:text-[#EF5F07] transition">Cheatsheets</Link>
          <Link to="#" className="text-white hover:text-[#EF5F07] transition">Tutorials</Link>
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => setShowSignup(true)}
            className="bg-[#EF5F07] text-white text-sm px-4 py-1.5 rounded-md hover:scale-105 transition focus:ring-2 ring-[#EF5F07]"
          >
            Sign Up
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="border border-[#EF5F07] text-white text-sm px-4 py-1.5 rounded-md hover:bg-[#EF5F07] hover:text-black transition focus:ring-2 ring-[#EF5F07]"
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
