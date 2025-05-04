import { motion } from "framer-motion";

const codingFeatures = [
  {
    title: "🧠 DSA Practice",
    description: "Solve hundreds of handpicked problems on arrays, trees, DP, and more.",
    button: "Start Solving",
    link: "/practice"
  },
  {
    title: "⚔️ Coding Contests",
    description: "Compete weekly with the community and climb the leaderboard.",
    button: "Join Contest",
    link: "/contests"
  },
  {
    title: "📚 Topic-Wise Practice",
    description: "Focus on specific problem types and master them one by one.",
    button: "Explore Topics",
    link: "/topics"
  }
];

const CodingPlatformSection = () => {
  return (
    <motion.section
      className="bg-[#1C1F20] text-white px-6 sm:px-12 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          👨‍💻 Practice. Compete. Get Hired.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-[#2A2D2F]/80 border border-[#EF5F07]/20 p-6 rounded-xl shadow hover:shadow-[0_0_20px_#EF5F07]/30 transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{feature.description}</p>
              <a
                href={feature.link}
                className="inline-block bg-[#EF5F07] text-black font-medium px-4 py-2 rounded-full hover:scale-105 transition"
              >
                {feature.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CodingPlatformSection;
