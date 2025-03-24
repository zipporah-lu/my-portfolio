import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold">
        Zipporah's Portfolio
      </Link>

      <ul className="flex space-x-5">
        <li>
          <Link to="/digital-design" className="text-gray-700 hover:text-black px-6">
            Digital Design
          </Link>
        </li>
        <li>
          <Link to="/video" className="text-gray-700 hover:text-black px-6">
            Video
          </Link>
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
