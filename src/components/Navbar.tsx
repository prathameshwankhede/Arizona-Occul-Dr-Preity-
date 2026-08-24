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
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>USE CODE: COSMIC10 FOR EXTRA 10% OFF</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% Lab Certified & Abhimantrit Remedies</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-300 font-mono hidden md:inline">
              Worldwide Insured Shipping
            </span>
            <a
              href="tel:8390125338"
              className="text-amber-400 font-bold hover:underline flex items-center gap-1 font-mono"
            >
              <Phone className="w-3 h-3" />
              <span>8390125338</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-lg border-b border-amber-900/20 py-3'
            : 'bg-slate-900 text-white border-b border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Arizona Occult Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-left">
              <span className={`text-xl font-extrabold tracking-tight block leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>
                Arizona <span className="text-amber-500">Occult</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold block mt-0.5 text-slate-400">
                Dr. Preity • Awaken • Align • Attract
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
              placeholder="Search Abundance, Sundari, Sulemani..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
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
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-500 font-bold'
                      : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
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
              className="relative p-2.5 rounded-xl transition-colors bg-slate-800 text-white hover:bg-slate-700"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-amber-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-mono text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Consultation CTA */}
            <button
              onClick={openConsultationModal}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-amber-600/20 hover:shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Consult Dr. Preity</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl xl:hidden text-white hover:bg-slate-800"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 text-white w-full max-h-[90vh] overflow-y-auto shadow-2xl border-b border-slate-800 p-6 animate-fade-in">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="font-bold text-white text-lg">Arizona Occult</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    activePage === link.page
                      ? 'bg-amber-500/20 text-amber-400 font-bold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-3">
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
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
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
