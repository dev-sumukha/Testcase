import { motion } from "framer-motion";

const FeaturedBlog = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 -mt-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-[#2A2D2F]/70 backdrop-blur-md rounded-2xl border border-[#EF5F07]/30 shadow-lg overflow-hidden flex flex-col md:flex-row"
      >
        <div className="flex-1 p-6 md:p-10">
          <span className="inline-block px-3 py-1 text-sm bg-[#EF5F07]/20 text-[#EF5F07] rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-3xl font-bold mb-4 text-white leading-tight">
            Understanding React Context in Depth
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Dive deeper into React state management. Learn how context works, when to use it, and how to scale it with custom hooks and providers.
          </p>
          <a
            href="/blogs/react-context"
            className="inline-block px-5 py-2 bg-[#EF5F07] text-black font-medium rounded-full hover:scale-105 transition"
          >
            Read Now →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedBlog;
