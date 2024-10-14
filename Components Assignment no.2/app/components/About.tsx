import React from 'react';

function About() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-gray-800">
        This is an About page.
      </h1>
      <h1 className="text-2xl font-semibold text-gray-800 mt-20">
        Scroll down <span>&#11015;</span>
      </h1>
    </div>
  );
}

export default About;
