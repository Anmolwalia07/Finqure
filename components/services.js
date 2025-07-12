"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaMotorcycle,
  FaCar,
  FaTruck,
} from "react-icons/fa";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const loanServices = [
    {
      icon: <FaBriefcase />,
      title: "Business Loan",
      description:
        "Flexible funding to support your startup, expand your company, or meet working capital needs.",
    },
    {
      icon: <FaHome />,
      title: "Home Loan",
      description:
        "Affordable home loans with attractive interest rates and flexible EMIs for your dream house.",
    },
    {
      icon: <FaUserAlt />,
      title: "Personal Loan",
      description:
        "Quick and easy personal loans for your travel, wedding, or emergency expenses.",
    },
  ];

  const insuranceServices = [
    {
      icon: <FaMotorcycle />,
      title: "Bike Insurance",
      description:
        "Comprehensive coverage for your two-wheeler against theft, damage, and third-party risks.",
    },
    {
      icon: <FaCar />,
      title: "Car Insurance",
      description:
        "Reliable car insurance plans that protect you against accidents, damage, and legal liabilities.",
    },
    {
      icon: <FaTruck />,
      title: "Truck Insurance",
      description:
        "Tailored insurance solutions for commercial trucks to safeguard your logistics business.",
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
    <motion.section
      ref={ref}
      id="services"
      className="px-6 md:px-20 lg:px-40 py-20 bg-[#F0F7FD]"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#1A3C5D]">Our Services</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Tailored solutions to help you meet financial goals with ease and
          confidence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Loans */}
        <div>
          <h3 className="text-2xl font-semibold text-[#3072B8] mb-6 border-b pb-2">
            Loans
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {loanServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl text-[#1A3C5D] mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#1A3C5D] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <button
                  className="text-[#3072B8] font-semibold hover:underline"
                  onClick={() => {
                    window.location.href = "tel:9876781726";
                  }}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insurance */}
        <div>
          <h3 className="text-2xl font-semibold text-[#3072B8] mb-6 border-b pb-2">
            Insurance
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {insuranceServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl text-[#1A3C5D] mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#1A3C5D] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <button
                  className="text-[#3072B8] font-semibold hover:underline"
                  onClick={() => {
                    window.location.href = "tel:9876781726";
                  }}
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
