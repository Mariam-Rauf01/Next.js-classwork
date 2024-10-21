import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function Page() {
  return (
    <>
      <Head>
        <title>Mariam Rauf - Portfolio</title>
        <meta name="description" content="Mariam Rauf's Portfolio" />
      </Head>

      {/* Main Page Layout */}
      <div className="flex flex-col bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]">
        <Navbar />
        <Profile />
      </div>
    </>
  );
}

export default Page;
