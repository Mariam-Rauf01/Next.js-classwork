import React from "react";
import Image from "next/image";

interface Tprops {
  name: string;
  rollno: string;
  dayTime: string;
  distanceLearning: string;
  city: string;
  center: string;
  campus: string;
  batch: string;
  profileImage: string;
}

function Card(props: Tprops) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <div className="bg-slate-200 pt-10 pb-10 sm:pt-16 sm:pb-16 rounded-lg shadow-lg max-w-xl sm:max-w-4xl w-full flex flex-col sm:flex-row items-center justify-center border-4 border-sky-300 relative">
          {/* Background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[300px] sm:max-w-[400px] max-h-[200px] sm:max-h-[300px]">
              <Image
                src="/images/Kamran-Tessori.png"
                alt="Background image"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="opacity-10"
              />
            </div>
          </div>

          {/* Left section */}
          <div className="w-full sm:w-2/3 pr-0 sm:pr-4 pt-6 sm:pt-16 relative z-10 text-center sm:text-left">
            <img
              src="/images/giaic.9ff76f62.png"
              alt="Logo"
              className="absolute top-[-20px] left-0 w-12 sm:w-16 h-12 sm:h-18 z-10"
            />
            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Name:</strong>
              </span>{" "}
              {props.name}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Roll.no:</strong>
              </span>{" "}
              {props.rollno}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Day/Time:</strong>
              </span>{" "}
              {props.dayTime}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Distance Learning:</strong>
              </span>{" "}
              {props.distanceLearning}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>City:</strong>
              </span>{" "}
              {props.city}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Center:</strong>
              </span>{" "}
              {props.center}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Campus:</strong>
              </span>{" "}
              {props.campus}
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Batch:</strong>
              </span>{" "}
              {props.batch}
            </p>

            {/* Button Section */}
            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10"> Q2 </span>
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full sm:w-1/4 text-center relative z-10 mt-4 sm:mt-0">
            <Image
              src={props.profileImage}
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg mb-4 sm:mb-6 w-3/4 sm:w-full mx-auto"
            />
            <div className="w-full text-center relative z-10">
              <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500 mt-4 sm:mt-10 text-sm sm:text-xl">
                Authorized Signature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


