"use client"
import { useState } from "react";
import Logo from "./logo";
import { PiTelegramLogoLight } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const navItems = ["home", "services", "financial goals"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[#000000df] hover:cursor-pointer">
          {navItems.map((item, i) => (
            <li key={i} className="capitalize hover:text-[#034467] transition">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-fit h-fit p-1 bg-[#034467] rounded-full flex justify-center items-center">
            <PiTelegramLogoLight className="text-white text-2xl" />
          </div>
          <button className="bg-[#034467] text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#034467]"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-[#000000df]">
          <ul className="space-y-2">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="capitalize border-b pb-2 hover:text-[#034467] transition"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 pt-4 ">
            <div className="w-fit h-fit p-1 bg-[#034467] rounded-full flex justify-center items-center">
              <PiTelegramLogoLight className="text-white text-2xl" />
            </div>
            <button className="bg-[#034467] text-white px-4 py-2 rounded w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
