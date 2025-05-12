import { Code2, FileText, ShieldCheck, BookOpenCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Coding Practice",
    desc: "Sharpen your skills with real-world challenges and editor support.",
    icon: Code2,
  },
  {
    title: "Tech Blogs",
    desc: "Explore insightful blogs written by developers for developers.",
    icon: FileText,
  },
  {
    title: "Quizzes",
    desc: "Test your knowledge with topic-wise quizzes and flashcards.",
    icon: BookOpenCheck,
  },
  {
    title: "Interview Prep",
    desc: "Get interview-ready with curated tips, questions, and mock tests.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection = () => {
  return (
    <section className="px-4 sm:px-12 py-20 bg-[#1C1F20]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-pulse">🚀 Explore Features</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#2A2D2F]/70 backdrop-blur p-6 rounded-xl border border-[#EF5F07]/30 shadow-md hover:shadow-[0_0_30px_#EF5F07] hover:scale-[1.03] transition duration-300 group"
              >
                <div className="flex justify-center mb-4 group-hover:animate-spin-slow">
                  <Icon size={36} className="text-[#EF5F07]" />
                </div>
                <h3 className="text-xl font-semibold text-[#EF5F07] text-center mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm text-center group-hover:text-gray-200 transition">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
