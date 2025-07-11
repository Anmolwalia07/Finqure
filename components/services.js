export default function Services() {
  const services = [
    {
      category: "Insurance",
      items: [
        { name: "Bike Insurance", icon: "🚲" },
        { name: "Car Insurance", icon: "🚗" },
      ],
    },
    {
      category: "Loan",
      items: [
        { name: "Business Loan", icon: "🏢" },
        { name: "Personal Loan", icon: "🙋‍♂️" },
        { name: "Home Loan", icon: "🏠" },
      ],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1A3C5D] mb-3">
            Our Premium Services
          </h2>
          <div className="w-24 h-1.5 bg-[#3072B8] mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover tailored solutions designed to protect your assets and help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-[#3072B8] to-[#1A3C5D] p-5">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <span className="mr-3 bg-white/20 p-2 rounded-lg">{section.category}</span>
                </h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <span className="text-3xl bg-blue-100 group-hover:bg-blue-200 p-3 rounded-lg transition-colors duration-300">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.name.includes("Insurance") 
                            ? "Comprehensive coverage options" 
                            : "Competitive rates and flexible terms"}
                        </p>
                      </div>
                      <span className="ml-auto text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  View all {section.category} options
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-gradient-to-r from-[#3072B8] to-[#1A3C5D] text-white font-medium rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  );
}