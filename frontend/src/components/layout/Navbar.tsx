import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Award, Users, Image as ImageIcon, UserPlus, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavIcon = ({ icon: Icon, href, tooltip }: { icon: any, href: string, tooltip: string }) => (
  <Link to={href} data-tooltip={tooltip} className="flex items-center justify-center w-14 h-full text-[#ece8e1]/70 hover:text-white hover:bg-white/5 transition-all relative group">
    <Icon size={22} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-valo-green scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
  </Link>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Events', href: '/events' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Members', href: '/members' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Register', href: '/register' },
    { name: 'Connect', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 h-[32px] md:h-[56px] ${
          isVisible ? 'top-0' : '-top-20'
        } ${
          isScrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-[#111111]/70 backdrop-blur-md'
        }`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 96% 80%, 95.6% 92%, 94.8% 98%, 94% 100%, 6% 100%, 5.2% 98%, 4.4% 92%, 4% 80%)' }}
      >
        <div className="w-full h-full flex items-center justify-between px-6 md:px-12 relative">

          {/* Desktop Left Nav Items */}
          <div className="hidden lg:flex items-center justify-between flex-1 h-full pr-[14rem]">
            <NavIcon icon={Calendar} href="/events" tooltip="Events" />
            <NavIcon icon={Award} href="/achievements" tooltip="Achievements" />
            <NavIcon icon={Users} href="/members" tooltip="Members" />
          </div>

          {/* Center Button (Greenovation/Home) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-40 md:w-80 lg:w-96 z-10">
            <Link
              to="/"
              data-tooltip="Home"
              className="absolute inset-0 bg-valo-green flex items-center justify-center text-valo-bg font-display font-bold text-xs md:text-2xl tracking-widest uppercase hover:bg-[#ece8e1] hover:text-valo-bg transition-colors"
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
            >
              Greenovation
            </Link>
          </div>

          {/* Desktop Right Nav Items */}
          <div className="hidden lg:flex items-center justify-between flex-1 h-full pl-[14rem]">
            <NavIcon icon={ImageIcon} href="/gallery" tooltip="Gallery" />
            <NavIcon icon={UserPlus} href="/register" tooltip="Register" />
            <NavIcon icon={MessageSquare} href="/contact" tooltip="Connect" />
          </div>

          {/* Mobile Toggle */}
          <button
            data-tooltip="Menu"
            className="lg:hidden text-white absolute right-6 top-1/2 -translate-y-1/2 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-valo-bg lg:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold uppercase tracking-tight hover:text-valo-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
