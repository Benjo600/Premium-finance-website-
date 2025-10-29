import React from 'react';
import DisplayCards from "./display-cards";
import { servicesData } from '../../constants';

const cardsData = servicesData.map((service, index) => {
  const classNames = [
    "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  ];
  
  return {
    icon: <service.icon className="size-6 text-brand-gold-light" />,
    title: service.title,
    tagline: service.tagline,
    details: service.description,
    date: "Click to learn more",
    to: `/services/${service.id}`,
    iconClassName: "bg-brand-gold/20",
    titleClassName: "text-brand-gold",
    className: classNames[index % classNames.length],
  };
});

const ExpertiseDisplayCards = () => {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center py-10">
        <DisplayCards cards={cardsData} />
    </div>
  );
}

export default ExpertiseDisplayCards;