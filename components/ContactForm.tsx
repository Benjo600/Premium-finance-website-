
import React from 'react';
import { GradientButton } from './ui/gradient-button';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-0.5 w-full bg-brand-gray-100/90 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200 hover:border-gray-500"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-0.5 w-full bg-brand-gray-100/90 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200 hover:border-gray-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">Service of Interest</label>
        <div className="relative">
          <select
            id="service"
            name="service"
            className="appearance-none mt-0.5 w-full bg-brand-gray-100/90 border border-gray-600 rounded-lg shadow-sm py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200 hover:border-gray-500 cursor-pointer"
          >
            <option value="" disabled selected className="text-gray-400">Select a service</option>
            <option value="general" className="bg-gray-800 text-white">General Inquiry</option>
            <option value="insurance" className="bg-gray-800 text-white">Insurance Planning</option>
            <option value="investment" className="bg-gray-800 text-white">Investment Management</option>
            <option value="inheritance" className="bg-gray-800 text-white">Inheritance Planning</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-0.5 w-full bg-white/5 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200 hover:border-gray-500 focus:bg-white/10"
          placeholder="Tell us how we can help you..."
          style={{
            minHeight: '120px',
            resize: 'vertical'
          }}
          required
        ></textarea>
      </div>
      <div>
        <GradientButton type="submit" className="w-full">
          Submit Inquiry
        </GradientButton>
      </div>
    </form>
  );
};

export default ContactForm;