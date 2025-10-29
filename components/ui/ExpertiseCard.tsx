import React from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from './Card';

interface ExpertiseCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description, link, linkText = 'Learn More' }) => {
  return (
    <Card hasHoverEffect={true} className="flex flex-col bg-brand-night/50 group h-full">
      <div className="p-8 flex-grow">
        <div className="mb-6">
          <div className="inline-block p-4 bg-brand-gray-100/50 rounded-lg border border-brand-gray-200 group-hover:border-brand-gold/50 transition-colors duration-300">
            <Icon className="w-10 h-10 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
        <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
        {/* Using a fixed height helps with grid alignment when descriptions have different lengths */}
        <p className="text-gray-400 mb-6 h-24">{description}</p>
      </div>
      <div className="p-8 pt-0 mt-auto">
        <Router.Link to={link} className="font-semibold text-brand-gold hover:text-brand-gold-light flex items-center group">
          {linkText}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Router.Link>
      </div>
    </Card>
  );
};

export default ExpertiseCard;
