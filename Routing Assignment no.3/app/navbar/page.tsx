"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const route = useRouter();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
          {/* Logo Section */}
          <div className="text-white text-3xl font-extrabold mb-2 md:mb-0">
            <Link href="/">Navbar</Link>
          </div>

          {/* Links Section */}
          <ul className="flex flex-col md:flex-row gap-6">
            <li>
              <Link
                href="/"
                aria-label="Go to Home"
                className="text-white hover:text-yellow-100 transition duration-300 text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-label="Go to About"
                className="text-white hover:text-yellow-100 transition duration-300 text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Go to Contact"
                className="text-white hover:text-yellow-100 transition duration-300 text-lg"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/footer"
                aria-label="Go to Footer"
                className="text-white hover:text-yellow-100 transition duration-300 text-lg"
              >
                Footer
              </Link>
            </li>
          </ul>
        </nav>
  );
}

export default Navbar;
