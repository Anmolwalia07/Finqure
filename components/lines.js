export default function Lines() {
  const items = [
    {
      title: "Tailored Loan Solutions",
      description:
        "Whether it’s personal, home, or business—our loan plans are designed to meet your specific needs with flexible EMIs and low interest rates.",
    },
    {
      title: "Comprehensive Insurance Coverage",
      description:
        "Protect what matters most. From car and bike to life and health, we offer complete insurance packages with hassle-free claim support.",
    },
    {
      title: "Fast Approvals & Trusted Support",
      description:
        "We ensure quick loan approvals and provide end-to-end assistance throughout your financial journey. Join 400,000+ satisfied customers.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-12 pb-20">
      {/* Header Banner */}
      <div className="flex justify-center">
        <h2 className="text-sm sm:text-base md:text-lg leading-6 tracking-wide w-full sm:w-[95%] md:w-[90%] lg:w-[85%] p-4 font-extrabold text-white bg-[#034467] rounded-md text-center">
          FinQure is a firm that partners with various institutions to empower your future with flexible Loans and Reliable Insurance.
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-12 md:px-20 md:ml-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <ul className="space-y-6 text-[#4d8ece] text-sm sm:text-base md:text-lg">
            {items.map((item, i) => (
              <li key={i}>
                <span className="font-bold">▣ {item.title}</span>
                <p className="text-gray-700 mt-1 text-xs sm:text-sm md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-5 py-2 bg-[#1A3C5D] text-white rounded-md hover:bg-[#15405e] transition font-medium text-sm sm:text-base">
              Explore Loan Options
            </button>
            <button className="px-5 py-2 bg-[#1A3C5D] text-white rounded-md hover:bg-[#15405e] transition font-medium text-sm sm:text-base">
              Get Insurance Quote
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-md shadow-md overflow-hidden w-[80%] sm:w-[300px] md:w-[340px] lg:w-[380px]">
            <img
              src="/graph.jpeg"
              alt="Financial advisor"
              className="w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
