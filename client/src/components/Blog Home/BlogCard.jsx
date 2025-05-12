import { motion } from "framer-motion";

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#2A2D2F]/60 border border-[#EF5F07]/30 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_0_40px_#EF5F07]/40 transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between"
    >
      <header>
        <p className="text-sm text-[#EF5F07] mb-1">{post.date}</p>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#EF5F07] transition">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.snippet}</p>
      </header>
      <footer className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="w-8 h-8 bg-[#EF5F07]/20 text-[#EF5F07] font-bold rounded-full flex items-center justify-center">
            {post.author[0]}
          </div>
          <span className="font-medium">By {post.author}</span>
        </div>
        <a
          href={`/blogs/${post.slug}`}
          className="text-sm text-[#EF5F07] hover:underline font-semibold transition"
        >
          Read →
        </a>
      </footer>
    </motion.article>
  );
};

export default BlogCard;
