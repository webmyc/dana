import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutTeaser() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-12 md:py-24 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Organic masked image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-72 h-80 md:w-96 md:h-[28rem]">
          <svg viewBox="0 0 320 400" className="absolute w-full h-full z-10">
            <defs>
              <clipPath id="about-leaf-mask" clipPathUnits="objectBoundingBox">
                <path d="M0.5,0 C0.7,0.1,1,0.3,1,0.5 C1,0.7,0.7,0.9,0.5,1 C0.3,0.9,0,0.7,0,0.5 C0,0.3,0.3,0.1,0.5,0" />
              </clipPath>
            </defs>
            <rect width="320" height="400" fill="#C799A3" clipPath="url(#about-leaf-mask)" />
          </svg>
          <Image
            src="/assets/Dana-Dragomirescu.jpeg"
            alt={t('about.title')}
            width={320}
            height={400}
            className="rounded-xl shadow-lg object-cover absolute inset-0 w-full h-full"
            style={{ clipPath: 'url(#about-leaf-mask)' }}
            priority
          />
        </div>
      </div>
      {/* Text content */}
      <div className="prose dark:prose-invert max-w-xl md:w-1/2 flex flex-col items-start">
        <h2 className="font-heading text-3xl md:text-4xl text-deep-forest-teal mb-4 uppercase tracking-wider">
          {t('about.title')}
        </h2>
        <p className="font-body text-lg text-charcoal mb-6">
          {t('about.description')}
        </p>
        <a
          href="/about"
          className="uppercase py-3 px-8 bg-vibrant-ochre text-deep-forest-teal font-bold rounded-full shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre text-base"
        >
          {t('about.learnMore')}
        </a>
      </div>
    </motion.section>
  );
} 