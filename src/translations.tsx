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
  | 'hero.mainTitle'
  | 'hero.mainDescription'
  | 'hero.secondaryDescription'
  | 'demo.title'
  | 'demo.description'
  | 'demo.videoNotSupported'
  | 'benefits.title'
  | 'benefits.subtitle'
  | 'benefits.taskCompletion.title'
  | 'benefits.taskCompletion.description'
  | 'benefits.realTime.title'
  | 'benefits.realTime.description'
  | 'benefits.aiAssignments.title'
  | 'benefits.aiAssignments.description'
  | 'benefits.photoVerified.title'
  | 'benefits.photoVerified.description'
  | 'benefits.apiFirst.title'
  | 'benefits.apiFirst.description'
  | 'benefits.fieldService.title'
  | 'benefits.fieldService.description'
  | 'benefits.gdpr.title'
  | 'benefits.gdpr.description'
  | 'slides.authPortal'
  | 'slides.dashboard'
  | 'slides.scheduledTask'
  | 'slides.taskOverview'
  | 'slides.createTasks'
  | 'useCases.title'
  | 'useCases.subtitle'
  | 'useCases.hospitality.title'
  | 'useCases.hospitality.description'
  | 'useCases.maintenance.title'
  | 'useCases.maintenance.description'
  | 'useCases.sales.title'
  | 'useCases.sales.description'
  | 'useCases.gastronomy.title'
  | 'useCases.gastronomy.description'
  | 'useCases.construction.title'
  | 'useCases.construction.description'
  | 'useCases.fieldServices.title'
  | 'useCases.fieldServices.description'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'pricing.freePlan.title'
  | 'pricing.freePlan.users'
  | 'pricing.freePlan.api'
  | 'pricing.freePlan.button'
  | 'pricing.proPlan.title'
  | 'pricing.proPlan.teams'
  | 'pricing.proPlan.users'
  | 'pricing.proPlan.button'
  | 'pricing.addons.title'
  | 'pricing.addons.user'
  | 'pricing.addons.api'
  | 'pricing.addons.desc'
  | 'pricing.addons.button'
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.max.name'
  | 'testimonials.max.title'
  | 'testimonials.max.company'
  | 'testimonials.max.quote'
  | 'testimonials.harald.name'
  | 'testimonials.harald.title'
  | 'testimonials.harald.company'
  | 'testimonials.harald.quote'
  | 'testimonials.nopadon.name'
  | 'testimonials.nopadon.title'
  | 'testimonials.nopadon.company'
  | 'testimonials.nopadon.quote'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.title'
  | 'contact.form.firstName'
  | 'contact.form.firstNamePlaceholder'
  | 'contact.form.lastName'
  | 'contact.form.lastNamePlaceholder'
  | 'contact.form.email'
  | 'contact.form.emailPlaceholder'
  | 'contact.form.subject'
  | 'contact.form.subjectPlaceholder'
  | 'contact.form.message'
  | 'contact.form.messagePlaceholder'
  | 'contact.form.button'
  | 'footer.productOf'
  | 'footer.legal.title'
  | 'footer.legal.notice'
  | 'footer.legal.terms'
  | 'footer.legal.privacy'
  | 'footer.download.title'
  | 'footer.download.appStore'
  | 'footer.download.googlePlay'
  | 'footer.copyright'
  | 'aria.switchToEnglish'
  | 'aria.switchToGerman'
  | 'aria.closeMenu'
  | 'aria.openMenu'
  | 'aria.goToSlide';

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
    'hero.mainTitle': 'Never Miss a Task Again – Automate Your Team Management',
    'hero.mainDescription': 'Ensure no task is overlooked—especially recurring ones—with real-time oversight and intelligent automations.',
    'hero.secondaryDescription': 'Simplify your team\'s workflow with automated task assignments, real-time status tracking, and seamless integrations.',
    'demo.title': 'Discover How TEAMSTAR Streamlines Your Team Management',
    'demo.description': 'Watch how TEAMSTAR automates tasks, tracks progress, and enhances team efficiency.',
    'demo.videoNotSupported': 'Your browser does not support the video tag.',
    'benefits.title': 'Key Benefits',
    'benefits.subtitle': 'Streamline your team\'s workflow with our essential features',
    'benefits.taskCompletion.title': 'Task Completion Assurance',
    'benefits.taskCompletion.description': 'Guarantee that no task, including recurring duties, is forgotten.',
    'benefits.realTime.title': 'Real-Time Oversight',
    'benefits.realTime.description': 'Monitor task statuses from anywhere, ensuring transparency and accountability.',
    'benefits.aiAssignments.title': 'AI-Powered Assignments',
    'benefits.aiAssignments.description': 'Leverage AI to assign tasks automatically based on real-time data and team availability.',
    'benefits.photoVerified.title': 'Photo-Verified Confirmations',
    'benefits.photoVerified.description': 'Enhance trust and accountability by requiring photo evidence upon task completion',
    'benefits.apiFirst.title': 'API-First Architecture',
    'benefits.apiFirst.description': 'Seamlessly integrate with automation platforms like n8n, Make, and Zapier. Connect with CRM, POS, ERP systems, and project boards to respond to triggers and automate internal business processes.',
    'benefits.fieldService.title': 'Field Service Enablement',
    'benefits.fieldService.description': 'Assign tasks to fieldworkers and collect photo-based task confirmation—ensuring operational visibility, reliable documentation, and full accountability across distributed teams.',
    'benefits.gdpr.title': 'GDPR Compliance',
    'benefits.gdpr.description': 'Ensure data protection with local LLMs and servers hosted in Germany.',
    'slides.authPortal': 'Authentication Portal',
    'slides.dashboard': 'Dashboard',
    'slides.scheduledTask': 'Scheduled Task',
    'slides.taskOverview': 'Task Overview',
    'slides.createTasks': 'Create Tasks',
    'useCases.title': 'Use Cases',
    'useCases.subtitle': 'Discover how TEAMSTAR adapts to your industry\'s unique needs',
    'useCases.hospitality.title': 'Hospitality',
    'useCases.hospitality.description': 'Automate housekeeping tasks post-checkout, ensuring rooms are promptly prepared for new guests.',
    'useCases.maintenance.title': 'Maintenance',
    'useCases.maintenance.description': 'When issues like a malfunctioning air conditioning unit are reported, TEAMSTAR automatically assigns the task to the appropriate maintenance team with the correct priority, eliminating the need for manual intervention.',
    'useCases.sales.title': 'Sales',
    'useCases.sales.description': 'Manage your sales team effectively by automating recurring client visits, ensuring consistent customer engagement and strong client relationships.',
    'useCases.gastronomy.title': 'Gastronomy',
    'useCases.gastronomy.description': 'Streamline morning opening procedures with automated checklists, ensuring all preparation tasks are completed to maintain service quality.',
    'useCases.construction.title': 'Construction',
    'useCases.construction.description': 'Coordinate your construction teams by assigning daily tasks to specific sites, with the ability to include photo documentation. Easily reallocate teams to different sites as needed, even on short notice, ensuring flexibility and efficient communication.',
    'useCases.fieldServices.title': 'Field Services',
    'useCases.fieldServices.description': 'Send tasks directly to your field staff—like maintenance techs or installation teams — and have them document work with photo proof, so nothing critical gets missed and team leader can easily verify job completion.',
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Simple, transparent pricing that grows with your business',
    'pricing.freePlan.title': 'Forever Free Plan',
    'pricing.freePlan.users': 'Up to 10 users included',
    'pricing.freePlan.api': 'Full API access (with limited calls)',
    'pricing.freePlan.button': 'Get Started',
    'pricing.proPlan.title': 'Pro Plan',
    'pricing.proPlan.teams': '€5 per additional team per month.',
    'pricing.proPlan.users': '€10 per 10 additional users per month.',
    'pricing.proPlan.button': 'Choose Your Plan',
    'pricing.addons.title': 'Add-ons',
    'pricing.addons.user': 'Each additional user: €5/month',
    'pricing.addons.api': 'Unlimited API calls: €10/month',
    'pricing.addons.desc': 'With unlimited API calls, you can use all integrations and automations with no limits or restrictions.',
    'pricing.addons.button': 'Choose Your Add-ons',
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'Join hundreds of satisfied teams who trust TEAMSTAR for their daily operations',
    'testimonials.max.name': 'Max Müller',
    'testimonials.max.title': 'Construction Manager',
    'testimonials.max.company': 'BauProjekte GmbH',
    'testimonials.max.quote': '"With TEAMSTAR, we\'ve finally brought order to our construction projects. Task management has become significantly easier and less stressful."',
    'testimonials.harald.name': 'Harald Nikisch',
    'testimonials.harald.title': 'Lokalexperten',
    'testimonials.harald.company': 'Hamburg, Germany',
    'testimonials.harald.quote': '"Scheduling client visits has never been easier. TEAMSTAR ensures our sales team stays on track and organized."',
    'testimonials.nopadon.name': 'Nopadon Jarutanan',
    'testimonials.nopadon.title': 'Facility Manager',
    'testimonials.nopadon.company': 'Condotel Chaweng Lakeview',
    'testimonials.nopadon.quote': '"TEAMSTAR has significantly enhanced our team management. Tasks are no longer forgotten, and monitoring is effortless."',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.firstNamePlaceholder': 'John',
    'contact.form.lastName': 'Last Name',
    'contact.form.lastNamePlaceholder': 'Doe',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'john@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'How can we help you?',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us more about your inquiry...',
    'contact.form.button': 'Send Message',
    'footer.productOf': 'is a product of',
    'footer.legal.title': 'Legal',
    'footer.legal.notice': 'Legal Notice',
    'footer.legal.terms': 'Terms and Conditions',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.download.title': 'Download Our App',
    'footer.download.appStore': 'App Store',
    'footer.download.googlePlay': 'Google Play',
    'footer.copyright': '© 2025 TEAMSTAR. All rights reserved.',
    'aria.switchToEnglish': 'Switch to English',
    'aria.switchToGerman': 'Switch to German',
    'aria.closeMenu': 'Close menu',
    'aria.openMenu': 'Open menu',
    'aria.goToSlide': 'Go to slide'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.benefits': 'Hauptvorteile',
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
    'hero.mainTitle': 'Verpassen Sie keine Aufgabe mehr – Automatisieren Sie Ihr Team-Management',
    'hero.mainDescription': 'Stellen Sie sicher, dass keine Aufgabe übersehen wird – besonders wiederkehrende – mit Echtzeit-Überwachung und intelligenten Automatisierungen.',
    'hero.secondaryDescription': 'Vereinfachen Sie den Workflow Ihres Teams mit automatischen Aufgabenverteilungen, Echtzeit-Statusverfolgung und nahtlosen Integrationen.',
    'demo.title': 'Entdecken Sie, wie TEAMSTAR Ihr Team-Management optimiert',
    'demo.description': 'Sehen Sie, wie TEAMSTAR Aufgaben automatisiert, Fortschritte verfolgt und die Team-Effizienz steigert.',
    'demo.videoNotSupported': 'Ihr Browser unterstützt das Video-Tag nicht.',
    'benefits.title': 'Hauptvorteile',
    'benefits.subtitle': 'Optimieren Sie den Workflow Ihres Teams mit unseren wesentlichen Funktionen',
    'benefits.taskCompletion.title': 'Aufgabenabschluss-Garantie',
    'benefits.taskCompletion.description': 'Garantieren Sie, dass keine Aufgabe, einschließlich wiederkehrender Pflichten, vergessen wird.',
    'benefits.realTime.title': 'Echtzeit-Überwachung',
    'benefits.realTime.description': 'Überwachen Sie Aufgabenstatus von überall und gewährleisten Sie Transparenz und Verantwortlichkeit.',
    'benefits.aiAssignments.title': 'KI-gestützte Zuweisungen',
    'benefits.aiAssignments.description': 'Nutzen Sie KI, um Aufgaben automatisch basierend auf Echtzeitdaten und Teamverfügbarkeit zuzuweisen.',
    'benefits.photoVerified.title': 'Foto-verifizierte Bestätigungen',
    'benefits.photoVerified.description': 'Erhöhen Sie Vertrauen und Verantwortlichkeit durch Foto-Nachweise bei Aufgabenabschluss',
    'benefits.apiFirst.title': 'API-First Architektur',
    'benefits.apiFirst.description': 'Nahtlos integrieren mit Automatisierungsplattformen wie n8n, Make und Zapier. Verbinden Sie sich mit CRM-, POS-, ERP-Systemen und Projektboards, um auf Trigger zu reagieren und interne Geschäftsprozesse zu automatisieren.',
    'benefits.fieldService.title': 'Außendienst-Unterstützung',
    'benefits.fieldService.description': 'Weisen Sie Aufgaben Außendienstmitarbeitern zu und sammeln Sie foto-basierte Aufgabenbestätigungen – für operative Transparenz, zuverlässige Dokumentation und vollständige Verantwortlichkeit in verteilten Teams.',
    'benefits.gdpr.title': 'DSGVO-Konformität',
    'benefits.gdpr.description': 'Gewährleisten Sie Datenschutz mit lokalen LLMs und Servern in Deutschland.',
    'slides.authPortal': 'Authentifizierungsportal',
    'slides.dashboard': 'Dashboard',
    'slides.scheduledTask': 'Geplante Aufgabe',
    'slides.taskOverview': 'Aufgabenübersicht',
    'slides.createTasks': 'Aufgaben erstellen',
    'useCases.title': 'Anwendungsfälle',
    'useCases.subtitle': 'Entdecken Sie, wie TEAMSTAR sich an die einzigartigen Bedürfnisse Ihrer Branche anpasst',
    'useCases.hospitality.title': 'Hotellerie',
    'useCases.hospitality.description': 'Automatisieren Sie Reinigungsaufgaben nach dem Check-out und stellen Sie sicher, dass Zimmer schnell für neue Gäste vorbereitet werden.',
    'useCases.maintenance.title': 'Wartung',
    'useCases.maintenance.description': 'Wenn Probleme wie eine defekte Klimaanlage gemeldet werden, weist TEAMSTAR die Aufgabe automatisch dem entsprechenden Wartungsteam mit der richtigen Priorität zu und eliminiert manuelle Eingriffe.',
    'useCases.sales.title': 'Vertrieb',
    'useCases.sales.description': 'Verwalten Sie Ihr Vertriebsteam effektiv durch Automatisierung wiederkehrender Kundenbesuche und gewährleisten Sie konsistentes Kundenengagement und starke Kundenbeziehungen.',
    'useCases.gastronomy.title': 'Gastronomie',
    'useCases.gastronomy.description': 'Optimieren Sie morgendliche Öffnungsverfahren mit automatisierten Checklisten und stellen Sie sicher, dass alle Vorbereitungsaufgaben abgeschlossen werden, um die Servicequalität zu erhalten.',
    'useCases.construction.title': 'Bauwesen',
    'useCases.construction.description': 'Koordinieren Sie Ihre Bauteams durch Zuweisung täglicher Aufgaben zu bestimmten Baustellen mit der Möglichkeit, Foto-Dokumentation einzuschließen. Teams bei Bedarf einfach zu verschiedenen Baustellen umverteilen, auch kurzfristig, für Flexibilität und effiziente Kommunikation.',
    'useCases.fieldServices.title': 'Außendienst',
    'useCases.fieldServices.description': 'Senden Sie Aufgaben direkt an Ihr Außendienstpersonal – wie Wartungstechniker oder Montageteams – und lassen Sie sie die Arbeit mit Foto-Nachweisen dokumentieren, damit nichts Wichtiges übersehen wird und Teamleiter die Arbeitserfüllung einfach verifizieren können.',
    'pricing.title': 'Preise',
    'pricing.subtitle': 'Einfache, transparente Preise, die mit Ihrem Unternehmen wachsen',
    'pricing.freePlan.title': 'Forever-Free-Plan',
    'pricing.freePlan.users': 'Bis zu 10 Nutzer kostenlos',
    'pricing.freePlan.api': 'Voller API-Zugang (mit Limit bei den Aufrufen)',
    'pricing.freePlan.button': 'Jetzt starten',
    'pricing.proPlan.title': 'Pro-Plan',
    'pricing.proPlan.teams': '€5 pro zusätzliches Team pro Monat.',
    'pricing.proPlan.users': '€10 pro 10 zusätzliche Benutzer pro Monat.',
    'pricing.proPlan.button': 'Plan wählen',
    'pricing.addons.title': 'Add-ons',
    'pricing.addons.user': 'Jeder weitere Nutzer: 5\u202f€/Monat',
    'pricing.addons.api': 'Unlimitierte API-Aufrufe: 10\u202f€/Monat',
    'pricing.addons.desc': 'Mit unlimitierten API-Aufrufen kannst du alle Integrationen und Automatisierungen grenzenlos nutzen – ohne Einschränkungen.',
    'pricing.addons.button': 'Add-ons auswählen',
    'testimonials.title': 'Kundenstimmen',
    'testimonials.subtitle': 'Schließen Sie sich Hunderten zufriedener Teams an, die TEAMSTAR für ihre täglichen Abläufe vertrauen',
    'testimonials.max.name': 'Max Müller',
    'testimonials.max.title': 'Bauleiter',
    'testimonials.max.company': 'BauProjekte GmbH',
    'testimonials.max.quote': '"Mit TEAMSTAR haben wir endlich Ordnung in unsere Bauprojekte gebracht. Das Aufgabenmanagement ist deutlich einfacher und weniger stressig geworden."',
    'testimonials.harald.name': 'Harald Nikisch',
    'testimonials.harald.title': 'Lokalexperten',
    'testimonials.harald.company': 'Hamburg, Deutschland',
    'testimonials.harald.quote': '"Die Planung von Kundenbesuchen war noch nie einfacher. TEAMSTAR stellt sicher, dass unser Vertriebsteam auf Kurs und organisiert bleibt."',
    'testimonials.nopadon.name': 'Nopadon Jarutanan',
    'testimonials.nopadon.title': 'Facility Manager',
    'testimonials.nopadon.company': 'Condotel Chaweng Lakeview',
    'testimonials.nopadon.quote': '"TEAMSTAR hat unser Team-Management erheblich verbessert. Aufgaben werden nicht mehr vergessen und die Überwachung ist mühelos."',
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Haben Sie Fragen? Wir freuen uns von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.firstName': 'Vorname',
    'contact.form.firstNamePlaceholder': 'Max',
    'contact.form.lastName': 'Nachname',
    'contact.form.lastNamePlaceholder': 'Mustermann',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.emailPlaceholder': 'max@beispiel.de',
    'contact.form.subject': 'Betreff',
    'contact.form.subjectPlaceholder': 'Wie können wir Ihnen helfen?',
    'contact.form.message': 'Nachricht',
    'contact.form.messagePlaceholder': 'Erzählen Sie uns mehr über Ihre Anfrage...',
    'contact.form.button': 'Nachricht senden',
    'footer.productOf': 'ist ein Produkt von',
    'footer.legal.title': 'Rechtliches',
    'footer.legal.notice': 'Impressum',
    'footer.legal.terms': 'Allgemeine Geschäftsbedingungen',
    'footer.legal.privacy': 'Datenschutzerklärung',
    'footer.download.title': 'App herunterladen',
    'footer.download.appStore': 'App Store',
    'footer.download.googlePlay': 'Google Play',
    'footer.copyright': '© 2025 TEAMSTAR. Alle Rechte vorbehalten.',
    'aria.switchToEnglish': 'Zu Englisch wechseln',
    'aria.switchToGerman': 'Zu Deutsch wechseln',
    'aria.closeMenu': 'Menü schließen',
    'aria.openMenu': 'Menü öffnen',
    'aria.goToSlide': 'Zu Folie wechseln'
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