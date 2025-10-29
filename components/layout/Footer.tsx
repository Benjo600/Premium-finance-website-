
import React from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { NewsletterForm } from '../ui/NewsletterForm';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  return (
    <footer className="bg-brand-night relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-night/0 via-brand-night/30 to-brand-night/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand and Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col">
            <Router.Link to="/" className="flex items-center space-x-3 text-white text-2xl font-serif mb-6 group">
              <ShieldCheck className="h-10 w-10 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
              <span className="bg-gradient-to-r from-white to-brand-gray-300 bg-clip-text text-transparent">Sahayak Wealth</span>
            </Router.Link>
            <p className="text-brand-gray-300 text-sm mb-6 max-w-sm leading-relaxed">
              Securing legacies and empowering financial futures for discerning clients through personalized wealth management solutions.
            </p>
            <div className="mt-2">
              <NewsletterForm />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white font-serif mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name} className="group">
                  <Router.Link 
                    to={link.path} 
                    className="text-brand-gray-300 hover:text-brand-gold transition-all duration-300 text-sm flex items-center before:content-[''] before:w-2 before:h-px before:bg-brand-gold before:mr-3 before:opacity-0 before:transition-all before:duration-300 group-hover:before:opacity-100 group-hover:before:w-4"
                  >
                    {link.name}
                  </Router.Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white font-serif mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm text-brand-gray-300">123 Wealth Avenue, Suite 100, Capital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-brand-gold mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-brand-gray-300 hover:text-brand-gold">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-brand-gold mr-3 flex-shrink-0" />
                <a href="mailto:inquiries@sahayakwealth.com" className="text-sm text-brand-gray-300 hover:text-brand-gold">inquiries@sahayakwealth.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
             <h3 className="text-lg font-semibold text-white font-serif mb-4">Connect With Us</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold transition-all duration-300 hover:-translate-y-0.5 block">
                <Linkedin size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold transition-all duration-300 hover:-translate-y-0.5 block">
                <Twitter size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold transition-all duration-300 hover:-translate-y-0.5 block">
                <Facebook size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray-400 border-t border-brand-gray-800">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Sahayak Wealth Management. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Router.Link 
                  to={link.path} 
                  className="hover:text-brand-gold transition-colors duration-300 text-xs tracking-wide uppercase font-medium"
                >
                  {link.name}
                </Router.Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-brand-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
