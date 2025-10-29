
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import { testimonialsData } from '../constants';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <Card className="p-8 h-full flex flex-col justify-between">
        <div>
            <Quote className="w-10 h-10 text-brand-gold mb-4" />
            <p className="text-lg text-gray-300 italic mb-6">"{testimonial.quote}"</p>
        </div>
        <div className="text-right mt-4">
            <p className="font-bold text-white text-lg">{testimonial.name}</p>
            <p className="text-sm text-brand-gold">{testimonial.designation}</p>
        </div>
    </Card>
);


const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Client Stories" subtitle="Partnerships in Success" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
