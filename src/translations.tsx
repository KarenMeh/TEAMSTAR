import React, { useState, useEffect, createContext, useContext } from 'react';
import { SupportedLanguage } from './types/language';

export type TranslationKey = 
  | 'nav.home'
  | 'nav.benefits'
  | 'nav.useCases'
  | 'nav.pricing'
  | 'nav.docs'
  | 'nav.login'
  | 'nav.legal'
  | 'nav.features'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.cta.primary'
  | 'hero.cta.secondary'
  | 'footer.legal'
  | 'footer.quickLinks'
  | 'footer.download'
  | 'footer.copyright';

type Translations = {
  [key in TranslationKey]: string;
};

const translations: Record<SupportedLanguage, Translations> = {
  en: {
    'nav.home': 'Home',
    'nav.benefits': 'Key Benefits',
    'nav.useCases': 'Use Cases',
    'nav.pricing': 'Pricing',
    'nav.docs': 'API Documentation',
    'nav.login': 'Login',
    'nav.legal': 'Legal Notice',
    'nav.features': 'Features',
    'hero.title': 'Never Miss a Task Again',
    'hero.subtitle': 'Automate Your Team Management',
    'hero.description': 'Simplify your team\'s workflow with automated task assignments, real-time status tracking, and seamless integrations',
    'hero.cta.primary': 'Start Free – Forever',
    'hero.cta.secondary': 'Watch 2-Minute Demo',
    'footer.legal': 'Legal',
    'footer.quickLinks': 'Quick Links',
    'footer.download': 'Download App',
    'footer.copyright': '© 2024 TEAMSTAR. All rights reserved.'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.benefits': 'Vorteile',
    'nav.useCases': 'Anwendungsfälle',
    'nav.pricing': 'Preise',
    'nav.docs': 'API-Dokumentation',
    'nav.login': 'Anmelden',
    'nav.legal': 'Impressum',
    'nav.features': 'Funktionen',
    'hero.title': 'Verpassen Sie keine Aufgabe mehr',
    'hero.subtitle': 'Automatisieren Sie Ihr Team-Management',
    'hero.description': 'Stellen Sie sicher, dass keine Aufgabe übersehen wird – besonders wiederkehrende – mit Echtzeit-Überwachung und intelligenten Automatisierungen. Vereinfachen Sie den Workflow Ihres Teams mit automatischen Aufgabenverteilungen, Echtzeit-Statusverfolgung und nahtlosen Integrationen.',
    'hero.cta.primary': 'Kostenlos starten – Für immer',
    'hero.cta.secondary': '2-Minuten Demo ansehen',
    'footer.legal': 'Rechtliches',
    'footer.quickLinks': 'Schnelllinks',
    'footer.download': 'App herunterladen',
    'footer.copyright': '© 2024 TEAMSTAR. Alle Rechte vorbehalten.'
  }
};

type TranslationContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: TranslationKey) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: React.ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as SupportedLanguage;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value = {
    language,
    setLanguage: (lang: SupportedLanguage) => {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    },
    t: (key: TranslationKey) => translations[language][key]
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
} 