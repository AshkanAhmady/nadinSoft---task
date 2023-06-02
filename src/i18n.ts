import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fa: {
        translation: fa,
      },
    },
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
