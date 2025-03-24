import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Zipporah's Portofolio</h1>

      <ul className="flex space-x-5 relative">
        <li>
          <Link to="/" className="text-gray-700 hover:text-black px-6"> 
            Digital Design
          </Link>
        </li>
        <li>
          <Link to="/video" className="text-gray-700 hover:text-black px-6">
            Video
          </Link>
        </li>

        <li className="relative group">
          <div className="text-gray-700 hover:text-black cursor-pointer px-6">UX</div>
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-40 bg-white shadow-md rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto text-center">
            <li>
              <Link to="/study-mate" className="block px-4 py-2 hover:bg-gray-100">
                Study Mate
              </Link>
            </li>
            <li>
              <Link to="/markup-system" className="block px-4 py-2 hover:bg-gray-100">
                Markup System
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/about" className="text-gray-700 hover:text-black px-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/resume" className="text-gray-700 hover:text-black px-6">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
