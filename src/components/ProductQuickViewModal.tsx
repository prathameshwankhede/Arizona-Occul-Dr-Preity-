import React, { useState } from 'react';
import type { ProductItem } from '../types';
import { X, Star, CheckCircle2, ShoppingBag } from 'lucide-react';

interface Props {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, selectedOption?: string) => void;
}

export const ProductQuickViewModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const [selectedOption, setSelectedOption] = useState<string>(
    product.options ? product.options[0] : ''
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-fade-in my-8 p-6 md:p-8 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 border border-slate-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-amber-600 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                {product.category} Remedy
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex items-center text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 text-slate-800">{product.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{product.reviewsCount} verified reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
              <span className="text-2xl font-extrabold text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
              )}
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Free Abhimantrit Blessing
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Option selector */}
            {product.options && product.options.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Select Customization / Variant:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                        selectedOption === opt
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
                Spiritual Benefits:
              </span>
              <ul className="space-y-1 text-xs text-slate-600">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => {
                  onAddToCart(product, selectedOption);
                  onClose();
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-extrabold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag (${product.price})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
