
import React from 'react';
// FIX: Use namespace import for react-router-dom to fix module resolution issues.
import * as Router from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  to = '#',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark transform transition-transform duration-150';

  const variantStyles = {
    primary: 'bg-brand-gold text-brand-dark border-b-4 border-brand-gold-dark shadow-lg hover:bg-brand-gold-light hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2',
    secondary: 'bg-brand-gray-200 text-white border-b-4 border-brand-gray-100 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 active:brightness-100',
    outline: 'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink) {
    return (
      <Router.Link to={to} className={combinedClasses}>
        {children}
      </Router.Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
