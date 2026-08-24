import React from 'react';
import { Sun, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import type { PageRoute } from '../types';

interface Props {
  setActivePage: (page: PageRoute) => void;
  openConsultationModal: () => void;
}

export const Footer: React.FC<Props> = ({ setActivePage, openConsultationModal }) => {
  const handleNav = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      
      {/* Top 4 Pillars Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          
          <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">100% Authentic Crystals</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Energy-activated & lab-certified gemstones.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <Sparkles className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Vedic Abhimantrit Rituals</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Consecrated for your specific birth chart.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <Award className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Dr. Preity Guidance</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Awaken • Align • Attract.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <CheckCircle2 className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Worldwide Shipping</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Insured delivery with lab certificates.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Doctor Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-md">
                <Sun className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Arizona <span className="text-amber-500">Occult</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase block font-semibold">
                  Dr. Preity • Awaken • Align • Attract
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your premier center for authentic Rudrakshas, 100% Lab Certified Navratna Gemstones, Healing Crystal Bracelets, and direct 1-on-1 Horoscope Consultations with Dr. Preity.
            </p>

            <div className="pt-2">
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs shadow transition-colors"
              >
                <span>Book Session with Dr. Preity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('consultation')} className="hover:text-amber-400 transition-colors">
                  Consult Dr. Preity
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rudraksha')} className="hover:text-amber-400 transition-colors">
                  Natural Rudraksha
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gemstones')} className="hover:text-amber-400 transition-colors">
                  Navratna Gemstones
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('remedies-calculator')} className="hover:text-amber-400 transition-colors">
                  Zodiac Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Practice
                </button>
              </li>
            </ul>
          </div>

          {/* Remedies Collections */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Sacred Remedies
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Abundance Bracelet (Wealth & Luck)</li>
              <li>Sundari Beauty Combo Bracelet</li>
              <li>Sulemani Hakik Protection Bracelet</li>
              <li>Focus & Clarity Bracelet</li>
              <li>1–14 Mukhi Siddha Mala</li>
              <li>Ceylon Yellow Sapphire (Pukhraj)</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:8390125338" className="text-white font-mono font-bold hover:text-amber-400">
                  8390125338
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-slate-300">arizonaoccult@gmail.com</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Arizona Occult Office</span>
                  <span className="text-[11px] text-slate-400">Consultation & Worldwide Remedies</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Arizona Occult (Dr. Preity). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-amber-400 cursor-pointer">Authenticity Guarantee</span>
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-400 cursor-pointer">Shipping & Returns</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
