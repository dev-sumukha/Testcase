import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-[#1C1F20] text-white min-h-screen flex flex-col items-center justify-center text-center font-lexend px-4">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EF5F07] to-white mb-4">
        404 😵‍💫
      </h1>

      <p className="text-2xl sm:text-3xl text-gray-300 mb-3">
        Bruh... This route doesn't exist.
      </p>
      <p className="text-md sm:text-lg text-gray-500 mb-6">
        Either you typed something wrong, or this page went on a coffee break ☕
      </p>

      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3JoZzdpcmtmZW81bHFjZGRxMmF1dzU4M2Y5bG9nNGV4bHBlYTN6MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif"
        alt="404 Meme"
        className="w-72 sm:w-96 rounded-lg shadow-lg border border-[#EF5F07]/20"
      />

      <p className="mt-8 text-sm text-gray-400">
        It's not you, it's us... okay no, it's you. But we still love you ❤️
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-[#EF5F07] text-black font-semibold rounded-full hover:scale-105 transition"
      >
        Back to Sanity 🧠
      </Link>
    </div>
  );
};

export default NotFoundPage;
