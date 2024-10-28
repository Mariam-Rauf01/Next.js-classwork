"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };


  return (
    <div
      className="relative flex flex-col items-center justify-start h-full min-h-screen"
      style={{ backgroundColor: "#3D1403" }}
    >
      <h1
        className="absolute top-20 ml-24 left-1/2 transform -translate-x-1/2 font-aclonica text-6xl text-center"
        style={{
          color: "#FFF8DB",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
        }}
      >
        Contact Us!
      </h1>

      <div
        className="flex flex-col items-center mr-40 ml-80 mt-40 bg-black bg-opacity-40 justify-start p-8 rounded-lg shadow-lg z-10"
        style={{ width: "700px", height: "600px" }}
      >
        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full px-10 space-y-4 z-10 mr-18"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-4 block w-full border border-red-600 rounded-full text-[#3D1403] bg-[#FFF4C9]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-4 block w-full border border-red-600 rounded-full text-[#3D1403] bg-[#FFF4C9]"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-4 block w-full border border-red-600 rounded-full text-[#3D1403] bg-[#FFF4C9]"
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 p-4 block w-full border border-red-600 rounded-full text-[#3D1403] bg-[#FFF4C9]"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 p-4 block w-full border border-red-600 rounded-md text-[#3D1403] bg-[#FFF4C9]"
          />
          <button
            type="submit"
            className="ml-44 text-lg font-outfit font-bold text-[#FFF4C9] py-4 px-14 bg-red-600 flex items-center rounded-md shadow-lg hover:bg-[#FFF4C9] hover:text-red-600 transition-colors duration-200 ease-in-out"
          
            >
            Send Message
          </button>
        </form>
      </div>

      <div className="absolute top-32 left-96">
  <Image
    src="/images/9567160fc281329e571561b9b80dc5a1.jpg"
    alt="Coffee selection"
    width={346}
    height={400}
    className="object-cover rounded"
  />
</div>
    </div>
  );
};

export default Contact;
