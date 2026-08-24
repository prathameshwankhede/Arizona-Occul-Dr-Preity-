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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#e5decf] text-slate-700 md:hidden pb-safe shadow-lg">
      <div className="grid grid-cols-5 items-center h-16 px-1">
        
        {/* Home */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activePage === 'home' ? 'text-[#0f382c] font-black' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
          {activePage === 'home' && <span className="w-1 h-1 rounded-full bg-[#0f382c] -mt-0.5" />}
        </button>

        {/* Shop */}
        <button
          onClick={scrollToCatalog}
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ShoppingBag className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] font-bold">Remedies</span>
        </button>

        {/* Elevated Center Consultation CTA */}
        <button
          onClick={openConsultationModal}
          className="flex flex-col items-center justify-center -mt-6 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-amber-500 opacity-40 blur" />
            <div className="relative w-13 h-13 rounded-full bg-[#0f382c] text-white flex items-center justify-center shadow-xl border-2 border-white group-active:scale-95 transition-transform">
              <Calendar className="w-6 h-6 stroke-[2.4] text-amber-400" />
            </div>
          </div>
          <span className="text-[10px] font-black text-[#0f382c] mt-1">Consult</span>
        </button>

        {/* Zodiac Quiz */}
        <button
          onClick={() => handleNav('remedies-calculator')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activePage === 'remedies-calculator' ? 'text-[#0f382c] font-black' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-5 h-5 text-cyan-600" />
          <span className="text-[10px] font-bold">Zodiac</span>
          {activePage === 'remedies-calculator' && <span className="w-1 h-1 rounded-full bg-cyan-600 -mt-0.5" />}
        </button>

        {/* Shopping Bag */}
        <button
          onClick={openCartDrawer}
          className="flex flex-col items-center justify-center gap-1 py-1 relative text-slate-500 hover:text-slate-800 transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-amber-600 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Bag</span>
        </button>

      </div>
    </div>
  );
};
