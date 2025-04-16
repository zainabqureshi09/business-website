import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A scalable online store with payment integration.',
    image: '/images/project1.jpg',
    details: {
      overview:
        'A robust e-commerce platform with seamless payment gateways and user-friendly design.',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
      link: 'https://example.com',
    },
  },
  {
    id: 2,
    title: 'Healthcare App',
    description: 'A mobile app for patient management.',
    image: '/images/project2.jpg',
    details: {
      overview:
        'An app to streamline patient records and appointments for clinics.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
    },
  },
  {
    id: 3,
    title: 'AI Dashboard',
    description: 'A web app for real-time analytics.',
    image: '/images/project3.jpg',
    details: {
      overview:
        'A dashboard for visualizing AI-driven insights with real-time updates.',
      technologies: ['Next.js', 'D3.js', 'AWS'],
      link: 'https://example.com',
    },
  },
];