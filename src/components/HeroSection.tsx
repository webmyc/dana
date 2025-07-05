import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

// Sparkle SVG for background
const Sparkle = () => (
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute animate-pulse" style={{ opacity: 0.15 }}>
    <circle cx="20" cy="20" r="1.5" fill="#EFFF40" />
  </svg>
);

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-deep-teal py-0">
      {/* Sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-8 left-1/4"><Sparkle /></div>
        <div className="absolute top-1/2 left-3/4"><Sparkle /></div>
        <div className="absolute bottom-8 right-1/3"><Sparkle /></div>
        <div className="absolute bottom-12 left-1/6"><Sparkle /></div>
      </div>
      {/* Masked hero image with gradient */}
      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <div className="w-full max-w-5xl aspect-[16/9] rounded-t-3xl overflow-hidden relative shadow-2xl">
          <Image
            src="/assets/Dana-Dragomirescu.jpeg"
            alt={t('hero.alt', 'Dana Dragomirescu portrait')}
            layout="fill"
            objectFit="cover"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/90 via-deep-teal/60 to-transparent" />
        </div>
      </div>
      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-heading text-soft-cream text-h1 mb-4 drop-shadow-xl tracking-widest uppercase">
          {t('hero.headline')}
        </h1>
        <p className="font-subheading text-[1.25rem] text-soft-cream mb-8 max-w-2xl mx-auto">
          {t('hero.subheadline')}
        </p>
        <a
          href="#contact"
          className="uppercase py-3 px-8 bg-vibrant-ochre text-deep-teal font-bold rounded-full shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-lg"
        >
          {t('hero.ctaPrimary')}
        </a>
      </motion.div>
    </section>
  );
} 