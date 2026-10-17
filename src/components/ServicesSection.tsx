import React, { useState } from 'react';
import { SERVICES, CLINIC_IMAGES } from '../data/clinicData';
import { VeterinaryService } from '../types';
import { Check, Calendar, ArrowRight, Activity, Syringe, Bug, Stethoscope, Utensils, Bandage } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'consultation':
        return <Activity className="w-5 h-5" />;
      case 'vaccinations':
        return <Syringe className="w-5 h-5" />;
      case 'deworming':
        return <Bug className="w-5 h-5" />;
      case 'diagnostics':
        return <Stethoscope className="w-5 h-5" />;
      case 'nutrition':
        return <Utensils className="w-5 h-5" />;
      case 'wound-care':
        return <Bandage className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F8FAF7] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
            Clinical Services & Procedures
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Comprehensive veterinary care, from first vaccinations to acute illness treatment.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every procedure at Saad Veterinary Clinic is carried out using sterilized instruments, proper pharmaceutical storage, and gentle animal restraint.
          </p>
        </div>

        {/* Interactive Deep-Dive Explorer */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Service Menu */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/50">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                Select a Service to Inspect
              </h3>
              <div className="flex flex-col gap-1.5">
                {SERVICES.map((service, index) => {
                  const isSelected = service.id === selectedServiceId;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-[#153D32] text-white shadow-sm'
                          : 'hover:bg-white text-slate-800 hover:text-[#153D32]'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-[#153D32]'
                        }`}
                      >
                        {getServiceIcon(service.id)}
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold truncate">
                            0{index + 1}. {service.title}
                          </span>
                        </div>
                        <p
                          className={`text-xs line-clamp-1 mt-0.5 ${
                            isSelected ? 'text-slate-200' : 'text-slate-500'
                          }`}
                        >
                          {service.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Detailed Clinical Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6BAF8D] uppercase tracking-wider mb-2">
                  <span>Procedure Overview</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-normal">Saad Veterinary Clinic</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#153D32] mb-3">
                  {activeService.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeService.fullDesc}
                </p>

                {/* Inclusions list */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What is covered in this visit
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <div className="w-4 h-4 rounded-full bg-[#E8F4EE] text-[#153D32] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For & Preparation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F8FAF7] border border-slate-200/60 mb-6 text-xs">
                  <div>
                    <span className="font-bold text-[#153D32] block mb-1">Recommended For:</span>
                    <span className="text-slate-600 leading-relaxed">{activeService.recommendedFor}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#153D32] block mb-1">Preparation Note:</span>
                    <span className="text-slate-600 leading-relaxed">{activeService.preparationTip}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Consultation appointments confirmed promptly.
                </span>
                <button
                  onClick={() => onSelectService(activeService.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book {activeService.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Callout Band with Puppy Wellness Photography */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-[#0D261F] text-white">
            <div className="lg:col-span-7 p-6 sm:p-10">
              <span className="text-xs font-semibold text-[#6BAF8D] uppercase tracking-wider block mb-2">
                New Puppy & Kitten Guidance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 [text-wrap:balance]">
                Starting your new pet on the right preventative schedule.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
                Young puppies and kittens in Sargodha require timely primary vaccinations (DHPP / Parvovirus / Rabies) and gentle deworming before exposure to public streets. We provide complete official pet health record cards.
              </p>
              <button
                onClick={() => onSelectService('vaccinations')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0D261F] bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                <span>Schedule Vaccination Course</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#153D32]" />
              </button>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full min-h-[240px]">
              <img
                src={CLINIC_IMAGES.puppyWellness}
                alt="Puppy receiving wellness consultation at Saad Veterinary Clinic"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
