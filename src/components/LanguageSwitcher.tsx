import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ro', label: 'RO' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };
  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-2 py-1 rounded font-semibold transition border border-transparent ${i18n.language === code ? 'bg-neon-lemon text-deep-green' : 'hover:border-neon-lemon'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
} 