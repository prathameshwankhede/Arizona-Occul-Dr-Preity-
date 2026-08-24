import React, { useState } from 'react';
import type { PageRoute, ProductItem } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { PlaceholderBadge } from '../components/PlaceholderBadge';
import { productsData } from '../data/products';
import { zodiacData } from '../data/zodiac';
import { faqsData } from '../data/faqs';
import { doctorProfile } from '../data/doctor';
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  Sun,
  ChevronDown,
  ChevronUp,
  Flame
} from 'lucide-react';

interface Props {
  setActivePage: (page: PageRoute) => void;
  openConsultationModal: () => void;
  openQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
  searchQuery: string;
}

export const HomePage: React.FC<Props> = ({
  openConsultationModal,
  openQuickView,
  onAddToCart,
  searchQuery
}) => {
  const [selectedZodiacId, setSelectedZodiacId] = useState('aries');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedZodiac = zodiacData.find((z) => z.id === selectedZodiacId) || zodiacData[0];

  const filteredProducts = productsData.filter((prod) => {
    const matchesSearch =
      !searchQuery ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategoryFilter === 'All' || prod.category === activeCategoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/30 text-white pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-amber-900/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Lab Certified & Abhimantrit Remedies</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Unlock Cosmic Destiny.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                  Authentic Remedies.
                </span>
              </h1>

              <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Guiding lives through Vedic Astrology, Kundli Reading, 100% Lab Certified Navratna Gemstones, authentic Nepali Rudrakshas, and Vastu solutions by <strong className="text-white">Dr. Preity</strong>.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={openConsultationModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Consult Dr. Preity Now</span>
                </button>

                <button
                  onClick={() => {
                    setActiveCategoryFilter('Rudraksha');
                    const element = document.getElementById('catalog-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Shop Sacred Remedies</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Lab Certified</span>
                    <span className="text-[11px] text-slate-400">X-Ray Guarantee</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Pran Pratishtha</span>
                    <span className="text-[11px] text-slate-400">Energized Remedies</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Dr. Preity</span>
                    <span className="text-[11px] text-slate-400">Occult Specialist</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-600 to-yellow-500 opacity-30 blur-lg animate-pulse-glow" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                  
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={doctorProfile.photoUrl}
                      alt="Dr. Preity Astrologer"
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono uppercase tracking-wider">
                        Occult Specialist
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">Dr. Preity</h3>
                      <p className="text-xs text-slate-300">Vedic Astrologer & Spiritual Healer</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-xs space-y-2.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Services:</span>
                      <span className="text-white font-semibold">Kundli, Numerology, Vastu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Remedies:</span>
                      <span className="text-amber-400 font-semibold">Abhimantrit Rudraksha & Gems</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Credentials:</span>
                      <span className="text-amber-400 font-mono text-[10px]">[Add Dr. Preity Credentials]</span>
                    </div>
                  </div>

                  <button
                    onClick={openConsultationModal}
                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl text-xs shadow-md"
                  >
                    Book Private Kundli Session
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ZODIAC & REMEDIES CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 text-white rounded-3xl p-8 lg:p-12 border border-amber-900/40 shadow-2xl">
          
          <SectionHeader
            badge="Interactive Astrological Tool"
            title="Find Your Ideal Rudraksha & Lucky Gemstone"
            subtitle="Select your Zodiac Sign (Rashi) to discover your ruling planet and prescribed Vedic remedies."
          />

          {/* Zodiac Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 my-8">
            {zodiacData.map((zodiac) => (
              <button
                key={zodiac.id}
                onClick={() => setSelectedZodiacId(zodiac.id)}
                className={`p-3 rounded-2xl text-center border transition-all ${
                  selectedZodiacId === zodiac.id
                    ? 'bg-gradient-to-b from-amber-500 to-amber-600 text-slate-950 border-amber-400 font-extrabold shadow-lg scale-105'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="text-xs font-bold">{zodiac.name}</div>
                <div className="text-[10px] opacity-80 mt-0.5">{zodiac.sanskritName.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Selected Result Card */}
          <div className="bg-slate-950/80 rounded-2xl p-6 border border-amber-900/50 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Zodiac Profile: {selectedZodiac.sanskritName}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedZodiac.name} Rashi
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {selectedZodiac.description}
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Ruling Planet:</span>
                <span className="font-bold text-amber-400">{selectedZodiac.ruler}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Prescribed Rudraksha:</span>
                <span className="font-bold text-white">{selectedZodiac.recommendedRudraksha}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Lucky Gemstone:</span>
                <span className="font-bold text-emerald-400">{selectedZodiac.luckyGemstone}</span>
              </div>
            </div>

            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-800/50 text-center space-y-3">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                Sacred Vedic Mantra
              </span>
              <p className="text-xs font-mono italic text-amber-200">
                "{selectedZodiac.mantra}"
              </p>
              <button
                onClick={openConsultationModal}
                className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow"
              >
                Confirm Recommendation with Dr. Preity
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CATALOG & E-COMMERCE STORE */}
      <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="100% Authentic & Lab Certified"
            title="Spiritual Remedies Catalog"
            subtitle="Hand-selected Nepali Rudrakshas, Navratna Gemstones, and Energized Crystals."
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Rudraksha', 'Gemstone', 'Crystal', 'Yantra'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={openQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* 4. ABOUT DR. PREITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/5] bg-slate-100">
              <img
                src={doctorProfile.photoUrl}
                alt="Dr. Preity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Sun className="w-8 h-8 text-amber-200" />
              <div>
                <span className="text-[10px] font-semibold block uppercase tracking-wider text-amber-100">Occult Vision</span>
                <span className="text-xs font-bold block">Vedic Authenticity</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="Meet Your Astrologer"
              title="About Dr. Preity"
              subtitle="Guiding thousands toward clarity, prosperity, and peace of mind through authentic Vedic remedies."
            />

            <p className="text-slate-600 text-sm leading-relaxed">
              {doctorProfile.bio}
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Verified Credentials Placeholder</span>
                </span>
                <PlaceholderBadge text="Client Placeholder Data" />
              </div>
              <ul className="space-y-1.5 text-xs text-amber-900 font-mono">
                <li>• Education: {doctorProfile.educationPlaceholder}</li>
                <li>• Certifications: {doctorProfile.qualificationsPlaceholder}</li>
                <li>• Experience: {doctorProfile.experiencePlaceholder}</li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openConsultationModal}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-md"
              >
                Book 1-on-1 Session with Dr. Preity
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PATIENT & DEVOTEE REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 uppercase tracking-wider">
                Devotee Feedback
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">Client Transformations & Reviews</h2>
            </div>
            <PlaceholderBadge text="Verified Client Feedback Placeholders" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-300 text-xs italic">
                "[Add Verified Client Review #1 regarding Dr. Preity Kundli guidance and 7 Mukhi Rudraksha impact here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-slate-700">
                - Client Placeholder #1 (Phoenix, AZ)
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-300 text-xs italic">
                "[Add Verified Client Review #2 regarding Ceylon Pukhraj authenticity and business growth here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-slate-700">
                - Client Placeholder #2 (Tucson, AZ)
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-300 text-xs italic">
                "[Add Verified Client Review #3 regarding Pyrite bracelet & Vastu remedies for house here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-slate-700">
                - Client Placeholder #3 (Scottsdale, AZ)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Understanding Astrological Remedies"
          subtitle="Answers to common questions about gemstones, Rudraksha activation, and consultations."
          centered
        />

        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-600 transition-colors focus:outline-none"
                >
                  <span className="text-sm">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
