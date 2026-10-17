import React from 'react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { Heart, ShieldCheck, MessageCircle, Stethoscope, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image & Practice Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
              <img
                src={CLINIC_IMAGES.catCheckup}
                alt="Gentle veterinary physical checkup of a domestic cat at Saad Veterinary Clinic"
                className="w-full h-[380px] sm:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#153D32]">Dr. Saad Rehman</h4>
                  <p className="text-xs text-slate-500">Lead Veterinarian & Clinic Director</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#153D32] bg-[#E8F4EE] px-2.5 py-1 rounded-md">
                    Sargodha, PK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Text */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
              Practice Philosophy & Care
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight mb-5 leading-snug [text-wrap:balance]">
              Built on honest diagnoses, gentle handling, and trusted relationships.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Conveniently located on Main General Bus Stand Road in New Satellite Town, Sargodha, <strong>Saad Veterinary Clinic</strong> was established with a clear mandate: treating every companion animal with the dignity, patience, and medical rigor they deserve.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              We know bringing a nervous cat in a carrier or a sick puppy into a clinic can be stressful for pet parents. We take the time to let animals acclimate to the examination table, explain clinical findings in plain Urdu or English, and formulate sensible, cost-effective treatment protocols.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153D32]">Low-Stress Handling</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Calm, reassuring touch that reduces anxiety during vital checks and injections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153D32]">Transparent Consultations</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Clear explanations of needed medicines, dosages, and expected recovery timelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153D32]">Preventive Wellness</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Strict vaccination schedules, parasite control, and nutrition calibrated for Sargodha.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153D32]">Direct WhatsApp Follow-up</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Quick messaging to report post-treatment progress or ask questions without red tape.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#153D32] hover:text-[#1D5445] underline underline-offset-4 decoration-[#6BAF8D] hover:decoration-[#153D32] transition-colors"
              >
                <span>Schedule a visit with Dr. Saad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
