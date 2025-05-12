import { useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const blogPosts = [
  {
    slug: "react-context",
    title: "Understanding React Context",
    date: "May 2, 2025",
    author: "Ananya",
    tags: ["react"],
    snippet: "Simplify state management with the React Context API — perfect for mid-sized apps.",
  },
  {
    slug: "tailwind-layout",
    title: "Tailwind CSS Layout Mastery",
    date: "Apr 25, 2025",
    author: "Rahul",
    tags: ["tailwind"],
    snippet: "Master flexbox and grid layouts with Tailwind’s utility-first approach.",
  },
  {
    slug: "next-vs-react",
    title: "Next.js vs React: Key Differences",
    date: "Apr 18, 2025",
    author: "Sneha",
    tags: ["react"],
    snippet: "When to use Next.js over plain React — SEO, routing, and performance guide.",
  },
  {
    slug: "vercel-deploy",
    title: "Deploying with Vercel",
    date: "Apr 10, 2025",
    author: "Aarav",
    tags: ["deployment"],
    snippet: "A simple guide to deploying your React app on Vercel with CI/CD tips.",
  },
];

const BlogsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <>
      {/* Search + Tags */}
      <div className="max-w-4xl mx-auto px-4 mt-4 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-[#2A2D2F] text-white placeholder-gray-400 border border-[#EF5F07]/20 focus:ring-2 focus:ring-[#EF5F07]"
        />
        <div className="flex gap-2 flex-wrap text-sm">
          {["react", "tailwind", "deployment"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? "" : tag)}
              className={`px-4 py-1 rounded-full border ${
                activeTag === tag
                  ? "bg-[#EF5F07] text-black border-[#EF5F07]"
                  : "bg-[#EF5F07]/10 text-[#EF5F07] border-[#EF5F07]/30"
              } transition hover:opacity-90`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </section>

      {/* Pagination */}
      <Pagination />
    </>
  );
};

export default BlogsSection;
