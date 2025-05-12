import React from "react";

const features = [
  {
    title: "\uD83E\uDDE0 DSA Practice",
    desc: "Solve curated problems across arrays, trees, DP, and more with real-time progress tracking.",
    link: "/practice",
  },
  {
    title: "\u2694\uFE0F Coding Contests",
    desc: "Join weekly contests, earn points, and climb the leaderboard to prove your skills.",
    link: "/contests",
  },
  {
    title: "\uD83D\uDCDA Topic-Wise Sets",
    desc: "Focus on weak areas like graphs or strings using topic-specific problem sets.",
    link: "/topics",
  },
];

const FeaturesSection = () => (
  <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {features.map((f, i) => (
      <div
        key={i}
        className="bg-[#2A2D2F]/80 border border-[#EF5F07]/20 p-6 rounded-xl hover:shadow-[0_0_30px_#EF5F07]/40 transition"
      >
        <h3 className="text-xl font-semibold mb-2 text-[#EF5F07]">{f.title}</h3>
        <p className="text-gray-400 mb-4">{f.desc}</p>
        <a href={f.link} className="text-sm text-[#EF5F07] font-medium hover:underline">
          Explore →
        </a>
      </div>
    ))}
  </section>
);

export default FeaturesSection;
