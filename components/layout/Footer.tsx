
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
    <footer className="bg-brand-night border-t border-brand-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand and Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col">
            <Router.Link to="/" className="flex items-center space-x-2 text-white text-xl font-serif mb-4">
              <ShieldCheck className="h-8 w-8 text-brand-gold" />
              <span>Sahayak Wealth</span>
            </Router.Link>
            <p className="text-brand-gray-300 text-sm mb-6 max-w-sm">
              Securing legacies and empowering financial futures for discerning clients.
            </p>
            <NewsletterForm />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Router.Link to={link.path} className="text-brand-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm">{link.name}</Router.Link>
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
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold"><Twitter size={20} /></a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-gold"><Facebook size={20} /></a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray-300">
          <p>&copy; {new Date().getFullYear()} Sahayak Wealth Management. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {legalLinks.map(link => (
                <Router.Link key={link.name} to={link.path} className="hover:text-brand-gold transition-colors duration-300">{link.name}</Router.Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
