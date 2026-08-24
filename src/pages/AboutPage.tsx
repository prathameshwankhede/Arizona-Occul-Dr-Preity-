import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PlaceholderBadge } from '../components/PlaceholderBadge';
import { doctorProfile } from '../data/doctor';
import { GraduationCap, HeartHandshake, CheckCircle2, Calendar } from 'lucide-react';

interface Props {
  openConsultationModal: () => void;
}

export const AboutPage: React.FC<Props> = ({ openConsultationModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <SectionHeader
        badge="Astrologer & Occult Practitioner Profile"
        title="About Dr. Preity"
        subtitle="Dedicated to authentic Vedic wisdom, Kundli reading, and sacred spiritual remedies in Arizona."
      />

      {/* Main Profile Showcase Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Photo & Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/5] bg-slate-100">
            <img
              src={doctorProfile.photoUrl}
              alt="Dr. Preity Astrologer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-amber-600 text-white font-mono text-xs font-semibold px-3 py-1 rounded-full shadow">
                Occult Specialist
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Practice:</span>
              <span className="font-bold text-slate-800">Arizona Occult</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Specialties:</span>
              <span className="font-bold text-slate-800">Kundli, Numerology & Remedies</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Status:</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Accepting Consultations</span>
              </span>
            </div>
          </div>
        </div>

        {/* Doctor Biography & Credentials */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
              {doctorProfile.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-4">
              Dr. Preity
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {doctorProfile.bio}
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 relative">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Guiding Philosophy & Astrological Mission
                </h3>
                <p className="text-slate-700 text-xs italic leading-relaxed">
                  "{doctorProfile.philosophy}"
                </p>
              </div>
            </div>
          </div>

          {/* Credentials Placeholders Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                <span>Qualifications & Accreditations</span>
              </h3>
              <PlaceholderBadge text="Client Data Placeholder" />
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
                <span className="font-bold text-amber-900 block mb-1">Academic & Astrological Degrees:</span>
                <span className="text-amber-800">{doctorProfile.educationPlaceholder}</span>
              </div>

              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
                <span className="font-bold text-amber-900 block mb-1">Certifications & Honors:</span>
                <span className="text-amber-800">{doctorProfile.qualificationsPlaceholder}</span>
              </div>

              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
                <span className="font-bold text-amber-900 block mb-1">Practice History & Achievements:</span>
                <span className="text-amber-800">{doctorProfile.experiencePlaceholder}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 1-on-1 Session with Dr. Preity</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
