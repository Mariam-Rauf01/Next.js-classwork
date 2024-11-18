import React from "react";
import Books from "./api/components/books";
import Navbar from "./api/components/navbar";
import Footer from "./api/components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Books />
      <Footer />
    </>
  );
};

export default Home;
