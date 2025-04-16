import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'TechBit Solutions - Software House',
    template: '%s | Bytes Logic Solutions',
  },
  description: 'Building innovative software solutions for your business.',
  openGraph: {
    title: 'Bytes Logic Solutions',
    description: 'Building innovative software solutions for your business.',
    url: 'https://yourwebsite.com', // Replace with actual domain
    siteName: 'Bytes Logic Solutions',
    images: [
      {
        url: '/images/og-image.jpg', // Add an OG image in public/images
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBit Solutions',
    description: 'Building innovative software solutions for your business.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}