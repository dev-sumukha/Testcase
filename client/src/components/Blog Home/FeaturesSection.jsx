const FeaturesSection = () => {
    return (
      <section className="max-w-7xl mx-auto py-24 px-6 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4">📝 The modern content engine for blogs & docs</h2>
          <p className="text-gray-400 mb-6">
            Craft stunning technical documentation and dev blogs with powerful markdown, version control, and preview workflows.
          </p>
          <a href="#" className="text-[#EF5F07] font-semibold hover:underline">Learn more →</a>
        </div>
        <div className="bg-[#2A2D2F] border border-[#EF5F07]/20 p-6 rounded-xl shadow">
          <p className="text-white font-medium">🔧 Live preview, markdown, AI summaries</p>
          <p className="text-gray-400 text-sm mt-2">
            Everything you need to publish and scale your technical writing.
          </p>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  