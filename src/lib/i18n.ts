import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// @ts-ignore
import en from '../../locales/en.json';
// @ts-ignore
import ro from '../../locales/ro.json';
// @ts-ignore
import es from '../../locales/es.json';
// @ts-ignore
import pt from '../../locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      es: { translation: es },
      pt: { translation: pt },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n; 