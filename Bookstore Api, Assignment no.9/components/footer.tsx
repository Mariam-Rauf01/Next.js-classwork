import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  mt-10 text-center rounded-lg py-4">
      <h1 className="text-2xl font-semibold">
        <span className="text-blue-500">My</span>
        <span className="text-yellow-500"> Code</span>
        <span className="text-blue-500"> Book</span> <span className='text-white'>&copy; 2024</span>
      </h1>
      <p className="text-sm text-white">All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;