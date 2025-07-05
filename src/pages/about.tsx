import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import AboutSection from '../components/AboutSection';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0">
          <Image src="/assets/Dana-Dragomirescu.jpeg" alt={t('about.alt')} width={320} height={400} className="rounded-xl shadow-lg object-cover" />
        </div>
        <div>
          <h1 className="font-heading text-4xl mb-4">{t('about.title')}</h1>
          <p className="mb-6">{t('about.description')}</p>
          <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: t('about.full') }} />
        </div>
      </main>
      <Footer />
    </>
  );
} 