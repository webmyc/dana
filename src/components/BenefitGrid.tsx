import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="16" cy="16" r="16" fill="#A67C52" />
    <path d="M10 17l4 4 8-8" stroke="#FAF8F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BenefitGrid() {
  const { t } = useTranslation();
  let benefits = t('benefits', { returnObjects: true });
  return (
    <motion.section
      className="bg-soft-cream bg-sparkle rounded-3xl shadow-card px-3 md:px-6 py-12 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-h2 uppercase tracking-wider text-deep-teal text-center mb-12">
        {t('benefitsTitle')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {Array.isArray(benefits) && benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            className="relative bg-white rounded-2xl p-8 shadow-card flex flex-col items-start min-h-[220px] overflow-hidden hover:translate-y-2 hover:shadow-lg transition group"
            whileHover={{ y: 8, boxShadow: '0 8px 32px rgba(239,255,64,0.3)' }}
          >
            <CheckIcon />
            <h3 className="font-subheading font-extrabold text-h3 text-deep-teal mb-2 mt-4 tracking-wide uppercase">
              {benefit.title}
            </h3>
            <p className="font-body text-base text-charcoal mb-2">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 