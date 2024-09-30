"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Contact() {
  const route = useRouter();

  return (
    <>
      {/* Full-page Background with Gradient */}
      <div className="bg-gradient-to-br from-gray-100 to-teal-100 min-h-screen py-10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Us Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 text-center mb-10 drop-shadow-lg">
            Get in Touch with Us
          </h1>

          {/* Contact Information Card */}
          <div className="bg-white/90 p-6 sm:p-10 rounded-xl shadow-2xl backdrop-blur-lg mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-teal-700 text-center">
              Contact Information
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-8">
              We'd love to hear from you! You can reach us through any of the
              contact methods below, or fill out the form and we’ll get back to
              you shortly.
            </p>

            {/* Contact Details with Icons */}
            <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="text-left">
                  <p className="text-lg sm:text-xl text-teal-900 font-semibold">
                    Email Us:
                  </p>
                  <p className="text-gray-700 hover:text-teal-500 transition-colors duration-300">
                    contact@mywebsite.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-left">
                  <p className="text-lg sm:text-xl text-lime-900 font-semibold">
                    Call Us:
                  </p>
                  <p className="text-gray-700 hover:text-lime-500 transition-colors duration-300">
                    +1 (234) 567-890
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-left">
                  <p className="text-lg sm:text-xl text-orange-900 font-semibold">
                    Visit Us:
                  </p>
                  <p className="text-gray-700 hover:text-orange-500 transition-colors duration-300">
                    123 Main St, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center">
            <button
              className="p-4 bg-teal-800 text-white w-48 rounded-lg 
                font-semibold shadow-lg 
                transform transition-transform 
                hover:scale-105 mx-auto block"
              onClick={() => route.push("/")}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

