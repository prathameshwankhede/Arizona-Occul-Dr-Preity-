import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
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
  openConsultationModal
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
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT US', page: 'consultation' },
    { label: 'CONSULTATIONS', page: 'consultation' },
    { label: 'SHOP', page: 'crystals' },
    { label: 'TESTIMONIALS', page: 'home' },
    { label: 'BLOG', page: 'home' },
    { label: 'CONTACT', page: 'contact' }
  ];

  const handleNavClick = (page: PageRoute) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar (Matching Light Mockup Header) */}
      <div className="bg-[#091830] text-white text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-amber-300 tracking-wider">
            <span>❖ ALIGN YOUR ENERGY • ATTRACT SUCCESS • REMOVE NEGATIVITY</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:8390125338"
              className="text-white font-extrabold hover:underline flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>8390125338</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">WA</span>
              <span className="w-5 h-5 rounded-full bg-pink-600 text-white flex items-center justify-center text-[10px] font-bold">IG</span>
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">FB</span>
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">YT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Pure White Background matching Light Mockup) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo (Yellow Hexagon matching Light Mockup) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
            aria-label="Arizona Occult Home"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md border border-amber-500 group-hover:scale-105 transition-transform">
              <div className="w-9 h-9 border-2 border-slate-950 rounded flex flex-col items-center justify-center bg-amber-400">
                <span className="text-[7px] font-black uppercase tracking-tighter leading-none text-slate-950">ARIZONA</span>
                <span className="text-[6px] font-bold uppercase tracking-tighter leading-none text-slate-900 mt-0.5">OCCULT</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight block leading-none text-[#0b2545]">
                ARIZONA <span className="text-amber-600">OCCULT</span>
              </span>
              <span className="text-[9px] tracking-wider uppercase font-medium block mt-1 text-slate-500">
                Your Destination for Divine Guidance & Positive Transformation
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs font-extrabold tracking-wider transition-colors ${
                  activePage === link.page
                    ? 'text-amber-600 font-black border-b-2 border-amber-600 pb-1'
                    : 'text-[#0b2545] hover:text-amber-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Cart Trigger */}
            <button
              onClick={openCartDrawer}
              className="relative p-2.5 rounded-xl transition-colors bg-slate-100 border border-slate-200 text-[#0b2545] hover:bg-slate-200 shadow-sm"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-[#0b2545]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-mono text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl xl:hidden text-[#0b2545] hover:bg-slate-100"
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
          <div className="bg-white text-slate-900 w-full max-h-[90vh] overflow-y-auto shadow-2xl border-b border-slate-200 p-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <span className="font-black text-[#0b2545] text-lg">Arizona Occult</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link.page)}
                  className="text-left px-4 py-3 rounded-xl font-black text-sm text-[#0b2545] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full py-3 arizona-navy-btn text-white font-bold rounded-xl text-center shadow-md text-xs"
              >
                BOOK CONSULTATION (8390125338)
              </button>

              <a
                href="https://wa.me/918390125338"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-center shadow-md text-xs"
              >
                CHAT ON WHATSAPP
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
