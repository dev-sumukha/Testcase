import { motion } from "framer-motion";

const BlogIntro = () => {
  return (
    <section id="blogs" className="pt-28 pb-12 px-4 text-center bg-gradient-to-b from-transparent to-[#1C1F20]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EF5F07] via-yellow-400 to-white mb-6"
      >
        ✍️ Latest Developer Blogs
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
      >
        Explore tutorials, dev tips, and technical breakdowns from top contributors.
      </motion.p>
    </section>
  );
};

export default BlogIntro;
