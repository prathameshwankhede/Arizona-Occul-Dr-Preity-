import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Share2 } from 'lucide-react';
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
    <footer className="bg-[#040814] text-slate-300 border-t border-amber-500/20 pt-12 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Logo (Exact Mockup Match) */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center border border-amber-400">
                <span className="text-[8px] uppercase tracking-tighter">OCCULT</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-base block">ARIZONA OCCULT</span>
                <span className="text-[10px] text-amber-400 font-mono">Better Energy • Better Life • Better You</span>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed">
              Your destination for divine guidance, authentic Vedic remedies, 100% lab certified crystals, and positive life transformation.
            </p>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 block">Follow Us:</span>
              <div className="flex items-center gap-2">
                <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors">
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNav('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('consultation')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('consultation')} className="hover:text-white transition-colors">Consultations</button></li>
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Shop</button></li>
              <li><button onClick={() => handleNav('remedies-calculator')} className="hover:text-white transition-colors">Zodiac Calculator</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Our Services</h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Astrology Services</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Numerology Services</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Mobile Number Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Business Astronumero Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Vastu Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Logo Designing & Correction</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Rudraksh Guidance</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Crystal Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Yantra & Mantra Consultation</button></li>
            </ul>
          </div>

          {/* Col 4: Shop */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Shop</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Crystals</button></li>
              <li><button onClick={() => handleNav('rudraksha')} className="hover:text-white transition-colors">Rudraksh</button></li>
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Yantra / Mantra</button></li>
              <li><button onClick={() => handleNav('gemstones')} className="hover:text-white transition-colors">All Products</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Us (Exact Mockup Match) */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Contact Us</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:8390125338" className="hover:text-amber-400 font-mono font-bold">8390125338</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:info@arizonaoccult.com" className="hover:text-amber-400 font-mono text-[11px]">info@arizonaoccult.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>India</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 ARIZONA OCCULT. All Rights Reserved. Designed for Dr. Preity.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-300">Shipping Policy</a>
            <a href="#" className="hover:text-slate-300">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
