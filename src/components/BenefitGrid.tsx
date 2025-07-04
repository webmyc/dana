import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const botanicals = [
  "/assets/holistic-healer-49.jpeg",
  "/assets/holistic-healer-42.png"
];

export default function BenefitGrid() {
  const { t } = useTranslation();
  const benefits = t('benefits', { returnObjects: true }) as any[];
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-3xl mb-8 text-center">{t('benefitsTitle')}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            className="relative bg-light-neutral dark:bg-deep-green rounded-xl p-8 shadow-lg hover:scale-105 transition overflow-hidden prose dark:prose-invert"
            whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            {/* Botanical background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src={botanicals[Math.floor(Math.random() * botanicals.length)]}
                alt=""
                layout="fill"
                objectFit="cover"
                className="blur-lg"
              />
            </div>
            {/* Deep-green check icon */}
            <div className="mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#0F4F40" />
                <path d="M10 17l4 4 8-8" stroke="#EFFF40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-heading text-xl mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 