'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Lead Developer',
    bio: 'Alice drives our tech innovation with over a decade of experience in full-stack development.',
    image: '/images/team/alice.jpg',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Bob Carter',
    role: 'UI/UX Designer',
    bio: 'Bob crafts intuitive and beautiful interfaces that elevate user experiences.',
    image: '/images/team/bob.jpg',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Clara Lee',
    role: 'Project Manager',
    bio: 'Clara ensures projects are delivered on time and exceed client expectations.',
    image: '/images/team/clara.jpg',
    linkedin: '#',
  },
];

export default function Team() {
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
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                delay: member.id * 0.2,
                scale: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-teal-500 text-center"
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-teal-500/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white font-semibold text-lg">
                    Meet {member.name}
                  </span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 text-base font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.03-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.966v5.698h-3v-11h2.879v1.512h.04c.401-.757 1.379-1.557 2.834-1.557 3.03 0 3.587 1.996 3.587 4.592v6.453z" />
                    </svg>
                    LinkedIn
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}