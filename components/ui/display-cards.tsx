import React from "react";
import * as Router from 'react-router-dom';
import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  tagline?: string;
  details?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  to?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-brand-gold-light" />,
  title = "Featured",
  tagline = "Discover amazing content",
  details,
  date = "",
  iconClassName = "bg-brand-gold/20",
  titleClassName = "text-brand-gold",
  to,
}: DisplayCardProps) {
  const cardClassName = cn(
    "group relative flex h-48 w-[32rem] -skew-y-[8deg] select-none flex-col rounded-xl border-2 border-brand-gray-200 bg-brand-gray-200/70 backdrop-blur-sm px-6 py-4 transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[28rem] after:bg-gradient-to-l after:from-brand-dark after:to-transparent after:content-[''] hover:h-80 hover:border-brand-gold/50 hover:bg-brand-gray-100",
    className
  );

  const cardContent = (
    <>
      <div className="flex items-center gap-3">
        <span className={cn("relative inline-block rounded-full p-2", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-xl font-medium", titleClassName)}>{title}</p>
      </div>
      
      <div className="flex-grow py-2 overflow-hidden">
        <p className="text-xl text-gray-200">{tagline}</p>
        {details && (
            <p className="mt-3 text-base leading-relaxed text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {details}
            </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <p className="text-sm text-brand-gray-300">{date}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Router.Link to={to} className={cardClassName}>
        {cardContent}
      </Router.Link>
    );
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-brand-dark/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}