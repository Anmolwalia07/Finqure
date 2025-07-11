import { FaCreditCard, FaPiggyBank, FaCheckCircle } from "react-icons/fa";

export default function Goals() {
  const goals = [
    {
      title: "Credit Card",
      icon: <FaCreditCard size={30} className="text-white" />,
      desc: "We’re offering comparative interest rates for conforming and non-conforming and lite documents mortgage loans.",
    },
    {
      title: "Save Money Together",
      icon: <FaPiggyBank size={30} className="text-white" />,
      desc: "We’re offering comparative interest rates for conforming and non-conforming and lite documents mortgage loans.",
    },
    {
      title: "Success",
      icon: <FaCheckCircle size={30} className="text-white" />,
      desc: "We’re offering comparative interest rates for conforming and non-conforming and lite documents mortgage loans.",
    },
  ];

  return (
    <div className="bg-[#EAF3FB] py-16 text-center" id="financial goals">
      <h2 className="text-3xl font-bold text-[#1A3C5D] mb-2">Our Financial Goals</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        By ensuring a user-friendly experience and individuals can comfortably work towards their dreams and achieve set goals.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {goals.map((goal, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md w-[280px] text-center">
            <div className="bg-[#2B72B8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              {goal.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#1A3C5D]">{goal.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{goal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
