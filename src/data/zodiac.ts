export interface ZodiacInfo {
  id: string;
  name: string;
  sanskritName: string;
  ruler: string;
  element: string;
  luckyGemstone: string;
  recommendedRudraksha: string;
  luckyCrystal: string;
  mantra: string;
  description: string;
}

export const zodiacData: ZodiacInfo[] = [
  {
    id: 'aries',
    name: 'Aries',
    sanskritName: 'Mesha (मेष)',
    ruler: 'Mars (Mangal)',
    element: 'Fire',
    luckyGemstone: 'Red Coral (Moonga)',
    recommendedRudraksha: '3 Mukhi Rudraksha',
    luckyCrystal: 'Red Jasper / Pyrite',
    mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah',
    description: 'Dynamic, courageous, and energetic. Red Coral & 3 Mukhi Rudraksha ignite stamina and eliminate obstacles.'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    sanskritName: 'Vrishabha (वृषभ)',
    ruler: 'Venus (Shukra)',
    element: 'Earth',
    luckyGemstone: 'Opal / Diamond / White Sapphire',
    recommendedRudraksha: '6 Mukhi Rudraksha',
    luckyCrystal: 'Rose Quartz',
    mantra: 'Om Dram Dreem Droum Sah Shukraya Namah',
    description: 'Grounded, artistic, and stability-seeking. 6 Mukhi & Opal bring luxury, harmony, and relationship bliss.'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskritName: 'Mithuna (मिथुन)',
    ruler: 'Mercury (Budh)',
    element: 'Air',
    luckyGemstone: 'Emerald (Panna)',
    recommendedRudraksha: '4 Mukhi Rudraksha',
    luckyCrystal: 'Green Aventurine / Fluorite',
    mantra: 'Om Bram Breem Broum Sah Budhaya Namah',
    description: 'Intellectual, communicative, and versatile. 4 Mukhi & Emerald sharpen memory and business acumen.'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskritName: 'Karka (कर्क)',
    ruler: 'Moon (Chandra)',
    element: 'Water',
    luckyGemstone: 'Pearl (Moti) / Moonstone',
    recommendedRudraksha: '2 Mukhi Rudraksha',
    luckyCrystal: 'Selenite / Amethyst',
    mantra: 'Om Shram Shreem Shroum Sah Chandraya Namah',
    description: 'Intuitive, nurturing, and sensitive. 2 Mukhi & Pearl stabilize emotions and foster peace of mind.'
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskritName: 'Simha (सिंह)',
    ruler: 'Sun (Surya)',
    element: 'Fire',
    luckyGemstone: 'Ruby (Manik)',
    recommendedRudraksha: '1 Mukhi / 12 Mukhi Rudraksha',
    luckyCrystal: 'Citrine / Pyrite',
    mantra: 'Om Hram Hreem Hroum Sah Suryaya Namah',
    description: 'Charismatic, leader, and regal. 12 Mukhi & Ruby boost authority, fame, and vitality.'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskritName: 'Kanya (कन्या)',
    ruler: 'Mercury (Budh)',
    element: 'Earth',
    luckyGemstone: 'Emerald (Panna)',
    recommendedRudraksha: '4 Mukhi Rudraksha',
    luckyCrystal: 'Amazonite / Moss Agate',
    mantra: 'Om Bram Breem Broum Sah Budhaya Namah',
    description: 'Analytical, practical, and detail-oriented. Emerald & 4 Mukhi unlock financial wisdom and peace.'
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskritName: 'Tula (तुला)',
    ruler: 'Venus (Shukra)',
    element: 'Air',
    luckyGemstone: 'Diamond / Opal / White Sapphire',
    recommendedRudraksha: '6 Mukhi Rudraksha',
    luckyCrystal: 'Lapis Lazuli / Rose Quartz',
    mantra: 'Om Dram Dreem Droum Sah Shukraya Namah',
    description: 'Harmonious, diplomatic, and graceful. 6 Mukhi Rudraksha inspires partnership success and abundance.'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskritName: 'Vrishchika (वृश्चिक)',
    ruler: 'Mars (Mangal)',
    element: 'Water',
    luckyGemstone: 'Red Coral (Moonga)',
    recommendedRudraksha: '3 Mukhi Rudraksha',
    luckyCrystal: 'Black Tourmaline / Carnelian',
    mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah',
    description: 'Intense, transformative, and protective. 3 Mukhi & Red Coral dispel fear and shield against negative energies.'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskritName: 'Dhanu (धनु)',
    ruler: 'Jupiter (Guru)',
    element: 'Fire',
    luckyGemstone: 'Yellow Sapphire (Pukhraj) / Citrine',
    recommendedRudraksha: '5 Mukhi Rudraksha',
    luckyCrystal: 'Tiger Eye / Turquoise',
    mantra: 'Om Gram Greem Groum Sah Gurave Namah',
    description: 'Philosophical, optimistic, and spiritual. Yellow Sapphire & 5 Mukhi bring wisdom, luck, and prosperity.'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskritName: 'Makara (मकर)',
    ruler: 'Saturn (Shani)',
    element: 'Earth',
    luckyGemstone: 'Blue Sapphire (Neelam)',
    recommendedRudraksha: '7 Mukhi Rudraksha',
    luckyCrystal: 'Smoky Quartz / Pyrite',
    mantra: 'Om Pram Preem Proum Sah Shanaischaraya Namah',
    description: 'Disciplined, ambitious, and resilient. 7 Mukhi (Mahalakshmi) & Blue Sapphire bring steady wealth & career growth.'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskritName: 'Kumbha (कुंभ)',
    ruler: 'Saturn (Shani)',
    element: 'Air',
    luckyGemstone: 'Blue Sapphire (Neelam) / Amethyst',
    recommendedRudraksha: '7 Mukhi Rudraksha',
    luckyCrystal: 'Amethyst / Hematite',
    mantra: 'Om Pram Preem Proum Sah Shanaischaraya Namah',
    description: 'Visionary, humanitarian, and intuitive. Amethyst & 7 Mukhi calm Saturn dasha and expand financial freedom.'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskritName: 'Meena (मीन)',
    ruler: 'Jupiter (Guru)',
    element: 'Water',
    luckyGemstone: 'Yellow Sapphire (Pukhraj)',
    recommendedRudraksha: '5 Mukhi Rudraksha',
    luckyCrystal: 'Aquamarine / Fluorite',
    mantra: 'Om Gram Greem Groum Sah Gurave Namah',
    description: 'Empathetic, spiritual, and imaginative. Yellow Sapphire & 5 Mukhi deepen spiritual wisdom and prosperity.'
  }
];
