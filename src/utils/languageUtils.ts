import { SupportedLanguage } from '../types/language';

// Language configuration
export const LANGUAGE_CONFIG = {
  defaultLanguage: 'en' as SupportedLanguage,
  supportedLanguages: ['en', 'de'] as SupportedLanguage[],
  subdomains: {
    en: 'en.teamstar.me',
    de: 'de.teamstar.me'
  }
};

// Get browser language
export const getBrowserLanguage = (): SupportedLanguage => {
  // Get browser language (e.g., 'en-US', 'de-DE')
  const browserLang = navigator.language.split('-')[0];
  
  // Check if browser language is supported
  if (LANGUAGE_CONFIG.supportedLanguages.includes(browserLang as SupportedLanguage)) {
    return browserLang as SupportedLanguage;
  }
  
  return LANGUAGE_CONFIG.defaultLanguage;
};

// Get the current subdomain from the URL
export function getCurrentSubdomain(): string | null {
  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  
  // Check if we have a subdomain (e.g., en.teamstar.me)
  if (parts.length > 2) {
    const subdomain = parts[0];
    // Only return if it's a supported language
    if (LANGUAGE_CONFIG.supportedLanguages.includes(subdomain as SupportedLanguage)) {
      return subdomain;
    }
  }
  
  return null;
}

// Initialize language routing based on subdomain
export function initializeLanguageRouting() {
  // Skip initialization if we're in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  const subdomain = getCurrentSubdomain();
  const currentPath = window.location.pathname;
  
  // If no subdomain is present or it's not a supported language, redirect to the default language
  if (!subdomain || !LANGUAGE_CONFIG.supportedLanguages.includes(subdomain as SupportedLanguage)) {
    // Only redirect if we're not already on the default language subdomain
    if (window.location.hostname !== LANGUAGE_CONFIG.subdomains[LANGUAGE_CONFIG.defaultLanguage]) {
      window.location.href = `https://${LANGUAGE_CONFIG.subdomains[LANGUAGE_CONFIG.defaultLanguage]}${currentPath}`;
    }
  }
}

// Redirect to a specific language subdomain
export function redirectToLanguageSubdomain(language: SupportedLanguage) {
  // Skip redirection if we're in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  const currentPath = window.location.pathname;
  const currentHostname = window.location.hostname;
  const parts = currentHostname.split('.');
  
  // If we're already on the correct subdomain, don't redirect
  if (parts[0] === language) {
    return;
  }
  
  // Construct the new URL with the language subdomain
  const newHostname = LANGUAGE_CONFIG.subdomains[language];
  
  // Only redirect if we're not already on the target subdomain
  if (window.location.hostname !== newHostname) {
    window.location.href = `https://${newHostname}${currentPath}`;
  }
} 