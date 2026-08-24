export interface OccultServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  tag: string;
}

import servicesPosterImg from '../assets/our_services_poster.jpg';

export { servicesPosterImg };

export const servicesListData: OccultServiceItem[] = [
  {
    id: 'astrology-services',
    title: 'Astrology Services',
    shortDesc: 'Complete Vedic Kundli analysis, planetary dasha prediction, and horoscope remedies by Dr. Preity.',
    iconName: 'Sparkles',
    tag: 'MOST POPULAR'
  },
  {
    id: 'numerology-services',
    title: 'Numerology Services',
    shortDesc: 'Life path calculation, destiny number alignment, and personal birth date vibration analysis.',
    iconName: 'Hash',
    tag: 'NUMEROLOGY'
  },
  {
    id: 'mobile-number-consultation',
    title: 'Mobile Number Consultation',
    shortDesc: 'Evaluate whether your daily phone number total attracts wealth & harmony or unexpected obstacles.',
    iconName: 'Phone',
    tag: 'LUCKY NUMBER'
  },
  {
    id: 'business-astronumero-consultation',
    title: 'Business Astro-Numero Consultation',
    shortDesc: 'Company name analysis, brand launch date selection, and partner compatibility for business success.',
    iconName: 'TrendingUp',
    tag: 'BUSINESS GROWTH'
  },
  {
    id: 'logo-designing',
    title: 'Logo Designing (Astro & Numero Compliant)',
    shortDesc: 'Custom corporate & brand logo design crafted according to favorable colors, geometry & numerology.',
    iconName: 'PenTool',
    tag: 'BRANDING'
  },
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    shortDesc: 'Home and commercial office Vastu audit to eliminate negative energy doshas without structural demolition.',
    iconName: 'Home',
    tag: 'HOME & OFFICE'
  },
  {
    id: 'name-designing-correction',
    title: 'Name Designing & Name Correction',
    shortDesc: 'Spelling correction for newborns, adults, and company titles to align with positive planetary vibrations.',
    iconName: 'Edit3',
    tag: 'NAME ALIGNMENT'
  },
  {
    id: 'rudraksh-guidance',
    title: 'Rudraksh Guidance',
    shortDesc: 'Expert prescription of 100% authentic 1 to 14 Mukhi Nepali Rudrakshas and Siddha Malas.',
    iconName: 'ShieldCheck',
    tag: 'SACRED BEADS'
  },
  {
    id: 'crystal-consultation',
    title: 'Crystal Consultation',
    shortDesc: 'Personalized prescription of energy-activated healing crystal bracelets tailored to your birth chart.',
    iconName: 'Gem',
    tag: 'HEALING CRYSTALS'
  },
  {
    id: 'yantra-mantra-consultation',
    title: 'Yantra & Mantra Consultation',
    shortDesc: 'Consecration of 3D Panchdhatu Shree Yantra and customized Vedic mantra rituals for spiritual siddhi.',
    iconName: 'Flame',
    tag: 'DIVINE REMEDIES'
  }
];
