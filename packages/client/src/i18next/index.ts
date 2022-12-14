import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import PTBR from './locales/pt-br/pt-br.json';
import ENUS from './locales/en-us/en-us.json';
import ESES from './locales/es-es/es-es.json';
import FRFR from './locales/fr-fr/fr-fr.json';
import ITIT from './locales/it-it/it-it.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
  'es-ES': ESES,
  'fr-FR': FRFR,
  'it-IT': ITIT,
};

const languagePreference = localStorage
  ? localStorage.getItem('languagePrefence')
  : navigator.language;

function InitI18N() {
  i18n.use(initReactI18next).init({
    resources,
    lng: languagePreference || navigator.language,
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

export default InitI18N();
