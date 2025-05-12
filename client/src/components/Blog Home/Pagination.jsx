const Pagination = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 pb-20 flex justify-center gap-2">
        <button className="px-4 py-1.5 bg-[#2A2D2F] text-[#EF5F07] border border-[#EF5F07]/30 rounded hover:bg-[#EF5F07] hover:text-black transition">
          Previous
        </button>
        <button className="px-4 py-1.5 bg-[#EF5F07] text-black font-semibold rounded">1</button>
        <button className="px-4 py-1.5 bg-[#2A2D2F] text-[#EF5F07] border border-[#EF5F07]/30 rounded hover:bg-[#EF5F07] hover:text-black transition">
          2
        </button>
        <button className="px-4 py-1.5 bg-[#2A2D2F] text-[#EF5F07] border border-[#EF5F07]/30 rounded hover:bg-[#EF5F07] hover:text-black transition">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  