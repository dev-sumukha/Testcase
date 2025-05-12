import React from "react";

const FooterCTA = () => (
  <footer className="text-center py-16 px-6 bg-[#1C1F20] border-t border-[#EF5F07]/10">
    <h3 className="text-xl font-semibold mb-2 text-white">Ready to become interview-proof?</h3>
    <p className="text-gray-400 mb-4">TestCase helps you build confidence, one problem at a time.</p>
    <a
      href="/signup"
      className="px-6 py-3 bg-[#EF5F07] text-black font-medium rounded-full hover:scale-105 transition"
    >
      Sign Up Free 💪
    </a>
    <p className="text-xs text-gray-600 mt-8">© 2025 TestCase Coding. All rights reserved.</p>
  </footer>
);

export default FooterCTA;