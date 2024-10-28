import React from "react";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <header className="w-full mt-0 p-10 flex justify-between items-center">
      {/* Left Logo */}
      <Image src="/images/mR..png" alt="Logo" width={60} height={60} />

      {/* Navigation Links */}
      <nav className="space-x-8 lg:space-x-28">
        <a
          href="#"
          className="hover:underline font-outfit hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="opacity-60 hover:opacity-100 hover:underline font-outfit hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="opacity-60 hover:opacity-100 hover:underline font-outfit hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Skills
        </a>
        <a
          href="#"
          className="opacity-60 hover:opacity-100 hover:underline font-outfit hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Contact
        </a>
      </nav>

      <button className="font-bold text-sm mt-0 bg-white text-black font-outfit py-1 px-4 rounded-full hover:bg-black hover:text-white hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.7)] transition">
        <HiDownload className="h-4 w-4 inline mr-2" />
        Resume
      </button>
    </header>
  );
};

export default Header;
