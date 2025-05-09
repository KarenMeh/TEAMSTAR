import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Users, TrendingUp, Cpu, Smile, Rocket, MessageSquare, 
  Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, 
  Hexagon, CheckCircle2, Globe, Wifi, RefreshCw, Users2, Sparkles, 
  Zap, ClipboardList, Eye, Cloud, Smartphone, ChevronLeft, ChevronRight, FileText 
} from 'lucide-react';
import { translations } from './translations';
import { Link } from 'react-router-dom';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

// AnimatedCounter component to handle the animation of numbers
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate the current count based on progress
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);
      
      // Continue animation until we reach the end value
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    // Clean up animation frame on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}</span>;
};

function App() {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aiFeaturesRef = useRef<HTMLElement | null>(null);
  const getstartedRef = useRef<HTMLElement | null>(null);


  
  const slides = [
    {
      url: "/1.jpg",
      title: "Authentication Portal"
    },
    {
      url: "/2.jpg",
      title: "Dashboard"
    },
    {
      url: "/3.jpg",
      title: "Scheduled Task"
    },
    {
      url: "/4.jpg",
      title: "Task Overview"
    },
    {
      url: "/5.jpg",
      title: "Create Tasks"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="h-20 container mx-auto px-1 mt-[-15px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 h-full">
              <img src="/teamstar.png" alt="My Custom Logo" className="h-[100px] w-auto object-contain" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-black hover:text-gray-500 transition">{t.nav.about}</a>
              <a href="#features" className="text-black hover:text-gray-400 transition">{t.nav.features}</a>
              <a href="#contact" className="text-black hover:text-gray-400 transition">{t.nav.contact}</a>
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white text-black overflow-hidden">
  {/* Background Grid */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:2rem_2rem]"></div>
  </div>

  {/* Main Content */}
  <div className="container relative mx-auto">
    <div className="max-w-5xl mx-auto text-center px-4">

      {/* Tagline */}
      <div
        className="inline-flex items-center px-4 py-1 rounded-full border border-gray-200 bg-white/70 backdrop-blur-lg shadow-sm mb-6 mt-12 sm:mt-20"
      >
        <Star className="h-4 w-4 mr-2 text-black" />
        <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">{t.hero.tagline}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-transparent bg-clip-text tracking-tight">
        {t.hero.title}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-gray-700 max-w-md sm:max-w-2xl mx-auto mb-10 sm:mb-16">
        {t.hero.subtitle}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full">
        {/* Primary CTA */}
        <button onClick={() => {
          if (aiFeaturesRef.current) {
            aiFeaturesRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }} className="w-full sm:w-auto group bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 sm:px-14 py-3 sm:py-5 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110 flex items-center justify-center space-x-2">
          <span>{t.hero.getStarted}</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Documentation Button */}
        <Link 
          to="/docs" 
          className="w-full sm:w-auto px-6 sm:px-14 py-3 sm:py-5 rounded-full font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 backdrop-blur-sm text-sm sm:text-lg flex items-center justify-center"
        >
          <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          Documentation
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Stats Section */}
      <div className="font-sans">
        {/* Stats Section */}
       <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
  <div className="container mx-auto px-6 sm:px-8 relative z-10">

    {/* Header Section */}
    <div className="text-center mb-14 sm:mb-16">
      <div className="relative w-fit mx-auto">
        <TrendingUp className="h-12 sm:h-16 w-12 sm:w-16 text-black mb-4 mx-auto" />
        <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-black/10 rounded-full animate-pulse" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
        Delivering Excellence at Scale
      </h2>

      <div className="w-16 sm:w-24 h-1 bg-black mx-auto mt-2 sm:mt-4 mb-5 sm:mb-7 rounded-full" />

      <p className="text-lg sm:text-2xl text-gray-600 max-w-3xl mx-auto">
        {t.features.mainTitle}
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 max-w-6xl mx-auto">
      
      {/* Card Template */}
      {[
        {
          Icon: ClipboardList,
          counter: 10000,
          text: t.hero.stats.projects
        },
        {
          Icon: Users,
          counter: 500,
          text: t.hero.stats.team
        },
        {
          Icon: Smile,
          counter: 95,
          text: t.hero.stats.satisfaction,
          suffix: '%'
        }
      ].map(({ Icon, counter, text, suffix = '+' }, idx) => (
        <div
          key={idx}
          className="hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="p-8 sm:p-10 rounded-xl bg-white border border-gray-200 hover:border-black/20 transition-all duration-300 shadow-lg h-full">
            <div className="flex items-center space-x-4 sm:space-x-5 mb-6">
              <div className="bg-black/5 p-3 sm:p-4 rounded-full">
                <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black text-center">
                <AnimatedCounter end={counter} />{suffix}
              </h3>
            </div>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed text-center">
              {text}
            </p>
          </div>

          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black/5 rounded-full mx-auto -mt-8 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* AI Features Section */}
      <section   ref={aiFeaturesRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="relative">
            <Rocket className="h-12 w-12 mx-auto mb-4 text-black" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-3 text-black">{t.aiFeatures.title}</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.aiFeatures.mainTitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {t.aiFeatures.items.map((item, index) => {
              const icons = [
                <Cpu className="h-6 w-6 text-black" key="cpu" />,
                <Sparkles className="h-6 w-6 text-black" key="sparkles" />,
                <Zap className="h-6 w-6 text-black" key="zap" />
              ];
              
              return (
                <div key={index} className="hover:translate-y-1 transition-transform duration-300">
                  <div className="p-6 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-black/5 p-2 rounded-full">
                        {icons[index]}
                      </div>
                      <h3 className="text-xl font-bold text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Decorative element for each card */}
                  <div className="w-10 h-10 bg-black/5 rounded-full mx-auto -mt-5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
          
          <div className="relative flex justify-center">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-2xl -z-10 rounded-full"></div>
            
            {/* Phone template with moderate size */}
            <div className="relative w-80 h-[640px] rounded-[2.5rem] border-[12px] border-gray-800 overflow-hidden shadow-xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 z-30 flex justify-center items-end pb-1">
                <div className="w-40 h-4 bg-black rounded-b-xl"></div>
              </div>
              
              {/* Phone status bar */}
              <div className="absolute top-6 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-black/0 z-20 flex justify-between items-center px-5">
                <div className="text-xs text-white font-medium">9:41</div>
                <div className="flex space-x-2">
                  <div className="w-4 h-3 bg-white rounded-sm opacity-70"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
                  <div className="w-6 h-3 bg-white rounded-sm opacity-70"></div>
                </div>
              </div>
              
              {/* Phone content area */}
              <div className="relative h-full w-full overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    {/* Bottom gradient overlay for text visibility */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent h-32 z-10"></div>
                    
                    {/* Slide title */}
                    <h6 className="absolute bottom-10 left-0 right-0 text-center text-white text-base font-semibold z-20 px-4">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center z-30">
                <div className="w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

        
    {/* About Section */}
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <Users className="h-12 w-12 mx-auto mb-6 text-black" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-black">{t.about.title}</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
          
          <p className="text-gray-600 mb-16 text-lg leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Passion Card */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <div className="p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-black/5 p-3 rounded-full mb-4">
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{t.about.passion.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">{t.about.passion.description}</p>
              </div>
              <div className="w-12 h-12 bg-black/5 rounded-full mx-auto -mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Collaboration Card */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <div className="p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-black/5 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{t.about.collaboration.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">{t.about.collaboration.description}</p>
              </div>
              <div className="w-12 h-12 bg-black/5 rounded-full mx-auto -mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Excellence Card */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <div className="p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-black/5 p-3 rounded-full mb-4">
                    <Star className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{t.about.excellence.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">{t.about.excellence.description}</p>
              </div>
              <div className="w-12 h-12 bg-black/5 rounded-full mx-auto -mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>


{/* Features Section */}
<section id="features" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
     
      {/* Dots pattern to match other sections */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array(48).fill(undefined).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-black/20 self-center justify-self-center" />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative">
            <Rocket className="h-12 w-12 mx-auto mb-6 text-black" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">{t.features.title}</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.features.mainTitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.features.items.map((item, index) => {
            const icons = [
              <ClipboardList className="h-6 w-6 text-black" key="clipboard" />,
              <Eye className="h-6 w-6 text-black" key="eye" />,
              <Cloud className="h-6 w-6 text-black" key="cloud" />,
              <Smartphone className="h-6 w-6 text-black" key="smartphone" />
            ];
            
            return (
              <div key={index} className="hover:translate-y-1 transition-transform duration-300">
                <div className="p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-black/5 p-3 rounded-full">
                      {icons[index]}
                    </div>
                    <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Decorative element for each card */}
                <div className="w-12 h-12 bg-black/5 rounded-full mx-auto -mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16 relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-black/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-black/5 rounded-full" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto px-6 py-4 border-2 border-gray-200 rounded-lg bg-white inline-block">{t.features.description}</p>
        </div>
      </div>
    </section>

    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dots pattern to match contact section */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array(48).fill(undefined).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-black/20 self-center justify-self-center" />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative">
            <Star className="h-12 w-12 mx-auto mb-6 text-black" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">{t.whyTeamstar.title}</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
          <p className="text-gray-600 text-lg">{t.whyTeamstar.subtitle}</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {t.whyTeamstar.items.map((item, index) => {
            const icons = [
              <Globe className="h-6 w-6 text-black" key="globe" />,
              <Wifi className="h-6 w-6 text-black" key="wifi" />,
              <RefreshCw className="h-6 w-6 text-black" key="refresh" />,
              <Users2 className="h-6 w-6 text-black" key="users" />
            ];
            
            return (
              <div key={index} className="hover:translate-y-1 transition-transform duration-300">
                <div className="p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-black/5 p-3 rounded-full">
                      {icons[index]}
                    </div>
                    <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Decorative element for each card */}
                <div className="w-12 h-12 bg-black/5 rounded-full mx-auto -mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
     
{/* Contact Section */}
  <section id="contact" ref={getstartedRef} className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-8 h-full">
            {Array(48).fill(undefined).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-black/20 self-center justify-self-center" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="relative">
              <MessageSquare className="h-12 w-12 mx-auto mb-6 text-black" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">{t.contact.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8 relative">
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-black/5 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <span className="text-gray-600">contact@teamstar.com</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-black/5 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-black/5 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <span className="text-gray-600">123 Star Street, Galaxy City</span>
              </div>
              
<hr />              
            </div>
            
            <form className="space-y-6 relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-black/5 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-black/5 rounded-full" />
              
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <textarea
                placeholder={t.contact.form.message}
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10">{t.contact.form.send}</span>
                <span className="absolute inset-0 w-full h-full bg-black/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
            </form>
          </div>
        </div>
      </section>
   <hr/>
  {/* Footer */}
      <footer className="bg-white text-black">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-2 mt-[-10px] ">
              <img src="/teamstar.png" alt="My Custom Logo" className="h-[90px] w-auto " />
                {/* <span className="text-2xl font-bold">TEAMSTAR</span> */}
              </div>
              <p className="text-gray-700 mb-2 mt-[-10px]">
                Where Innovation Meets Excellence in Digital Transformation
              </p>
            </div>
            
            <div className="md:col-span-2 text-center">
              <div className="mt-4 text-gray-700 mb-4">
                <p>&copy; 2025 TEAMSTAR All rights reserved.</p>
                <div className="mt-2 flex flex-col items-center justify-center">
                  <span className="text-sm mb-3">Developed by</span>
                  <a href="https://d3.net" className="flex items-center justify-center hover:text-black transition-colors">
                    <img src="/D3.png" alt="My Custom Logo" className="h-9 w-auto" />
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