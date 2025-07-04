import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Fern, Moon, Leaf } from './icons/BotanicalIcons';

const icons = [<Fern key="fern" />, <Moon key="moon" />, <Leaf key="leaf" />];

export default function ServicesList() {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true }) as any[];
  return (
    <motion.section
      className="bg-pastel-sage rounded-3xl shadow-card px-3 md:px-6 py-12 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-h2 uppercase tracking-wider text-deep-teal text-center mb-12">
        {t('servicesTitle')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="relative bg-white rounded-2xl p-8 shadow-card flex flex-col items-start min-h-[260px] overflow-hidden hover:translate-y-2 hover:shadow-lg transition group"
            whileHover={{ y: 8, boxShadow: '0 8px 32px rgba(239,255,64,0.3)' }}
          >
            <div className="mb-4">{icons[i % icons.length]}</div>
            <h3 className="font-subheading font-extrabold text-h3 text-deep-teal mb-2 tracking-wide uppercase">
              {service.title}
            </h3>
            <ul className="list-disc pl-5 mb-4 text-charcoal font-body">
              {service.benefits && service.benefits.map((b: string, j: number) => (
                <li key={j} className="before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-warm-brass before:mr-2">
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={service.ctaLink}
              className="font-subheading text-base text-vibrant-ochre border-b-2 border-vibrant-ochre hover:text-warm-brass hover:border-warm-brass transition uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-warm-brass"
            >
              {service.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 