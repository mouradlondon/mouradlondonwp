import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative md:h-screen min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-16 md:overflow-hidden bg-transparent pt-20 md:pt-44 pb-12 md:pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
        
        {/* Subtle Geometric Shapes */}
        <div className="absolute top-[25%] right-[15%] w-64 h-64 border border-white/5 rounded-full rotate-12 blur-sm" />
        <div className="absolute bottom-[10%] left-[10%] w-48 h-48 border border-white/5 rounded-lg -rotate-12 blur-sm" />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-10 items-center max-w-7xl w-full relative z-10 md:mt-16">
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 lg:order-1 lg:-mt-12"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-[20px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="https://i.postimg.cc/Y9NvBTWs/Logo-Clubsider-(2).png" 
              alt="Mourad London WP Logo" 
              className="relative mx-auto w-[85%] max-w-[320px] aspect-square sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-full lg:max-w-[460px] lg:h-auto lg:max-h-[460px] object-cover rounded-[16px] border-[1.5px] border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-4 order-2 lg:order-2 text-center lg:text-left lg:-mt-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            {/* Availability Badge */}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6 md:gap-8 items-center lg:items-start"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Link 
                to="/portfolio"
                className="group flex items-center justify-center gap-2 bg-white text-black h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                Mon Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white text-white h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" /> Mes services
              </Link>
              <Link 
                to="/contact"
                className="flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/30 text-white h-[44px] md:h-auto px-[22px] py-[10px] rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4" /> Contact
              </Link>
            </div>

            {/* Experience Line */}
            <div className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-white/40 text-center lg:text-left">
              ✦ 5 ans d'expérience · Marque blanche · Livraison rapide
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
