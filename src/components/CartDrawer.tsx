import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { CartItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - discount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'COSMIC10') {
      const discAmount = Math.round(subtotal * 0.1);
      setDiscount(discAmount);
      setPromoSuccess('Promo COSMIC10 Applied: 10% OFF!');
    } else {
      setPromoSuccess('Invalid Promo Code. Try "COSMIC10"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-fade-in relative">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Your Spiritual Bag</h3>
              <span className="text-xs text-amber-400 font-mono">
                {cartItems.reduce((a, b) => a + b.quantity, 0)} Abhimantrit Items
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderComplete ? (
          <div className="p-8 text-center space-y-6 flex-grow flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Blessings & Order Confirmed!</h3>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              Thank you for ordering with <strong>Arizona Occult</strong>. Dr. Preity is preparing your items for sacred Pran Pratishtha & dispatch.
            </p>
            <button
              onClick={() => {
                setOrderComplete(false);
                onClose();
              }}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs shadow-md"
            >
              Continue Exploring
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-grow p-8 text-center flex flex-col justify-center items-center space-y-4">
            <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto" />
            <h4 className="text-lg font-bold text-slate-800">Your Shopping Bag is Empty</h4>
            <p className="text-slate-500 text-xs max-w-xs">
              Explore authentic 100% Lab Certified Rudrakshas, Navratna Gemstones, and Healing Crystals.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Shop Authentic Remedies
            </button>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-5 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex gap-4 items-center justify-between"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200"
                />

                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                    {item.product.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-xs font-bold text-slate-900 mt-1">
                    ${item.product.price}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-slate-800 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                  aria-label="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && !orderComplete && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
            
            {/* Promo Code Box */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (Try: COSMIC10)"
                className="flex-grow px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl"
              >
                Apply
              </button>
            </form>
            {promoSuccess && (
              <span className={`text-[11px] font-bold block ${promoSuccess.includes('Applied') ? 'text-emerald-600' : 'text-rose-600'}`}>
                {promoSuccess}
              </span>
            )}

            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-slate-800">${subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount (10%):</span>
                  <span>-${discount}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-slate-500">
                <span>Pran Pratishtha & Lab Cert:</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Amount:</span>
                <span className="text-amber-700 text-base">${finalTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing Sacred Order...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Proceed to Secure Checkout</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
