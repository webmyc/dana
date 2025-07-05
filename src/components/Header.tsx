import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useTranslation();
  const nav = t('nav', { returnObjects: true }) as any;
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Trap focus in menu when open
  useEffect(() => {
    if (!open) return;
    const focusable = menuRef.current?.querySelectorAll('a,button');
    if (focusable && focusable.length) {
      (focusable[0] as HTMLElement).focus();
    }
    const handleTab = (e: KeyboardEvent) => {
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [open]);

  return (
    <header className="sticky top-0 w-full bg-deep-teal z-50 shadow flex items-center justify-between px-6 py-3">
      {/* Logo left */}
      <div className="flex items-center gap-4 min-w-[180px]">
        <Image src="/assets/Dana-Dragomirescu.jpeg" alt="Logo" width={40} height={40} className="rounded-full border-4 border-soft-cream" />
        <span className="font-heading text-xl font-bold text-soft-cream tracking-widest">Dana Dragomirescu</span>
      </div>
      {/* Desktop nav center */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 items-center" role="navigation" aria-label="Main navigation">
        <a href="#hero" className="text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.home}</a>
        <a href="#about" className="text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.about}</a>
        <a href="#services" className="text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.services}</a>
        <a href="#community" className="text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.community}</a>
        <a href="#blog" className="text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.blog}</a>
        <a href="#contact" className="ml-4 font-bold bg-vibrant-ochre text-deep-teal px-5 py-2 rounded-full shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass text-base font-heading uppercase tracking-wider">{nav.getStarted}</a>
      </nav>
      {/* Right: language and theme toggles */}
      <div className="flex items-center gap-2 min-w-[120px] justify-end">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-warm-brass ml-2"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
          <rect y="6" width="28" height="2.5" rx="1.25" fill="#FAF8F4" />
          <rect y="13" width="28" height="2.5" rx="1.25" fill="#A67C52" />
          <rect y="20" width="28" height="2.5" rx="1.25" fill="#FAF8F4" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-deep-teal flex flex-col items-center justify-center gap-8 p-8 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <a href="#hero" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.home}</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.about}</a>
            <a href="#services" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.services}</a>
            <a href="#community" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.community}</a>
            <a href="#blog" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider text-soft-cream hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.blog}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider font-bold bg-vibrant-ochre text-deep-teal px-6 py-3 rounded-full shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{nav.getStarted}</a>
            <div className="flex gap-4 mt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-warm-brass"
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                <line x1="6" y1="6" x2="22" y2="22" stroke="#FAF8F4" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="22" y1="6" x2="6" y2="22" stroke="#A67C52" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 