import React, { useState } from 'react';
import { SARGODHA_CLIMATE_TIPS, CLINIC_INFO } from '../data/clinicData';
import { Sun, CloudRain, Wind, AlertTriangle, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export const SargodhaPetGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'climate' | 'milestones' | 'emergency'>('climate');

  return (
    <section id="pet-guide" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
            Sargodha Pet Parent Health Manual
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Practical healthcare adapted to Sargodha’s climate and seasons.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From intense Punjab summer heatwaves to monsoon humidity and winter smog, local weather directly influences your pet’s hydration, skin, and immune health.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl mb-10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('climate')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'climate'
                ? 'bg-white text-[#153D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sargodha Seasonal Care
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'milestones'
                ? 'bg-white text-[#153D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vaccination & Worming Calendar
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'emergency'
                ? 'bg-white text-[#153D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Urgent Symptoms & Triage
          </button>
        </div>

        {/* Tab 1: Seasonal / Climate Advice */}
        {activeTab === 'climate' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SARGODHA_CLIMATE_TIPS.map((tip) => {
              return (
                <div
                  key={tip.id}
                  className="p-6 rounded-2xl bg-[#F8FAF7] border border-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#153D32] bg-[#E8F4EE] px-2.5 py-1 rounded-md">
                        {tip.season}
                      </span>
                      {tip.id.includes('summer') ? (
                        <Sun className="w-5 h-5 text-amber-500" />
                      ) : tip.id.includes('monsoon') ? (
                        <CloudRain className="w-5 h-5 text-sky-500" />
                      ) : (
                        <Wind className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#153D32] mb-2">{tip.title}</h3>
                    <p className="text-xs font-semibold text-slate-700 mb-3">{tip.shortAdvice}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{tip.detailedAction}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Vaccination Calendar */}
        {activeTab === 'milestones' && (
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAF7] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#153D32] mb-2">
              Primary Canine & Feline Immunization Timeline
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Official schedule recommended at Saad Veterinary Clinic for puppies and kittens in Sargodha.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200/60">
                <span className="text-xs font-extrabold text-[#6BAF8D] block mb-1">6 – 8 WEEKS</span>
                <h4 className="text-sm font-bold text-[#153D32] mb-1">First Deworming & Exam</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Weight check, broad-spectrum oral deworming, and primary health screening for maternal antibody transition.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/60">
                <span className="text-xs font-extrabold text-[#6BAF8D] block mb-1">8 – 10 WEEKS</span>
                <h4 className="text-sm font-bold text-[#153D32] mb-1">Core DHPP / Panleukopenia</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  First protective dose against Parvovirus, Distemper, Hepatitis, and Parainfluenza in dogs; FPV in cats.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/60">
                <span className="text-xs font-extrabold text-[#6BAF8D] block mb-1">12 – 14 WEEKS</span>
                <h4 className="text-sm font-bold text-[#153D32] mb-1">Booster + Rabies</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secondary booster to cement long-term immunity and mandatory Rabies vaccine administration.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/60">
                <span className="text-xs font-extrabold text-[#6BAF8D] block mb-1">ANNUALLY</span>
                <h4 className="text-sm font-bold text-[#153D32] mb-1">Annual Booster & Dental</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Yearly health audit, booster shots, weight assessment, and tartar/gum checkup to ensure lasting vitality.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Emergency Warning Signs */}
        {activeTab === 'emergency' && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#153D32]">
                  When to Seek Immediate Veterinary Attention
                </h3>
                <p className="text-xs text-slate-600">
                  Do not wait if your pet exhibits any of the critical red flags below.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Persistent Vomiting or Diarrhea</span>
                <span className="text-slate-600">
                  More than 2 episodes within 12 hours, or bloody stool accompanied by acute lethargy.
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Heatstroke & Panting</span>
                <span className="text-slate-600">
                  Glazed eyes, excessive drooling, bright red tongue, or collapse following warm weather exposure.
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Total Food Refusal &gt; 24h</span>
                <span className="text-slate-600">
                  Especially in kittens or Persian cats, where anorexia risks rapid hepatic lipidosis.
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Labored or Open-Mouth Breathing</span>
                <span className="text-slate-600">
                  Cats panting with mouth open or dogs struggling to expand chest are in respiratory distress.
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Urinary Straining</span>
                <span className="text-slate-600">
                  Male cats crying in litter box or inability to pass urine constitutes a life-threatening blockage.
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-amber-200/70">
                <span className="font-bold text-[#153D32] block mb-1">Trauma / Deep Lacerations</span>
                <span className="text-slate-600">
                  Accidental vehicle strikes, high falls, or deep dog bite wounds requiring sterile debridement.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-amber-200/60">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'URGENT: Assalam-o-Alaikum Dr. Saad, my pet is experiencing severe symptoms and needs advice.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Urgent Query (+92 300 6009997)</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#153D32] bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#153D32]" />
                <span>Call Clinic Reception Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
