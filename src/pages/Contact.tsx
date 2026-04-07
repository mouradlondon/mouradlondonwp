import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative md:h-screen min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 md:overflow-hidden text-white pt-32 pb-12 md:py-20" style={{ background: 'linear-gradient(180deg, #000000 0%, #5d0000 100%)' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl w-full relative z-10 md:mt-24">
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/10 rounded-[20px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="https://i.postimg.cc/Y9NvBTWs/Logo-Clubsider-(2).png" 
              alt="Mourad London WP Logo" 
              className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] object-cover rounded-[16px] border-[1.5px] border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-8 order-2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h1 
              className="text-[28px] md:text-4xl lg:text-6xl font-bold md:font-medium text-white whitespace-nowrap"
              style={{ 
                fontFamily: '"Times New Roman", Times, serif',
                letterSpacing: '-0.02em',
                transform: 'scaleX(0.95)',
                transformOrigin: 'left'
              }}
            >
              Travaillons <span className="italic">ensemble</span>
            </h1>
            
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
            animate={{ opacity: 1, y: 0 }}
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

            {/* Experience Line */}
            <div className="text-[11px] font-medium tracking-widest uppercase text-white/40 text-center lg:text-left">
              ✦ Réponse rapide garantie · Marque blanche · Disponible maintenant
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
