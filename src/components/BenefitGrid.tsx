import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const botanicalSVG = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-2 right-2 opacity-10 pointer-events-none">
    <path d="M40 70C55 55 70 40 40 10" stroke="#145D52" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="40" cy="10" r="4" fill="#A67C52" />
  </svg>
);

const checkIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="16" cy="16" r="16" fill="#A67C52" />
    <path d="M10 17l4 4 8-8" stroke="#F5F3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BenefitGrid() {
  const { t } = useTranslation();
  const benefits = t('benefits', { returnObjects: true }) as any[];
  return (
    <motion.section
      className="bg-soft-cream rounded-2xl shadow-card px-3 md:px-6 py-12 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-h2 uppercase tracking-wider text-deep-forest-teal text-center mb-12">
        {t('benefitsTitle')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            className="relative bg-white rounded-xl p-8 shadow-card flex flex-col items-start min-h-[220px] overflow-hidden hover:-translate-y-1 hover:shadow-lift transition"
            whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(20,93,82,0.16)' }}
          >
            {checkIcon}
            <h3 className="font-heading text-xl text-deep-forest-teal mb-2 mt-4 tracking-wider uppercase">
              {benefit.title}
            </h3>
            <p className="font-body text-base text-charcoal mb-2">
              {benefit.description}
            </p>
            {botanicalSVG}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 