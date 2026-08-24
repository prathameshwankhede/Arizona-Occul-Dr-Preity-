import React, { useState } from 'react';
import type { PageRoute, ProductItem } from '../types';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';
import { doctorProfile } from '../data/doctor';
import { servicesListData, servicesPosterImg } from '../data/servicesList';

import {
  Calendar,
  ShieldCheck,
  Flame,
  Sparkles,
  Phone,
  TrendingUp,
  Home as HomeIcon,
  MessageCircle,
  Lock,
  Truck,
  RefreshCw,
  Headphones,
  Eye,
  PenTool,
  Edit3,
  Gem,
  Hash
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
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [showFullServicesPoster, setShowFullServicesPoster] = useState(false);

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
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Hash': return <Hash className="w-6 h-6 text-white" />;
      case 'Phone': return <Phone className="w-6 h-6 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-white" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-white" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-white" />;
      case 'Edit3': return <Edit3 className="w-6 h-6 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'Gem': return <Gem className="w-6 h-6 text-white" />;
      case 'Flame': return <Flame className="w-6 h-6 text-white" />;
      default: return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 md:pb-16 arizona-light-bg">
      
      {/* 1. HERO BANNER SECTION (CELESTIAL SKY BLUE GRADIENT MATCHING MOCKUP) */}
      <section className="relative overflow-hidden hero-sky-gradient text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#0b2545] tracking-tight leading-[1.12]">
                Divine Guidance for<br />
                <span className="text-[#134074]">Better Life</span>
              </h1>

              {/* Dark Blue Badge */}
              <div className="inline-block px-5 py-2 rounded-full bg-[#0b2545] text-amber-300 text-xs font-black tracking-widest uppercase shadow-md">
                ALIGN YOUR ENERGY • ATTRACT SUCCESS • REMOVE NEGATIVITY
              </div>

              {/* CTAs (Matching Light Mockup Buttons) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={openConsultationModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl arizona-navy-btn text-white font-extrabold text-xs shadow-xl flex items-center justify-center gap-2.5 uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>BOOK CONSULTATION</span>
                </button>

                <a
                  href="https://wa.me/918390125338"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0b2545] border-2 border-[#0b2545] font-extrabold text-xs shadow-md flex items-center justify-center gap-2.5 uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column Visual (Dr. Preity Portrait & Crystals) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="arizona-light-card rounded-3xl p-6 shadow-2xl space-y-4 border border-amber-300">
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={doctorProfile.photoUrl}
                      alt="Dr. Preity"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-black px-3 py-1 rounded bg-amber-400 text-slate-950 uppercase">
                        Dr. Preity • Arizona Occult
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">Astrologer & Occultist</h3>
                      <p className="text-xs text-amber-300 font-mono">Call/WhatsApp: 8390125338</p>
                    </div>
                  </div>

                  <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-xs text-[#0b2545] font-extrabold text-center">
                    ✨ 100% Lab Certified Nepali Rudraksh & Crystals
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "OUR SERVICES" SECTION (EXACT 10 CARDS GRID FROM MOCKUP) */}
      <section id="our-services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-amber-600 tracking-widest uppercase block">
            ❖ OUR SERVICES ❖
          </span>
          <h2 className="text-3xl font-black text-[#0b2545]">
            Comprehensive Astrological & Occult Spectrum
          </h2>
        </div>

        {/* 10 Services Grid (Exact Match to Mockup) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {servicesListData.map((srv) => (
            <div
              key={srv.id}
              className="arizona-light-card bg-white p-4 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-500 transition-all group"
            >
              <div className="space-y-2.5">
                <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#0b2545] to-[#134074] text-white mx-auto flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {getServiceIcon(srv.iconName)}
                </div>

                <h3 className="text-xs font-black text-[#0b2545] group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                  {srv.title}
                </h3>

                <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                  {srv.shortDesc}
                </p>
              </div>

              <button
                onClick={openConsultationModal}
                className="w-full py-1.5 bg-amber-50 text-amber-800 font-bold text-[10px] rounded-lg border border-amber-200 hover:bg-amber-500 hover:text-slate-950 transition-colors uppercase"
              >
                Book Service
              </button>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setShowFullServicesPoster(true)}
            className="px-8 py-3.5 arizona-navy-btn text-white font-extrabold text-xs rounded-xl shadow-lg inline-flex items-center gap-2 uppercase"
          >
            <span>VIEW FULL 10 SERVICES POSTER</span>
            <Eye className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </section>

      {/* 3. "SHOP SPIRITUAL PRODUCTS" SECTION (EXACT MOCKUP PRODUCT GRID) */}
      <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-black text-amber-600 tracking-widest uppercase block">
              ❖ SHOP SPIRITUAL PRODUCTS ❖
            </span>
            <h2 className="text-2xl font-black text-[#0b2545] mt-1">
              Handcrafted & Energized Crystals
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveCategoryFilter('All');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-white border border-[#0b2545] text-[#0b2545] font-extrabold text-xs rounded-xl hover:bg-slate-50 transition-colors uppercase tracking-wider shadow-sm"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={openQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* 4. TRUST BAR (DARK NAVY BAR MATCHING LIGHT MOCKUP) */}
      <section className="bg-[#091830] text-white py-8 border-y border-amber-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="space-y-2">
              <ShieldCheck className="w-7 h-7 text-amber-400 mx-auto" />
              <h4 className="text-xs font-black tracking-wider uppercase">100% AUTHENTIC</h4>
              <p className="text-[10px] text-slate-300">Genuine & Pure Products</p>
            </div>

            <div className="space-y-2">
              <Lock className="w-7 h-7 text-amber-400 mx-auto" />
              <h4 className="text-xs font-black tracking-wider uppercase">SECURE PAYMENTS</h4>
              <p className="text-[10px] text-slate-300">Safe & Trusted Transactions</p>
            </div>

            <div className="space-y-2">
              <Truck className="w-7 h-7 text-amber-400 mx-auto" />
              <h4 className="text-xs font-black tracking-wider uppercase">FAST DELIVERY</h4>
              <p className="text-[10px] text-slate-300">Pan India Delivery</p>
            </div>

            <div className="space-y-2">
              <RefreshCw className="w-7 h-7 text-amber-400 mx-auto" />
              <h4 className="text-xs font-black tracking-wider uppercase">EASY RETURNS</h4>
              <p className="text-[10px] text-slate-300">Hassle Free Returns</p>
            </div>

            <div className="space-y-2 col-span-2 md:col-span-1">
              <Headphones className="w-7 h-7 text-amber-400 mx-auto" />
              <h4 className="text-xs font-black tracking-wider uppercase">CUSTOMER SUPPORT</h4>
              <p className="text-[10px] text-slate-300">We're Here to Help</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. "OUR CONSULTATION PROCESS" & "READY TO TRANSFORM YOUR LIFE?" (EXACT MOCKUP MATCH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Consultation Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-black text-amber-600 tracking-widest uppercase block">
                ❖ OUR CONSULTATION PROCESS ❖
              </span>
              <h2 className="text-2xl font-black text-[#0b2545] mt-1">
                Simple 4-Step Pathway to Life Transformation
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="arizona-light-card bg-white p-4 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0b2545] text-amber-400 font-black text-xs mx-auto flex items-center justify-center shadow">
                  01
                </div>
                <h4 className="text-xs font-black text-[#0b2545] uppercase">CHOOSE YOUR SERVICE</h4>
                <p className="text-[10px] text-slate-500">Select the consultation you need.</p>
              </div>

              <div className="arizona-light-card bg-white p-4 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0b2545] text-amber-400 font-black text-xs mx-auto flex items-center justify-center shadow">
                  02
                </div>
                <h4 className="text-xs font-black text-[#0b2545] uppercase">BOOK YOUR CONSULTATION</h4>
                <p className="text-[10px] text-slate-500">Fill the form or connect on WhatsApp.</p>
              </div>

              <div className="arizona-light-card bg-white p-4 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0b2545] text-amber-400 font-black text-xs mx-auto flex items-center justify-center shadow">
                  03
                </div>
                <h4 className="text-xs font-black text-[#0b2545] uppercase">ONE-TO-ONE GUIDANCE</h4>
                <p className="text-[10px] text-slate-500">Get expert guidance from Dr. Preity.</p>
              </div>

              <div className="arizona-light-card bg-white p-4 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0b2545] text-amber-400 font-black text-xs mx-auto flex items-center justify-center shadow">
                  04
                </div>
                <h4 className="text-xs font-black text-[#0b2545] uppercase">RECEIVE RECOMMENDATIONS</h4>
                <p className="text-[10px] text-slate-500">Follow practical steps & transform life.</p>
              </div>
            </div>
          </div>

          {/* Right Column Card ("Ready to Transform Your Life?") */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 via-white to-amber-100/50 p-6 sm:p-8 rounded-3xl border border-amber-300 shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#0b2545]">Ready to Transform Your Life?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Book your consultation now and take the first step towards a better, happier, and prosperous you.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  onClick={openConsultationModal}
                  className="w-full py-3.5 arizona-navy-btn text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 uppercase"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>BOOK CONSULTATION</span>
                </button>

                <a
                  href="https://wa.me/918390125338"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-white border-2 border-emerald-600 text-emerald-700 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 uppercase"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. "WHAT OUR CLIENTS SAY" (TESTIMONIALS CAROUSEL FROM MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-black text-amber-600 tracking-widest uppercase block">
            ❖ WHAT OUR CLIENTS SAY ❖
          </span>
          <h2 className="text-2xl font-black text-[#0b2545]">
            Verified Devotee Transformations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="arizona-light-card bg-white p-6 rounded-2xl space-y-3 relative">
            <div className="text-amber-500 font-serif text-3xl font-bold">“</div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Dr. Preity's guidance is truly divine. It brought peace, clarity and abundance in my life."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                NG
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#0b2545]">Neha Gupta</h4>
                <p className="text-[10px] text-slate-400">Bangalore</p>
              </div>
            </div>
          </div>

          <div className="arizona-light-card bg-white p-6 rounded-2xl space-y-3 relative">
            <div className="text-amber-500 font-serif text-3xl font-bold">“</div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Very accurate readings and powerful remedies. I feel more positive and confident now."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                RV
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#0b2545]">Rohit Verma</h4>
                <p className="text-[10px] text-slate-400">Delhi</p>
              </div>
            </div>
          </div>

          <div className="arizona-light-card bg-white p-6 rounded-2xl space-y-3 relative">
            <div className="text-amber-500 font-serif text-3xl font-bold">“</div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "The crystals and guidance I received changed my perspective. Highly recommended!"
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                AS
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#0b2545]">Anjali Sharma</h4>
                <p className="text-[10px] text-slate-400">Mumbai</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FULL SERVICES POSTER MODAL */}
      {showFullServicesPoster && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl p-4 border border-amber-300 shadow-2xl">
            <button
              onClick={() => setShowFullServicesPoster(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 z-10 shadow-lg"
            >
              ✕
            </button>
            <img
              src={servicesPosterImg}
              alt="Dr. Preity Official 10 Services Poster"
              className="w-full h-auto rounded-2xl border border-amber-200"
            />
          </div>
        </div>
      )}

    </div>
  );
};
