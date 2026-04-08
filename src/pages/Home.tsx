import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Mail, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Layout, 
  ShoppingCart, 
  Target, 
  Server, 
  Search,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { PROJECTS, SERVICES } from '../constants';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = PROJECTS[currentIndex];

  return (
    <div className="text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #4a0000 50%, #000000 100%)', backgroundAttachment: 'fixed' }}>
      {/* 1. HERO SECTION */}
      <section className="relative w-full flex items-center justify-center px-6 md:px-12 lg:px-16 pt-16 md:pt-32 pb-12 md:pb-24 overflow-hidden bg-transparent">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-10 items-center max-w-7xl w-full relative z-10">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-1"
          >
            <div className="relative group">
              <img 
                src="https://i.postimg.cc/Y9NvBTWs/Logo-Clubsider-(2).png" 
                alt="Mourad London WP Logo" 
                className="relative mx-auto w-[85%] max-w-[320px] aspect-square sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-full lg:max-w-[460px] lg:h-auto lg:max-h-[460px] object-cover rounded-[16px] border-[1.5px] border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-4 order-2 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Disponible pour de nouveaux projets
                </div>
              </div>

              <h1 
                className="text-[25px] md:text-5xl lg:text-7xl font-bold md:font-medium mb-1 text-white"
                style={{ 
                  fontFamily: '"Times New Roman", Times, serif',
                  letterSpacing: '-0.02em',
                  transform: 'scaleX(0.95)',
                  transformOrigin: 'left'
                }}
              >
                Mourad <span className="italic">London</span> WP
              </h1>
              <h2 className="text-[15px] md:text-xl text-white font-medium tracking-wide mb-1 md:mb-2">
                Votre freelance WordPress pour agences en marque blanche
              </h2>
              <p className="text-[14px] md:text-[16px] font-normal leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0 text-white/70">
                Je m'appelle Mourad, je suis freelance WordPress depuis 5 ans et j'accompagne des agences web en marque blanche sur leurs projets. Je m'occupe de la création, de la refonte et de la migration de sites vitrines et e-commerce, toujours avec l'objectif de livrer rapidement et proprement. Je sais m'adapter à vos méthodes de travail et à vos besoins pour vous permettre de déléguer la production en toute tranquillité. Si vous cherchez quelqu'un de fiable pour avancer sans prise de tête, je peux vous aider.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-6 md:gap-8 items-center lg:items-start"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <a 
                  href="#portfolio"
                  className="group flex items-center justify-center gap-2 bg-white text-black h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
                >
                  Mon Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white text-white h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Briefcase className="w-4 h-4" /> Mes services
                </a>
                <a 
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/30 text-white h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </div>

              <div className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-white/40 text-center lg:text-left">
                ✦ 5 ans d'expérience · Marque blanche · Livraison rapide
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION */}
      <section id="portfolio" className="relative w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-transparent">

        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl md:text-2xl font-bold uppercase text-white mb-2">Mon Portfolio</h2>
            <div className="h-1 w-12 bg-white mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative group order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 aspect-[16/10] mx-auto lg:mx-0">
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-4 md:gap-6 order-2 text-center lg:text-left">
              <div>
                <h3 className="text-[25px] md:text-[30px] font-bold md:font-semibold tracking-tight mb-2 md:mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed max-w-lg mx-auto lg:mx-0 text-white/60">
                  {currentProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-start mt-2 md:mt-4">
                <a 
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black h-[48px] md:h-auto px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg w-full md:w-auto"
                >
                  Voir le site <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full">
                  <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
                    <button 
                      onClick={prevSlide}
                      className="p-3 md:p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Projet précédent"
                    >
                      <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
                    </button>

                    <div className="text-white/40 font-mono text-xs md:text-sm tracking-widest min-w-[60px] text-center">
                      <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(PROJECTS.length).padStart(2, '0')}
                    </div>

                    <button 
                      onClick={nextSlide}
                      className="p-3 md:p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Projet suivant"
                    >
                      <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="relative w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-transparent">

        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl md:text-2xl font-bold uppercase text-white mb-2">Mes Services</h2>
            <div className="h-1 w-12 bg-white mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {SERVICES.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:max-w-4xl mx-auto w-full">
            {SERVICES.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} service={service} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="relative w-full py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-transparent">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto relative z-10">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1"
          >
            <div className="relative group">
              <img 
                src="https://i.postimg.cc/Y9NvBTWs/Logo-Clubsider-(2).png" 
                alt="Mourad London WP Logo" 
                className="relative mx-auto w-[85%] max-w-[320px] aspect-square sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-full lg:max-w-[460px] lg:h-auto lg:max-h-[460px] object-cover rounded-[16px] border-[1.5px] border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8 order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 
                className="text-[28px] md:text-4xl lg:text-6xl font-bold md:font-medium text-white"
                style={{ 
                  fontFamily: '"Times New Roman", Times, serif',
                  letterSpacing: '-0.02em',
                  transform: 'scaleX(0.95)',
                  transformOrigin: 'left'
                }}
              >
                Travaillons <span className="italic">ensemble</span>
              </h2>
              
              <p className="text-[16px] font-normal leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0 text-white/75">
                Vous avez un projet WordPress ou vous cherchez un partenaire de confiance en marque blanche ? Je suis disponible.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-white/90">Bordeaux, France (disponible partout)</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-white/90">contact.mouradlondon@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-8 items-center lg:items-start"
            >
              <a 
                href="https://wa.me/33756826071"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#25D366] text-white h-[56px] px-10 rounded-full font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-lg w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-white" /> Me contacter sur WhatsApp
              </a>

              <div className="text-[11px] font-medium tracking-widest uppercase text-white/40 text-center lg:text-left">
                ✦ Réponse rapide garantie · Marque blanche · Disponible maintenant
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number, key?: any }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:border-white/50 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] w-full"
    >
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-white transition-colors duration-300">
        <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
      </div>
      
      <h3 className="text-[25px] md:text-xl font-bold leading-tight transition-colors whitespace-pre-line">
        {service.title}
      </h3>
      
      <p className="text-[14px] md:text-[16px] leading-relaxed flex-1 text-white/70">
        {service.description}
      </p>
      
      <a 
        href="#contact"
        className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-white/60 transition-colors h-[44px]"
      >
        Me contacter <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
