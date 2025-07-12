"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("")
  const handleSubmit=(e)=>{
    console.log(email)
    setEmail("")
  }
  return (
    <footer className="bg-[#F0F7FD] text-[#1A3C5D]">
      {/* Newsletter Top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-12 px-6 text-center py-5"
      >
        <h2 className="text-3xl font-bold mb-2 text-[#074B78]">
          Our Newsletter and Updates!
        </h2>
        <p className="text-gray-600 mb-3 mt-5">
          Stay up-to-date on portfolio company news, topical technology webinars and more.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#2B72B8] text-white px-6 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Subscribe
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-4 text-[#2B72B8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.facebook.com/jaswinder.walia.180"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-[#074B78] transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-[#074B78] transition" />
          </a>
          <a
            href="https://www.instagram.com/jaswinderwaliaa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-[#074B78] transition" />
          </a>
        </motion.div>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#073B6F] text-white py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"
      >
        <div>
          <h4 className="font-semibold mb-3">FinQure</h4>
          <ul className="space-y-2">
            <li>Values</li>
            <li>Team</li>
            <li>Impact Fund</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Loans</h4>
          <ul className="space-y-2">
            <li>Business Loan</li>
            <li>Home Loan</li>
            <li>Personal Loan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Insurance</h4>
          <ul className="space-y-2">
            <li>Bike Insurance</li>
            <li>Car Insurance</li>
            <li>Truck Insurance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">FinQure NEWSLETTER SIGNUP</h4>
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          type="email"
            placeholder="Email"
            className="w-60 px-3 py-2 rounded text-white border-white border"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-2 ml-5 bg-[#2B72B8] text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Send
          </motion.button>
          <p className="text-sm mt-2 underline cursor-pointer">
            View past newsletter issues
          </p>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center py-4 bg-white text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        © 2025 FinQure. All rights reserved. &nbsp;
        <a href="#" className="underline">
          Terms of Use and Privacy
        </a>
      </motion.div>
    </footer>
  );
}
