import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Users, TrendingUp, Cpu, Smile, Rocket, MessageSquare, 
  Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, 
  Hexagon, CheckCircle2, Globe, Wifi, RefreshCw, Users2, Sparkles, 
  Zap, ClipboardList, Eye, Cloud, Smartphone, ChevronLeft, ChevronRight, FileText, Shield, Link2, Clock 
} from 'lucide-react';
import { translations } from './translations';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
      <header className="fixed w-full bg-white z-50">
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
      <section className="relative min-h-[85vh] flex items-start justify-center px-4 sm:px-6 bg-white overflow-hidden pt-24">
        {/* Main Content */}
        <div className="container relative mx-auto py-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-black leading-[1.05]">
                <span className="font-sans font-medium tracking-tight">The Ultimate</span>{" "}
                <span className="font-sans font-medium tracking-tight">Task</span>{" "}
                <span className="font-sans font-medium tracking-tight">Management</span>{" "}
                <span className="font-sans font-medium tracking-tight">Solution</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed tracking-wide font-light">
                Redefining productivity with powerful task management solutions that empower teams to achieve more.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                {/* Primary CTA */}
                <button 
                  onClick={() => {
                    if (aiFeaturesRef.current) {
                      aiFeaturesRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-gray-800"
                >
                  {t.hero.getStarted}
                </button>

                {/* Documentation Button */}
                <Link 
                  to="/docs" 
                  className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium border border-gray-300 text-black hover:bg-gray-50 transition-all duration-300 text-lg"
                >
                  Documentation
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-12">
                {[
                  { 
                    value: 10000, 
                    label: "Tasks Delivered", 
                    suffix: '+',
                    icon: <ClipboardList className="h-6 w-6 text-black mb-4" />
                  },
                  { 
                    value: 500, 
                    label: "Team Members", 
                    suffix: '+',
                    icon: <Users className="h-6 w-6 text-black mb-4" />
                  },
                  { 
                    value: 95, 
                    label: "Satisfaction", 
                    suffix: '%',
                    icon: <Smile className="h-6 w-6 text-black mb-4" />
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex flex-col items-center">
                      {stat.icon}
                      <div className="text-2xl font-bold text-black mb-2">
                        <AnimatedCounter end={stat.value} />{stat.suffix}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-[280px] mx-auto">
                {/* Phone Frame */}
                <div className="relative aspect-[9/19.5] bg-black rounded-[2rem] p-3 shadow-lg">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img 
                      src="/1.jpg" 
                      alt="TEAMSTAR Platform Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiFeaturesRef} className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="relative">
              <Rocket className="h-12 w-12 mx-auto mb-6 text-black" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">AI-Powered Excellence</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your team's productivity and decision-making
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-black/5 p-3 rounded-lg">
                      <Cpu className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-3">Smart Task Management</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our AI-powered system intelligently organizes and prioritizes tasks, ensuring your team focuses on what matters most. Get smart suggestions and automated workflows that adapt to your team's needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-black/5 p-3 rounded-lg">
                      <Sparkles className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-3">Predictive Analytics</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Leverage advanced analytics to forecast project timelines, identify potential bottlenecks, and make data-driven decisions. Our AI continuously learns from your team's patterns to provide increasingly accurate insights.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-black/5 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-3">Automated Workflows</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Streamline your processes with intelligent automation. From task assignments to progress tracking, our AI handles routine tasks while your team focuses on creative and strategic work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Phone Preview */}
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

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-black mb-4">Experience the Future of Task Management</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Join the growing number of teams who have transformed their productivity with TEAMSTAR's AI-powered solutions. Start your journey towards smarter, more efficient task management today.
                </p>
                <button 
                  onClick={() => {
                    if (getstartedRef.current) {
                      getstartedRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started Now</span>
                  <span className="absolute inset-0 w-full h-full bg-black/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative">
                <Users className="h-12 w-12 mx-auto mb-6 text-black" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-black">About</h2>
              <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering teams worldwide with innovative task management solutions since 2023
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="w-[380px] h-[380px] mx-auto rounded-2xl overflow-hidden">
                  <img 
                    src="/teamstar.gif" 
                    alt="TEAMSTAR Animation" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-black/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/5 rounded-full blur-2xl"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    At TEAMSTAR, we're dedicated to revolutionizing how teams collaborate and manage tasks. Our mission is to provide innovative solutions that enhance productivity, foster collaboration, and drive success for organizations worldwide.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a world where every team can achieve their full potential through seamless collaboration and efficient task management. By combining cutting-edge technology with user-centric design, we're making this vision a reality.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-black/5 p-4 rounded-xl mb-4">
                    <Sparkles className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Constantly pushing boundaries to deliver cutting-edge solutions that transform how teams work together.
                  </p>
                </div>
              </div>

              {/* Excellence */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-black/5 p-4 rounded-xl mb-4">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    Committed to delivering the highest quality solutions that exceed expectations and drive success.
                  </p>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-black/5 p-4 rounded-xl mb-4">
                    <Users2 className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Collaboration</h3>
                  <p className="text-gray-600">
                    Fostering strong partnerships with our clients and within our team to achieve shared goals.
                  </p>
                </div>
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
            <h2 className="text-4xl font-bold mb-4 text-black">Key Features</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your team's productivity with our comprehensive suite of features designed for modern enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Task Management */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <ClipboardList className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Advanced Task Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create, assign, and track tasks with precision. Set priorities, deadlines, and dependencies while maintaining complete visibility of your team's progress. Our intuitive interface makes task management effortless.
                  </p>
                </div>
              </div>
            </div>

            {/* Real-time Collaboration */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Real-time Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enable seamless team collaboration with instant updates, shared workspaces, and integrated communication tools. Keep everyone in sync with live notifications and real-time progress tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Offline Capabilities */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Cloud className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Offline-First Architecture</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Work seamlessly without internet connectivity. Our offline-first approach ensures you can continue working even in low-connectivity environments, with automatic synchronization when back online.
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Comprehensive Analytics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gain valuable insights with detailed analytics and reporting tools. Track performance metrics, identify bottlenecks, and make data-driven decisions to optimize your team's productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Smart Automation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Automate repetitive tasks and workflows to save time and reduce errors. Create custom automation rules, set up triggers, and let our system handle routine processes efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Enterprise Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Protect your data with enterprise-grade security features. Benefit from advanced encryption, role-based access control, and comprehensive audit trails to maintain data integrity and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto px-6 py-4 border-2 border-gray-200 rounded-lg bg-white inline-block">
              Experience the power of TEAMSTAR - where innovation meets efficiency in task management. Join thousands of teams who have transformed their productivity with our comprehensive solution.
            </p>
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
            <h2 className="text-4xl font-bold mb-4 text-black">Why Choose TEAMSTAR?</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our enterprise-grade solution designed for modern teams
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Global Accessibility */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Global Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access your tasks and team collaboration tools from anywhere in the world. Our platform ensures seamless performance across all devices and locations, making remote work effortless and efficient.
                  </p>
                </div>
              </div>
            </div>

            {/* Reliable Connectivity */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Wifi className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Reliable Connectivity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay connected and productive with our robust offline-first architecture. Work without interruption, even in low-connectivity environments, with automatic synchronization when back online.
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Updates */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Continuous Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Benefit from regular updates and new features that keep your team ahead of the curve. Our commitment to innovation ensures you always have access to the latest productivity tools and capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black/5 p-3 rounded-lg">
                  <Users2 className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Enhanced Team Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Foster better teamwork with our comprehensive collaboration tools. Share ideas, track progress, and achieve goals together with features designed to enhance communication and coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-black mb-4">Join the TEAMSTAR Revolution</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the power of a truly modern task management solution. Join thousands of teams worldwide who have transformed their productivity and collaboration with TEAMSTAR. Start your journey towards better team management today.
              </p>
            </div>
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
            <h2 className="text-4xl font-bold mb-4 text-black">Get in Touch</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-black mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-black/5 p-3 rounded-lg group-hover:bg-black/10 transition-colors">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-black mb-1">Email Us</h4>
                      <p className="text-gray-600">contact@teamstar.com</p>
                      <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-black/5 p-3 rounded-lg group-hover:bg-black/10 transition-colors">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-black mb-1">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm mt-1">Mon-Fri from 8am to 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-black/5 p-3 rounded-lg group-hover:bg-black/10 transition-colors">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-black mb-1">Visit Us</h4>
                      <p className="text-gray-600">123 Star Street, Galaxy City</p>
                      <p className="text-gray-500 text-sm mt-1">Schedule a meeting at our office</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-medium text-black mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-black/5 p-3 rounded-lg hover:bg-black/10 transition-colors">
                      <Github className="h-6 w-6 text-black" />
                    </a>
                    <a href="#" className="bg-black/5 p-3 rounded-lg hover:bg-black/10 transition-colors">
                      <Linkedin className="h-6 w-6 text-black" />
                    </a>
                    <a href="#" className="bg-black/5 p-3 rounded-lg hover:bg-black/10 transition-colors">
                      <Twitter className="h-6 w-6 text-black" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-black mb-8">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-black/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 w-full h-full bg-black/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr/>

      {/* Footer */}
      <footer className="bg-white text-black">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-2 mt-[-10px]">
                <img src="/teamstar.png" alt="My Custom Logo" className="h-[90px] w-auto" />
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