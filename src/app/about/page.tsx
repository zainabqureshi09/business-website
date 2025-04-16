"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";
import PageWrapper from "../components/pageWrapper";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const cursorColors = ["#0ea5e9", "#9333ea", "#16a34a", "#f59e0b"];
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
        {/* Hero Section */}
        <section className="relative w-full h-[500px] flex items-center justify-center text-center bg-[url('/software-bg.jpg')] bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm"></div>
          <motion.div
            className="relative z-10 text-white px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`${merienda.className} text-5xl md:text-6xl font-bold drop-shadow-xl`}>
              About Us
            </h1>
            <p className="mt-4 text-lg md:text-2xl flex justify-center">
              {displayText}
              <motion.span
                className="w-2 h-6 md:h-7 inline-block ml-1"
                style={{ backgroundColor: cursorColors[cursorColorIndex] }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              ></motion.span>
            </p>
          </motion.div>
        </section>

        {/* About Content Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className={`${merienda.className} text-4xl font-bold text-blue-700`}>
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-7 mt-4">
              At CodeCraft Software House, we specialize in delivering top-tier digital solutions that help businesses grow and innovate. From custom software development to UI/UX design, we transform ideas into powerful products.
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Left Side (Text) */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className={`${merienda.className} text-2xl font-semibold text-blue-700`}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-7">
                We envision a digital world where every business has access to innovative and scalable tech solutions. Our goal is to be the driving force behind digital transformation.
              </p>

              <h2 className={`${merienda.className} text-2xl font-semibold text-blue-700`}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-7">
                Our mission is to create high-performance applications and deliver outstanding services that add real value. We are passionate about code, design, and solving real-world problems.
              </p>
            </motion.div>

            {/* Right Side (Image) */}
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/office-dev-team.jpg"
                alt="Development Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-blue-700 py-20 text-center bg-blue-50">
          <h2 className={`${merienda.className} text-3xl font-bold`}>
            Let’s Build Something Amazing Together
          </h2>
          <p className="mt-4 text-lg">
            Ready to elevate your digital presence? Partner with us today.
          </p>
          <motion.a
            href="/contact"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            Get In Touch
          </motion.a>
        </section>
      </main>
    </PageWrapper>
  );
}
