import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CommunitySpotlight() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image
          src="/assets/dana-workshop.jpeg"
          alt={t('community.title')}
          width={480}
          height={320}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="prose dark:prose-invert max-w-xl">
        <h2 className="font-heading text-3xl mb-4">{t('community.title')}</h2>
        <p className="mb-6">{t('community.description')}</p>
        <a href="https://suuna.org" target="_blank" rel="noopener" className="text-neon-lemon font-semibold underline">{t('community.cta') || t('community.linkText')}</a>
      </div>
    </motion.section>
  );
} 