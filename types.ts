// FIX: Import React to use React.ComponentType
import React from 'react';

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  benefits: string[];
  caseStudies: CaseStudy[];
}

export interface CaseStudy {
  title: string;
  scenario: string;
  solution: string;
  outcome: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}