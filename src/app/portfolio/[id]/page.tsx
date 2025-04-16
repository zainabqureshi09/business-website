import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/app/lib/projects';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

interface PortfolioDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PortfolioDetailProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return {
      title: 'Project Not Found | TechBit Solutions',
    };
  }

  return {
    title: `${project.title} | TechBit Solutions`,
    description: project.details?.overview || project.description,
    openGraph: {
      title: project.title,
      description: project.details?.overview || project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function PortfolioDetail({ params }: PortfolioDetailProps) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project || !project.details) {
    notFound();
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {project.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Image
            src={project.image}
            width={100}
            height={100}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-600 mb-8">{project.details.overview}</p>
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <ul className="list-disc list-inside mb-8">
            {project.details.technologies.map((tech, index) => (
              <li key={index} className="text-gray-600">
                {tech}
              </li>
            ))}
          </ul>
          {project.details.link && (
            <Link
              href={project.details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline mb-8 inline-block"
            >
              Visit Project
            </Link>
          )}
          <Link
            href="/portfolio"
            className="bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800"
          >
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}