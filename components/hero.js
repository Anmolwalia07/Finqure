"use client"
import { motion } from "framer-motion";
import { useState } from "react";


export default function Hero() {

  const scheduleMeet = () => {
  window.location.href = "mailto:anmolwalia025@gmail.com?subject=Meeting%20Request&body=Hi,%20I%20would%20like%20to%20schedule%20a%20meeting.";
};

  return (
    <section
      className="bg-gradient-to-r from-[#C1DAED] to-[#dddddda7] px-6 md:px-20 lg:px-40 py-15"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div
          className="w-full md:max-w-[70%] text-center md:text-left">
          <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-[#1A3C5D]">
            <span className="text-[#3072B8]">Online Loan And Insurance</span> to Achieve{" "}
            <br className="hidden sm:block" />
            Your Goals and Future for Change.
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Making financial goals a priority is very important. By ensuring a user-friendly
            experience and individuals can comfortably work towards their dreams and achieve set goals.
          </motion.p>

          <motion.button
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
            className="mt-6 px-6 py-3 bg-[#1A3C5D] text-white font-semibold rounded-md hover:bg-[#15405e] transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scheduleMeet}
          >
            Schedule a Meet
      </motion.button>

    <motion.div
      className="flex items-start sm:items-center gap-2 sm:gap-4 mt-6 justify-center md:justify-start"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      <motion.p
        onClick={()=>{
          window.location.href="tel:+91 9876781726"
        }}
        className="text-lg sm:text-xl font-bold tracking-wider text-[#1A3C5D] cursor-pointer "
        title="Click to copy"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        Call : +91 9876781726
      </motion.p>
      
    </motion.div>
     <motion.p
     initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
        className="text-lg sm:text-xl font-bold tracking-wider text-[#1A3C5D] cursor-pointer "
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
      Advisor : Jaswinder walia
      </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full hidden md:flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="/img1.png"
            alt="Business man"
            className="w-[300px] md:w-[380px] object-contain ml-15"
            // whileHover={{ scale: 1.05 }}
            // transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}