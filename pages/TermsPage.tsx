
import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Terms & Conditions" subtitle="Guidelines for Using Our Services" />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-headings:font-serif">
          <h2>1. Agreement to Terms</h2>
          <p>
            This is a placeholder for your terms and conditions. By accessing our website and using our services, you agree to be bound by these terms. This section should clearly state that the content is for informational purposes only and does not constitute financial advice without a formal client agreement.
          </p>
          <h2>2. Use of Website</h2>
          <p>
            Placeholder content detailing acceptable use of the website. Prohibit any unlawful use, and state that all content (text, graphics, logos) is the property of Sahayak Wealth Management and is protected by copyright laws.
          </p>
          <h2>3. Disclaimers</h2>
          <p>
            Placeholder content for important disclaimers. This should include limitations of liability, stating that while you strive for accuracy, you do not warrant the completeness of the information on the site. Include a statement that past performance is not indicative of future results.
          </p>
          <h2>4. Governing Law</h2>
          <p>
            Placeholder content specifying the jurisdiction whose laws govern the terms and conditions.
          </p>
          <h2>5. Changes to Terms</h2>
          <p>
            Placeholder content stating that you reserve the right to modify these terms at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
