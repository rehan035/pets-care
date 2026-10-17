import React, { useState } from 'react';
import { CLINIC_INFO, CLINIC_IMAGES, CLINIC_TOUR_AREAS } from '../data/clinicData';
import { ShieldCheck, Sparkles, ThermometerSnowflake, Scissors, Stethoscope, Calendar } from 'lucide-react';

interface ClinicTourProps {
  onOpenBooking: () => void;
}

export const ClinicTour: React.FC<ClinicTourProps> = ({ onOpenBooking }) => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const getAreaIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-4 h-4 text-[#153D32]" />;
      case 1:
        return <ThermometerSnowflake className="w-4 h-4 text-[#153D32]" />;
      case 2:
        return <Scissors className="w-4 h-4 text-[#153D32]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#153D32]" />;
    }
  };

  return (
    <section id="tour" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
              Virtual Clinic Tour
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-3 [text-wrap:balance]">
              A spotless, hygienic clinical facility built for patient safety.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Take a look inside our practice on Main General Bus Stand Road, Sargodha. We maintain hospital-grade sanitation protocols, disinfected examination bays, and cold-chain vaccine refrigeration.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#153D32] bg-[#E8F4EE] px-3.5 py-2 rounded-xl shrink-0">
            <Sparkles className="w-4 h-4 text-[#6BAF8D]" />
            <span>Hospital-Grade Disinfection Standards</span>
          </div>
        </div>

        {/* Tour Showcase Card */}
        <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Facility Photo */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-slate-100">
              <img
                src={CLINIC_IMAGES.clinicTour}
                alt="Saad Veterinary Clinic clean modern examination room and pharmacy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6BAF8D] block mb-0.5">
                  Examination & Consultation Suite
                </span>
                <p className="text-sm font-semibold">
                  Saad Veterinary Clinic · Opposite ILM College, New Satellite Town, Sargodha
                </p>
              </div>
            </div>

            {/* Area Details & Interactive Switcher */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-50/50 divide-y divide-slate-200/80">
              <div className="space-y-4 pb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Featured Facility Zones
                </span>

                <div className="space-y-2">
                  {CLINIC_TOUR_AREAS.map((area, i) => {
                    const isActive = i === activeAreaIndex;
                    return (
                      <button
                        key={area.title}
                        type="button"
                        onClick={() => setActiveAreaIndex(i)}
                        className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                          isActive
                            ? 'bg-white border-[#6BAF8D] shadow-sm ring-1 ring-[#6BAF8D]/30'
                            : 'bg-transparent border-transparent hover:bg-white text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isActive ? 'bg-[#E8F4EE]' : 'bg-slate-200/60'
                            }`}
                          >
                            {getAreaIcon(i)}
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-[#153D32] leading-tight">
                              {area.title}
                            </h3>
                            {isActive && (
                              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                {area.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-6 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Walk-ins & appointments welcome.
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Clinic Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
