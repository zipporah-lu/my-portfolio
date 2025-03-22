import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Zipporah Lu</h1>

      {/* Navigation Menu */}
      <ul className="flex space-x-5 relative">
        <li><a href="/" className="text-gray-700 hover:text-black px-6">Digital Design</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-black px-6">Video</a></li>
        {/* Case Study Dropdown (Centered) */}
        <li className="relative group">
          <div className="text-gray-700 hover:text-black cursor-pointer px-6">
            UX
          </div>

          {/* Centered Dropdown Menu */}
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-40 bg-white shadow-md rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto text-center">
            <li>
              <a href="/study-mate" className="block px-4 py-2 hover:bg-gray-100">
                Study Mate
              </a>
            </li>
            <li>
              <a href="/markup-system" className="block px-4 py-2 hover:bg-gray-100">
                Markup System
              </a>
            </li>
          </ul>
        </li>
        
        <li><a href="/about" className="text-gray-700 hover:text-black px-6">About</a></li>
        <li><a href="/resume" className="text-gray-700 hover:text-black px-6">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
