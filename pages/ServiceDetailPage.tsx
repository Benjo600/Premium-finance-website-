
import React from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { servicesData } from '../constants';
import PageHeader from '../components/ui/PageHeader';
import { GradientButton } from '../components/ui/gradient-button';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = Router.useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-20 text-white">
        <h1 className="text-3xl">Service not found.</h1>
        <GradientButton asChild className="mt-4">
            <Router.Link to="/services">Back to Services</Router.Link>
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark">
      <PageHeader title={service.title} subtitle={service.tagline} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
            <Router.Link to="/services" className="inline-flex items-center text-brand-gold hover:text-brand-gold-light mb-8">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to all services
            </Router.Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-white mb-4">Service Overview</h2>
            <p className="text-gray-300 leading-relaxed">{service.overview}</p>

            <h2 className="text-3xl font-serif text-white mt-12 mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif text-white mt-12 mb-6">Client Scenarios</h2>
            <div className="space-y-8">
                {service.caseStudies.map((study, index) => (
                    <div key={index} className="bg-brand-night p-6 rounded-lg border border-brand-gray-100">
                        <h3 className="text-xl font-semibold text-brand-gold mb-2">{study.title}</h3>
                        <p className="text-gray-400 mb-2"><strong className="text-gray-200">Scenario:</strong> {study.scenario}</p>
                        <p className="text-gray-400"><strong className="text-gray-200">Our Solution:</strong> {study.solution}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside>
            <div className="bg-brand-night p-8 rounded-lg border border-brand-gray-100 sticky top-28">
              <h3 className="text-2xl font-serif text-white mb-4">Discuss Your Needs</h3>
              <p className="text-gray-400 mb-6">
                Let us help you navigate your financial journey with confidence.
              </p>
              <GradientButton asChild className="w-full">
                <Router.Link to="/contact">Contact Us</Router.Link>
              </GradientButton>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;