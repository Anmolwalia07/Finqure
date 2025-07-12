"use client"
import { FaMoneyCheckAlt, FaUsers, FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";
import { motion } from "framer-motion";

const taglines = [
  {
    icon: <FaMoneyCheckAlt className="text-4xl" />,
    text: "Fast Approvals",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    text: "400+ Customers",
  },
  {
    icon: <FaCreditCard className="text-4xl" />,
    text: "Flexible Payments",
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl" />,
    text: "No Prepayment Fees",
  },
];

export default function Tagline() {
  return (
    <motion.div
      className="bg-[#074B78] text-white py-9 px-6 md:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
        {taglines.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
            <span className="text-lg md:text-xl font-medium">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
