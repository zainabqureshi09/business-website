'use client';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'AI/ML/GenAI Development',
    description: 'Build intelligent systems with cutting-edge AI, machine learning, and generative AI technologies.',
    icon: '/images/ai-icon.svg',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Create custom, responsive websites using modern frameworks and technologies.',
    icon: '/images/web-icon.svg',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Develop native and cross-platform apps for seamless user experiences.',
    icon: '/images/mobile-icon.svg',
  },
  {
    id: 4,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions to meet your unique business needs.',
    icon: '/images/software-icon.svg',
  },
  {
    id: 5,
    title: 'Graphics Designing',
    description: 'Craft stunning visuals and branding assets to elevate your identity.',
    icon: '/images/graphics-icon.svg',
  },
  {
    id: 6,
    title: 'UI/UX Designing',
    description: 'Design intuitive, user-friendly interfaces for optimal engagement.',
    icon: '/images/uiux-icon.svg',
  },
  {
    id: 7,
    title: 'Social Media Marketing',
    description: 'Boost your brand with strategic campaigns and engaging content.',
    icon: '/images/social-icon.svg',
  },
  {
    id: 8,
    title: 'Embedded Linux',
    description: 'Develop robust, efficient solutions for embedded systems and IoT.',
    icon: '/images/embedded-icon.svg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
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
          Our Services
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
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}