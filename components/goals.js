"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCreditCard, FaPiggyBank, FaCheckCircle } from "react-icons/fa";

export default function Goals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      id="financial goals"
      className="bg-[#EAF3FB] py-16 text-center px-6"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-[#1A3C5D] mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Our Financial Goals
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        By ensuring a user-friendly experience, individuals can comfortably work towards their dreams and achieve set goals.
      </motion.p>

      <div className="flex justify-center gap-8 flex-wrap">
        {goals.map((goal, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white p-6 rounded-lg shadow-md w-[280px] text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-[#2B72B8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              {goal.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#1A3C5D]">{goal.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{goal.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
