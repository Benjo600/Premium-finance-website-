
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasHoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hasHoverEffect = false }) => {
  const hoverClasses = hasHoverEffect 
    ? 'transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-gold/10 hover:-translate-y-2' 
    : '';

  return (
    <div className={`bg-brand-night border border-brand-gray-100 rounded-lg overflow-hidden ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
