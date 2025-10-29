
import React, { useState, useEffect, useRef } from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Knowledge Center', path: '/knowledge-center' },
  { name: 'Client Stories', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position for next time
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 50;
      
      if (isScrollingDown && isVisible) {
        setIsVisible(false);
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true);
      }
      
      // Update scrolled state for background
      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  const activeLinkClass = 'text-brand-gold';
  const inactiveLinkClass = 'text-gray-300 hover:text-brand-gold transition-colors duration-300';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-brand-night/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent shadow-none'
      } ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Router.Link to="/" className="flex items-center space-x-2 text-white text-xl font-serif">
            <ShieldCheck className="h-8 w-8 text-brand-gold" />
            <span>Sahayak Wealth</span>
          </Router.Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Router.NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium`}
              >
                {link.name}
              </Router.NavLink>
            ))}
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-brand-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: 'rgb(3 7 18)', // brand-night color
          zIndex: 40,
          outline: 'none',
          border: 'none',
          boxShadow: 'none',
          WebkitTapHighlightColor: 'transparent',
          margin: 0,
          padding: 0
        }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Router.NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-brand-gray-100 text-brand-gold' : 'text-gray-300 hover:bg-brand-gray-200 hover:text-white'}`}
            >
              {link.name}
            </Router.NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
