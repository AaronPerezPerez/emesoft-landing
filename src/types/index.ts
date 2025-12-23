export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  featured?: boolean;
  target?: string[];
  features: string[];
  image: string;
  children?: { id: string; name: string; sector: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  company: string;
  author: string;
  role: string;
  content: string;
  product: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface WhyUsItem {
  id: number;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}
