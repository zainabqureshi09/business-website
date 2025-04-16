'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../lib/projects';

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Image with Fallback */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Background Image */}
        <img
          src="/images/tech-background.jpg"
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
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-gray-100/80"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                delay: project.id * 0.2,
                scale: { duration: 0.3 },
              }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-teal-500 group"
            >
              {/* Image with Hover Overlay */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-teal-500/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white font-semibold text-lg">
                    View Details
                  </span>
                </motion.div>
              </div>
              <div className="p-6">
                {/* Category Tag */}
                {project.category && (
                  <span className="inline-block bg-teal-100 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/portfolio/${project.id}`}
                  aria-label={`View details of ${project.title}`}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-300"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}