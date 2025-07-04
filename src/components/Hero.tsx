import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-deep-forest-teal" aria-label="Hero section">
      {/* Full-bleed background image with gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Dana-Dragomirescu.jpeg"
          alt="Dana Dragomirescu portrait"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest-teal/90 via-deep-forest-teal/60 to-transparent" />
      </div>
      {/* Animated SVG wave/circle accent */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ scale: 0.9, opacity: 0.7 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="210" r="180" fill="#A67C52" fillOpacity="0.08" />
          <circle cx="210" cy="210" r="120" fill="#EFFF40" fillOpacity="0.06" />
        </svg>
      </motion.div>
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="font-heading text-[3rem] md:text-[4rem] text-soft-cream mb-4 drop-shadow-xl tracking-widest uppercase">
          Authentic Connection
        </h1>
        <p className="font-subheading text-xl md:text-2xl text-earth-brass mb-8 max-w-2xl mx-auto">
          Guiding you to wholeness, presence, and deep belonging through nature, ritual, and authentic community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="uppercase py-3 px-8 bg-vibrant-ochre text-deep-forest-teal font-bold rounded-full shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre text-lg"
          >
            Work with Dana
          </a>
          <a
            href="#about"
            className="uppercase py-3 px-8 bg-earth-brass text-soft-cream font-bold rounded-full shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-earth-brass text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
} 