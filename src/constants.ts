import { Layout, ShoppingCart, Target, Server, Search } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  url: string;
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 2,
    title: "Site vitrine pour un cabinet de kinésithérapie à domicile",
    url: "https://physiodom-geneve.ch/",
    description: "Service de physiothérapie à domicile à Genève, offrant des soins personnalisés et professionnels directement chez le patient.",
    image: "https://i.postimg.cc/26VVVT3d/419-1x-shots-so.png"
  },
  {
    id: 3,
    title: "Site vitrine pour une agence de rédaction web",
    url: "https://lapetiteredac.com/",
    description: "Agence de rédaction web spécialisée dans le SEO et le content marketing pour booster la visibilité digitale des entreprises.",
    image: "https://i.postimg.cc/02HdQHTJ/La-petite-redac.png"
  },
  {
    id: 4,
    title: "Site vitrine pour un cabinet de neuropsychologie",
    url: "https://neuropsychologue-tours37.fr/",
    description: "Cabinet de neuropsychologie à Tours, proposant des bilans et suivis adaptés pour enfants, adolescents et adultes.",
    image: "https://i.postimg.cc/fTgjLgGZ/Dianna-Marruecos.png"
  },
  {
    id: 5,
    title: "Site vitrine pour une école de formation en coiffure",
    url: "https://nia-academy.com/",
    description: "École de formation basée à Paris dédiée à la coiffure, proposant des programmes d'excellence pour maîtriser les techniques de coupe et de coloration les plus avancées.",
    image: "https://i.postimg.cc/CL2dDCrF/Nia-Academy.png"
  },
  {
    id: 7,
    title: "Site vitrine pour une entreprise du bâtiment",
    url: "https://emap-france.fr/",
    description: "Expert en solutions de bâtiment et rénovation, accompagnant les projets de construction avec savoir-faire et précision.",
    image: "https://i.postimg.cc/tT3GR67F/Emap-batiment.png"
  },
  {
    id: 8,
    title: "Site vitrine pour une solution de génération de leads",
    url: "https://leads-rdv.fr/",
    description: "Service de génération de leads qualifiés pour les professionnels, optimisant la prise de rendez-vous et le développement commercial.",
    image: "https://i.postimg.cc/Hxw1WMj0/leads-rdv-fr.png"
  },
  {
    id: 9,
    title: "Site vitrine pour une clinique esthétique",
    url: "https://aestheva.fr/",
    description: "Clinique d'esthétique moderne proposant des soins de pointe pour sublimer la beauté naturelle et le bien-être.",
    image: "https://i.postimg.cc/kXHD8N1z/Aestheva.png"
  },
  {
    id: 11,
    title: "Site vitrine pour une société de transport & taxi",
    url: "https://mobitaxi.fr/",
    description: "Solution de transport taxi simplifiée, garantissant confort et ponctualité pour tous vos déplacements urbains.",
    image: "https://i.postimg.cc/mgFkScJ0/Mobi-Taxi.png"
  }
];

export const SERVICES = [
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
