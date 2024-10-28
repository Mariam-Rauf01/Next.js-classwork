import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar/page";
import Aboutus from "./components/about/page";
import Main from "./components/main/page";
import Cold from "./components/cold/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";


function Page() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Navbar on top of the background image */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src="/images/coffee bg.jpg"
            alt="bg image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        
      </div>
      <div className="relative w-full h-screen overflow-hidden">
      <Aboutus/>
      
      </div>
      <div className="relative w-full h-screen overflow-hidden">
      <Main/>
      
      </div>
      <div className="relative w-full h-screen overflow-hidden">
      <Cold/>
      
      </div>
      <div className="relative w-full h-screen overflow-hidden">
      <Contact/>
      
      </div>
      <Footer/>
    </>
  );
}

export default Page;

