export type ServiceTheme = 'green' | 'blue' | 'purple' | 'yellow';

export interface Service {
  id: string;
  name: string;
  description: string;
  theme: ServiceTheme;
  icon: string;
  benefits: string[];
  requirements: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FairEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  products: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  producer: string;
  price: string;
  image: string;
  category: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  region: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  service?: string;
}

export interface Document {
  id: string;
  title: string;
  type: string;
  size: string;
  downloadUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}
