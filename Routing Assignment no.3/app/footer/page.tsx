"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Footer() {
  const route = useRouter();

  return (
    <>
      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-gray-100 to-pink-100 flex flex-col justify-between min-h-screen">
        <div className="max-w-screen-lg mx-auto text-center py-10">
          <h1 className="p-5 text-4xl md:text-5xl mt-40 font-bold text-pink-700 drop-shadow-lg">
            Hey Everyone! This is my Footer Section
          </h1>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center py-10">
          <button
            className="p-4 bg-pink-600 text-white w-full md:w-48 m-4 rounded-lg 
            transition duration-300 
            shadow-lg transform hover:scale-105"
            onClick={() => route.push("/")}
          >
            Go to Home
          </button>
        </div>
      </div>

      {/* Footer at the Bottom */}
      <footer className="bg-pink-800 text-white py-6">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <a href="/" className="hover:text-pink-300">
              Home
            </a>
            <a href="/about" className="hover:text-pink-300">
              About
            </a>
            <a href="/contact" className="hover:text-pink-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

