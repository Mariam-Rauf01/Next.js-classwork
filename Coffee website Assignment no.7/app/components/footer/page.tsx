import React from 'react';
import Image from 'next/image';
import { HiPhone } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF8DB] py-10">
      <div className="ml-48 container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4 text-center lg:text-left">
          <Image
            src="/images/COFFOHOLICS (1).png"
            alt="Coffoholics logo"
            width={180}
            height={180}
            className="mx-auto lg:mx-0 w-24 h-auto text-[#3D1403]"
          />
          <p className="text-lg font-semibold text-[#3D1403] font-outfit">Coffee Shop</p>
          <address className="not-italic text-[#3D1403]">
            123 Coffee St.<br />
            Downtown, Your City<br />
            Espresso Country, Caffeine State, USA
          </address>
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#3D1403]">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-500 transition-colors"
              >
                <FaFacebookF className="text-[#3D1403] w-6 h-6" />
              </a>
              <a
                href="https://x.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-gray-500 transition-colors"
              >
                <FaTwitter className="text-[#3D1403] w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-500 transition-colors"
              >
                <FaInstagram className="text-[#3D1403] w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="text-lg font-semibold font-outfit text-[#3D1403]">Quick Links</h3>
          <ul className="text-[#3D1403] space-y-2">
            <li><a href="#home" className="hover:underline font-outfit">Home</a></li>
            <li><a href="#about" className="hover:underline font-outfit">About Us</a></li>
            <li><a href="#menu" className="hover:underline font-outfit">Our Menu</a></li>
            <li><a href="#contact" className="hover:underline font-outfit">Contact Us</a></li>
          </ul>
        </div>

        {/* Opening Times & Contact */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-[#3D1403] font-outfit">Opening Times</h3>
          <p className="text-[#3D1403] font-outfit">Mon - Fri: 8:00 AM - 10:00 PM</p>
          <p className="text-[#3D1403] font-outfit">Sat - Sun: 9:00 AM - 12:00 AM</p>
          
          <h3 className="text-lg font-semibold mt-4 text-[#3D1403] font-outfit">Contact Us</h3>
          <p className="text-[#3D1403] font-outfit flex items-center justify-center lg:justify-start">
            <HiPhone className="h-6 w-6 mr-2 text-[#3D1403]" /> +1 (123) 456-7890
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8 text-[#3D1403] font-outfit">
      &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
