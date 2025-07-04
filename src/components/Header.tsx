import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
    <header className="sticky top-0 bg-soft-cream dark:bg-deep-forest-teal z-50 shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <Image src="/assets/Dana-Dragomirescu.jpeg" alt="Logo" width={48} height={48} className="rounded-full" />
        <span className="font-heading text-xl font-bold">Dana Dragomirescu</span>
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 items-center" role="navigation" aria-label="Main navigation">
        <a href="#hero" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.home}</a>
        <a href="#about" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.about}</a>
        <a href="#services" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.services}</a>
        <a href="#community" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.community}</a>
        <a href="#blog" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.blog}</a>
        <a href="#contact" className="hover:text-deep-forest-teal focus:text-deep-forest-teal font-bold bg-vibrant-ochre text-deep-forest-teal px-3 py-1 rounded shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.getStarted}</a>
        <LanguageSwitcher />
        <ThemeToggle />
      </nav>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-vibrant-ochre"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
          <rect y="6" width="28" height="2.5" rx="1.25" fill="#145D52" />
          <rect y="13" width="28" height="2.5" rx="1.25" fill="#A67C52" />
          <rect y="20" width="28" height="2.5" rx="1.25" fill="#145D52" />
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
            className="fixed inset-0 z-50 bg-soft-cream/95 dark:bg-deep-forest-teal/95 flex flex-col items-center justify-center gap-8 p-8 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <a href="#hero" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.home}</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.about}</a>
            <a href="#services" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.services}</a>
            <a href="#community" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.community}</a>
            <a href="#blog" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.blog}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-2xl font-heading uppercase tracking-wider font-bold bg-vibrant-ochre text-deep-forest-teal px-6 py-3 rounded shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre">{nav.getStarted}</a>
            <div className="flex gap-4 mt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-vibrant-ochre"
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                <line x1="6" y1="6" x2="22" y2="22" stroke="#145D52" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="22" y1="6" x2="6" y2="22" stroke="#A67C52" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 