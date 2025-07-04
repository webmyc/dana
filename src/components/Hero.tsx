import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center bg-light-neutral dark:bg-deep-green"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/assets/Dana-Dragomirescu.jpeg"
        alt={t('hero.headline')}
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-deep-green/60 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-5xl md:text-7xl text-light-neutral mb-4 drop-shadow-lg">{t('hero.headline')}</h1>
        <p className="text-xl md:text-2xl text-light-neutral mb-8 drop-shadow-lg">{t('hero.subheadline')}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-neon-lemon text-deep-green font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">{t('hero.ctaPrimary')}</button>
          <button className="bg-earth-brass text-light-neutral font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">{t('hero.ctaSecondary')}</button>
        </div>
      </div>
    </motion.section>
  );
} 