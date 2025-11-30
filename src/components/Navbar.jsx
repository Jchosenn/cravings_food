import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/Craving.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/" },
    { name: "Groceries", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  return (
    <nav className="font-rubik w-full px-4 sm:px-8 py-3 sm:py-3 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Craving logo"
            className="cursor-pointer "
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-xs items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-black/65 text-[16px] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/" 
          className="F7F7F7 ml-32">
            <button className=" bg-[#FF800B] border border-[#D1EEA7] text-white px-7 py-2 text-sm rounded-4xl cursor-pointer hover:bg-[#f77700] transition ease-in-out duration-300 font-poppins">
              Login 
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="z-999 lg:hidden bg-[#fffbfb] absolute top-12 left-0 w-full backdrop-blur-md flex flex-col items-center gap-6 py-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-black/65 text-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/">
            <button className="bg-[#FF800B] border border-[#D1EEA7] text-white px-7 py-2 text-sm rounded-4xl cursor-pointer hover:bg-[#f77700] transition ease-in-out duration-300 font-poppins">
              Login 
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar