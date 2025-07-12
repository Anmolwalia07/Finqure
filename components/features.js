"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiHome, FiRefreshCw, FiThumbsUp, FiArrowRight } from "react-icons/fi";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      title: "Home Purchase",
      image: "/home.jpg",
      description:
        "We have hundreds of loan products to help with your home purchase. We make home buying simple and fast. Ask for a fast pre-approval letter!",
      color: "from-blue-500 to-indigo-600",
      icon: <FiHome />
    },
    {
      title: "Refinance",
      image: "/refinance.jpeg",
      description:
        "We're offering competitive interest rates for conforming and non-conforming, and lite document mortgage loans. Apply online today!",
      color: "from-emerald-500 to-teal-600",
      icon: <FiRefreshCw />
    },
    {
      title: "Declined by a Lender?",
      image: "/decline.webp",
      description:
        "Have you been declined by a local bank or broker? Our experienced team helps with complicated loans. Contact us today!",
      color: "from-amber-500 to-orange-600",
      icon: <FiThumbsUp />
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1]
      } 
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        delay: 0.2 
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Tailored Mortgage Solutions
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We offer specialized mortgage services designed to meet your unique financial needs
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex justify-center mt-8"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              whileHover="hover"
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col h-full"
            >
              <div className="relative">
                <motion.div 
                  variants={imageVariants}
                  className="overflow-hidden"
                >
                  <img src={item.image} className="bg-gray-200 rounded-xl w-full h-48" />
                </motion.div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-start">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <motion.button 
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-[#074B78] to-[#4bc9f7a7]  rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to find your perfect mortgage?</h3>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Our mortgage experts are ready to help you navigate the home financing process with personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-[#074B78] font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Contact Advisor
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}