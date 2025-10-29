
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
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-1 block w-full bg-brand-gray-100 border-brand-gray-200 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full bg-brand-gray-100 border-brand-gray-200 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
          required
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300">Service of Interest</label>
        <select
          id="service"
          name="service"
          className="mt-1 block w-full bg-brand-gray-100 border-brand-gray-200 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
        >
          <option>General Inquiry</option>
          <option>Insurance Planning</option>
          <option>Investment Management</option>
          <option>Inheritance Planning</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full bg-brand-gray-100 border-brand-gray-200 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
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