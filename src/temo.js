import React, { useState, useEffect } from 'react';
import { Star, Users, Cpu, Smile,  Rocket, MessageSquare, Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Hexagon, CheckCircle2, Globe, Wifi, RefreshCw, Users2, Sparkles, Zap, ClipboardList, Eye, Cloud, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const slides = [
    {
      url: "/1.png",
      title: "Authentication Portal"
    },
    {
      url: "/2.png",
      title: "Dashboard"
    },
    {
      url: "/3.png",
      title: "Scheduled Tasks"
    },
    {
      url: "/4.png",
      title: "Create Task"
    },
    {
      url: "/5.png",
      title: "Task Overview"
    }

  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">  
      {/* Header */}
      <header className="fixed w-full bg-white/100 backdrop-blur-sm z-50">
        <nav className="h-20 container mx-auto px-1 mt-[-15px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 h-full">
              <img src="/teamstar.png" alt="My Custom Logo" className="h-[100px] w-auto object-contain" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-black hover:text-gray-300 transition">{t.nav.about}</a>
              <a href="#features" className="text-black hover:text-gray-300 transition">{t.nav.features}</a>
              <a href="#contact" className="text-black hover:text-gray-300 transition">{t.nav.contact}</a>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  <img src="https://flagcdn.com/w80/de.png" alt="Deutsch" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 focus:outline-none">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
            <a href="#about" className="text-black hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#features" className="text-black hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>{t.nav.features}</a>
            <a href="#contact" className="text-black hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <img src="https://flagcdn.com/w80/de.png" alt="Deutsch" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-black">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:2rem_2rem]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        
        <div className="container relative mx-auto z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            {/* Enhanced tagline badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border mt-8 sm:mt-16 border-gray-700 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md mb-8 shadow-lg">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-white">{t.hero.tagline}</span>
            </div>
            
            {/* Enhanced title with animated gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300 whitespace-normal sm:whitespace-pre-line">
              {t.hero.title}
            </h1>
            
            {/* Enhanced subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-600/30">
                <span>{t.hero.getStarted}</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto mt-4 sm:mt-0 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/30 shadow-lg">
                {t.hero.learnMore}
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative floating shapes */}
        <div className="absolute top-1/3 right-1/6 w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/6 w-16 h-16 border border-white/10 rounded-xl rotate-12"></div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Project Stats Card */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-900/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="bg-blue-900/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ClipboardList className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-3xl sm:text-4xl mb-2 text-white">10,000+</div>
              <div className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300">{t.hero.stats.projects}</div>
            </div>
            
            {/* Team Stats Card */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-900/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="bg-purple-900/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-3xl sm:text-4xl mb-2 text-white">500+</div>
              <div className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300">{t.hero.stats.team}</div>
            </div>
            
            {/* Satisfaction Stats Card */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-900/5 border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
              <div className="bg-green-900/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Smile className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-3xl sm:text-4xl mb-2 text-white">95%</div>
              <div className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300">{t.hero.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {t.aiFeatures.items.map((item, index) => {
                  const icons = [
                    <Cpu className="h-8 w-8 text-green-500" key="shield" />,
                    <Sparkles className="h-8 w-8 text-blue-500" key="sparkles" />,
                    <Zap className="h-8 w-8 text-yellow-500" key="zap" />,                   
                  ];
                  return (
                    <div key={index} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-x-2">
                      {icons[index]}
                      <h3 className="text-xl font-semibold my-4 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-[280px] h-[550px] rounded-[3rem] border-[14px] border-gray-800 overflow-hidden shadow-xl">
                <div className="relative h-full overflow-hidden ">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                   <h6 className="absolute bottom-2 left-0 right-0 text-center text-white text-l font-semibold z-20 px-4">
                          {slide.title}
                   </h6>

                        <img
                        src={slide.url}
                        alt={slide.title}
                        className="absolute top-0 left-0 right-0 bottom-7 w-full h-full object-cover pr-4"
                        
                        />
                     
                    </div>
                  ))}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-blue-500 opacity-20 blur-xl"></div>
            </div>
            <Users className="h-16 w-16 mx-auto mb-6 text-blue-400 relative z-10" />
          </div>
          
          <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">
            {t.about.title}
          </h2>
          
          <p className="text-gray-300 mb-16 text-xl leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Passion Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-500/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-all">
                <Heart className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t.about.passion.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{t.about.passion.description}</p>
            </div>
            
            {/* Collaboration Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-purple-500/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-all">
                <Users className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t.about.collaboration.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{t.about.collaboration.description}</p>
            </div>
            
            {/* Excellence Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-yellow-500/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-yellow-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-all">
                <Star className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t.about.excellence.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{t.about.excellence.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full p-4 relative">
                <Rocket className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {t.features.title}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {t.features.mainTitle}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.features.items.map((item, index) => {
              const iconColors = [
                "text-blue-400",
                "text-green-400", 
                "text-purple-400", 
                "text-orange-400"
              ];
              
              const bgColors = [
                "from-blue-500/20 to-blue-500/5",
                "from-green-500/20 to-green-500/5", 
                "from-purple-500/20 to-purple-500/5", 
                "from-orange-500/20 to-orange-500/5"
              ];
              
              const borderColors = [
                "group-hover:border-blue-500/50",
                "group-hover:border-green-500/50", 
                "group-hover:border-purple-500/50", 
                "group-hover:border-orange-500/50"
              ];
              
              const icons = [
                <ClipboardList className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="clipboard" />,
                <Eye className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="eye" />,
                <Cloud className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="cloud" />,
                <Smartphone className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="smartphone" />
              ];
              
              return (
                <div key={index} className={`group p-8 rounded-2xl bg-gradient-to-br ${bgColors[index]} border border-white/10 ${borderColors[index]} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-${iconColors[index].split('-')[1]}-500/10`}>
                  <div className={`bg-black/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                    {icons[index]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">{t.features.description}</p>
          </div>
        </div>
      </section>
      
      {/* Why TEAMSTAR Section */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"></div>
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full p-4 relative">
                <Star className="h-12 w-12 text-yellow-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              {t.whyTeamstar.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.whyTeamstar.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.whyTeamstar.items.map((item, index) => {
              const iconColors = [
                "text-blue-400",
                "text-green-400", 
                "text-purple-400", 
                "text-orange-400"
              ];
              
              const bgColors = [
                "from-blue-500/20 to-blue-500/5",
                "from-green-500/20 to-green-500/5", 
                "from-purple-500/20 to-purple-500/5", 
                "from-orange-500/20 to-orange-500/5"
              ];
              
              const borderColors = [
                "group-hover:border-blue-500/50",
                "group-hover:border-green-500/50", 
                "group-hover:border-purple-500/50", 
                "group-hover:border-orange-500/50"
              ];
              
              const icons = [
                <Globe className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="globe" />,
                <Wifi className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="wifi" />,
                <RefreshCw className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="refresh" />,
                <Users2 className={`h-10 w-10 ${iconColors[index]} group-hover:scale-110 transition-transform`} key="users" />
              ];
              
              return (
                <div key={index} className={`group p-8 rounded-2xl bg-gradient-to-br ${bgColors[index]} border border-white/10 ${borderColors[index]} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg`}>
                  <div className={`bg-black/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                    {icons[index]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <MessageSquare className="h-12 w-12 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-4 text-white">{t.contact.title}</h2>
            <p className="text-gray-400 text-lg">{t.contact.subtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white/7 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">contact@teamstar.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">123 Star Street, Galaxy City</span>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <textarea
                placeholder={t.contact.form.message}
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold  transition-all duration-300 transform hover:-translate-y-1">
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <img src="/teamstar.png" alt="My Custom Logo" className="h-8 w-8" /> */}


              <span className="text-2xl font-bold">TEAMSTAR<span className="text-primary-400"></span></span>
            </div>
            <p className="text-gray-400 mb-4">
            Where Innovation Meets Excellence in Digital Transformation            </p>
           
          </div>

        <div className="md:col-span-2">
          <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 TEAMSTAR. All rights reserved.</p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <span className="text-sm mb-1">Developed by</span>
            <a href="https://d3.net" className="flex items-center justify-center hover:text-white transition-colors">
              <img src="/D3.png" alt="My Custom Logo" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;