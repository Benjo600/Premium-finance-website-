
import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Privacy Policy" subtitle="Your Data and Your Rights" />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-headings:font-serif">
          <h2>1. Introduction</h2>
          <p>
            This is a placeholder for your privacy policy. It's essential to detail how you collect, use, and protect your clients' personal information. This section should affirm your commitment to confidentiality and compliance with relevant data protection regulations (e.g., GDPR, CCPA).
          </p>
          <h2>2. Information We Collect</h2>
          <p>
            Placeholder content explaining the types of data collected, such as personal identification information, financial data, and contact details. Explain why this information is necessary for providing your services.
          </p>
          <h2>3. How We Use Your Information</h2>
          <p>
            Placeholder content describing the purposes for which data is used, including account management, providing financial advice, legal compliance, and marketing communications (with opt-out options).
          </p>
          <h2>4. Data Security</h2>
          <p>
            Placeholder content outlining the security measures in place to protect client data from unauthorized access, disclosure, alteration, or destruction. Mention encryption, access controls, and regular security audits.
          </p>
          <h2>5. Your Rights</h2>
          <p>
            Placeholder content informing clients of their rights regarding their personal data, such as the right to access, correct, or delete their information.
          </p>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
