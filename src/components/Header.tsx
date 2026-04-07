import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Mon Portfolio', path: '/portfolio' },
    { name: 'Mes services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const isServicesPage = location.pathname === '/services';

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 transition-all duration-300 ${
        isServicesPage && isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-gradient-to-b from-black to-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            Mourad London WP
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 md:gap-12 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.path.startsWith('#') ? (
                  <a 
                    href={item.path}
                    className="text-sm font-medium text-white hover:text-white/60 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-sm font-medium transition-colors relative ${
                      location.pathname === item.path ? 'text-white' : 'text-white hover:text-white/60'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[70] md:hidden shadow-2xl"
              style={{ background: 'linear-gradient(180deg, #000000 0%, #5d0000 100%)' }}
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-end mb-12">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <ul className="flex flex-col gap-8">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {item.path.startsWith('http') ? (
                        <a 
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-2xl font-semibold text-white hover:text-white/60 transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link 
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-2xl font-semibold transition-colors ${
                            location.pathname === item.path ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pt-12 border-t border-white/10">
                  <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">Mourad London WP</p>
                  <div className="flex gap-4">
                    {/* Social links placeholder if needed */}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
