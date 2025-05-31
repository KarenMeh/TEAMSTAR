import { useState } from 'react';
import { SupportedLanguage } from '../types/language';

// Translation type definition
export type TranslationKey = 
  | 'nav.home'
  | 'nav.benefits'
  | 'nav.useCases'
  | 'nav.pricing'
  | 'nav.docs'
  | 'nav.login'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.cta.primary'
  | 'hero.cta.secondary'
  | 'features.title'
  | 'features.subtitle'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'footer.copyright'
  | 'footer.legal'
  | 'footer.quickLinks'
  | 'footer.download';

// Translation interface
interface Translations {
  [key: string]: {
    [K in SupportedLanguage]: string;
  };
}

// Translations object
export const translations: Translations = {
  'nav.home': {
    en: 'Home',
    de: 'Startseite'
  },
  'nav.benefits': {
    en: 'Key Benefits',
    de: 'Hauptvorteile'
  },
  'nav.useCases': {
    en: 'Use Cases',
    de: 'Anwendungsfälle'
  },
  'nav.pricing': {
    en: 'Pricing',
    de: 'Preise'
  },
  'nav.docs': {
    en: 'API Documentation',
    de: 'API-Dokumentation'
  },
  'nav.login': {
    en: 'Login',
    de: 'Anmelden'
  },
  'hero.title': {
    en: 'Never Miss a Task Again',
    de: 'Verpassen Sie keine Aufgabe mehr'
  },
  'hero.subtitle': {
    en: 'Automate Your Team Management',
    de: 'Automatisieren Sie Ihr Teammanagement'
  },
  'hero.description': {
    en: 'Ensure no task is overlooked—especially recurring ones—with real-time oversight and intelligent automations.',
    de: 'Stellen Sie sicher, dass keine Aufgabe übersehen wird – besonders wiederkehrende – mit Echtzeit-Überwachung und intelligenten Automatisierungen.'
  },
  'hero.cta.primary': {
    en: 'Start Free – Forever',
    de: 'Kostenlos starten – Für immer'
  },
  'hero.cta.secondary': {
    en: 'Watch 2-Minute Demo',
    de: '2-Minuten-Demo ansehen'
  },
  'features.title': {
    en: 'Key Features',
    de: 'Hauptfunktionen'
  },
  'features.subtitle': {
    en: 'Transform your team\'s productivity with our comprehensive suite of features',
    de: 'Steigern Sie die Produktivität Ihres Teams mit unserem umfassenden Funktionsumfang'
  },
  'pricing.title': {
    en: 'Pricing',
    de: 'Preise'
  },
  'pricing.subtitle': {
    en: 'Choose the perfect plan for your team',
    de: 'Wählen Sie den perfekten Plan für Ihr Team'
  },
  'contact.title': {
    en: 'Get in Touch',
    de: 'Kontakt'
  },
  'contact.subtitle': {
    en: 'Have questions? We\'d love to hear from you.',
    de: 'Haben Sie Fragen? Wir freuen uns von Ihnen zu hören.'
  },
  'footer.copyright': {
    en: '© 2025 TEAMSTAR. All rights reserved.',
    de: '© 2025 TEAMSTAR. Alle Rechte vorbehalten.'
  },
  'footer.legal': {
    en: 'Legal',
    de: 'Rechtliches'
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    de: 'Schnelllinks'
  },
  'footer.download': {
    en: 'Download Our App',
    de: 'App herunterladen'
  }
};

// Translation hook type
export type UseTranslation = {
  t: (key: TranslationKey) => string;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
};

// Translation hook
export const useTranslation = (): UseTranslation => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  const t = (key: TranslationKey): string => {
    const translation = translations[key];
    return translation ? translation[language] : key;
  };

  return { t, language, setLanguage };
}; 