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
  const rupeeOriginal = product.originalPrice ? Math.round(product.originalPrice * 80) : null;

  return (
    <div className="arizona-card rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-950/60 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md border border-amber-500/20"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-mono text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider shadow">
            {product.badge}
          </div>
        )}

        {/* Lab Certification Indicator */}
        {product.isLabCertified && (
          <div className="absolute bottom-3 left-3 bg-slate-950/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-amber-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Certified</span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2"
        >
          <div className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xl font-extrabold">
            <Eye className="w-4 h-4 text-slate-950" />
            <span>View Product</span>
          </div>
        </button>
      </div>

      {/* Details Area */}
      <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-amber-300 mb-1">
            <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400/90">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400 font-bold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & View Product CTA (Matching Mockup Button Style) */}
        <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between gap-2">
          <div>
            <div className="text-base font-black text-amber-300">
              ₹{rupeePrice}
            </div>
            {rupeeOriginal && (
              <span className="text-[10px] text-slate-400 line-through">
                ₹{rupeeOriginal}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onQuickView(product)}
              className="px-3 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs rounded-lg border border-amber-500/40 transition-colors"
            >
              View Product
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="p-2 arizona-gold-btn text-slate-950 rounded-lg shadow"
              title="Add to Cart"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
