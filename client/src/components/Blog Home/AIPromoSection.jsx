const AIPromoSection = () => {
    return (
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-[#0f0f0f] via-[#1C1F20] to-[#0f0f0f]">
        <h2 className="text-4xl font-bold mb-4">⚡ AI-powered writing for developers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Generate summaries, SEO titles, and restructure posts with just one click — powered by GenAI.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-[#2A2D2F]/80 p-6 rounded-xl border border-[#EF5F07]/20">
            <h3 className="text-xl font-semibold mb-2">✍️ AI Writing Assistant</h3>
            <p className="text-sm text-gray-400">Suggests intros, outlines, and enhances clarity for your drafts.</p>
          </div>
          <div className="bg-[#2A2D2F]/80 p-6 rounded-xl border border-[#EF5F07]/20">
            <h3 className="text-xl font-semibold mb-2">📊 Instant Content Insights</h3>
            <p className="text-sm text-gray-400">Analyze tone, structure, and readability in real-time.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AIPromoSection;
  