import React, { useState } from 'react';
import type { PageRoute, ProductItem } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';
import { doctorProfile } from '../data/doctor';
import { servicesPosterImg } from '../data/servicesList';

import {
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  Sun,
  Flame,
  Sparkles,
  Phone,
  TrendingUp,
  Home as HomeIcon,
  MessageCircle,
  Check
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

  // Form State matching mockup "Book a Consultation"
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    selectedService: 'Astrology Services',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr. Preity, I want to book a consultation:%0A- Name: ${formData.fullName}%0A- Phone: ${formData.phoneNumber}%0A- Email: ${formData.emailAddress}%0A- Service: ${formData.selectedService}%0A- Date: ${formData.preferredDate}%0A- Time: ${formData.preferredTime}%0A- Message: ${formData.message}`;
    window.open(`https://wa.me/918390125338?text=${text}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 md:pb-16 arizona-navy-bg">
      
      {/* 1. HERO SECTION (EXACT MATCH TO MOCKUP LEFT TOP) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050b1a] via-[#07122b] to-[#0a1738] text-white pt-10 pb-20 lg:pt-20 lg:pb-32 border-b border-amber-500/20">
        
        {/* Astrological Cosmic Wheel Overlay */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (Exact Headline from Mockup) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Dr. Preity Helpline: +91 8390125338</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Align Your Energy<br />
                <span className="gold-gradient-text">Attract Success</span><br />
                Remove Negativity
              </h1>

              <p className="text-lg sm:text-xl text-amber-200/90 font-medium tracking-wide">
                Divine Guidance for a Better Life
              </p>

              {/* Exact Mockup Buttons: Book a Consultation (Gold) & Chat on WhatsApp (Green) */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={openConsultationModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl arizona-gold-btn text-slate-950 font-black text-base shadow-2xl flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Book a Consultation</span>
                </button>

                <a
                  href="https://wa.me/918390125338"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl arizona-whatsapp-btn text-white font-bold text-base shadow-lg flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column (Zodiac Crystal Artwork from Mockup) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="arizona-card rounded-3xl p-6 shadow-2xl border border-amber-500/30 text-center space-y-4">
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/30">
                    <img
                      src={doctorProfile.photoUrl}
                      alt="Dr. Preity"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-black px-3 py-1 rounded bg-amber-500 text-slate-950 uppercase">
                        Arizona Occult • Dr. Preity
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">Vedic & Occult Specialist</h3>
                      <p className="text-xs text-amber-300 font-mono">Call/WhatsApp: 8390125338</p>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-amber-500/20 text-xs text-amber-200">
                    ✨ 100% Lab Certified Nepali Rudraksh & Energized Crystals
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BANNER (EXACT 5 CARDS FROM MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          <div className="arizona-card p-4 rounded-2xl text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Expert Guidance</h4>
            <p className="text-[10px] text-slate-400">Experienced & Trusted</p>
          </div>

          <div className="arizona-card p-4 rounded-2xl text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Personalized Solutions</h4>
            <p className="text-[10px] text-slate-400">Tailored to Your Needs</p>
          </div>

          <div className="arizona-card p-4 rounded-2xl text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Authentic Practices</h4>
            <p className="text-[10px] text-slate-400">100% Genuine & Energetic</p>
          </div>

          <div className="arizona-card p-4 rounded-2xl text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Secure & Confidential</h4>
            <p className="text-[10px] text-slate-400">Your Privacy Is Our Priority</p>
          </div>

          <div className="arizona-card p-4 rounded-2xl text-center space-y-2 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Positive Transformation</h4>
            <p className="text-[10px] text-slate-400">Better Energy, Better Life</p>
          </div>

        </div>
      </section>

      {/* 3. "OUR CONSULTATIONS" SECTION (EXACT MATCH TO MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <SectionHeader
          badge="Expert Occult Practice"
          title="Our Consultations"
          subtitle="Explore Dr. Preity's specialized Vedic and occult consultation domains."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          
          <div className="arizona-card p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Astrology Services</h3>
            </div>
            <button onClick={openConsultationModal} className="text-xs font-bold text-amber-400 hover:underline flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="arizona-card p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-lg font-mono font-bold text-xs">
                1 2 3<br />4 5 6
              </div>
              <h3 className="text-sm font-bold text-white">Numerology Services</h3>
            </div>
            <button onClick={openConsultationModal} className="text-xs font-bold text-amber-400 hover:underline flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="arizona-card p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Mobile Number Consultation</h3>
            </div>
            <button onClick={openConsultationModal} className="text-xs font-bold text-amber-400 hover:underline flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="arizona-card p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Business Astronumero Consultation</h3>
            </div>
            <button onClick={openConsultationModal} className="text-xs font-bold text-amber-400 hover:underline flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="arizona-card p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Vastu Consultation</h3>
            </div>
            <button onClick={openConsultationModal} className="text-xs font-bold text-amber-400 hover:underline flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setShowFullServicesPoster(true)}
            className="px-8 py-3.5 rounded-xl arizona-gold-btn text-slate-950 font-black text-xs shadow-lg inline-flex items-center gap-2"
          >
            <span>Explore All Consultations & 10 Services Poster</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* 4. "WHY CHOOSE ARIZONA OCCULT?" & "OUR CONSULTATION PROCESS" (EXACT MOCKUP MATCH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Why Choose Arizona Occult? */}
          <div className="lg:col-span-5 arizona-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white">Why Choose Arizona Occult?</h3>
            
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Personalized One-to-One Guidance</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Ancient Wisdom with Modern Approach</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Confidential & Trusted Consultations</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Holistic & Practical Solutions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Positive Energy & Spiritual Growth</span>
              </li>
            </ul>

            <button
              onClick={openConsultationModal}
              className="w-full py-3 rounded-xl arizona-gold-btn text-slate-950 font-extrabold text-xs"
            >
              Know More About Us
            </button>
          </div>

          {/* Right: Our Consultation Process */}
          <div className="lg:col-span-7 arizona-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white text-center sm:text-left">Our Consultation Process</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black text-xs mx-auto flex items-center justify-center shadow">
                  01
                </div>
                <h4 className="text-xs font-bold text-white">Choose Your Service</h4>
                <p className="text-[10px] text-slate-400">Select the consultation you need.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black text-xs mx-auto flex items-center justify-center shadow">
                  02
                </div>
                <h4 className="text-xs font-bold text-white">Book Your Consultation</h4>
                <p className="text-[10px] text-slate-400">Fill the form or connect on WhatsApp.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black text-xs mx-auto flex items-center justify-center shadow">
                  03
                </div>
                <h4 className="text-xs font-bold text-white">One-to-One Guidance</h4>
                <p className="text-[10px] text-slate-400">Get expert guidance from Dr. Preity.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black text-xs mx-auto flex items-center justify-center shadow">
                  04
                </div>
                <h4 className="text-xs font-bold text-white">Receive Personalized Recommendations</h4>
                <p className="text-[10px] text-slate-400">Follow practical steps & transform your life.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. "SHOP SPIRITUAL PRODUCTS" SECTION (EXACT MOCKUP RIGHT TOP MATCH) */}
      <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="100% Genuine & Energetic"
            title="Shop Spiritual Products"
            subtitle="Handcrafted crystal clusters, bracelets, 5 Mukhi Rudraksha, and Shree Yantras."
          />

          {/* Category Tabs (Exact Mockup Match) */}
          <div className="flex flex-wrap gap-2">
            {['All Products', 'Crystals', 'Rudraksha', 'Yantra / Mantra'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat === 'All Products' ? 'All' : cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  (activeCategoryFilter === 'All' && cat === 'All Products') || activeCategoryFilter === cat
                    ? 'arizona-gold-btn text-slate-950 shadow-md'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* 6. "BOOK A CONSULTATION" FORM & "BENEFITS OF CONSULTATIONS" (EXACT MOCKUP BOTTOM RIGHT MATCH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7 arizona-card p-6 sm:p-8 rounded-3xl space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-white">Book a Consultation</h3>
              <p className="text-xs text-slate-400 mt-1">Fill the form below or connect on WhatsApp (+91 8390125338).</p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 rounded-2xl text-center space-y-2">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Booking Request Initiated!</h4>
                <p className="text-xs text-emerald-200">Opening WhatsApp conversation with Dr. Preity (8390125338)...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Select Service</label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Astrology Services">Astrology Services</option>
                      <option value="Numerology Services">Numerology Services</option>
                      <option value="Mobile Number Consultation">Mobile Number Consultation</option>
                      <option value="Business Astronumero Consultation">Business Astronumero Consultation</option>
                      <option value="Vastu Consultation">Vastu Consultation</option>
                      <option value="Logo Designing">Logo Designing</option>
                      <option value="Name Correction">Name Correction</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Preferred Time</label>
                    <input
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 py-3.5 arizona-gold-btn text-slate-950 font-black rounded-xl text-xs"
                  >
                    Request Consultation
                  </button>
                  <a
                    href="https://wa.me/918390125338"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-1/2 py-3.5 arizona-whatsapp-btn text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Benefits Column */}
          <div className="lg:col-span-5 arizona-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white">Benefits of Consultations</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Clarity in Life</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Get clarity in confusion and make better decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Positive Energy</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Remove negativity and attract positive energy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Better Relationships</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Improve relationships and bring harmony.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Success & Prosperity</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Attract success, wealth and abundance.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FULL SERVICES POSTER MODAL */}
      {showFullServicesPoster && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-3xl p-4 border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setShowFullServicesPoster(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white z-10 shadow-lg"
            >
              ✕
            </button>
            <img
              src={servicesPosterImg}
              alt="Dr. Preity Official 10 Services Poster"
              className="w-full h-auto rounded-2xl border border-slate-800"
            />
          </div>
        </div>
      )}

    </div>
  );
};
