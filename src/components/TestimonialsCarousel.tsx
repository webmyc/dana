import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TestimonialsCarousel() {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true }) as any[];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="container mx-auto py-16 flex flex-col items-center px-4">
      <h2 className="font-heading text-3xl mb-8 text-center">{t('testimonialsTitle')}</h2>
      <div className="relative w-full max-w-xl prose dark:prose-invert">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-light-neutral dark:bg-deep-green rounded-xl p-8 shadow-lg text-center"
          >
            <blockquote className="text-xl italic mb-4">“{testimonials[index].quote}”</blockquote>
            <div className="font-bold">{testimonials[index].author}</div>
            <div className="text-sm text-earth-brass">{testimonials[index].role}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <button onClick={prev} className="px-3 py-1 rounded bg-earth-brass text-light-neutral hover:bg-neon-lemon hover:text-deep-green transition">←</button>
          <button onClick={next} className="px-3 py-1 rounded bg-earth-brass text-light-neutral hover:bg-neon-lemon hover:text-deep-green transition">→</button>
        </div>
      </div>
    </section>
  );
} 