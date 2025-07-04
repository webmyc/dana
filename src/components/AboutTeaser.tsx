import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutTeaser() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-shrink-0">
        <Image
          src="/assets/Dana-Dragomirescu.jpeg"
          alt={t('about.title')}
          width={320}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="prose dark:prose-invert max-w-xl">
        <h2 className="font-heading text-3xl mb-4">{t('about.title')}</h2>
        <p className="mb-6">{t('about.description')}</p>
        <a href="/about" className="text-deep-green font-semibold underline hover:text-earth-brass transition">{t('about.learnMore')}</a>
      </div>
    </motion.section>
  );
} 