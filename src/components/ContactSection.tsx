import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="container mx-auto py-16 flex flex-col items-center px-4">
      <h2 className="font-heading text-3xl mb-8 text-center">{t('contact.title')}</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-light-neutral dark:bg-deep-green rounded-xl p-8 shadow-lg flex flex-col gap-4 prose dark:prose-invert">
        <label className="font-semibold">{t('contact.nameLabel')}
          <input type="text" name="name" required className="mt-1 p-2 rounded border w-full" />
        </label>
        <label className="font-semibold">{t('contact.emailLabel')}
          <input type="email" name="email" required className="mt-1 p-2 rounded border w-full" />
        </label>
        <label className="font-semibold">{t('contact.messageLabel')}
          <textarea name="message" required className="mt-1 p-2 rounded border w-full" rows={4} />
        </label>
        <button type="submit" className="bg-neon-lemon text-deep-green font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">{t('contact.submit')}</button>
        {submitted && <div className="text-green-600 mt-2">{t('contact.success')}</div>}
      </form>
    </section>
  );
} 