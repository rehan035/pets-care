import React from 'react';
import { NEW_CLIENT_STEPS, CLINIC_INFO } from '../data/clinicData';
import { Check, Calendar, MessageSquare, ArrowRight, FileText, HeartHandshake } from 'lucide-react';

interface NewClientsSectionProps {
  onOpenBooking: () => void;
}

export const NewClientsSection: React.FC<NewClientsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="new-clients" className="py-16 lg:py-24 bg-[#F8FAF7] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
            New Clients Welcome
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            What to expect on your pet’s first visit to Saad Veterinary Clinic.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Visiting a veterinarian for the first time should never feel rushed or confusing. We guide pet parents through every step with transparency, gentle restraint, and open ears.
          </p>
        </div>

        {/* 4-Step Journey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {NEW_CLIENT_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-[#6BAF8D] block mb-3 font-mono">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#153D32] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to bring box & direct action */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#153D32] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4 text-[#6BAF8D]" />
                <span>Checklist for First-Time Visitors</span>
              </div>
              <h3 className="text-lg font-bold text-[#153D32] mb-3">
                Helpful items to bring along with your companion
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                  <span>Any previous vaccination cards, deworming dates, or medical prescriptions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                  <span>A secure pet carrier for cats or a comfortable leash/harness for dogs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                  <span>The brand name of your pet’s current food and general feeding schedule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                  <span>Photos or video clips if your pet exhibits periodic coughing, limping, or seizures.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book First-Time Consultation</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum, I am a new pet parent in Sargodha and would like to schedule our first visit.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0D261F] bg-[#E8F4EE] hover:bg-[#d6ecdf] rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ask a Question on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
