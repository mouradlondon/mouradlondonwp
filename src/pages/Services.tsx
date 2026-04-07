import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layout, ShoppingCart, Target, Server, Search, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Création / Refonte\nsite vitrine Wordpress",
    description: "Je crée ou refais des sites vitrines modernes, rapides et adaptés à tous les écrans. L'objectif est de proposer un site propre, clair et prêt à être livré à vos clients, tout en respectant vos standards et vos délais.",
    icon: Layout,
  },
  {
    title: "Création / Refonte\nboutique WooCommerce",
    description: "Je prends en charge la création ou la refonte de boutiques WooCommerce, avec une structure optimisée, un parcours client fluide et une mise en place propre des produits, paiements et livraisons.",
    icon: ShoppingCart,
  },
  {
    title: "Création / Refonte\nLanding Page Wordpress",
    description: "Je réalise des landing pages efficaces, pensées pour convertir et s'intégrer parfaitement dans vos projets clients. Design clair, structure optimisée et mise en ligne rapide.",
    icon: Target,
  },
  {
    title: "Migration de site et serveur\nWordpress",
    description: "Je gère la migration complète de sites WordPress (Wix vers WordPress, changement d'hébergement, etc.) sans perte de contenu ni problème technique, pour une transition fluide et sécurisée.",
    icon: Server,
  },
  {
    title: "Référencement SEO\noptimisation de base",
    description: "Je mets en place les bases du SEO sur vos sites WordPress : structure des pages, balises, performance et optimisation globale pour permettre un bon référencement dès la mise en ligne.",
    icon: Search,
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen w-full bg-transparent text-white pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Background Parallax Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-white mb-2">Mes Services</h1>
        <div className="h-1 w-12 bg-white mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-7xl w-full flex-1 flex flex-col justify-center">
        {/* Grid 3+2 -> Single column on mobile */}
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
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number, key?: any }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
      
      <Link 
        to="/contact"
        className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-white/60 transition-colors h-[44px]"
      >
        Me contacter <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
