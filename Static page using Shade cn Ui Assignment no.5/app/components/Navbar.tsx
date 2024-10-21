import React from 'react';


function Navbar() {
  return (
    <header className="w-full px-8 py-4 flex justify-between items-center bg-transparent">
      {/* Logo on the Left */}
      <h1 className="text-4xl font-bold text-[#ecf0f1]">Mariam Rauf</h1>
      
      {/* Links in the Center */}
      <nav className="flex-grow text-center space-x-28 mr-20">
        <a href="#home" className="text-lg text-[#ecf0f1] hover:text-[#1abc9c] transition-colors">Home</a>
        <a href="#about" className="text-lg text-[#ecf0f1] hover:text-[#1abc9c] transition-colors">About</a>
        <a href="#contact" className="text-lg text-[#ecf0f1] hover:text-[#1abc9c] transition-colors">Contact</a>
      </nav>

      {/* Resume Button on the Right */}
      <a href="/resume.pdf" className="px-4 py-2 bg-[#1abc9c] text-black rounded-full font-semibold hover:bg-[#ecf0f1] transition">
       Download CV
      </a>
    </header>
  );
}

export default Navbar;
