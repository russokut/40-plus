export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum ServiceType {
  SMOKING = 'SMOKING',
  FITNESS = 'FITNESS',
  HIKING = 'HIKING',
  CONSULTATION = 'CONSULTATION'
}

export interface Service {
  id: ServiceType;
  title: string;
  price: string;
  description: string;
  icon: string;
  features?: string[];
  step?: string;
}