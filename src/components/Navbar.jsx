import React, { useState } from "react";
import { FaBars, FaSuitcase, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold flex items-center text-orange-500">
          JobsPortal <FaSuitcase className="ml-2" />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Find Jobs</li>
          <li className="hover:text-orange-500 cursor-pointer">Companies</li>
          <li className="hover:text-orange-500 cursor-pointer">
            Find Candidates
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Dashboard</li>
        </ul>

        <div className="hidden md:flex gap-2">
          <button className="text-orange-600 cursor-pointer font-semibold hover:underline">
            Sign In
          </button>
          <button className="bg-orange-500 cursor-pointer text-white px-4 py-1 rounded hover:bg-orange-600">
            Post Job
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white shadow-md">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li onClick={closeMenu} className="hover:text-orange-500">
              Home
            </li>
            <li onClick={closeMenu} className="hover:text-orange-500">
              Find Jobs
            </li>
            <li onClick={closeMenu} className="hover:text-orange-500">
              Companies
            </li>
            <li onClick={closeMenu} className="hover:text-orange-500">
              Find Candidates
            </li>
            <li onClick={closeMenu} className="hover:text-orange-500">
              Dashboard
            </li>
            <div className="flex flex-col gap-2 pt-2">
              <button className="text-orange-600 font-semibold text-left">
                Sign In
              </button>
              <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">
                Post Job
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
