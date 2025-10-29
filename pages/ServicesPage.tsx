import React, { useState } from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { GradientButton } from '../components/ui/gradient-button';
import Modal from '../components/ui/Modal';
import ContactForm from '../components/ContactForm';
import { servicesData } from '../constants';
import ExpertiseCard from '../components/ui/ExpertiseCard';

const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-brand-dark">
      <PageHeader title="Our Services" subtitle="Holistic Wealth Management Solutions" />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
               <ExpertiseCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={`/services/${service.id}`}
                linkText="View Details"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Build Your Financial Future?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Let's discuss how our tailored services can align with your long-term objectives. Schedule a confidential consultation with one of our expert advisors today.
          </p>
          <GradientButton size="lg" onClick={() => setIsModalOpen(true)}>
            Schedule a Consultation
          </GradientButton>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request a Consultation">
        <ContactForm />
      </Modal>
    </div>
  );
};

export default ServicesPage;