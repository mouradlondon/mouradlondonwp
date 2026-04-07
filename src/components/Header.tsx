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
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-14 md:h-auto flex items-center transition-all duration-300 ${
        isServicesPage && isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-gradient-to-b from-black to-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">
          <Link to="/" className="flex items-center text-base md:text-xl font-bold tracking-tighter text-white leading-none">
            <span className="md:hidden">MLWP</span>
            <span className="hidden md:inline">Mourad London WP</span>
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
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="sidebar-content"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-[75vw] z-[70] md:hidden shadow-2xl"
            style={{ background: 'linear-gradient(180deg, #000000 0%, #5d0000 100%)' }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="border-b border-white/5 last:border-0"
                  >
                    {item.path.startsWith('http') ? (
                      <a 
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-[14px] text-lg font-semibold text-white hover:text-white/60 transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link 
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-[14px] text-lg font-semibold transition-colors ${
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
        )}
      </AnimatePresence>
    </>
  );
}
