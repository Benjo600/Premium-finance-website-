import React from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import KnowledgeCenterPage from './pages/KnowledgeCenterPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router.HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router.Routes>
            <Router.Route path="/" element={<HomePage />} />
            <Router.Route path="/about" element={<AboutPage />} />
            <Router.Route path="/services" element={<ServicesPage />} />
            <Router.Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Router.Route path="/knowledge-center" element={<KnowledgeCenterPage />} />
            <Router.Route path="/testimonials" element={<TestimonialsPage />} />
            <Router.Route path="/faq" element={<FaqPage />} />
            <Router.Route path="/contact" element={<ContactPage />} />
            <Router.Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Router.Route path="/terms-and-conditions" element={<TermsPage />} />
          </Router.Routes>
        </main>
        <Footer />
      </div>
    </Router.HashRouter>
  );
}

export default App;
