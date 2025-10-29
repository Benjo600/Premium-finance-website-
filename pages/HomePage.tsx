import React, { useState } from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { ShieldCheck, MessageSquare, Quote } from 'lucide-react';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import ContactForm from '../components/ContactForm';
import { testimonialsData } from '../constants';
import ExpertiseDisplayCards from '../components/ui/ExpertiseDisplayCards';
import { GradientButton } from '../components/ui/gradient-button';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-brand-dark flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2500"
            alt="Abstract background representing wealth and technology" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4 text-white animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Legacy. Growth. Security.
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Bespoke financial strategies for High-Net-Worth Individuals. We navigate complexity to build and preserve your wealth for generations to come.
            </p>
            <div 
              className="flex justify-center space-x-4 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <GradientButton visual="alternate" onClick={() => setIsModalOpen(true)}>
                Schedule a Consultation
              </GradientButton>
              <GradientButton asChild>
                <Router.Link to="/services">Explore Our Services</Router.Link>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white">Our Expertise</h2>
            <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">Comprehensive solutions tailored to your unique financial landscape.</p>
          </div>
          <div className="flex items-center justify-center">
            <ExpertiseDisplayCards />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/800/600?random=1" alt="A team of professionals collaborating" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-white mb-6">A Partnership Built on Trust</h2>
            <p className="text-gray-300 mb-6">
              At Sahayak Wealth, we understand that managing significant wealth requires more than just financial acumen; it demands a deep, personal commitment to your goals. We act as your dedicated financial stewards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Fiduciary Duty</h4>
                  <p className="text-gray-400">Your best interests are our only interests. We provide objective, unbiased advice at all times.</p>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Personalized Approach</h4>
                  <p className="text-gray-400">We take the time to understand your unique circumstances, values, and vision for the future.</p>
                </div>
              </li>
            </ul>
            <GradientButton asChild className="mt-8">
                <Router.Link to="/about">Meet Our Team</Router.Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-white">What Our Clients Say</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                {testimonialsData.slice(0, 2).map((testimonial, index) => (
                    <Card key={index} className="p-8">
                        <Quote className="w-10 h-10 text-brand-gold mb-4" />
                        <p className="text-lg text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                        <div className="text-right">
                            <p className="font-bold text-white">{testimonial.name}</p>
                            <p className="text-sm text-brand-gold">{testimonial.designation}</p>
                        </div>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <GradientButton asChild visual="alternate">
                  <Router.Link to="/testimonials">View More Stories</Router.Link>
                </GradientButton>
            </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request a Consultation">
        <ContactForm />
      </Modal>

    </div>
  );
};

export default HomePage;