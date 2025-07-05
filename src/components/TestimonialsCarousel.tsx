import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const arrowBtn = (dir: 'left' | 'right', onClick: () => void, disabled: boolean) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'left' ? 'Previous testimonial' : 'Next testimonial'}
    className={`rounded-full bg-vibrant-ochre text-deep-teal w-10 h-10 flex items-center justify-center shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass mx-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    tabIndex={0}
  >
    {dir === 'left' ? (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="#0F4F40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) : (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#0F4F40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )}
  </button>
);

export default function TestimonialsCarousel() {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true });
  const [index, setIndex] = useState(0);
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];
  const next = () => setIndex((i) => (i + 1) % safeTestimonials.length);
  const prev = () => setIndex((i) => (i - 1 + safeTestimonials.length) % safeTestimonials.length);
  return (
    <motion.section
      className="relative bg-gradient-to-b from-dusty-rose/80 via-white/90 to-white rounded-3xl py-12 md:py-24 px-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-h2 mb-10 text-center text-deep-teal uppercase tracking-wider">
        {t('testimonialsTitle')}
      </h2>
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
        <AnimatePresence initial={false}>
          {safeTestimonials.length > 0 && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-deep-teal rounded-2xl p-10 shadow-card text-center min-h-[220px] flex flex-col items-center justify-center border-4 border-vibrant-ochre"
            >
              <blockquote className="text-2xl md:text-3xl italic mb-4 text-soft-cream font-body">
                “{safeTestimonials[index]?.quote}”
              </blockquote>
              <div className="font-bold text-vibrant-ochre text-lg mb-1 font-heading">{safeTestimonials[index]?.author}</div>
              <div className="text-base text-warm-brass font-subheading">{safeTestimonials[index]?.role}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center mt-6">
          {arrowBtn('left', prev, safeTestimonials.length <= 1)}
          {arrowBtn('right', next, safeTestimonials.length <= 1)}
        </div>
      </div>
      {/* Nav dots */}
      <div className="flex justify-center mt-6 gap-2">
        {safeTestimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-vibrant-ochre ${i === index ? 'bg-vibrant-ochre' : 'bg-white'} transition`}
            aria-label={i === index ? 'Current testimonial' : `Go to testimonial ${i + 1}`}
            role="button"
            tabIndex={0}
            onClick={() => setIndex(i)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndex(i); }}
          />
        ))}
      </div>
    </motion.section>
  );
} 