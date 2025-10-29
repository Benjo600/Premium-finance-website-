import React from 'react';
import DisplayCards from "./display-cards";
import { ShieldCheck, MessageSquare, BarChart2 } from "lucide-react";

const cardsData = [
  {
    icon: <ShieldCheck className="size-5 text-brand-gold-light" />,
    title: "Fiduciary Duty",
    description: "Your best interests, always.",
    date: "Unwavering Integrity",
    iconClassName: "bg-brand-gold/20",
    titleClassName: "text-brand-gold",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <MessageSquare className="size-5 text-brand-gold-light" />,
    title: "Personalized Approach",
    description: "Strategies as unique as you are.",
    date: "Deep Understanding",
    iconClassName: "bg-brand-gold/20",
    titleClassName: "text-brand-gold",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <BarChart2 className="size-5 text-brand-gold-light" />,
    title: "Proven Expertise",
    description: "Navigating complexity with clarity.",
    date: "Decades of Experience",
    iconClassName: "bg-brand-gold/20",
    titleClassName: "text-brand-gold",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const WhyChooseUsCards = () => {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center py-10 scale-90 md:scale-100">
        <DisplayCards cards={cardsData} />
    </div>
  );
}

export default WhyChooseUsCards;
