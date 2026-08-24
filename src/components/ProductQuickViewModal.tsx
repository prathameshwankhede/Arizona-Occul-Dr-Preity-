import React, { useState } from 'react';
import type { ProductItem } from '../types';
import { X, Star, CheckCircle2, ShoppingBag, ShieldCheck, Image as ImageIcon } from 'lucide-react';

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

  // Gallery view state: 'photo' or 'poster'
  const [activeImageTab, setActiveImageTab] = useState<'photo' | 'poster'>('photo');

  const activeImageUrl =
    activeImageTab === 'poster' && product.posterImage
      ? product.posterImage
      : product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-amber-500/30 animate-fade-in my-6 p-6 md:p-8 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Flipkart Style Image Gallery View */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-950 border border-slate-800 shadow-xl">
              <img
                src={activeImageUrl}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-mono text-[10px] font-extrabold px-3 py-1 rounded-full shadow">
                  {product.badge}
                </span>
              )}

              {product.isLabCertified && (
                <div className="absolute bottom-3 left-3 bg-slate-900/90 text-cyan-300 text-[10px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-cyan-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>100% Lab Certified</span>
                </div>
              )}
            </div>

            {/* Flipkart Gallery Switcher Thumbnails */}
            {product.posterImage && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImageTab('photo')}
                  className={`flex-1 p-2 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                    activeImageTab === 'photo'
                      ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <img src={product.image} alt="Product Shot" className="w-8 h-8 rounded-lg object-cover" />
                  <span>1. Product View</span>
                </button>

                <button
                  onClick={() => setActiveImageTab('poster')}
                  className={`flex-1 p-2 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                    activeImageTab === 'poster'
                      ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <img src={product.posterImage} alt="Official Poster" className="w-8 h-8 rounded-lg object-cover" />
                  <span className="flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>2. Poster Infographic</span>
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Details & Flipkart Specs */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block">
                {product.category} Remedy • Arizona Occult
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex items-center text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 text-white">{product.rating}</span>
                </div>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{product.reviewsCount} verified reviews</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 pt-2 border-t border-slate-800">
              <span className="text-3xl font-extrabold text-amber-400">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
              )}
              <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Free Pran Pratishtha Blessing
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Option selector */}
            {product.options && product.options.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Select Bead Size / Customization:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                        selectedOption === opt
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300 font-bold'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Crystal Benefits breakdown */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                Crystal Healing Benefits:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <button
                onClick={() => {
                  onAddToCart(product, selectedOption);
                  onClose();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag (${product.price})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
