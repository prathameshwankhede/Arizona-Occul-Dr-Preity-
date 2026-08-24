import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
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
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'consultation' },
    { label: 'Consultations', page: 'consultation' },
    { label: 'Shop', page: 'crystals' },
    { label: 'Testimonials', page: 'home' },
    { label: 'FAQ', page: 'home' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageRoute) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Arizona Occult Signature Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050b1a]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/30 py-3'
            : 'bg-[#060c1e] border-b border-amber-500/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Gold Hexagon Logo (Matching Mockup Image) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group focus:outline-none text-left"
            aria-label="Arizona Occult Home"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 border border-amber-400 group-hover:scale-105 transition-transform">
              <div className="w-9 h-9 border-2 border-slate-950 rounded flex flex-col items-center justify-center bg-amber-400">
                <span className="text-[7px] font-black uppercase tracking-tighter leading-none text-slate-950">ARIZONA</span>
                <span className="text-[6px] font-bold uppercase tracking-tighter leading-none text-slate-900 mt-0.5">OCCULT</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight block leading-none text-white group-hover:text-amber-400 transition-colors">
                ARIZONA <span className="gold-gradient-text">OCCULT</span>
              </span>
              <span className="text-[9px] tracking-wider uppercase font-medium block mt-1 text-amber-200/80">
                Your Destination for Divine Guidance & Positive Transformation
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Exact Mockup Match) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  activePage === link.page
                    ? 'text-amber-400 font-extrabold border-b-2 border-amber-400 pb-1'
                    : 'text-slate-300 hover:text-amber-300'
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
              className="relative p-2.5 rounded-xl transition-colors bg-slate-900/80 border border-amber-500/30 text-white hover:border-amber-400 shadow-sm"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-mono text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mockup Buttons: Book Consultation & Chat on WhatsApp */}
            <button
              onClick={openConsultationModal}
              className="hidden sm:inline-flex items-center gap-2 arizona-gold-btn px-4 py-2.5 rounded-xl font-extrabold text-xs"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book a Consultation</span>
            </button>

            <a
              href="https://wa.me/918390125338"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 arizona-whatsapp-btn px-3.5 py-2.5 rounded-xl font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl lg:hidden text-amber-400 hover:bg-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#07122b] text-white w-full max-h-[90vh] overflow-y-auto shadow-2xl border-b border-amber-500/30 p-6">
            
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
                <span className="font-extrabold text-amber-400 text-lg">Arizona Occult</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link.page)}
                  className="text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-amber-500/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full py-3 arizona-gold-btn text-slate-950 font-black rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation (8390125338)</span>
              </button>

              <a
                href="https://wa.me/918390125338"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 arizona-whatsapp-btn text-white font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
