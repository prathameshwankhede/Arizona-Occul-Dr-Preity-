import type { ProductItem } from '../types';
import siddhaMalaImg from '../assets/siddha_mala.jpg';
import pukhrajImg from '../assets/pukhraj.jpg';

export const productsData: ProductItem[] = [
  {
    id: 'siddha-mala-1-14',
    name: '1-14 Mukhi Complete Siddha Mala (Energized)',
    category: 'Rudraksha',
    price: 499,
    originalPrice: 650,
    rating: 5.0,
    reviewsCount: 142,
    image: siddhaMalaImg,
    badge: 'RARE & SACRED',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'The ultimate spiritual shield comprising 1 to 14 Mukhi authentic Nepali Rudrakshas + Gauri Shankar bead.',
    fullDescription: 'Crafted for complete aura alignment, planetary pacification (Navgrah Shanti), and supreme prosperity. Each bead is hand-selected and lab-certified with X-Ray inspection report.',
    benefits: [
      'Balances all 7 Chakras and neutralizes Navgrah doshas',
      'Attracts immense wealth, authority, and health',
      'Includes 100% authentic X-Ray Lab Certificate',
      'Blessed by Dr. Preity with Vedic Pran Pratishtha'
    ],
    suitableForZodiac: ['All Zodiac Signs'],
    options: ['Silver Capping', 'Pure Gold Capping', 'Thread Mala']
  },
  {
    id: 'yellow-sapphire-pukhraj',
    name: 'Natural Ceylon Yellow Sapphire (Pukhraj)',
    category: 'Gemstone',
    price: 299,
    originalPrice: 420,
    rating: 5.0,
    reviewsCount: 178,
    image: pukhrajImg,
    badge: 'NAV RATNA',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Untreated 100% Natural Ceylon Pukhraj for wisdom, marital harmony, and prosperity.',
    fullDescription: 'Ruled by Jupiter (Brihaspati). Enhances intellect, executive decision making, spiritual wisdom, and marital bliss.',
    benefits: [
      'Brings rapid career promotion & business expansion',
      'Improves decision making and academic achievement',
      'Government Lab Certified gemstone'
    ],
    suitableForZodiac: ['Sagittarius', 'Pisces', 'Aries', 'Scorpio'],
    options: ['4.25 Carat', '5.5 Carat', '6.25 Carat']
  },
  {
    id: '5-mukhi-rudraksha-mala',
    name: 'Natural 5 Mukhi Nepali Rudraksha Japa Mala',
    category: 'Rudraksha',
    price: 49,
    originalPrice: 75,
    rating: 4.9,
    reviewsCount: 389,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd858d97240?auto=format&fit=crop&q=80&w=800',
    badge: 'BESTSELLER',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: '108+1 genuine 5 Mukhi Nepali beads for peace of mind, stress relief, and Lord Shiva blessings.',
    fullDescription: '5 Mukhi Rudraksha is ruled by Jupiter (Guru). Ideal for meditation, lowering blood pressure, mental clarity, and spiritual elevation.',
    benefits: [
      'Removes anxiety and brings deep inner calm',
      'Enhances concentration for students and professionals',
      'Purified with Vedic Mantras & Panchamrit'
    ],
    suitableForZodiac: ['Aries', 'Sagittarius', 'Pisces', 'Leo'],
    options: ['Standard 6mm', 'Premium 8mm', 'Silver Wire']
  },
  {
    id: '7-mukhi-rudraksha',
    name: '7 Mukhi Nepali Rudraksha (Mahalakshmi Bead)',
    category: 'Rudraksha',
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    badge: 'WEALTH MAGNET',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Ruled by Goddess Mahalakshmi & Saturn (Shani). Unlocks financial stability & career growth.',
    fullDescription: 'Attracts new income opportunities, protects against financial losses, and mitigates Shani Sade Sati effects.',
    benefits: [
      'Attracts steady income and business success',
      'Pacifies Saturn (Shani) malefic influences',
      'Lab Certified with unique authenticity code'
    ],
    suitableForZodiac: ['Capricorn', 'Aquarius', 'Taurus', 'Libra']
  },
  {
    id: 'emerald-panna',
    name: 'Zambian Emerald (Panna) - High Luster',
    category: 'Gemstone',
    price: 249,
    originalPrice: 350,
    rating: 4.8,
    reviewsCount: 144,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    badge: 'BUDH RATNA',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Natural deep green Emerald for sharp communication, financial intellect, and trade success.',
    fullDescription: 'Ruled by Mercury (Budh). Ideal for entrepreneurs, speakers, CA, writers, and traders seeking sharp focus.',
    benefits: [
      'Sharpens memory and public speaking prowess',
      'Attracts wealth through smart investments',
      'Includes IGI / Govt Lab Test Report'
    ],
    suitableForZodiac: ['Gemini', 'Virgo', 'Taurus', 'Libra']
  },
  {
    id: 'pyrite-bracelet-money',
    name: 'Natural Pyrite Money Magnet Bracelet',
    category: 'Crystal',
    price: 39,
    originalPrice: 60,
    rating: 4.9,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
    badge: 'POPULAR CRYSTAL',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Golden Pyrite "Fool Gold" crystal for manifestation, wealth magnetizing, and shielding.',
    fullDescription: 'Known as the stone of wealth and willpower. Pyrite stimulates the solar plexus chakra, boosting confidence and financial opportunities.',
    benefits: [
      'Manifests abundance & financial growth',
      'Shields against negative energy and jealousy',
      'Energized with Lakshmi & Kuber Mantras'
    ],
    suitableForZodiac: ['Leo', 'Aries', 'Sagittarius', 'Capricorn']
  },
  {
    id: 'amethyst-cluster-crystal',
    name: 'Natural Amethyst Healing Crystal Geode',
    category: 'Crystal',
    price: 65,
    originalPrice: 95,
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&q=80&w=800',
    badge: 'STRESS RELIEF',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Raw Brazilian Amethyst cluster for third-eye awakening, insomnia relief, and space purification.',
    fullDescription: 'Amethyst radiates calm violet energy that dispels anxiety, enhances intuition, and cleanses home or office Vastu.',
    benefits: [
      'Promotes peaceful sleep and reduces stress',
      'Protects space from electro-magnetic radiation',
      'Hand-cleansed with Sacred Sage'
    ],
    suitableForZodiac: ['Aquarius', 'Pisces', 'Virgo', 'Capricorn']
  },
  {
    id: 'shree-yantra-panchdhatu',
    name: 'Heavy 3D Panchdhatu Shree Yantra (Energized)',
    category: 'Yantra',
    price: 119,
    originalPrice: 160,
    rating: 5.0,
    reviewsCount: 203,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
    badge: 'VASTU CORRECTION',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Authentic 3D Meru Shree Yantra for home & office Vastu alignment and financial growth.',
    fullDescription: 'The king of all sacred geometric yantras. Draws positive cosmic vibrations, eliminates Vastu doshas, and brings prosperity.',
    benefits: [
      'Removes stubborn Vastu defects without demolition',
      'Invites Mahalakshmi presence into house/office',
      'Energized in Haridwar Ghat rituals'
    ]
  }
];
