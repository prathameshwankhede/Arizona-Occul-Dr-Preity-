import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Calendar, ShieldCheck, Sun, Search, Phone } from 'lucide-react';
import type { PageRoute } from '../types';

interface Props {
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
  cartCount: number;
  openCartDrawer: () => void;
  openConsultationModal: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<Props> = ({
  activePage,
  setActivePage,
  cartCount,
  openCartDrawer,
  openConsultationModal,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Consult Dr. Preity', page: 'consultation' },
    { label: 'Rudraksha', page: 'rudraksha' },
    { label: 'Gemstones', page: 'gemstones' },
    { label: 'Crystals', page: 'crystals' },
    { label: 'Zodiac Calculator', page: 'remedies-calculator' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageRoute) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* GemsMantra Official Top Bar */}
      <div className="gems-topbar text-xs py-2 px-4 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>GEMSMANTRA SPECIAL: USE CODE COSMIC10 FOR 10% OFF</span>
            </span>
            <span className="text-amber-300/40 hidden sm:inline">|</span>
            <span className="text-amber-100 hidden sm:inline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
              <span>100% X-Ray Lab Certified Gemstones & Rudraksha</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-amber-100 font-mono hidden md:inline">
              Worldwide Insured Shipping
            </span>
            <a
              href="tel:8390125338"
              className="text-white font-extrabold hover:underline flex items-center gap-1 font-mono bg-amber-900/40 px-2.5 py-0.5 rounded-full border border-amber-400/40"
            >
              <Phone className="w-3 h-3 text-yellow-300" />
              <span>8390125338</span>
            </a>
          </div>
        </div>
      </div>

      {/* GemsMantra Pure White Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-200 py-3'
            : 'bg-white border-b border-amber-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* GemsMantra Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Arizona Occult Home"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-left">
              <span className="text-xl font-black tracking-tight block leading-none text-slate-900">
                GEMSMANTRA <span className="text-amber-600">OCCULT</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold block mt-1 text-slate-500">
                Dr. Preity • Authentic Vedic Remedies
              </span>
            </div>
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-grow max-w-xs relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Abundance, Pukhraj, Rudraksha..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50/50 border-amber-200 text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-amber-600 text-white font-extrabold shadow-sm'
                      : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Cart Trigger */}
            <button
              onClick={openCartDrawer}
              className="relative p-2.5 rounded-xl transition-colors bg-white border border-amber-200 text-slate-800 hover:bg-amber-50 shadow-sm"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-mono text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Consultation CTA */}
            <button
              onClick={openConsultationModal}
              className="hidden sm:inline-flex items-center gap-2 gems-gold-btn px-4 py-2.5 rounded-xl font-extrabold text-xs shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Consult Dr. Preity</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl xl:hidden text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white text-slate-900 w-full max-h-[90vh] overflow-y-auto shadow-2xl border-b border-amber-200 p-6 animate-fade-in">
            
            <div className="flex items-center justify-between border-b border-amber-100 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-slate-900 text-lg">GemsMantra Occult</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                    activePage === link.page
                      ? 'bg-amber-600 text-white font-bold'
                      : 'text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-amber-100 flex flex-col gap-3">
              <a
                href="https://wa.me/918390125338"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: 8390125338</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full py-3 gems-gold-btn text-white font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session with Dr. Preity</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
