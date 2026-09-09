import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

// Define your translation resources
const resources = {
    en: {
        translation: enTranslation,
    },
    ar: {
        translation: arTranslation,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        lng: localStorage.getItem('i18nextLng') || 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
        },
    });

// Function to update LTR/RTL and lang attribute on <html> element
const updateDocumentAttributes = (lng: string) => {
    const dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lng);
};

// Listen for language changes
i18n.on("languageChanged", (lng: string) => {
    updateDocumentAttributes(lng);
});

// Set initial direction on app load
updateDocumentAttributes(i18n.language || "en");

export default i18n;