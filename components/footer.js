import { FaFacebookF, FaTwitter, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F0F7FD] text-[#1A3C5D]">
      {/* Newsletter Top */}
      <div className="pb-12 px-6 text-center py-5">
        <h2 className="text-3xl font-bold mb-2 text-[#074B78]">Our Newsletter and Updates!</h2>
        <p className="text-gray-600 mb-3 mt-5">
          Stay up-to-date on portfolio company news, topical technology webinars and more.
        </p>

        <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button className="bg-[#2B72B8] text-white px-6 py-2 rounded-md">Subscribe</button>
        </div>

        <div className="mt-6">
          <p className="mb-2">Join our chat:</p>
          <button className=" items-center gap-2 px-4 py-2 bg-white border rounded-md shadow inline-flex">
            <FaTelegramPlane className="text-[#2B72B8]" />
            <span className="text-[#2B72B8]">Telegram</span>
          </button>

          <div className="flex justify-center gap-4 mt-4 text-[#2B72B8]">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#073B6F] text-white py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
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
            type="email"
            placeholder="Email"
            className="w-60 px-3 py-2 rounded text-white border-white border"
          />
          <button className="mt-2 ml-5 bg-[#2B72B8] text-white px-4 py-2 rounded">
            Send
          </button>
          <p className="text-sm mt-2 underline cursor-pointer">View past newsletter issues</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-[#073B6F] text-gray-400 text-xs">
        © 2024 Cota Capital. All rights reserved. &nbsp;
        <a href="#" className="underline">
          Terms of Use and Privacy
        </a>
      </div>
    </footer>
  );
}
