
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Contact Us" subtitle="Let's Start a Conversation" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                We welcome the opportunity to learn about your financial goals and discuss how we can assist you. Please use the form to send us a message, or contact us directly via the details below.
              </p>
              <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-brand-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-white">Our Office</h4>
                        <p className="text-gray-400">123 Wealth Avenue, Suite 100, Capital City, 10001</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <Phone size={24} className="text-brand-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <a href="tel:+1234567890" className="text-gray-400 hover:text-brand-gold">+1 (234) 567-890</a>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <Mail size={24} className="text-brand-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <a href="mailto:inquiries@sahayakwealth.com" className="text-gray-400 hover:text-brand-gold">inquiries@sahayakwealth.com</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="bg-brand-night p-8 rounded-lg border border-brand-gray-100">
              <h2 className="text-2xl font-serif text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
