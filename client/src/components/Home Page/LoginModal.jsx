import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1C1F20] p-6 rounded-xl w-full max-w-md text-white border border-[#EF5F07]/30 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-[#EF5F07]"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        {/* GitHub Button */}
        <button
          className="flex items-center justify-center w-full bg-[#24292F] text-white py-2 rounded-full font-medium hover:bg-[#1b1f23] transition"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.77.5 12.26c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.27.82-.58 
              0-.29-.01-1.06-.02-2.09-3.34.75-4.05-1.66-4.05-1.66-.55-1.44-1.34-1.82-1.34-1.82
              -1.1-.77.08-.75.08-.75 1.22.09 1.86 1.31 1.86 1.31 1.08 1.91 2.84 1.36 3.54 1.04
              .11-.8.42-1.36.76-1.68-2.67-.31-5.48-1.39-5.48-6.19 0-1.37.47-2.5 
              1.24-3.38-.12-.3-.54-1.52.12-3.17 0 0 1.01-.33 3.3 1.29a11.23 
              11.23 0 0 1 3.01-.42c1.02.01 2.05.14 
              3.01.42 2.28-1.62 3.29-1.29 3.29-1.29.66 1.65.24 2.87.12 
              3.17.77.88 1.24 2.01 1.24 3.38 0 4.81-2.82 5.87-5.5 
              6.18.43.38.81 1.13.81 2.28 0 1.64-.02 
              2.96-.02 3.36 0 .32.21.7.83.58A11.77 
              11.77 0 0 0 23.5 12.26C23.5 5.77 18.35.5 12 .5Z"/>
          </svg>
          Continue with GitHub
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-1 border-gray-700" />
          <span className="text-sm text-gray-400">or</span>
          <hr className="flex-1 border-gray-700" />
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-[#2A2D2F] border border-gray-700 focus:ring-2 focus:ring-[#EF5F07]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-[#2A2D2F] border border-gray-700 focus:ring-2 focus:ring-[#EF5F07]"
          />
          <button
            type="submit"
            className="w-full bg-[#EF5F07] text-black py-2 rounded-full font-medium hover:scale-105 transition"
          >
            Log In
          </button>
        </form>

        <div className="text-right mt-2 text-sm">
          <a href="#" className="text-[#EF5F07] hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
