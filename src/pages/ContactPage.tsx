import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PlaceholderBadge } from '../components/PlaceholderBadge';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Calendar } from 'lucide-react';

interface Props {
  openConsultationModal: () => void;
}

export const ContactPage: React.FC<Props> = ({ openConsultationModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Astrology Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="Connect with Dr. Preity"
        title="Contact & Arizona Practice Location"
        subtitle="We welcome your inquiries regarding Kundli sessions, gemstone authentication, and spiritual remedies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Arizona Occult Details
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Practice Address:</span>
                  <span className="font-mono text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded block mt-1">
                    [Add Arizona Practice Address]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Telephone / WhatsApp:</span>
                  <span className="font-mono text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    [Add Phone Number]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Email Address:</span>
                  <span className="font-mono text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    [Add Email Address]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Consultation Hours</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Monday – Saturday</span>
                <span className="font-bold text-slate-800">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-600">Sunday</span>
                <span className="text-amber-600 font-semibold">By Prior Appointment Only</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openConsultationModal}
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Session</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm text-center min-h-[240px] flex flex-col justify-center items-center">
            <MapPin className="w-12 h-12 text-amber-600 mb-2" />
            <h4 className="font-bold text-slate-800 text-sm">Interactive Practice Map Placeholder</h4>
            <p className="text-xs text-slate-500 max-w-md mt-1 mb-3">
              Insert your practice's Google Maps iframe embed code here when launching.
            </p>
            <PlaceholderBadge text="[Add Google Maps Embed Link]" />
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Direct Message to Dr. Preity</h3>
            <p className="text-xs text-slate-500 mb-6">
              Have a question about remedies, lab certificates, or session timing? Fill out the form below.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-lg">Message Received</h4>
                <p className="text-xs text-slate-600">
                  Thank you for writing to Arizona Occult. Dr. Preity's team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-amber-700 font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                  >
                    <option value="Astrology Inquiry">Astrology & Kundli Consultation</option>
                    <option value="Gemstone Purchase">Gemstone & Rudraksha Purchase</option>
                    <option value="Vastu Remediation">Vastu Shastra Consultation</option>
                    <option value="Order Tracking">Order & Lab Certificate Status</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
