import React, { useState } from 'react';
import { X, Calendar, User, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import type { ConsultationBooking } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<ConsultationBooking>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    phone: '',
    email: '',
    consultationType: 'Kundli & Horoscope',
    preferredDate: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const constructWhatsAppUrl = () => {
    const text = `Namaste Dr. Preity, I want to book a ${formData.consultationType} Consultation.
Full Name: ${formData.fullName}
Date of Birth: ${formData.dateOfBirth}
Time of Birth: ${formData.timeOfBirth}
Place of Birth: ${formData.placeOfBirth}
Preferred Date: ${formData.preferredDate}
Phone: ${formData.phone}`;

    return `https://wa.me/918390125338?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-fade-in my-8 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center">
              <Calendar className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Book 1-on-1 Session</h3>
              <p className="text-xs text-amber-400 font-mono mt-0.5">
                Direct Consultation with Dr. Preity (Call/WhatsApp: 8390125338)
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received!</h3>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto">
              Thank you <strong>{formData.fullName}</strong>. Your birth chart details have been logged for Dr. Preity. Click below for instant WhatsApp confirmation on <strong>8390125338</strong>.
            </p>

            <a
              href={constructWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Confirm Instant via WhatsApp (8390125338)</span>
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-500 underline hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Time of Birth *
                </label>
                <input
                  type="text"
                  name="timeOfBirth"
                  required
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  placeholder="e.g. 10:45 AM"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Place of Birth *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    name="placeOfBirth"
                    required
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    placeholder="City, State, Country"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Consultation Type
              </label>
              <select
                name="consultationType"
                value={formData.consultationType}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Kundli & Horoscope">Kundli Reading & Birth Chart Analysis</option>
                <option value="Gemstone & Rudraksha Advice">Gemstone & Rudraksha Prescription</option>
                <option value="Numerology & Name Correction">Numerology & Lucky Name Alignment</option>
                <option value="Vastu Shastra">Vastu Shastra Home/Office Audit</option>
                <option value="Tarot & Life Guidance">Tarot Reading & Energy Healing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Specific Questions / Life Goal
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Mention any specific concerns (Career, Marriage, Wealth, Health)..."
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Logging Details...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Birth Chart for Dr. Preity</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
