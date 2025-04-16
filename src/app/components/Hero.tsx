'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const fullText = 'Innovate. Build. Succeed.';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed of typing here
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-teal-600 text-gray-100 py-24 overflow-hidden">
      {/* Animated Background Image with Fallback */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Background Image */}
        <img
          src="/backport.avif"
          alt="Tech-inspired background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback SVG Pattern */}
        <svg
          className="w-full h-full absolute inset-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,125,125,0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-teal-600/80"></div>
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-teal-200 relative inline-block"
          >
            <span>{displayedText}</span>
            <span className="animate-blink inline-block w-1 h-12 bg-teal-200 align-middle ml-1"></span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We craft cutting-edge software solutions to empower your business.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              aria-label="Get a quote"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              aria-label="Explore our services"
              className="border-2 border-teal-400 hover:bg-teal-400 hover:text-gray-900 text-teal-400 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for Blinking Cursor */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </section>
  );
}