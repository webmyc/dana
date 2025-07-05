import React from 'react';
import { Fern } from './icons/BotanicalIcons';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-deep-teal text-soft-cream pt-16 pb-8 px-4 mt-16 overflow-hidden">
      {/* Brass botanical in BG */}
      <div className="absolute left-0 bottom-0 opacity-20 -rotate-12 pointer-events-none z-0">
        <Fern width={120} height={120} />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* About blurb */}
        <div>
          <h2 className="font-heading text-lg uppercase tracking-wider mb-2">Dana Dragomirescu</h2>
          <p className="font-body text-base mb-4">
            {t('footer.about', 'Authentic Connection: Relationship counseling, group facilitation, and nature-aligned rituals for deep belonging and growth.')}
          </p>
        </div>
        {/* Quick links */}
        <div>
          <h3 className="font-heading text-base uppercase tracking-wider mb-2">{t('footer.quickLinks', 'Quick Links')}</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.home')}</a></li>
            <li><a href="#about" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.about')}</a></li>
            <li><a href="#services" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.services')}</a></li>
            <li><a href="#community" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.community')}</a></li>
            <li><a href="#blog" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.blog')}</a></li>
            <li><a href="#contact" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">{t('nav.contact')}</a></li>
          </ul>
        </div>
        {/* Newsletter + Social */}
        <div>
          <h3 className="font-heading text-base uppercase tracking-wider mb-2">{t('footer.newsletter.title')}</h3>
          <form className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="email"
              placeholder={t('footer.newsletter.placeholder')}
              className="px-4 py-2 rounded-full bg-soft-cream text-deep-teal placeholder:text-deep-teal focus:outline-none focus:ring-2 focus:ring-warm-brass flex-1"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-vibrant-ochre text-deep-teal font-bold rounded-full px-6 py-2 shadow hover:scale-105 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-warm-brass"
            >
              {t('footer.newsletter.subscribe')}
            </button>
          </form>
          <div className="flex gap-4 mt-2">
            {/* Social icons placeholder */}
            <a href="#" aria-label="Instagram" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#A67C52" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#A67C52" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="#A67C52"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-vibrant-ochre focus:text-vibrant-ochre transition focus:outline-none focus:ring-2 focus:ring-warm-brass">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#A67C52" strokeWidth="2"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-soft-cream/80 font-body relative z-10">
        {t('footer.copyright', `© ${new Date().getFullYear()} Dana Dragomirescu. All rights reserved.`)}
      </div>
    </footer>
  );
} 