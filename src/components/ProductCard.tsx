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
    <div className="gems-card rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-amber-50/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-mono text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
            {product.badge}
          </div>
        )}

        {/* Lab Certification Indicator */}
        {product.isLabCertified && (
          <div className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Lab Certified</span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2"
        >
          <div className="bg-white text-amber-700 px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xl font-extrabold border border-amber-200">
            <Eye className="w-4 h-4 text-amber-600" />
            <span>Quick View / Poster</span>
          </div>
        </button>
      </div>

      {/* Details Area */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-bold text-amber-600 uppercase tracking-wider">
              {product.category} Remedy
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-lg font-black text-slate-900">
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
            className="px-4 py-2.5 gems-gold-btn text-white font-extrabold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>

      </div>

    </div>
  );
};
