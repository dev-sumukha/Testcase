import React from "react";

const LeaderboardSection = () => (
  <section className="bg-[#0f0f0f] py-20 text-center px-6 border-t border-[#EF5F07]/10">
    <h2 className="text-3xl font-bold mb-4 text-white">🏆 Leaderboard & Community</h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-8">
      Compete with other devs, earn badges, and build your profile. It’s not just coding — it’s a game!
    </p>
    <a
      href="/leaderboard"
      className="px-6 py-3 bg-[#EF5F07] text-black font-semibold rounded-full hover:scale-105 transition"
    >
      View Leaderboard 🔥
    </a>
  </section>
);

export default LeaderboardSection;