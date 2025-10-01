import { useState, useEffect, useRef } from 'react';
import { 
  Star, TrendingUp, Cpu, CheckCircle2, 
  Users2, Eye, ChevronLeft, ChevronRight, Shield, Link2, 
  Camera, Hotel, Wrench, Utensils, Building
} from 'lucide-react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from './translations.tsx';
import { SupportedLanguage } from './types/language';
import { initializeLanguageRouting, getCurrentSubdomain, redirectToLanguageSubdomain } from './utils/languageUtils';
import Documentation from './Documentation.tsx';
import LegalNotice from './LegalNotice.tsx';
import TermsAndConditions from './TermsAndConditions.tsx';
import PrivacyPolicy from './PrivacyPolicy.tsx';

function App() {
  const { t, language, setLanguage } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aiFeaturesRef = useRef<HTMLElement | null>(null);
  const getstartedRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // Contact form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Initialize language routing only once when the app starts
  useEffect(() => {
    // Only initialize language routing if we're not in development
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      const subdomain = getCurrentSubdomain();
      if (!subdomain) {
        initializeLanguageRouting();
      }
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    if (newLang !== language) {
      setLanguage(newLang);
      redirectToLanguageSubdomain(newLang);
    }
  };

  // Add smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const slides = [
    {
      url: "/11.jpg",
      title: t('slides.authPortal')
    },
    {
      url: "/2.jpg",
      title: t('slides.dashboard')
    },
    {
      url: "/3.jpg",
      title: t('slides.scheduledTask')
    },
    {
      url: "/4.jpg",
      title: t('slides.taskOverview')
    },
    {
      url: "/5.jpg",
      title: t('slides.createTasks')
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Contact form submit handler
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailto = `mailto:contact@teamstar.com?subject=${encodeURIComponent(subject || 'Contact from Teamstar Website')}` +
      `&body=${encodeURIComponent(
        `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\n${message}`
      )}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('hero.title')} – {t('hero.subtitle')}</title>
        <meta name="description" content={t('hero.description')} />
        <meta property="og:title" content={`${t('hero.title')} – ${t('hero.subtitle')}`} />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:image" content="https://teamstar.d3.net/web.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('hero.title')} – ${t('hero.subtitle')}`} />
        <meta name="twitter:description" content={t('hero.description')} />
        <meta name="twitter:image" content="https://teamstar.d3.net/web.png" />
        
        {/* SEO Keywords */}
        <meta name="keywords" content="task management app, team management software, automated task assignment, real-time task tracking, photo-verified task completion, API-first task management, GDPR-compliant team management, hospitality task automation, construction team coordination, sales visit scheduling tool, fieldworker time tracking, field service task management" />
        
        {/* Language and URL Structure */}
        <link rel="alternate" hrefLang="en" href="https://en.teamstar.me" />
        <link rel="alternate" hrefLang="de" href="https://de.teamstar.me" />
        <link rel="canonical" href={`https://${language}.teamstar.me${location.pathname}`} />
      </Helmet>
      
      {/* Header */}
      <header className="fixed w-full bg-white z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center -my-2">
              <Link to="/">
                <img src="/teamstar1.png" alt="TEAMSTAR Logo" className="h-14 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">{t('nav.home')}</Link>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {t('nav.benefits')}
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')} 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {t('nav.useCases')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {t('nav.pricing')}
              </button>
              <Link to="/docs" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">{t('nav.docs')}</Link>
              <a 
                href={`https://${language}.teamstar.me/login`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {t('nav.login')}
              </a>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 ${
                    language === 'en' ? 'ring-2 ring-black' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={t('aria.switchToEnglish')}
                >
                  <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => handleLanguageChange('de')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 ${
                    language === 'de' ? 'ring-2 ring-black' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={t('aria.switchToGerman')}
                >
                  <img src="https://flagcdn.com/w80/de.png" alt="Deutsch" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/20"
                aria-label={mobileMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
              >
                {t('nav.benefits')}
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')} 
                className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
              >
                {t('nav.useCases')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
              >
                {t('nav.pricing')}
              </button>
              <Link 
                to="/docs" 
                className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.docs')}
              </Link>
              <a 
                href={`https://${language}.teamstar.me/login`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.login')}
              </a>
              
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    handleLanguageChange('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 ${
                    language === 'en' ? 'ring-2 ring-black' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={t('aria.switchToEnglish')}
                >
                  <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange('de');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 ${
                    language === 'de' ? 'ring-2 ring-black' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={t('aria.switchToGerman')}
                >
                  <img src="https://flagcdn.com/w80/de.png" alt="Deutsch" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <Routes>
        <Route path="/docs" element={<Documentation />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden pt-24">
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

              {/* Main Content */}
              <div className="container relative mx-auto py-12 z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Column - Text Content */}
                  <div className="text-center lg:text-left space-y-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black leading-[1.2]">
                      <span className="font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                        {t('hero.mainTitle')}
                      </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                      {t('hero.mainDescription')}
                    </p>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                      {t('hero.secondaryDescription')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                      <button 
                        onClick={() => {
                          const pricingSection = document.getElementById('pricing');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }} 
                        className="group relative w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10">{t('hero.cta.primary')}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button 
                        onClick={() => {
                          const demoSection = document.getElementById('demo');
                          if (demoSection) {
                            demoSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="group relative w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium border-2 border-gray-200 text-gray-700 transition-all duration-300 hover:border-black hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10">{t('hero.cta.secondary')}</span>
                        <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Phone Preview */}
                  <div className="relative hidden lg:block">
                    <div className="relative w-[280px] mx-auto animate-float">
                      <div className="relative aspect-[9/19.5] bg-black rounded-[2.5rem] p-3 shadow-2xl shadow-black/20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50"></div>
                          <img 
                            src="/11.jpg" 
                            alt="TEAMSTAR Platform Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] opacity-20 blur-xl -z-10"></div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-md animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Add floating animation keyframes */}
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
              `}
            </style>

            {/* Demo Video Section */}
            <section id="demo" className="py-24 bg-white relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-black mb-4">{t('demo.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {t('demo.description')}
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-50">
                    <video 
                      controls
                      className="w-full h-full object-cover"
                      poster="/preview1.jpg"
                      preload="auto"
                    >
                      <source src="/videos/teamstar1.mp4" type="video/mp4" />
                      {t('demo.videoNotSupported')}
                    </video>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Features Section */}
            <section id="benefits" ref={aiFeaturesRef} className="py-24 bg-white relative">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-light text-black mb-4">{t('benefits.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {t('benefits.subtitle')}
                  </p>
                </div>
                
                <div className="max-w-5xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                      {/* Task Completion Assurance */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <CheckCircle2 className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.taskCompletion.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.taskCompletion.description')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Real-Time Oversight */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Eye className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.realTime.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.realTime.description')}</p>
                          </div>
                        </div>
                      </div>

                      {/* AI-Powered Assignments */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Cpu className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.aiAssignments.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.aiAssignments.description')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Photo-Verified Confirmations */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Camera className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.photoVerified.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.photoVerified.description')}</p>
                          </div>
                        </div>
                      </div>

                      {/* API-First Architecture */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Link2 className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.apiFirst.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.apiFirst.description')}</p>
                          </div>
                        </div>
                      </div>

                      {/* GDPR Compliance */}
                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Shield className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.fieldService.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.fieldService.description')}</p>
                          </div>
                        </div>
                      </div>

                      <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                            <Link2 className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-black mb-2">{t('benefits.gdpr.title')}</h3>
                            <p className="text-sm text-gray-600">
                            {t('benefits.gdpr.description')}</p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Right Column - Phone Preview */}
                    <div className="relative flex justify-center items-center h-full min-h-[600px] mt-4 lg:mt-0">
                      {/* Phone template with larger size */}
                      <div className="relative w-[380px] h-[780px] rounded-[3rem] border-[14px] border-gray-800 overflow-hidden shadow-2xl shadow-black/20 transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-0 right-0 h-7 bg-gray-800 z-30 flex justify-center items-end pb-1">
                          <div className="w-48 h-5 bg-black rounded-b-xl"></div>
                        </div>
                        
                        {/* Phone status bar */}
                        <div className="absolute top-7 left-0 right-0 h-7 bg-gradient-to-b from-black/80 to-black/0 z-20 flex justify-between items-center px-8">
                          <div className="text-base text-white font-medium">9:41</div>
                          <div className="flex space-x-2.5">
                            <div className="w-5 h-4 bg-white rounded-sm opacity-70"></div>
                            <div className="w-4 h-4 bg-white rounded-full opacity-70"></div>
                            <div className="w-6 h-4 bg-white rounded-sm opacity-70"></div>
                          </div>
                        </div>
                        
                        {/* Phone content area */}
                        <div className="relative h-full w-full overflow-hidden bg-gray-50">
                          {slides.map((slide, index) => (
                            <div
                              key={index}
                              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                              }`}
                            >
                              {/* Bottom gradient overlay for text visibility */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent h-24 z-10"></div>
                              
                              {/* Slide title */}
                              <h6 className="absolute bottom-8 left-0 right-0 text-center text-white text-sm font-medium z-20 px-4">
                                {slide.title}
                              </h6>
                              
                              {/* Slide image */}
                              <img
                                src={slide.url}
                                alt={slide.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          
                          {/* Navigation buttons */}
                          <button 
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          
                          {/* Slide indicators */}
                          <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-1.5">
                            {slides.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 rounded-full transition-all ${
                                  index === currentSlide ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                                }`}
                                aria-label={`${t('aria.goToSlide')} ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Home indicator */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center z-30">
                          <div className="w-40 h-1.5 bg-white/30 rounded-full"></div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
            <section id="use-cases" className="py-24 bg-gray-50 relative">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-light text-black mb-4">{t('useCases.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {t('useCases.subtitle')}
                  </p>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Hospitality */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <Hotel className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.hospitality.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.hospitality.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Maintenance */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <Wrench className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.maintenance.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.maintenance.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Sales */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <TrendingUp className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.sales.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.sales.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Gastronomy */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <Utensils className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.gastronomy.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.gastronomy.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Construction */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <Building className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.construction.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.construction.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Field Services */}
                    <div className="group p-6 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                          <Users2 className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-black mb-2">{t('useCases.fieldServices.title')}</h3>
                          <p className="text-gray-600 text-sm">
                          {t('useCases.fieldServices.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white relative">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-light text-black mb-4">{t('pricing.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {t('pricing.subtitle')}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Forever Free Plan */}
                    <div className="group p-8 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-medium text-black mb-4">{t('pricing.freePlan.title')}</h3>
                        </div>
                        <ul className="space-y-4 mb-8">
                          <li className="flex items-center space-x-3 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-black/60" />
                            <span className="text-gray-600">{t('pricing.freePlan.users')}</span>
                          </li>
                          <li className="flex items-center space-x-3 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-black/60" />
                            <span className="text-gray-600">{t('pricing.freePlan.api')}</span>
                          </li>
                        </ul>
                      </div>
                      <button className="w-full py-3 px-6 rounded-lg border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
                        {t('pricing.freePlan.button')}
                      </button>
                    </div>

                    {/* Add-ons */}
                    <div className="group p-8 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-medium text-black mb-4">{t('pricing.addons.title')}</h3>
                        </div>
                        <ul className="space-y-4 mb-8">
                          <li className="flex items-center space-x-3 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-black/60" />
                            <span className="text-gray-600">{t('pricing.addons.user')}</span>
                          </li>
                          <li className="flex items-center space-x-3 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-black/60" />
                            <span className="text-gray-600">{t('pricing.addons.api')}</span>
                          </li>
                        </ul>
                        <p className="text-gray-500 text-xs mb-6">{t('pricing.addons.desc')}</p>
                      </div>
                      <button className="w-full py-3 px-6 rounded-lg bg-black text-white font-medium hover:bg-black/90 transition-all duration-300">
                        {t('pricing.addons.button')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-light text-black mb-4">{t('testimonials.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    {t('testimonials.subtitle')}
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-black/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-black/5 group-hover:text-black/10 transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center group-hover:from-black/10 group-hover:to-black/20 transition-all duration-500">
                              <Building className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-base font-medium text-black">{t('testimonials.max.name')}</h4>
                              <p className="text-sm text-gray-600">{t('testimonials.max.title')}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{t('testimonials.max.company')}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {t('testimonials.max.quote')}
                          </p>
                        </div>
                        {/* Rating */}
                        <div className="mt-6 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-black/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-black/5 group-hover:text-black/10 transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center group-hover:from-black/10 group-hover:to-black/20 transition-all duration-500">
                              <TrendingUp className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-base font-medium text-black">{t('testimonials.harald.name')}</h4>
                              <p className="text-sm text-gray-600">{t('testimonials.harald.title')}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{t('testimonials.harald.company')}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {t('testimonials.harald.quote')}
                          </p>
                        </div>
                        {/* Rating */}
                        <div className="mt-6 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-black/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-black/5 group-hover:text-black/10 transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center group-hover:from-black/10 group-hover:to-black/20 transition-all duration-500">
                              <Hotel className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-base font-medium text-black">{t('testimonials.nopadon.name')}</h4>
                              <p className="text-sm text-gray-600">{t('testimonials.nopadon.title')}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{t('testimonials.nopadon.company')}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {t('testimonials.nopadon.quote')}
                          </p>
                        </div>
                        {/* Rating */}
                        <div className="mt-6 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={getstartedRef} className="py-24 bg-white relative">
              <div className="w-full px-0">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-light text-black mb-4">{t('contact.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                  </p>
                </div>
                
                <div className="w-full flex justify-center">
                  {/* Contact Form */}
                  <div className="group p-8 rounded-lg bg-white border border-gray-100 hover:border-black/20 transition-all duration-300 w-full max-w-2xl">
                    <h3 className="text-lg font-medium text-black mb-6">{t('contact.form.title')}</h3>
                    
                    <form className="space-y-4" onSubmit={handleContactSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form.firstName')}</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-sm text-black placeholder-gray-400"
                            placeholder={t('contact.form.firstNamePlaceholder')}
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form.lastName')}</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-sm text-black placeholder-gray-400"
                            placeholder={t('contact.form.lastNamePlaceholder')}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form.email')}</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-sm text-black placeholder-gray-400"
                          placeholder={t('contact.form.emailPlaceholder')}
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form.subject')}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-sm text-black placeholder-gray-400"
                          placeholder={t('contact.form.subjectPlaceholder')}
                          value={subject}
                          onChange={e => setSubject(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form.message')}</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-sm text-black placeholder-gray-400"
                          placeholder={t('contact.form.messagePlaceholder')}
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-2.5 px-6 rounded-lg bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-black/90"
                      >
                        {t('contact.form.button')}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        } />
      </Routes>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2 justify-center md:justify-start w-full">
                <img src="/teamstar1.png" alt="TEAMSTAR Logo" className="h-15 w-32 object-contain" />
                <span className="text-gray-600 text-sm">{t('footer.productOf')}</span>
                <a href="https://d3.net" className="hover:opacity-80 transition-opacity">
                  <img src="/D3.png" alt="D3 Logo" className="h-8 w-auto" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <div className="w-full text-left">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.legal.title')}</h4>
                <ul className="space-y-3 gap-4 text-left">
                  <li>
                    <Link to="/legal-notice" className="text-gray-600 hover:text-black transition-colors text-sm">
                      {t('footer.legal.notice')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-600 hover:text-black transition-colors text-sm">
                      {t('footer.legal.terms')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-600 hover:text-black transition-colors text-sm">
                      {t('footer.legal.privacy')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* App Downloads */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.download.title')}</h4>
              <div className="grid grid-cols-2 gap-1">
                {/* App Store */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 bg-gray-50 rounded-lg mb-2 flex items-center justify-center">
                    <img src="/appstore.png" alt="App Store QR Code" className="w-20 h-20" />
                  </div>
                  <a href="https://apps.apple.com/app/teamstar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">
                    {t('footer.download.appStore')}
                  </a>
                </div>

                {/* Google Play */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 bg-gray-50 rounded-lg mb-2 flex items-center justify-center">
                    <img src="/playstore.png" alt="Google Play QR Code" className="w-20 h-20" />
                  </div>
                  <a href="https://play.google.com/store/apps/details?id=com.teamstar.app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">
                    {t('footer.download.googlePlay')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex justify-center items-center">
              <p className="text-gray-500 text-sm text-center">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Wrap the App component with HelmetProvider
export default function AppWithHelmet() {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}