import React from 'react';
import type { ProductItem } from '../types';
import { Star, ShieldCheck, Eye, ShoppingBag } from 'lucide-react';

interface Props {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onQuickView, onAddToCart }) => {
  // Convert price display to ₹ for India/Client exact match
  const rupeePrice = Math.round(product.price * 80);

  return (
    <div className="arizona-light-card bg-[#fdfbf7] rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white p-3 border-b border-[#e8e2d5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-mono text-[9px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider shadow">
            {product.badge}
          </div>
        )}

        {/* Lab Certification Indicator */}
        {product.isLabCertified && (
          <div className="absolute bottom-3 left-3 bg-white/90 text-amber-700 text-[9px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>100% Certified</span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2"
        >
          <div className="bg-white text-[#0b2545] px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xl font-black border border-amber-300">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>View Poster / Details</span>
          </div>
        </button>
      </div>

      {/* Details Area (Matching Light Mockup Product Card) */}
      <div className="p-4 flex-grow flex flex-col justify-between space-y-3 text-center">
        <div>
          <h3 className="text-sm font-black text-[#132a4a] group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-xs my-1">
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          <div className="text-base font-black text-slate-900 mt-1">
            ₹{rupeePrice}
          </div>
        </div>

        {/* Add to Cart Button (Matching Light Mockup Button) */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-2.5 arizona-gold-btn text-slate-950 font-black text-xs rounded-xl shadow flex items-center justify-center gap-1.5 uppercase"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
          <span>ADD TO CART</span>
        </button>

      </div>

    </div>
  );
};
