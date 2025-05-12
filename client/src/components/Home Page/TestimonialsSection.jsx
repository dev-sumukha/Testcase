import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Parth Raheja", quote: "TestCase helped me crack my first internship.", role: "Student, PES" },
  { name: "Varun Kothari", quote: "The UI and quizzes are addictive.", role: "Web Developer" },
  { name: "Vidit Mehta", quote: "Used TestCase daily before my Amazon interview.", role: "SDE, Amazon" },
  { name: "Piyanshu Mishra", quote: "Roadmap and quizzes kept me focused.", role: "CS Undergrad" },
  { name: "Vashisht Bardhan", quote: "Best dev community platform!", role: "Backend Developer" },
];

const stats = [
  { label: "Users Registered", value: "12K+" },
  { label: "Questions Solved", value: "85K+" },
  { label: "Active Communities", value: "20+" },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    const container = containerRef.current;
    const interval = setInterval(() => {
      if (container) {
        setScrollPosition((prev) => {
          const next = prev + 1;
          container.scrollLeft = next;
          if (next >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
            return 0;
          }
          return next;
        });
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="bg-[#1C1F20] px-6 sm:px-12 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">❤️ What Our Users Say</h2>

        {/* Scrollable Testimonial Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] sm:min-w-[400px] bg-[#2A2D2F]/70 border border-[#EF5F07]/20 rounded-xl p-6 shadow-md transition"
            >
              <p className="text-gray-300 mb-4">“{item.quote}”</p>
              <div className="text-sm text-[#EF5F07] font-semibold">{item.name}</div>
              <div className="text-xs text-gray-500">{item.role}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-[#EF5F07] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
