import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';
import { testimonialsData } from '@/constants';
import ExpertiseDisplayCards from '@/components/ui/ExpertiseDisplayCards';
import { GradientButton } from '@/components/ui/gradient-button';
const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-brand-darkest">
      {/* Hero Section */}
      <section className="relative bg-brand-darkest overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Main background image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Financial Planning" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkest/90 via-brand-darkest/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/50 to-transparent"></div>
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybi1iYXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpIHNjYWxlKDAuMDEpIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1iYXNlKSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Content */}
              <div className="text-center lg:text-left relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
                  Trusted by 10,000+ clients
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Smart Financial <span className="text-brand-gold">Solutions</span> for Your Future
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We provide comprehensive wealth management and investment strategies to help you achieve your financial goals with confidence and clarity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <GradientButton 
                    onClick={() => setIsModalOpen(true)}
                    variant="primary"
                    size="lg"
                    className="hover:shadow-lg hover:shadow-brand-gold/20"
                  >
                    Get Free Consultation
                  </GradientButton>
                  <GradientButton 
                    asChild 
                    variant="secondary"
                    size="lg"
                    className="hover:shadow-lg hover:shadow-brand-gold/20"
                  >
                    <Link to="/services">Our Services</Link>
                  </GradientButton>
                </div>
                
                <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold/10 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative flex items-center bg-white/5 backdrop-blur-sm pl-3 pr-5 py-2.5 rounded-xl border border-white/10 hover:border-brand-gold/30 transition-all duration-300">
                      <div className="relative flex -space-x-3 mr-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                          <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Support Agent"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-brand-darkest">
                          <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-200 whitespace-nowrap">
                        <span className="font-semibold text-white">24/7</span> Expert Support
                      </span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand-dark/90 backdrop-blur-sm text-xs text-gray-300 px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                      Available round the clock
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Empty for better content alignment */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg className="w-full h-20 md:h-24 lg:h-28 text-brand-darkest" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity="1"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-brand-darker to-brand-darkest relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybi1iYXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGgxMHYxMEgweiIvPjxwYXRoIGQ9Ik0xMCAxMGgxMHYxMEgxMHoiLz48cGF0aCBkPSJNMjAgMjBoMTB2MTBIMjB6Ii8+PHBhdGggZD0iTTEwIDMwaDEwdjEwSDEweiIvPjwvZz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWJhc2UpIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=) repeat"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 dark:text-white">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique financial landscape.
            </p>
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
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940" 
              alt="A team of professionals collaborating" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-gray-900 dark:text-white mb-6">A Partnership Built on Trust</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Premium Finance, we understand that managing significant wealth requires more than just financial acumen; 
              it demands a deep, personal commitment to your goals. We act as your dedicated financial stewards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Fiduciary Duty</h4>
                  <p className="text-gray-600 dark:text-gray-400">Your best interests are our only interests. We provide objective, unbiased advice at all times.</p>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Personalized Approach</h4>
                  <p className="text-gray-600 dark:text-gray-400">We take the time to understand your unique circumstances, values, and vision for the future.</p>
                </div>
              </li>
            </ul>
            <GradientButton 
              onClick={() => setIsModalOpen(true)}
              className="mt-8"
            >
              Schedule a Consultation
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 dark:text-white">What Our Clients Say</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonialsData.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white dark:bg-gray-800">
                <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.designation}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <GradientButton asChild variant="secondary" size="lg">
                    <Link to="/services">View All Services</Link>
                  </GradientButton>
          </div>
          <div className="text-center mt-12">
            <GradientButton asChild variant="secondary" size="lg">
              <Link to="/testimonials">View More Stories</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request a Consultation">
        <ContactForm />
      </Modal>

      {/* Contact Form Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ready to Take Control of Your Financial Future?</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Schedule a free consultation with our financial experts today and discover how we can help you achieve your financial goals.
            </p>
          </div>
          
          <div className="bg-brand-darkest rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="bg-brand-dark p-8 md:p-12 rounded-lg border border-brand-gray-800">
              <h3 className="text-2xl font-serif text-white mb-8 text-center">Send Us a Message</h3>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;