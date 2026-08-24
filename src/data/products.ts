import type { ProductItem } from '../types';

import abundancePosterImg from '../assets/products/abundance.jpg';
import tourmalinePosterImg from '../assets/products/tourmaline.jpg';
import lapisFocusPosterImg from '../assets/products/lapis_focus.jpg';
import hematitePosterImg from '../assets/products/hematite.jpg';
import sundariBeautyPosterImg from '../assets/products/sundari_beauty.jpg';
import sulemaniHakikPosterImg from '../assets/products/sulemani_hakik.jpg';
import amethystQuartzPosterImg from '../assets/products/amethyst_quartz.jpg';
import mookaitePosterImg from '../assets/products/mookaite.jpg';
import redJasperPosterImg from '../assets/products/red_jasper.jpg';
import carnelianPosterImg from '../assets/products/carnelian.jpg';
import howlitePosterImg from '../assets/products/howlite.jpg';

import abundancePhotoImg from '../assets/products/abundance_photo.jpg';
import sundariPhotoImg from '../assets/products/sundari_photo.jpg';

import siddhaMalaImg from '../assets/siddha_mala.jpg';
import pukhrajImg from '../assets/pukhraj.jpg';

export const productsData: ProductItem[] = [
  {
    id: 'abundance-bracelet',
    name: 'Abundance Bracelet (Attract Wealth & Prosperity)',
    category: 'Crystal',
    price: 49,
    originalPrice: 79,
    rating: 5.0,
    reviewsCount: 342,
    image: abundancePhotoImg,
    posterImage: abundancePosterImg,
    badge: 'FLAGSHIP REMEDY',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Powered by Citrine, Amazonite, Green Aventurine & Sulemani Hakeek for wealth, luck & evil eye protection.',
    fullDescription: 'Attract abundance, invite prosperity, and live a life of wealth, luck, and spiritual protection. Handcrafted with authentic natural crystals and energized by Dr. Preity.',
    benefits: [
      'Citrine: Attracts wealth, success and positive energy',
      'Amazonite: Enhances opportunity & financial growth',
      'Green Aventurine: Brings prosperity and good fortune',
      'Sulemani Hakeek: Powerful protection from negativity & evil eye'
    ],
    suitableForZodiac: ['Taurus', 'Leo', 'Virgo', 'Sagittarius', 'Capricorn'],
    options: ['8mm Standard Bead', '10mm Heavy Bead']
  },
  {
    id: 'sundari-beauty-combo',
    name: 'Sundari Beauty Combo Bracelet (Self-Love & Attraction)',
    category: 'Crystal',
    price: 45,
    originalPrice: 70,
    rating: 5.0,
    reviewsCount: 289,
    image: sundariPhotoImg,
    posterImage: sundariBeautyPosterImg,
    badge: 'BEAUTY & LOVE',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Combines Moonstone, Carnelian & Rose Quartz to unlock natural glow, self-love, and charming aura.',
    fullDescription: 'Brings out your inner and outer beauty with emotional balance, magnetic attraction, and self-acceptance.',
    benefits: [
      'Moonstone: Enhances natural glow & inner radiance',
      'Carnelian: Boosts charm, confidence & magnetic energy',
      'Rose Quartz: Opens heart to love, healing & self-acceptance',
      'Promotes inner peace, emotional balance & harmony'
    ],
    suitableForZodiac: ['Cancer', 'Libra', 'Taurus', 'Scorpio'],
    options: ['8mm Standard Bead', '10mm Heavy Bead']
  },
  {
    id: 'clarity-protection-tourmaline',
    name: 'Clarity & Protection Bracelet (Clear Quartz & Black Tourmaline)',
    category: 'Crystal',
    price: 42,
    originalPrice: 65,
    rating: 4.9,
    reviewsCount: 215,
    image: tourmalinePosterImg,
    posterImage: tourmalinePosterImg,
    badge: 'PROTECTION SHIELD',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Blends Clear Quartz positivity amplification with Black Tourmaline grounding protection.',
    fullDescription: 'Pure energy, powerful protection, positive you. Absorbs negative vibrations, shields from psychic attacks, and enhances mental clarity.',
    benefits: [
      'Amplifies positive energy & enhances mental clarity',
      'Strong protection against negative energies',
      'Supports meditation, spiritual growth & grounding'
    ],
    suitableForZodiac: ['Scorpio', 'Capricorn', 'Aquarius', 'Virgo']
  },
  {
    id: 'focus-clarity-lapis',
    name: 'Focus & Clarity Bracelet (Lapis Lazuli + Amethyst + Quartz)',
    category: 'Crystal',
    price: 49,
    originalPrice: 75,
    rating: 5.0,
    reviewsCount: 198,
    image: lapisFocusPosterImg,
    posterImage: lapisFocusPosterImg,
    badge: '3RD EYE ACTIVATION',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Awaken higher consciousness and divine energy with Lapis Lazuli, Amethyst, and Clear Quartz.',
    fullDescription: 'Linked with Third Eye & Crown Chakras. Offers protection against psychic attacks, calms anxiety, and brings crystal clear communication.',
    benefits: [
      'Lapis Lazuli: Protection & Third Eye alignment',
      'Amethyst: Relieves stress, balances mental energy',
      'Clear Quartz: Master Healer for mind & focus'
    ],
    suitableForZodiac: ['Sagittarius', 'Aquarius', 'Pisces', 'Gemini']
  },
  {
    id: 'sulemani-hakik-bracelet',
    name: 'Sulemani Hakik Bracelet (Shani & Rahu Shield)',
    category: 'Crystal',
    price: 39,
    originalPrice: 60,
    rating: 4.9,
    reviewsCount: 310,
    image: sulemaniHakikPosterImg,
    posterImage: sulemaniHakikPosterImg,
    badge: 'SHANI & RAHU PROTECTION',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Powerful protection, grounding & stability. Reduces Rahu-Ketu dosha and Shani effects.',
    fullDescription: 'Shields against evil eye, black magic, and psychic attacks while restoring emotional balance and reducing overthinking.',
    benefits: [
      'Protects from evil eye & negative energies',
      'Strong connection with Shani (Saturn)',
      'Helps reduce Rahu-Ketu malefic effects',
      'Reduces fear, anxiety & overthinking'
    ],
    suitableForZodiac: ['Capricorn', 'Aquarius', 'Scorpio', 'Aries']
  },
  {
    id: 'amethyst-clear-quartz',
    name: 'Amethyst & Clear Quartz Bracelet (Calm Mind & Healing)',
    category: 'Crystal',
    price: 42,
    originalPrice: 65,
    rating: 4.9,
    reviewsCount: 276,
    image: amethystQuartzPosterImg,
    posterImage: amethystQuartzPosterImg,
    badge: 'STRESS RELIEF',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Calm your mind, amplify your energy, and heal from within. Wear daily on left wrist.',
    fullDescription: 'A divine combination of clarity and calmness. Relieves stress, overthinking, and promotes deep meditation.',
    benefits: [
      'Promotes mental peace & emotional balance',
      'Enhances focus, clarity & decision-making',
      'Supports sleep, relaxation & spiritual growth'
    ],
    suitableForZodiac: ['Pisces', 'Aquarius', 'Virgo', 'Sagittarius']
  },
  {
    id: 'carnelian-power-bracelet',
    name: 'Carnelian Crystal Bracelet (Energy, Confidence & Action)',
    category: 'Crystal',
    price: 39,
    originalPrice: 60,
    rating: 4.9,
    reviewsCount: 184,
    image: carnelianPosterImg,
    posterImage: carnelianPosterImg,
    badge: 'CONFIDENCE & DRIVE',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Sacral Chakra crystal known to stimulate drive, execution power, and opportunity attraction.',
    fullDescription: 'Ideal for individuals feeling stuck or unable to take action. Boosts physical stamina, courage, and productivity.',
    benefits: [
      'Works on Sacral Chakra (Swadhisthana)',
      'Improves confidence & decision-making ability',
      'Reduces fear, hesitation & overthinking',
      'Promotes action-oriented mindset'
    ],
    suitableForZodiac: ['Aries', 'Leo', 'Scorpio', 'Taurus']
  },
  {
    id: 'howlite-crystal-bracelet',
    name: 'Howlite Crystal Bracelet (Calmness & Insomnia Relief)',
    category: 'Crystal',
    price: 38,
    originalPrice: 58,
    rating: 4.8,
    reviewsCount: 162,
    image: howlitePosterImg,
    posterImage: howlitePosterImg,
    badge: 'STONE OF CALMNESS',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Soothing crystal designed to control overthinking, anger, and improve deep restful sleep.',
    fullDescription: 'Calm your thoughts, balance your life. Howlite relaxes mind and body, promoting mindfulness and anger control.',
    benefits: [
      'Reduces stress, anxiety & anger',
      'Helps in better sleep & insomnia relief',
      'Controls overthinking & emotional imbalance'
    ],
    suitableForZodiac: ['Gemini', 'Virgo', 'Cancer', 'Libra']
  },
  {
    id: 'mookaite-power-bracelet',
    name: 'Mookaite Power Bracelet (Strength & New Beginnings)',
    category: 'Crystal',
    price: 45,
    originalPrice: 70,
    rating: 4.9,
    reviewsCount: 145,
    image: mookaitePosterImg,
    posterImage: mookaitePosterImg,
    badge: 'NEW BEGINNINGS',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'The stone of strength, stability, and new beginnings. Helps take right decisions with confidence.',
    fullDescription: 'Energized & activated by experts for individuals feeling stuck, confused, or afraid of change.',
    benefits: [
      'Provides grounding & inner strength',
      'Boosts confidence to embrace change',
      'Promotes growth, protection & stability'
    ],
    suitableForZodiac: ['Aries', 'Scorpio', 'Leo', 'Capricorn']
  },
  {
    id: 'red-jasper-power-bracelet',
    name: 'Red Jasper Power Bracelet (Grounding & Vitality)',
    category: 'Crystal',
    price: 39,
    originalPrice: 60,
    rating: 4.9,
    reviewsCount: 230,
    image: redJasperPosterImg,
    posterImage: redJasperPosterImg,
    badge: 'ROOT CHAKRA POWER',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Restores strength, keeps you grounded, and boosts physical vitality and stamina.',
    fullDescription: 'Your source of inner power when feeling low, stressed, or emotionally drained.',
    benefits: [
      'Boosts energy, physical strength & health',
      'Enhances grounding, stability & courage',
      'Promotes passion, creativity & relationships'
    ],
    suitableForZodiac: ['Aries', 'Taurus', 'Scorpio', 'Leo']
  },
  {
    id: 'clear-quartz-black-hematite',
    name: 'Clear Quartz & Black Hematite Bracelet (Goal Manifestation)',
    category: 'Crystal',
    price: 42,
    originalPrice: 65,
    rating: 4.9,
    reviewsCount: 175,
    image: hematitePosterImg,
    posterImage: hematitePosterImg,
    badge: 'MANIFESTATION',
    isAbhimantrit: true,
    isLabCertified: true,
    shortDescription: 'Affirmation: "I focus on my goals and am protected." Chakra alignment & energy regulation.',
    fullDescription: 'Promotes goal achievement, physical vitality, emotional stress relief, and master healing.',
    benefits: [
      'Amplifies energy & healing properties',
      'Promotes manifestation & goal achievement',
      'Improves chakra alignment & energy flow'
    ],
    suitableForZodiac: ['Capricorn', 'Aquarius', 'Aries', 'Libra']
  },
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
    fullDescription: 'Crafted for complete aura alignment, planetary pacification (Navgrah Shanti), and supreme prosperity. Each bead is hand-selected and lab-certified.',
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
  }
];
