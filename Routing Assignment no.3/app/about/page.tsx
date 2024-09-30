"use client";
import React from "react";
import { useRouter } from "next/navigation";

function About() {
  const route = useRouter();

  return (
    <>
      {/* About Section */}
      <div className="bg-gradient-to-br from-gray-100 to-blue-200 min-h-screen py-10">
        <div className="max-w-screen-lg mx-auto my-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 text-center my-10 drop-shadow-lg">
            Welcome to Our About Section
          </h1>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-transform hover:shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-4">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, velit consequatur ipsum maiores illum laboriosam rerum provident quasi inventore magnam. Quibusdam reiciendis cum atque nam? Porro odit culpa autem id dolor sit amet consectetur, adipisicing elit. Quos cumque explicabo quisquam eligendi id exercitationem quo velit adipisci, ducimus similique voluptates. Magnam aperiam unde totam, quos optio veniam tempore tempora.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center my-6">
          <button
            className="p-4 bg-blue-600 text-white w-48 rounded-lg 
             hover:bg-blue-500 
             font-semibold shadow-lg 
             transform transition-transform 
             hover:scale-105"
            onClick={() => route.push("/")}
          >
            Return Home
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
