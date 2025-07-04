import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();
  const nav = t('nav', { returnObjects: true }) as any;
  return (
    <header className="sticky top-0 bg-light-neutral dark:bg-deep-green z-50 shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <Image src="/assets/Dana-Dragomirescu.jpeg" alt="Logo" width={48} height={48} className="rounded-full" />
        <span className="font-heading text-xl font-bold">Dana Dragomirescu</span>
      </div>
      <nav className="flex gap-6 items-center">
        <a href="/" className="hover:text-neon-lemon transition">{nav.home}</a>
        <a href="/about" className="hover:text-neon-lemon transition">{nav.about}</a>
        <a href="/services" className="hover:text-neon-lemon transition">{nav.services}</a>
        <a href="/community" className="hover:text-neon-lemon transition">{nav.community}</a>
        <a href="/blog" className="hover:text-neon-lemon transition">{nav.blog}</a>
        <a href="/contact" className="hover:text-neon-lemon transition font-bold bg-neon-lemon text-deep-green px-3 py-1 rounded shadow hover:scale-105">{nav.getStarted}</a>
        <LanguageSwitcher />
        <ThemeToggle />
      </nav>
    </header>
  );
} 