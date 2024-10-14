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
}

function Card(props: Tprops) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 pt-16 pb-16 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300 relative">
          {/* Background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
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
          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/* Logo */}
            <img
              src="/images/giaic.9ff76f62.png"
              alt="Logo"
              className="absolute top-[-20px] left-0 w-16 h-18 z-10"
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
          <div className="w-1/5 text-center relative z-10">
            <Image
              src={"/images/IMG_8138.jpg"}
              alt={"Profile Picture"}
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full"
            />
            <div className="w-full text-center relative z-10">
              <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500 mt-10 text-1xl">
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
