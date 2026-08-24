import React from 'react';
import { Home, ShoppingBag, Sparkles, Calendar } from 'lucide-react';
import type { PageRoute } from '../types';

interface Props {
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
  cartCount: number;
  openCartDrawer: () => void;
  openConsultationModal: () => void;
}

export const MobileBottomNav: React.FC<Props> = ({
  activePage,
  setActivePage,
  cartCount,
  openCartDrawer,
  openConsultationModal
}) => {
  const handleNav = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('catalog-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/30 text-slate-300 md:hidden pb-safe">
      <div className="grid grid-cols-5 items-center h-16 px-1">
        
        {/* Home */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activePage === 'home' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
          {activePage === 'home' && <span className="w-1 h-1 rounded-full bg-amber-400 -mt-0.5" />}
        </button>

        {/* Shop */}
        <button
          onClick={scrollToCatalog}
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ShoppingBag className="w-5 h-5 text-amber-500" />
          <span className="text-[10px] font-semibold">Remedies</span>
        </button>

        {/* Elevated Center Consultation CTA */}
        <button
          onClick={openConsultationModal}
          className="flex flex-col items-center justify-center -mt-6 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-amber-500 opacity-60 blur animate-pulse" />
            <div className="relative w-13 h-13 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-2xl border-2 border-slate-950 group-active:scale-95 transition-transform">
              <Calendar className="w-6 h-6 stroke-[2.4]" />
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-amber-400 mt-1">Consult</span>
        </button>

        {/* Zodiac Quiz */}
        <button
          onClick={() => handleNav('remedies-calculator')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activePage === 'remedies-calculator' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-[10px] font-semibold">Zodiac</span>
          {activePage === 'remedies-calculator' && <span className="w-1 h-1 rounded-full bg-cyan-400 -mt-0.5" />}
        </button>

        {/* Shopping Bag */}
        <button
          onClick={openCartDrawer}
          className="flex flex-col items-center justify-center gap-1 py-1 relative text-slate-400 hover:text-slate-200 transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-amber-500 text-slate-950 text-[9px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold">Bag</span>
        </button>

      </div>
    </div>
  );
};
