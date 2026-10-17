import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { ConsultationFormData } from '../types';
import { X, Calendar, MessageSquare, Check, AlertCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  onSuccessToast: (msg: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId = 'consultation',
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    ownerName: '',
    phone: '',
    petSpecies: 'Dog',
    petBreedAge: '',
    serviceId: preselectedServiceId,
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 1:00 PM)',
    symptoms: '',
  });

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName.trim() || !formData.phone.trim()) {
      onSuccessToast('Please enter your Name and Contact Phone number.');
      return;
    }
    const serviceName = SERVICES.find((s) => s.id === formData.serviceId)?.title || formData.serviceId;
    let msg = `Assalam-o-Alaikum Dr. Saad, I would like to book a consultation at Saad Veterinary Clinic, Sargodha.\n\n`;
    msg += `• Pet Parent: ${formData.ownerName}\n`;
    msg += `• Contact: ${formData.phone}\n`;
    msg += `• Pet: ${formData.petSpecies}${formData.petBreedAge ? ` (${formData.petBreedAge})` : ''}\n`;
    msg += `• Service: ${serviceName}\n`;
    if (formData.preferredTime) msg += `• Preferred Time: ${formData.preferredTime}\n`;
    if (formData.symptoms) msg += `• Note/Symptoms: ${formData.symptoms}\n`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
    onSuccessToast('Opening WhatsApp with your appointment enquiry...');
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName.trim() || !formData.phone.trim()) {
      onSuccessToast('Please enter your Name and Contact Phone number.');
      return;
    }
    const code = `SVC-${Math.floor(1000 + Math.random() * 9000)}`;
    onClose();
    onSuccessToast(`Consultation enquiry received! Ref: ${code}. We will message you via WhatsApp.`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D261F]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5">
          <span className="text-[11px] font-bold text-[#6BAF8D] uppercase tracking-wider block mb-1">
            Fast Booking
          </span>
          <h3 id="modal-headline" className="text-xl font-bold text-[#153D32]">
            Book a Clinic Consultation
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dr. Saad Rehman · Main General Bus Stand Road, New Satellite Town, Sargodha
          </p>
        </div>

        <form onSubmit={handleOnlineSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                autoFocus
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="e.g. Usman Ali"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0300 1234567"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pet Species
              </label>
              <select
                value={formData.petSpecies}
                onChange={(e) =>
                  setFormData({ ...formData, petSpecies: e.target.value as ConsultationFormData['petSpecies'] })
                }
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
              >
                <option value="Dog">Dog / Puppy</option>
                <option value="Cat">Cat / Kitten</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other Companion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Breed / Age
              </label>
              <input
                type="text"
                value={formData.petBreedAge}
                onChange={(e) => setFormData({ ...formData, petBreedAge: e.target.value })}
                placeholder="e.g. Persian Cat, 1 yr"
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Procedure
            </label>
            <select
              value={formData.serviceId}
              onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Symptoms or Purpose of Visit
            </label>
            <textarea
              rows={2}
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              placeholder="Describe symptoms, vaccination needs, or preferred time..."
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Staff will message you via WhatsApp to confirm the exact time slot.</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Confirm & Send Enquiry</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0D261F] bg-[#E8F4EE] hover:bg-[#d6ecdf] border border-[#6BAF8D]/40 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
