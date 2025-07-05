import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export default function AboutTeaser() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-12 md:py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Masked circle image with pastel-sage outline */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-pastel-sage" />
          <Image
            src="/assets/Dana-Dragomirescu.jpeg"
            alt={t('about.title')}
            width={320}
            height={320}
            className="rounded-full object-cover shadow-xl"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      {/* Text content */}
      <div className="max-w-xl md:w-1/2 flex flex-col items-start">
        <h2 className="font-heading text-h2 text-deep-teal mb-4 uppercase tracking-wider">
          {t('about.title')}
        </h2>
        <p className="font-body text-base text-charcoal mb-6">
          {t('about.description')}
        </p>
        <a
          href="#about"
          className="font-subheading text-base text-vibrant-ochre border-b-2 border-vibrant-ochre hover:text-warm-brass hover:border-warm-brass transition uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-warm-brass"
        >
          {t('about.learnMore')}
        </a>
      </div>
    </motion.section>
  );
} 