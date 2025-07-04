import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const arrowBtn = (dir: 'left' | 'right', onClick: () => void, disabled: boolean) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'left' ? 'Previous testimonial' : 'Next testimonial'}
    className={`rounded-full bg-vibrant-ochre text-deep-forest-teal w-10 h-10 flex items-center justify-center shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre mx-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    tabIndex={0}
  >
    {dir === 'left' ? (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="#145D52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) : (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#145D52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )}
  </button>
);

export default function TestimonialsCarousel() {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true }) as any[];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  return (
    <motion.section
      className="bg-deep-forest-teal rounded-2xl py-12 md:py-24 px-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl mb-10 text-center text-soft-cream uppercase tracking-wider">
        {t('testimonialsTitle')}
      </h2>
      <div className="relative w-full max-w-xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-deep-forest-teal rounded-xl p-10 shadow-card text-center min-h-[220px] flex flex-col items-center justify-center"
          >
            <blockquote className="text-2xl md:text-3xl italic mb-4 text-soft-cream font-body">
              “{testimonials[index].quote}”
            </blockquote>
            <div className="font-bold text-vibrant-ochre text-lg mb-1 font-heading">{testimonials[index].author}</div>
            <div className="text-base text-earth-brass font-subheading">{testimonials[index].role}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-6">
          {arrowBtn('left', prev, testimonials.length <= 1)}
          {arrowBtn('right', next, testimonials.length <= 1)}
        </div>
      </div>
    </motion.section>
  );
} 