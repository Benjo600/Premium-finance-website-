
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-brand-gold';
  const inactiveLinkClass = 'text-gray-300 hover:text-brand-gold transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-night/80 backdrop-blur-lg border-b border-brand-gray-100' : 'bg-transparent'}`}>
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
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-brand-night absolute top-20 left-0 w-full`}>
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
