'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../lib/projects';
import Image from 'next/image';
import { Merienda } from "next/font/google";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Portfolio() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={cardVariants}
            className={`${merienda.className} text-4xl md:text-5xl font-extrabold text-center mb-16 text-teal-700 relative inline-block`}
          >
            Our Portfolio
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
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
                  <h3 className={`${merienda.className} text-xl font-semibold text-teal-700 mb-2`}>
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
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
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}