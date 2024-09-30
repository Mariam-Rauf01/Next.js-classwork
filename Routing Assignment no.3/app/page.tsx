"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "./navbar/page";

function Home() {
  const route = useRouter();

  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Wrapper for full-page background */}
      <div className="bg-gradient-to-br from-gray-300 to-purple-500 min-h-screen">
        {/* Main Content */}
        <main className="flex flex-col justify-center items-center min-h-screen text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white my-10 drop-shadow-lg">
            Welcome to My Next.js Web Page
          </h1>
          <p className="text-md text-white font-bold mb-8 mx-4 px-2">
            Experience the beauty of web design with interactive features and
            smooth transitions. Let’s dive in!
          </p>

          {/* Buttons inside the gradient box */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-20">
            <button
              className="p-4 bg-blue-600 text-white w-full md:w-48 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
              onClick={() => route.push("/about")}
            >
              Go to About
            </button>

            <button
              className="p-4 bg-pink-600 text-white w-full md:w-48 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
              onClick={() => route.push("/contact")}
            >
              Go to Contact
            </button>

            <button
              className="p-4 bg-green-600 text-white w-full md:w-48 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
              onClick={() => route.push("/footer")}
            >
              Go to Footer
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
