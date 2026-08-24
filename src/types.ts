export type PageRoute =
  | 'home'
  | 'consultation'
  | 'rudraksha'
  | 'gemstones'
  | 'crystals'
  | 'remedies-calculator'
  | 'contact';

export interface DoctorProfile {
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  educationPlaceholder: string;
  qualificationsPlaceholder: string;
  experiencePlaceholder: string;
  philosophy: string;
  photoUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Rudraksha' | 'Gemstone' | 'Crystal' | 'Yantra' | 'Consultation';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  posterImage?: string; // Official poster/infographic image for Flipkart style modal details
  badge?: string;
  isAbhimantrit: boolean;
  isLabCertified: boolean;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  suitableForZodiac?: string[];
  options?: string[];
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedOption?: string;
}

export interface ConsultationBooking {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  phone: string;
  email: string;
  consultationType: 'Kundli & Horoscope' | 'Numerology & Name Correction' | 'Vastu Shastra' | 'Gemstone & Rudraksha Advice' | 'Tarot & Life Guidance';
  preferredDate: string;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Rudraksha' | 'Gemstones' | 'Consultations' | 'Shipping & Certificates';
}
