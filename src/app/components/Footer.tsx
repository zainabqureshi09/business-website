'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '/images/twitter-icon.svg' },
  { name: 'LinkedIn', href: '#', icon: '/images/linkedin-icon.svg' },
  { name: 'GitHub', href: '#', icon: '/images/github-icon.svg' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-tight text-teal-300">
              TechBit Solutions
            </h3>
            <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold text-gray-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-base font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold text-gray-100 mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="group relative"
                >
                  <motion.img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 rounded-full bg-gray-700 p-1.5 group-hover:bg-teal-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          © 2025 TechBit Solutions. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}