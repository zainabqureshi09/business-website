'use client';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Merienda } from 'next/font/google';

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Zynithbyte transformed our business with their innovative solutions!',
    author: 'John Doe',
    company: 'XYZ Corp',
  },
  {
    id: 2,
    quote: 'Their team delivered our project on time and exceeded expectations.',
    author: 'Jane Smith',
    company: 'ABC Ltd',
  },
  {
    id: 3,
    quote: 'Highly professional and skilled developers. Highly recommend!',
    author: 'Mike Brown',
    company: 'Tech Innovate',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`${merienda.className} text-5xl md:text-7xl text-teal-700 font-bold drop-shadow-2xl tracking-tight`}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                delay: testimonial.id * 0.2,
                scale: { duration: 0.3 },
              }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4 border-teal-500"
              aria-labelledby={`testimonial-${testimonial.id}`}
            >
              <p
                id={`testimonial-${testimonial.id}`}
                className="text-gray-600 italic text-base md:text-lg mb-6 leading-relaxed"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <h4 className="text-xl font-semibold text-gray-800">
                {testimonial.author}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}