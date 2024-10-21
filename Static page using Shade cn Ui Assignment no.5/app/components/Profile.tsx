import React from "react";
import { Card } from "@/components/ui/card";

function Profile() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center py-20 bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]"
    >
      {/* Profile Image */}
      <div className="rounded-full overflow-hidden w-74 h-64 border-4 border-[#ecf0f1] shadow-lg mb-10">
        <img
          src="/img.webp"
          alt="Mariam Rauf"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Text */}
      <h2 className="text-5xl font-semibold text-[#ecf0f1] mb-10">
        Web Developer & Designer
      </h2>

      {/* About Section (Card) */}
      <Card className="bg-gray-800 border-none shadow-lg rounded-md p-6 max-w-md text-center">
        <h1 className="text-xl text-gray-300 font-bold leading-relaxed mb-4 border-b-2 border-gray-300 pb-1">
          About me
        </h1>

        <p className="text-gray-300 text-base leading-relaxed">
          Hi, I'm{" "}
          <span className="text-[#1abc9c] font-semibold">Mariam Rauf</span>, a
          web developer experienced in{" "}
          <span className="text-[#e74c3c] font-semibold">Next.js</span> ,{" "}
          <span className="text-[#3498db] font-semibold">Tailwind CSS</span> and{" "}
          <span className="text-[#e74c6c] font-semibold">Typescript</span>.
          Creating sleek, user-friendly web experiences is my passion.
        </p>
      </Card>
    </section>
  );
}

export default Profile;
