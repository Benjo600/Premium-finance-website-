
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-brand-night py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base font-semibold text-brand-gold leading-7">{subtitle}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
