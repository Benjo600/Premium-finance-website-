
import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { faqData } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  item: { question: string; answer: string };
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-gray-100 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-white">{item.question}</h3>
        {isOpen ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-brand-gold" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-300 leading-relaxed">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Frequently Asked Questions" subtitle="Your Questions, Answered" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            {faqData.map((item, index) => (
                <FaqItemComponent key={index} item={item} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
