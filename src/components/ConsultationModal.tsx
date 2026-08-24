import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MapPin, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import type { ConsultationBooking } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ConsultationBooking>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '10:30 AM (Approx)',
    placeOfBirth: 'Phoenix, Arizona',
    phone: '',
    email: '',
    consultationType: 'Kundli & Horoscope',
    preferredDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required for chart calculation';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred session date';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-fade-in my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 text-white p-6 relative flex items-center justify-between border-b border-amber-900/50">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Arizona Occult • Dr. Preity Consultation</span>
            </span>
            <h2 className="text-2xl font-bold text-white mt-0.5">
              Book Astrological Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Session Request Registered!</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Dr. Preity's astrology team will verify your chart details and contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to finalize your private session.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Astrologer:</span>
                <span className="font-bold text-slate-800">Dr. Preity</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-amber-800">{formData.consultationType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date of Birth:</span>
                <span className="font-bold text-slate-800">{formData.dateOfBirth} ({formData.timeOfBirth})</span>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={`https://wa.me/?text=Hello%20Dr.%20Preity,%20I%20requested%20a%20${encodeURIComponent(formData.consultationType)}%20session%20for%20${encodeURIComponent(formData.fullName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Confirmation via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-slate-500 font-medium hover:underline"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priyanshu Sharma"
                    className={`w-full pl-9 pr-4 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.fullName && <span className="text-[11px] text-rose-600 mt-0.5 block">{errors.fullName}</span>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (480) 555-0199"
                    className={`w-full pl-9 pr-4 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.phone && <span className="text-[11px] text-rose-600 mt-0.5 block">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full pl-9 pr-4 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.email && <span className="text-[11px] text-rose-600 mt-0.5 block">{errors.email}</span>}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Date of Birth (DOB) *
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.dateOfBirth ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.dateOfBirth && <span className="text-[11px] text-rose-600 mt-0.5 block">{errors.dateOfBirth}</span>}
              </div>

              {/* Time of Birth */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Time of Birth (e.g. 08:30 AM)
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.timeOfBirth}
                    onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                    placeholder="08:30 AM or Exact Time"
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Place of Birth */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Place of Birth (City, Country)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.placeOfBirth}
                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    placeholder="e.g. Phoenix, Arizona, USA"
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Consultation Type */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Consultation Type
                </label>
                <select
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white font-medium text-slate-800"
                >
                  <option value="Kundli & Horoscope">Kundli & Horoscope Chart Reading (45 Mins)</option>
                  <option value="Numerology & Name Correction">Vedic Numerology & Business/Name Correction</option>
                  <option value="Vastu Shastra">Vastu Shastra Home/Office Energy Alignment</option>
                  <option value="Gemstone & Rudraksha Advice">Gemstone & Rudraksha Selection Advice</option>
                  <option value="Tarot & Life Guidance">Tarot Reading & Life Coaching</option>
                </select>
              </div>

              {/* Preferred Session Date */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Session Date *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.preferredDate ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.preferredDate && <span className="text-[11px] text-rose-600 mt-0.5 block">{errors.preferredDate}</span>}
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Specific Questions for Dr. Preity (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention specific concerns regarding career, marriage, health, or financial timing..."
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Confidential Session</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Request Consultation</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
