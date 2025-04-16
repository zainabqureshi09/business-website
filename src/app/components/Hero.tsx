"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";
import Link from "next/link";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cursorColors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"];
const typingTexts = [
  "Innovating the Digital World",
  "Custom Software Solutions",
  "Partner with Us to Build the Future",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorColorIndex, setCursorColorIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < typingTexts[textIndex].length) {
        setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === typingTexts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        setCharIndex(0);
        setCursorColorIndex((prev) => (prev + 1) % cursorColors.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-teal-700 to-purple-800 text-gray-100 py-32 overflow-hidden h-screen flex items-center justify-center">
      {/* Animated Background with Particles and Wave Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/tech-background.jpg"
          width={100}
          height={100}
          alt="Tech-inspired background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Particle Effect */}
        <div className="absolute inset-0 particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-300 rounded-full opacity-50"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: [0, -1000],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        {/* Wave Effect */}
        <svg
          className="absolute bottom-0 left-0 w-full h-1/3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(45, 212, 191, 0.2)"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,192C672,192,768,192,864,186.7C960,181,1056,171,1152,160C1248,149,1344,128,1392,117.3L1440,107L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(17, 24, 39, 0.7), rgba(45, 212, 191, 0.7), rgba(147, 51, 234, 0.7))",
              "linear-gradient(to bottom right, rgba(17, 24, 39, 0.7), rgba(147, 51, 234, 0.7), rgba(45, 212, 191, 0.7))",
              "linear-gradient(to bottom right, rgba(17, 24, 39, 0.7), rgba(45, 212, 191, 0.7), rgba(147, 51, 234, 0.7))",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className={`${merienda.className} text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-teal-200 relative inline-block drop-shadow-2xl`}
          >
            Zynithbyte Technologies
            {/* Animated Underline */}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {displayText}
            <motion.span
              className="inline-block w-1 h-8 md:h-10 ml-2"
              style={{ backgroundColor: cursorColors[cursorColorIndex] }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.p>
          {/* Interactive Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.7)]"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-block px-10 py-4 border-2 border-teal-400 text-teal-400 font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 hover:bg-teal-400 hover:text-gray-900 hover:shadow-[0_0_20px_rgba(45,212,191,0.7)]"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}