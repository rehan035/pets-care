import React, { useState } from 'react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { MessageSquare, Calendar, MapPin, Star, ShieldCheck, Clock, Navigation } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [heroPhoto, setHeroPhoto] = useState<'pets' | 'exam'>('pets');
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#F8FAF7] via-white to-[#F8FAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Unboxed natural kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#153D32] tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6BAF8D]" aria-hidden="true" />
              <span className="uppercase tracking-wider">Your Neighborhood Vet</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#6BAF8D] font-semibold">Care You Can Count On</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-normal">Opposite ILM College, Sargodha</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#153D32] tracking-tight leading-[1.18] mb-5 [text-wrap:balance]">
              Compassionate, experienced veterinary care for every stage of your pet’s life.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
              Led by Dr. Saad Rehman on Main General Bus Stand Road, we provide gentle wellness exams, core puppy & kitten vaccinations, accurate diagnostics, deworming, and personalized treatment so your companions thrive in every season.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Clinic Consultation</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum Dr. Saad, I would like to consult with you about my pet.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-[#0D261F] bg-[#E8F4EE] hover:bg-[#d6ecdf] border border-[#6BAF8D]/30 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp (+92 300 6009997)</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                title="Open location in Google Maps"
              >
                <Navigation className="w-4 h-4 text-slate-400" />
                <span>Directions</span>
              </a>
            </div>

            {/* Trust Micro-Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-5 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>4.9 / 5.0 Rating on Google Maps</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6BAF8D]" />
                <span>Low-Stress Animal Handling</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier with Beautiful Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
              <img
                src={heroPhoto === 'pets' ? CLINIC_IMAGES.heroBeautifulPets : CLINIC_IMAGES.heroVet}
                alt={
                  heroPhoto === 'pets'
                    ? 'Healthy golden retriever dog and domestic cat resting peacefully in the sunny clinic'
                    : 'Dr. Saad Rehman examining a golden retriever in the clinic consultation room'
                }
                className="w-full h-[380px] sm:h-[450px] lg:h-[490px] object-cover transition-all duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

              {/* Photo Selector Switcher */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                <button
                  type="button"
                  onClick={() => setHeroPhoto('pets')}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    heroPhoto === 'pets'
                      ? 'bg-white text-[#153D32] shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Healthy Companions
                </button>
                <button
                  type="button"
                  onClick={() => setHeroPhoto('exam')}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    heroPhoto === 'exam'
                      ? 'bg-white text-[#153D32] shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Clinical Exam
                </button>
              </div>

              {/* Photo Caption & Trust Indicator */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold tracking-tight">
                    {heroPhoto === 'pets' ? 'Gentle Healing Environment' : 'Dr. Saad Rehman'}
                  </p>
                  <p className="text-xs text-slate-200">
                    {heroPhoto === 'pets'
                      ? 'Saad Veterinary Clinic · New Satellite Town, Sargodha'
                      : 'Clinical Examination & Diagnostic Consultations'}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-xs text-[11px] font-semibold border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6BAF8D]" />
                  <span>Sargodha</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Clinic Facts Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 text-[#153D32]">
              <MapPin className="w-4 h-4 text-[#153D32]" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153D32] mb-1">Central Sargodha</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Opposite ILM College on Main General Bus Stand Road with convenient roadside access.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 text-[#153D32]">
              <Clock className="w-4 h-4 text-[#153D32]" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153D32] mb-1">Extended Hours</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Open Monday to Saturday, 9:00 AM to 9:00 PM, for flexible daytime & evening visits.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 text-[#153D32]">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153D32] mb-1">Direct WhatsApp</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Message +92 300 6009997 directly for symptoms, recovery updates, and pre-visit triage.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 text-[#153D32]">
              <ShieldCheck className="w-4 h-4 text-[#153D32]" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153D32] mb-1">Ethical Medicine</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Clear diagnostic explanations with transparent pricing and zero forced redundant procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
