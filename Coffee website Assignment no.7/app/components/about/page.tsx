import React from "react";
import Image from "next/image";

function Aboutus() {
  return (
    <div
      className="relative flex flex-col items-start h-full"
      style={{ backgroundColor: "#FFF8DB" }}
    >
      <h2
        className="flex justify-center font-aclonica text-6xl mt-20 ml-60"
        style={{ color: "#92573E" }}
      >
        About Our Shop
      </h2>

      {/* First paragraph and image container */}
      <div className="flex flex-col md:flex-row items-start mt-8 ml-28 gap-8">
        <p
          className="font-outfit text-xl"
          style={{ color: "#5A3535", maxWidth: "800px" }}
        >
          Welcome to Coffoholics, where every cup is brewed with passion and
          care. Nestled in the heart of the community, we strive to create a
          cozy, inviting space where coffee lovers and friends come together.
          From the finest ethically-sourced beans to our expertly crafted
          drinks, we believe in delivering more than just coffee—we deliver an
          experience. Whether you're stopping by for a quick pick-me-up or
          settling in for a relaxing afternoon, our doors are always open, and
          the coffee is always fresh. Come in, unwind, and savor the moment with
          us.
        </p>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Image
            src="/images/images 1.png"
            alt="Barista brewing coffee"
            width={300} 
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Image
            src="/images/360_F_858026405_uT17kRFEVYwLtjhPEZVFElWhUigWOT4A.jpg"
            alt="Coffee selection"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Second paragraph and image container */}
      <div className="flex flex-col md:flex-row items-start mt-12 ml-28 gap-8">
        <p
          className="font-outfit text-xl"
          style={{ color: "#5A3535", maxWidth: "800px" }}
        >
          At Coffoholics, coffee is more than just a drink—it is a passion. Our
          journey began with a simple love for the art of brewing and a desire
          to create a space where people could enjoy exceptional coffee in a
          warm and welcoming environment. From ethically-sourced beans to
          hand-crafted drinks, every cup tells a story. We believe in supporting
          the community, which is why we partner with local farmers and
          suppliers to bring you the freshest, high-quality ingredients. Our
          team of dedicated baristas is committed to making your experience
          unforgettable, whether you're stopping by for your morning pick-me-up
          or staying to work and relax. As we grow, we are constantly exploring
          new ways to bring you exciting flavors and sustainable practices. At
          Coffoholics, we aim to create not just great coffee, but moments of
          connection, one cup at a time.
        </p>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Image
            src="/images/images (16).jfif"
            alt="Coffee selection"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
    
        <div className="flex-shrink-0 ml mt-4 md:mt-0">
          <Image
            src="/images/bar-1869656_1920.webp"
            alt="Coffee selection"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
