import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/Craving.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/" },
    { name: "Groceries", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  // CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handler);
    } else {
      document.removeEventListener("mousedown", handler);
    }

    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <nav className="font-rubik w-full sticky top-0 z-999 bg-white/70 backdrop-blur-md px-4 sm:px-8 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Craving logo" className="cursor-pointer w-[120px] sm:w-[140px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[15px] hover:text-orange-500 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/" className="ml-10">
            <button className="bg-orange-500 text-white px-7 py-2 text-sm rounded-full hover:bg-orange-600 active:scale-95 transition-all font-poppins">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-md mt-4 px-6 py-8 flex flex-col items-center gap-6 text-center"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-orange-500 transition-all"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/">
              <button className="bg-orange-500 text-white px-7 py-2 text-sm rounded-full hover:bg-orange-600 active:scale-95 transition-all font-poppins">
                Login
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
