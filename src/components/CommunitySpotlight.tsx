import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CommunitySpotlight() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="relative w-full min-h-[340px] flex items-center justify-center overflow-hidden py-0 md:py-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Full-width blurred background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/dana-workshop.jpeg"
          alt={t('community.title')}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover blur-md scale-105"
          priority
        />
      </div>
      {/* Center overlay card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-soft-cream/80 rounded-2xl shadow-card p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-sm">
        <h2 className="font-heading text-h2 text-deep-teal mb-4 uppercase tracking-wider">
          {t('community.title')}
        </h2>
        <p className="font-body text-base text-charcoal mb-6">
          {t('community.description')}
        </p>
        <a
          href="https://suuna.org"
          target="_blank"
          rel="noopener"
          className="uppercase py-3 px-8 bg-vibrant-ochre text-deep-teal font-bold rounded-full shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base"
        >
          {t('community.cta') || t('community.linkText')}
        </a>
      </div>
    </motion.section>
  );
} 