import React from 'react';
import type { ProductItem } from '../types';
import { Star, ShieldCheck, Eye, ShoppingBag } from 'lucide-react';

interface Props {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onQuickView, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-mono text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
            {product.badge}
          </div>
        )}

        {/* Lab Certification Indicator */}
        {product.isLabCertified && (
          <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-sm text-cyan-300 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-cyan-500/30">
            <ShieldCheck className="w-3 h-3 text-cyan-400" />
            <span>Lab Certified</span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2"
        >
          <div className="bg-white/90 text-slate-900 px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
            <Eye className="w-4 h-4 text-amber-600" />
            <span>Quick View</span>
          </div>
        </button>
      </div>

      {/* Details Area */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-bold text-amber-700 uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-lg font-extrabold text-slate-900">
              ${product.price}
            </div>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>

    </div>
  );
};
