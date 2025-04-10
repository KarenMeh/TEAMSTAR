import React, { useState } from 'react';
import { Star, Users,Smile ,  Rocket, MessageSquare, Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Hexagon, CheckCircle2, Globe, Wifi, RefreshCw, Users2, Sparkles, Zap, ClipboardList, Eye, Cloud, Smartphone } from 'lucide-react';
import { translations } from './translations';


function App() {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/100  backdrop-blur-sm z-50">
        <nav className="h-20 container mx-auto px-1 mt-[-15px]">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 h-full">
             <img src="/teamstar.png" alt="My Custom Logo" className="h-[100px] w-auto object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8 ">
              <a href="#about" className="text-black hover:text-gray-300 transition">{t.nav.about}</a>
              <a href="#features" className="text-black hover:text-gray-300 transition">{t.nav.features}</a>
              <a href="#contact" className="text-black hover:text-gray-300 transition">{t.nav.contact}</a>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  <img
                    src="https://flagcdn.com/w80/gb.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  <img
                    src="https://flagcdn.com/w80/de.png"
                    alt="Deutsch"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]"></div>
        </div>
        <div className="container relative mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6 mt-[50px]">
                <Star className="h-4 w-4 mr-2 text-white" />
                <span className="text-sm text-white">{t.hero.tagline}</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 whitespace-pre-line">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center">
                  {t.hero.getStarted}
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3 rounded-full font-semibold border border-gray-700 text-white hover:bg-white/10 transition-all duration-300">
                  {t.hero.learnMore}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-16 text-center">
              
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <ClipboardList className="h-12 w-12 mx-auto mb-6 text-white" />
                <div className="font-bold text-2xl mb-1 text-white -mt-2">100+</div>
                <div className="text-gray-400">{t.hero.stats.projects}</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <Users className="h-12 w-12 mx-auto mb-6 text-white" />
                <div className="font-bold text-2xl mb-1 text-white -mt-2">50+</div>
                <div className="text-gray-400">{t.hero.stats.team}</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <Smile className="h-12 w-12 mx-auto mb-6 text-white" />
                <div className="font-bold text-2xl mb-1 text-white -mt-2">95%</div>
                <div className="text-gray-400">{t.hero.stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Users className="h-12 w-12 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-6 text-white">{t.about.title}</h2>
            <p className="text-gray-400 mb-12 text-lg">
              {t.about.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-black/5 hover:bg-black/10 transition-all duration-300 transform hover:-translate-y-1">
                <Heart className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2 text-white">{t.about.passion.title}</h3>
                <p className="text-gray-400">{t.about.passion.description}</p>
              </div>
              <div className="p-8 rounded-2xl bg-black/5 hover:bg-black/10 transition-all duration-300 transform hover:-translate-y-1">
                <Users className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2 text-white">{t.about.collaboration.title}</h3>
                <p className="text-gray-400">{t.about.collaboration.description}</p>
              </div>
              <div className="p-8 rounded-2xl bg-black/5 hover:bg-black/10 transition-all duration-300 transform hover:-translate-y-1">
                <Star className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2 text-white">{t.about.excellence.title}</h3>
                <p className="text-gray-400">{t.about.excellence.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* AI Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-left mb-12">
                <h2 className="text-4xl font-bold mb-6 text-white">{t.aiFeatures.title}</h2>
              </div>
              <div className="space-y-8">
                {t.aiFeatures.items.map((item, index) => {
                  const icons = [
                    <Sparkles className="h-8 w-8 text-blue-500" key="sparkles" />,
                    <Zap className="h-8 w-8 text-yellow-500" key="zap" />
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
              <div className="relative mx-auto w-[330px] h-[570px] rounded-[3rem] border-[14px] border-gray-800 overflow-hidden shadow-xl">
                <img
                  src="/1.png"
                  alt="TeamStar Mobile App"
                  className="absolute top-[-15px] right-3 w-[300px] h-[580px] object-cover"
                />]
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="space-y-2">
                    <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-16 bg-white/30 rounded-full"></div>
                    <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-1[6]">
            <Rocket className="h-12 w-12 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-2 text-white">{t.features.title}</h2>
            <p className="text-xl text-gray-400">{t.features.subtitle}</p>
          </div>
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h3 className="md:text-xl text-gray-400  mb-3 -mt-6">{t.features.mainTitle}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.features.items.map((item, index) => {
              const icons = [
                <ClipboardList className="h-10 w-10 mb-5 text-blue-500" key="clipboard" />,
                <Eye className="h-10 w-10 mb-5  text-green-500" key="eye" />,
                <Cloud className="h-10 w-10 mb-5  text-purple-500" key="cloud" />,
                <Smartphone className="h-10 w-10 mb-5  text-orange-500" key="smartphone" />
              ];
              return (
                <div key={index} className="p-8 rounded-2xl bg-black/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  {icons[index]}
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <p className="text-xl text-gray-400">{t.features.description}</p>
          </div>
        </div>
      </section>

      {/* Why TEAMSTAR Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Star className="h-12 w-12 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-6 text-white">{t.whyTeamstar.title}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.whyTeamstar.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.whyTeamstar.items.map((item, index) => {
              const icons = [
                <Globe className="h-8 w-8 text-blue-500" key="globe" />,
                <Wifi className="h-8 w-8 text-green-500" key="wifi" />,
                <RefreshCw className="h-8 w-8 text-purple-500" key="refresh" />,
                <Users2 className="h-8 w-8 text-orange-500" key="users" />
              ];
              return (
                <div key={index} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  {icons[index]}
                  <h3 className="text-xl font-semibold my-4 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
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
                <div className="bg-black/5 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">contact@teamstar.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black/5 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black/5 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-400">123 Star Street, Galaxy City</span>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="w-full px-6 py-4 rounded-lg bg-white/3 border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="w-full px-6 py-4 rounded-lg bg-white/3 border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              />
              <textarea
                placeholder={t.contact.form.message}
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white/3 border-2 border-transparent focus:border-white/20 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-white py-6">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2 mb-6 md:mb-0">
        <img src="/teamstar.png" alt="My Custom Logo" className="h-[100px] w-auto object-contain" />
      </div>
      <div className="flex space-x-8">
        <a href="#" className="text-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
          <Github className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
          <Twitter className="h-6 w-6" />
        </a>
      </div>
    </div>
    <div className="mt-8 text-center text-black">
      <p>&copy; 2025 TEAMSTAR. All rights reserved.</p>
      <div className="mt-2 flex items-center justify-center space-x-2">
        <span className="text-sm">Developed by</span>
        <a href="https://d3.net" className="flex items-center justify-center hover:text-white transition-colors">
          <img src="/D3.png" alt="My Custom Logo" className="h-8 w-auto" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;