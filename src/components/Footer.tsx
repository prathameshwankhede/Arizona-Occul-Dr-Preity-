import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
    <footer className="bg-[#06122d] text-slate-300 border-t border-amber-500/20 pt-12 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Logo (Exact Mockup Match) */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center border border-amber-500">
                <span className="text-[8px] uppercase tracking-tighter">OCCULT</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-base block">ARIZONA OCCULT</span>
                <span className="text-[10px] text-amber-300 font-mono">Better Energy • Better Life • Better You</span>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed">
              Your destination for divine guidance, authentic Vedic remedies, 100% lab certified crystals, and positive life transformation.
            </p>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 block">Follow Us:</span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">WA</span>
                <span className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-[10px] font-bold">IG</span>
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">FB</span>
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">YT</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">QUICK LINKS</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNav('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('consultation')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('consultation')} className="hover:text-white transition-colors">Consultations</button></li>
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Shop</button></li>
              <li><button onClick={() => handleNav('remedies-calculator')} className="hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">OUR SERVICES</h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Astrology Services</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Numerology Services</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Mobile Number Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Vastu Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Name Designing & Correction</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Crystal Consultation</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Yantra & Mantra Consultation</button></li>
            </ul>
          </div>

          {/* Col 4: Shop */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">SHOP</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Crystals</button></li>
              <li><button onClick={() => handleNav('rudraksha')} className="hover:text-white transition-colors">Rudraksh</button></li>
              <li><button onClick={() => handleNav('crystals')} className="hover:text-white transition-colors">Yantra / Mantra</button></li>
              <li><button onClick={() => handleNav('gemstones')} className="hover:text-white transition-colors">All Products</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Us (Exact Mockup Match) */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">CONTACT US</h4>
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

        {/* Bottom Bar with Payment Badges (Matching Mockup Footer) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 Arizona Occult. All Rights Reserved.</p>

          <div className="flex items-center gap-4 text-[10px] font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Shipping Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300">
            <span>We Accept:</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 font-bold text-amber-400">Razorpay</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 font-bold text-blue-400">VISA</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 font-bold text-orange-400">Mastercard</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 font-bold text-emerald-400">UPI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
