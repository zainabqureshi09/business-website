'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

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
    image: '/alice.jpg',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Bob Carter',
    role: 'UI/UX Designer',
    bio: 'Bob crafts intuitive and beautiful interfaces that elevate user experiences.',
    image: '/bob.jpeg',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Clara Lee',
    role: 'Project Manager',
    bio: 'Clara ensures projects are delivered on time and exceed client expectations.',
    image: '/clara.jpeg',
    linkedin: '#',
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

export default function Team() {
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
            Meet Our Team
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.5,
                  delay: member.id * 0.2,
                  scale: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-teal-500 text-center"
              >
                <div className="relative h-64">
                  <Image
                    width={1000}
                    height={1000}
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
                  <h3 className={`${merienda.className} text-xl font-semibold text-teal-700 mb-1`}>
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
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-6 h-6 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.03-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.966v5.698h-3v-11h2.879v1.512h.04c.401-.757 1.379-1.557 2.834-1.557 3.03 0 3.587 1.996 3.587 4.592v6.453z" />
                        </svg>
                      </motion.div>
                      LinkedIn
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}