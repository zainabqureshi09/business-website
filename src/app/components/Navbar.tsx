"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ZynithbyteLogo from "../logo/page";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },

  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 h-[60px]">
          {/* 🎓 Logo */}
          <Link href="/" className="flex items-center">
            <ZynithbyteLogo />
          </Link>

          {/* 📌 Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ name, path }, index) => (
              <Link
                key={index}
                href={path}
                className="text-teal-700 text-lg hover:text-teal-400 transition font-medium"
              >
                {name}
              </Link>
            ))}
          </div>

        
          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-teal-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 📱 Mobile Menu + Click Outside to Close */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop to Close on Click Outside */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleMobileNavClick}
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg md:hidden flex flex-col z-50 p-6"
              >
                {/* Close Button */}
                <button
                  onClick={handleMobileNavClick}
                  className="self-end text-3xl text-gray-700 focus:outline-none"
                  aria-label="Close menu"
                >
                  ✕
                </button>

                <ul className="flex text-xl flex-col space-y-4 mt-4">
                  {navLinks.map(({ name, path }, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={path}
                        className="block text-lg text-gray-700 hover:text-gray-400 transition font-medium"
                        onClick={handleMobileNavClick}
                      >
                        {name}
                      </Link>
                    </motion.li>
                  ))}

                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Fix Layout Shift */}
      <div className="h-[70px]" />
    </>
  );
}