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
      className="py-12 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl mb-12 text-center text-deep-forest-teal uppercase tracking-wider">
        {t('servicesTitle')}
      </h2>
      <div className="flex flex-col gap-12">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 bg-white rounded-2xl shadow-card p-6 md:p-12`}
          >
            {/* Organic masked icon */}
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center relative">
              <svg viewBox="0 0 192 192" className="absolute w-full h-full z-10">
                <defs>
                  <clipPath id={`service-leaf-mask-${i}`} clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0 C0.7,0.1,1,0.3,1,0.5 C1,0.7,0.7,0.9,0.5,1 C0.3,0.9,0,0.7,0,0.5 C0,0.3,0.3,0.1,0.5,0" />
                  </clipPath>
                </defs>
                <rect width="192" height="192" fill="#C799A3" clipPath={`url(#service-leaf-mask-${i})`} />
              </svg>
              <Image
                src={icons[i % icons.length]}
                alt={service.title}
                width={192}
                height={192}
                className="object-cover absolute inset-0 w-full h-full"
                style={{ clipPath: `url(#service-leaf-mask-${i})` }}
                priority={i === 0}
              />
            </div>
            {/* Text content */}
            <div className="flex-1 flex flex-col items-start md:items-start">
              <h3 className="font-heading text-2xl text-deep-forest-teal mb-2 uppercase tracking-wider">
                {service.title}
              </h3>
              <ul className="list-disc pl-5 mb-4 text-charcoal font-body">
                {service.benefits && service.benefits.map((b: string, j: number) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <a
                href={service.ctaLink}
                className="uppercase py-2 px-6 bg-vibrant-ochre text-deep-forest-teal font-bold rounded-full shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre text-base"
              >
                {service.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 