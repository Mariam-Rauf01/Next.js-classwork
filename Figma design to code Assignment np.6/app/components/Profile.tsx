import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center mt-10 mx-10 lg:mx-20">
        {/* Image Section */}
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/images/Group 8 (1).png"
            alt="Mariam Rauf"
            width={900}
            height={900}
          />
        </div>
        {/* GitHub and LinkedIn Icons */}
        <div className="absolute flex space-x-4 mt-48 ml-[445px]">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-8 w-8 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)] transition-all duration-300" />{" "}
            {/* GitHub Icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)] transition-all duration-300" />{" "}
            {/* LinkedIn Icon */}
          </a>
        </div>

        <div className="absolute flex flex-row items-start mt-20 space-x-4 lg:ml-0">
          <button className="font-bold text-sm bg-white ml-[-450px] mt-40 text-black font-outfit py-2 px-4 rounded-full hover:bg-black hover:text-white hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.7)] transition">
            Drop a quote
          </button>
          <button className="opacity-60 px-1 mt-44 ml-[-450px] text-xs underline hover:opacity-100 font-outfit">
            Know about services
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
