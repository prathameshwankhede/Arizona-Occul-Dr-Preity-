import React, { useState } from 'react';
import type { PageRoute, ProductItem } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { PlaceholderBadge } from '../components/PlaceholderBadge';
import { productsData } from '../data/products';
import { zodiacData } from '../data/zodiac';
import { faqsData } from '../data/faqs';
import { doctorProfile } from '../data/doctor';
import { servicesListData, servicesPosterImg } from '../data/servicesList';

import {
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  Sun,
  ChevronDown,
  ChevronUp,
  Flame,
  Globe,
  Sparkles,
  Phone,
  TrendingUp,
  PenTool,
  Home as HomeIcon,
  Edit3,
  Gem,
  Hash,
  MessageCircle
} from 'lucide-react';

interface Props {
  setActivePage: (page: PageRoute) => void;
  openConsultationModal: () => void;
  openQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
  searchQuery: string;
}

export const HomePage: React.FC<Props> = ({
  setActivePage,
  openConsultationModal,
  openQuickView,
  onAddToCart,
  searchQuery
}) => {
  const [selectedZodiacId, setSelectedZodiacId] = useState('aries');
  const [selectedProblemGoal, setSelectedProblemGoal] = useState<'wealth' | 'love' | 'protection' | 'career' | 'health'>('wealth');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showFullServicesPoster, setShowFullServicesPoster] = useState(false);

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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Hash': return <Hash className="w-5 h-5 text-amber-600" />;
      case 'Phone': return <Phone className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-amber-600" />;
      case 'Home': return <HomeIcon className="w-5 h-5 text-amber-600" />;
      case 'Edit3': return <Edit3 className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Gem': return <Gem className="w-5 h-5 text-amber-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-600" />;
      default: return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 md:pb-16 onaar-bg">
      
      {/* 0. ONAAR GRACIOUS STYLE STORY HIGHLIGHTS */}
      <div className="bg-white border-b border-[#e5decf] py-4 px-4 overflow-x-auto hide-scrollbar flex items-center gap-4 justify-start md:justify-center shadow-sm">
        
        <button
          onClick={openConsultationModal}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-[#0f382c] shadow-md">
            <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-white group-hover:scale-105 transition-transform">
              <img src={doctorProfile.photoUrl} alt="Dr. Preity" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-[#0f382c]">Dr. Preity</span>
        </button>

        <button
          onClick={() => {
            document.getElementById('our-services-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-cyan-600 to-amber-500 shadow-md">
            <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border-2 border-white text-[#0f382c] font-black text-xs">
              🌟 10 Services
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Services</span>
        </button>

        <button
          onClick={() => {
            setActiveCategoryFilter('Rudraksha');
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 to-amber-400 shadow-md">
            <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border-2 border-white text-amber-800 font-black text-xs">
              📿 Siddha
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Rudraksha</span>
        </button>

        <button
          onClick={() => {
            setActiveCategoryFilter('Gemstone');
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-500 to-amber-600 shadow-md">
            <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border-2 border-white text-amber-700 font-black text-xs">
              💎 Pukhraj
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Gemstones</span>
        </button>

        <button
          onClick={() => {
            setActiveCategoryFilter('Crystal');
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 to-amber-500 shadow-md">
            <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border-2 border-white text-emerald-800 font-black text-xs">
              ✨ Crystals
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Bracelets</span>
        </button>

        <button
          onClick={() => {
            setActivePage('remedies-calculator');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
        >
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-purple-600 to-amber-500 shadow-md">
            <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border-2 border-white text-purple-900 font-black text-xs">
              🔮 Kundli
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Calculator</span>
        </button>

      </div>

      {/* 1. ONAAR GRACIOUS ULTRA-LUXURY HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-white to-[#f4efe6] text-slate-900 pt-8 pb-16 lg:pt-16 lg:pb-28 border-b border-[#e5decf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Live Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e5decf] text-[#0f382c] text-xs font-black tracking-wider shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>100% AUTHENTIC ONAAR GRACIOUS REMEDIES • CALL: 8390125338</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#0f382c] tracking-tight leading-[1.15]">
                Onaar Gracious Vedic Remedies &{' '}
                <span className="text-amber-600 block mt-1">
                  100% Lab Certified Crystals
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find authentic 1–14 Mukhi Rudraksha Siddha Malas, Energized Abundance Bracelets, Ceylon Pukhraj, and 1-on-1 Kundli Consultations by <strong className="text-[#0f382c]">Dr. Preity</strong>.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={openConsultationModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0f382c] hover:bg-[#165b46] text-white font-black text-base shadow-xl transform active:scale-95 transition-all flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>Book Consultation (8390125338)</span>
                </button>

                <a
                  href="https://wa.me/918390125338"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp 8390125338</span>
                </a>
              </div>

              {/* Onaar Gracious Trust Badges */}
              <div className="pt-6 border-t border-[#e5decf] grid grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0f382c]/10 text-[#0f382c] flex items-center justify-center flex-shrink-0 border border-[#0f382c]/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0f382c] block leading-tight">100% Certified</span>
                    <span className="text-[10px] text-slate-500">X-Ray Guarantee</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0f382c]/10 text-[#0f382c] flex items-center justify-center flex-shrink-0 border border-[#0f382c]/20">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0f382c] block leading-tight">Pran Pratishtha</span>
                    <span className="text-[10px] text-slate-500">Vedic Consecrated</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0f382c]/10 text-[#0f382c] flex items-center justify-center flex-shrink-0 border border-[#0f382c]/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0f382c] block leading-tight">Express Global</span>
                    <span className="text-[10px] text-slate-500">Insured Shipping</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative onaar-card rounded-3xl p-6 shadow-xl space-y-5">
                  
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-100 border border-[#e5decf]">
                    <img
                      src={doctorProfile.photoUrl}
                      alt="Dr. Preity Astrologer"
                      className="w-full h-full object-cover filter hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-amber-500 text-white font-mono uppercase tracking-wider shadow">
                        Awaken • Align • Attract
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">Dr. Preity</h3>
                      <p className="text-xs text-amber-300 font-mono">Call/WhatsApp: 8390125338</p>
                    </div>
                  </div>

                  <div className="bg-[#faf8f5] rounded-2xl p-4 border border-[#e5decf] text-xs space-y-2.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Specialties:</span>
                      <span className="text-[#0f382c] font-black">Astrology, Numerology, Vastu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Remedies:</span>
                      <span className="text-amber-700 font-black">Abhimantrit Rudraksh & Gems</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Direct Helpline:</span>
                      <span className="text-emerald-700 font-mono font-black">8390125338</span>
                    </div>
                  </div>

                  <button
                    onClick={openConsultationModal}
                    className="w-full py-3.5 bg-[#0f382c] hover:bg-[#165b46] text-white font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Book Private Session (8390125338)</span>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GOAL REMEDY FINDER WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="onaar-card rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <SectionHeader
            badge="Personalized Remedy Finder"
            title="Shop Remedies by Your Personal Life Goal"
            subtitle="Select what you wish to manifest to view targeted crystal & astrological remedies."
            centered
          />

          {/* Goal Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <button
              onClick={() => setSelectedProblemGoal('wealth')}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                selectedProblemGoal === 'wealth'
                  ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                  : 'bg-white text-slate-700 border-[#e5decf] hover:bg-slate-50'
              }`}
            >
              <div className="text-base mb-1">💰</div>
              <div className="text-xs font-bold">Wealth & Business</div>
            </button>

            <button
              onClick={() => setSelectedProblemGoal('love')}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                selectedProblemGoal === 'love'
                  ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                  : 'bg-white text-slate-700 border-[#e5decf] hover:bg-slate-50'
              }`}
            >
              <div className="text-base mb-1">💍</div>
              <div className="text-xs font-bold">Love & Beauty</div>
            </button>

            <button
              onClick={() => setSelectedProblemGoal('protection')}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                selectedProblemGoal === 'protection'
                  ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                  : 'bg-white text-slate-700 border-[#e5decf] hover:bg-slate-50'
              }`}
            >
              <div className="text-base mb-1">🛡️</div>
              <div className="text-xs font-bold">Protection & Evil Eye</div>
            </button>

            <button
              onClick={() => setSelectedProblemGoal('career')}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                selectedProblemGoal === 'career'
                  ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                  : 'bg-white text-slate-700 border-[#e5decf] hover:bg-slate-50'
              }`}
            >
              <div className="text-base mb-1">📚</div>
              <div className="text-xs font-bold">Focus & Career</div>
            </button>

            <button
              onClick={() => setSelectedProblemGoal('health')}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                selectedProblemGoal === 'health'
                  ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                  : 'bg-white text-slate-700 border-[#e5decf] hover:bg-slate-50'
              }`}
            >
              <div className="text-base mb-1">🏥</div>
              <div className="text-xs font-bold">Health & Peace</div>
            </button>
          </div>

          {/* Goal Remedy Highlight Card */}
          <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#e5decf] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block">
                Target Remedy Category
              </span>
              <h3 className="text-xl font-extrabold text-[#0f382c] mt-1">
                {selectedProblemGoal === 'wealth' && 'Abundance & Financial Prosperity'}
                {selectedProblemGoal === 'love' && 'Sundari Beauty & Self-Love Combo'}
                {selectedProblemGoal === 'protection' && 'Sulemani Hakik & Tourmaline Shield'}
                {selectedProblemGoal === 'career' && 'Focus, Memory & Third Eye Activation'}
                {selectedProblemGoal === 'health' && 'Amethyst Calmness & Stress Relief'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Handpicked 100% natural crystals consecrated with specific mantras for fast goal manifestation.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between bg-white p-2.5 rounded-xl border border-[#e5decf]">
                <span className="text-slate-500">Prescribed Stone:</span>
                <span className="font-extrabold text-[#0f382c]">
                  {selectedProblemGoal === 'wealth' && 'Citrine, Pyrite, Green Aventurine'}
                  {selectedProblemGoal === 'love' && 'Moonstone, Carnelian, Rose Quartz'}
                  {selectedProblemGoal === 'protection' && 'Black Tourmaline, Sulemani Hakik'}
                  {selectedProblemGoal === 'career' && 'Lapis Lazuli, Clear Quartz'}
                  {selectedProblemGoal === 'health' && 'Amethyst, Howlite Crystal'}
                </span>
              </div>

              <div className="flex justify-between bg-white p-2.5 rounded-xl border border-[#e5decf]">
                <span className="text-slate-500">Consecration:</span>
                <span className="font-extrabold text-emerald-700">Pran Pratishtha Blessed</span>
              </div>
            </div>

            <button
              onClick={() => {
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#0f382c] hover:bg-[#165b46] text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>View Target Remedies Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. OFFICIAL 10 SERVICES OF DR. PREITY */}
      <section id="our-services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="onaar-card rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          
          <SectionHeader
            badge="Official Practice Spectrum"
            title="OUR SERVICES — Arizona Occult by Dr. Preity"
            subtitle="Align Your Energy • Attract Success • Remove Negativity"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Embedded Official Services Poster Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-500/40 bg-slate-900 aspect-[4/5] w-full max-w-sm group">
                <img
                  src={servicesPosterImg}
                  alt="Arizona Occult Our Services Official Poster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setShowFullServicesPoster(true)}
                    className="bg-amber-500 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl shadow-xl flex items-center gap-2"
                  >
                    <span>View Full Poster</span>
                  </button>
                </div>
              </div>

              <div className="text-center mt-3 text-xs text-[#0f382c] font-mono font-bold">
                📞 Direct Contact: 8390125338
              </div>
            </div>

            {/* Right: 10 Interactive Service Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesListData.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white border border-[#e5decf] hover:border-amber-500 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#0f382c]/10 text-[#0f382c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {getServiceIcon(srv.iconName)}
                      </div>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono uppercase">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold text-[#0f382c] group-hover:text-amber-700 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <button
                    onClick={openConsultationModal}
                    className="w-full py-2 bg-[#0f382c] hover:bg-[#165b46] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* 3. PRO ZODIAC REMEDIES CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="onaar-card rounded-3xl p-6 sm:p-10 shadow-lg">
          
          <SectionHeader
            badge="Interactive Astrological Tool"
            title="Find Your Ideal Rudraksha & Lucky Gemstone"
            subtitle="Select your Zodiac Sign (Rashi) to discover your ruling planet and prescribed Vedic remedies."
          />

          {/* Zodiac Buttons - Mobile Touch Friendly Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 my-6">
            {zodiacData.map((zodiac) => (
              <button
                key={zodiac.id}
                onClick={() => setSelectedZodiacId(zodiac.id)}
                className={`p-3.5 rounded-2xl text-center border transition-all ${
                  selectedZodiacId === zodiac.id
                    ? 'bg-[#0f382c] text-white border-[#0f382c] font-black shadow-md scale-105'
                    : 'bg-white border-[#e5decf] text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="text-sm font-bold">{zodiac.name}</div>
                <div className="text-[10px] opacity-80 mt-0.5">{zodiac.sanskritName.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Selected Result Card */}
          <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e5decf] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block">
                Zodiac Profile: {selectedZodiac.sanskritName}
              </span>
              <h3 className="text-2xl font-black text-[#0f382c] mt-1">
                {selectedZodiac.name} Rashi
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {selectedZodiac.description}
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between bg-white p-2.5 rounded-xl border border-[#e5decf]">
                <span className="text-slate-500">Ruling Planet:</span>
                <span className="font-extrabold text-amber-700">{selectedZodiac.ruler}</span>
              </div>
              <div className="flex justify-between bg-white p-2.5 rounded-xl border border-[#e5decf]">
                <span className="text-slate-500">Prescribed Rudraksha:</span>
                <span className="font-extrabold text-[#0f382c]">{selectedZodiac.recommendedRudraksha}</span>
              </div>
              <div className="flex justify-between bg-white p-2.5 rounded-xl border border-[#e5decf]">
                <span className="text-slate-500">Lucky Gemstone:</span>
                <span className="font-extrabold text-emerald-700">{selectedZodiac.luckyGemstone}</span>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center space-y-3">
              <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-widest block">
                Sacred Vedic Mantra
              </span>
              <p className="text-xs font-mono italic text-amber-900 font-semibold">
                "{selectedZodiac.mantra}"
              </p>
              <button
                onClick={openConsultationModal}
                className="w-full py-2.5 bg-[#0f382c] hover:bg-[#165b46] text-white font-black text-xs rounded-xl shadow-md"
              >
                Confirm Recommendation with Dr. Preity (8390125338)
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CATALOG & E-COMMERCE STORE */}
      <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="100% Authentic & Lab Certified"
            title="Spiritual Remedies Catalog"
            subtitle="Hand-selected Nepali Rudrakshas, Navratna Gemstones, and Energized Crystal Bracelets."
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Rudraksha', 'Gemstone', 'Crystal', 'Yantra'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-[#0f382c] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#e5decf]'
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

      {/* 5. ABOUT DR. PREITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="onaar-card rounded-3xl p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e5decf] aspect-[4/5] bg-slate-100">
              <img
                src={doctorProfile.photoUrl}
                alt="Dr. Preity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0f382c] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Sun className="w-8 h-8 text-amber-400" />
              <div>
                <span className="text-[10px] font-semibold block uppercase tracking-wider text-amber-200">Occult Vision</span>
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

            <p className="text-slate-700 text-sm leading-relaxed">
              {doctorProfile.bio}
            </p>

            <div className="bg-[#faf8f5] border border-[#e5decf] rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#0f382c] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Verified Credentials & Helpline</span>
                </span>
                <span className="text-xs text-emerald-700 font-mono font-black">8390125338</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mono">
                <li>• Phone / WhatsApp: 8390125338</li>
                <li>• Education: {doctorProfile.educationPlaceholder}</li>
                <li>• Certifications: {doctorProfile.qualificationsPlaceholder}</li>
                <li>• Experience: {doctorProfile.experiencePlaceholder}</li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openConsultationModal}
                className="px-6 py-3 rounded-xl bg-[#0f382c] hover:bg-[#165b46] text-white font-extrabold text-xs transition-colors shadow-md"
              >
                Book 1-on-1 Session with Dr. Preity (8390125338)
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PATIENT & DEVOTEE REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f382c] text-white rounded-3xl p-8 lg:p-12 border border-[#165b46] shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 uppercase tracking-wider">
                Devotee Feedback
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">Client Transformations & Reviews</h2>
            </div>
            <PlaceholderBadge text="Verified Client Feedback Placeholders" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#164e3d] p-6 rounded-2xl border border-emerald-800 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-200 text-xs italic">
                "[Add Verified Client Review #1 regarding Dr. Preity Kundli guidance and Abundance Bracelet impact here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-emerald-800">
                - Client Placeholder #1 (Phoenix, AZ)
              </div>
            </div>

            <div className="bg-[#164e3d] p-6 rounded-2xl border border-emerald-800 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-200 text-xs italic">
                "[Add Verified Client Review #2 regarding Business Astro-Numero consultation & logo designing success here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-emerald-800">
                - Client Placeholder #2 (Tucson, AZ)
              </div>
            </div>

            <div className="bg-[#164e3d] p-6 rounded-2xl border border-emerald-800 space-y-3">
              <div className="text-amber-400 flex gap-1 text-xs">★★★★★</div>
              <p className="text-slate-200 text-xs italic">
                "[Add Verified Client Review #3 regarding Sulemani Hakik bracelet & Vastu consultation here]"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-emerald-800">
                - Client Placeholder #3 (Scottsdale, AZ)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
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
                className="onaar-card rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-700 transition-colors focus:outline-none"
                >
                  <span className="text-sm">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-700" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
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

      {/* FULL SERVICES POSTER MODAL */}
      {showFullServicesPoster && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl p-4 border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setShowFullServicesPoster(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 z-10 shadow-lg"
            >
              ✕
            </button>
            <img
              src={servicesPosterImg}
              alt="Dr. Preity Official 10 Services Poster"
              className="w-full h-auto rounded-2xl border border-slate-200"
            />
          </div>
        </div>
      )}

    </div>
  );
};
