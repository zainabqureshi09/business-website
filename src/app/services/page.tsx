'use client';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const services: Service[] = [
  {
    id: 1,
    title: 'AI/ML/GenAI Development',
    description: 'Build intelligent systems with cutting-edge AI, machine learning, and generative AI technologies.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Create custom, responsive websites using modern frameworks and technologies.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3m6-6h6m-6 12h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Develop native and cross-platform apps for seamless user experiences.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions to meet your unique business needs.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m0-4v-2m6 6v-2m0-4v-2M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Graphics Designing',
    description: 'Craft stunning visuals and branding assets to elevate your identity.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-9v3m0 12v3m-9-9h3m12 0h-3" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'UI/UX Designing',
    description: 'Design intuitive, user-friendly interfaces for optimal engagement.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Social Media Marketing',
    description: 'Boost your brand with strategic campaigns and engaging content.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Embedded Linux',
    description: 'Develop robust, efficient solutions for embedded systems and IoT.',
    icon: (
      <svg className="w-14 h-14 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
];

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

export default function Services() {
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
            Our Services
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: 3,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-teal-500"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className={`${merienda.className} text-xl font-semibold text-teal-700 mb-2`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}