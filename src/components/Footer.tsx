import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-deep-green text-light-neutral py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center prose dark:prose-invert px-4">
        <div>{t('footer.copy') || t('footer.copyright')}</div>
        {/* Newsletter form, social icons, etc. */}
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 -rotate-45 pointer-events-none">
        <Image
          src="/assets/holistic-healer-45.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </footer>
  );
} 