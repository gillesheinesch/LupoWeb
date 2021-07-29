import i18n from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en_US from "./locales/en_US.json";

export const resources = {
  "en_US": {
    translation: en_US
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .on('languageChanged', function(lng) {
      if (lng.includes('-')) {
          i18next.changeLanguage(lng.replace("-", "_"))
      }
  })
  .init({
    resources,
    fallbackLng: "en_US",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;