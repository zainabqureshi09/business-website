"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";
import PageWrapper from "../components/pageWrapper";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const cursorColors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"];
const typingTexts = [
  "Innovating the Digital World",
  "Custom Software Solutions",
  "Partner with Us to Build the Future",
];

export default function AboutPage() {
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
    <PageWrapper>
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative w-full h-[600px] flex items-center justify-center text-center bg-transparent text-teal-700 bg-cover bg-center">
          <div className="absolute inset-0 " /> {/* Subtle overlay for text readability */}
          <motion.div
            className="relative z-10 text-white px-6 max-w-4xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className={`${merienda.className} text-7xl md:text-7xl text-teal-700 font-bold drop-shadow-2xl tracking-tight`}>
              About Us
            </h1>
            <p className="mt-6 text-teal-700 text-xl md:text-3xl flex justify-center font-light">
              {displayText}
              <motion.span
                className="w-1 h-7 md:h-9 inline-block ml-2"
                style={{ backgroundColor: cursorColors[cursorColorIndex] }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              ></motion.span>
            </p>
          </motion.div>
        </section>

        {/* About Content Section */}
        <section className="container mx-auto px-6 py-2 bg-white">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className={`${merienda.className} text-4xl md:text-5xl font-bold text-teal-700`}>
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-8 mt-6 max-w-3xl mx-auto">
              At CodeCraft Software House, we specialize in delivering top-tier digital solutions that help businesses grow and innovate. From custom software development to UI/UX design, we transform ideas into powerful products.
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            {/* Left Side (Text) */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div>
                <h2 className={`${merienda.className} text-3xl font-semibold text-teal-700`}>
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-8 mt-4">
                  We envision a digital world where every business has access to innovative and scalable tech solutions. Our goal is to be the driving force behind digital transformation.
                </p>
              </div>

              <div>
                <h2 className={`${merienda.className} text-3xl font-semibold text-teal-700`}>
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-8 mt-4">
                  Our mission is to create high-performance applications and deliver outstanding services that add real value. We are passionate about code, design, and solving real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Right Side (Image) */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/developemt-team.jpeg"
                  alt="Development Team"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className={`${merienda.className} text-4xl font-bold text-teal-700`}>
              Let’s Build Something Amazing Together
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Partner with us today.
            </p>
            <motion.a
              href="/contact"
              className="mt-8 inline-block px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}