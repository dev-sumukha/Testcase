import { motion } from "framer-motion";

const blogs = [
  {
    title: "Mastering JavaScript Closures",
    date: "Apr 28, 2025",
    snippet: "Closures are powerful but tricky. Learn how to use them in real-world scenarios...",
  },
  {
    title: "Top 10 React Interview Questions",
    date: "Apr 22, 2025",
    snippet: "If you're prepping for a frontend role, these React questions will give you an edge...",
  },
  {
    title: "Understanding Tailwind Utility Classes",
    date: "Apr 18, 2025",
    snippet: "Tailwind speeds up UI development. Here's a breakdown of the most used classes...",
  },
  {
    title: "How to Use Framer Motion in React",
    date: "Apr 15, 2025",
    snippet: "Bring your UI to life with smooth animations using Framer Motion. Here's a beginner's guide...",
  },
  {
    title: "Node.js Tips for Beginners",
    date: "Apr 10, 2025",
    snippet: "New to Node.js? Avoid these common mistakes and follow best practices to write clean code.",
  },
];

const Blogs = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#1C1F20] text-white px-6 sm:px-12 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          📝 All Blog Articles
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-[#2A2D2F]/80 p-6 rounded-xl border border-[#EF5F07]/20 shadow-md hover:shadow-[0_0_20px_#EF5F07]/20 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#EF5F07] text-sm mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{blog.snippet}</p>
              <a href="#" className="text-sm text-[#EF5F07] hover:underline">
                Read Full Article →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
