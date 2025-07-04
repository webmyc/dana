import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const icons = [
  "/assets/holistic-healer-42.png",
  "/assets/holistic-healer-45.png"
];

export default function ServicesList() {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true }) as any[];
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-3xl mb-8 text-center">{t('servicesTitle')}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-light-neutral dark:bg-deep-green rounded-xl p-8 shadow-lg flex items-center gap-6 hover:scale-105 transition prose dark:prose-invert"
            whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <Image
              src={icons[i]}
              alt={service.title}
              width={64}
              height={64}
              layout="fixed"
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-heading text-xl mb-2">{service.title}</h3>
              <p className="mb-2">{service.description}</p>
              <a href={service.ctaLink} className="text-neon-lemon font-semibold underline">{service.cta}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 