import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-gray-300 py-3 md:px-20 px-5">
      {/* Left Section: Logo */}
      <div className="flex-shrink-0">
        <Image 
          src="/book.png" 
          width={100} 
          height={100} 
          alt="Bookstore Logo" 
          className="object-contain"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex justify-center w-full max-w-lg">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search books..." 
            className="pl-10 pr-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <IoSearch 
            size={20} 
            className="absolute left-3 top-2.5 text-gray-500" 
          />
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center md:space-x-7 space-x-3">
        <button 
          aria-label="Contact" 
          className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
        >
          <IoIosContact size={30} className="cursor-pointer" />
        </button>
        <button 
          aria-label="Cart" 
          className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
        >
          <BiCart size={30} className="cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
