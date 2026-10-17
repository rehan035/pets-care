import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { ConsultationFormData } from '../types';
import { MessageSquare, Calendar, Check, AlertCircle, Phone, Clock, MapPin } from 'lucide-react';

interface AppointmentSectionProps {
  initialServiceId?: string;
  onSuccessToast: (msg: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialServiceId = 'consultation',
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    ownerName: '',
    phone: '',
    petSpecies: 'Dog',
    petBreedAge: '',
    serviceId: initialServiceId,
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 1:00 PM)',
    symptoms: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const buildWhatsAppMessage = (data: ConsultationFormData) => {
    const serviceName = SERVICES.find((s) => s.id === data.serviceId)?.title || data.serviceId;
    let msg = `Assalam-o-Alaikum Dr. Saad, I would like to book a consultation at Saad Veterinary Clinic, Sargodha.\n\n`;
    msg += `• Pet Parent: ${data.ownerName || 'Not specified'}\n`;
    msg += `• Contact: ${data.phone || 'Not specified'}\n`;
    msg += `• Pet: ${data.petSpecies}${data.petBreedAge ? ` (${data.petBreedAge})` : ''}\n`;
    msg += `• Service Required: ${serviceName}\n`;
    if (data.preferredDate) msg += `• Preferred Date: ${data.preferredDate}\n`;
    if (data.preferredTime) msg += `• Preferred Time: ${data.preferredTime}\n`;
    if (data.symptoms) msg += `• Symptoms/Notes: ${data.symptoms}\n`;
    return msg;
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName.trim() || !formData.phone.trim()) {
      onSuccessToast('Please enter your Name and Contact Phone number.');
      return;
    }
    const text = encodeURIComponent(buildWhatsAppMessage(formData));
    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onSuccessToast('Opening WhatsApp with your appointment enquiry...');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName.trim() || !formData.phone.trim()) {
      onSuccessToast('Please fill in your Name and Contact Phone number.');
      return;
    }

    const code = `SVC-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(code);
    setSubmitted(true);
    onSuccessToast(`Enquiry received! Reference: ${code}`);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Location Summary */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
                In-Clinic Appointment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-4 [text-wrap:balance]">
                Schedule a consultation or reach out directly on WhatsApp.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Dr. Saad Rehman personally examines each patient. Walk-ins are always welcomed during open clinic hours, and advance booking ensures minimal waiting time for your pet.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4 mb-8">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Assalam-o-Alaikum, I would like to enquire about consultation hours.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 bg-[#F8FAF7] hover:bg-[#E8F4EE] hover:border-[#6BAF8D]/40 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct WhatsApp Line
                    </span>
                    <span className="text-base font-bold text-[#153D32] block">
                      {CLINIC_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-500">
                      Fastest response for symptoms, photo advice, and emergency triage.
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="p-4 rounded-xl border border-slate-200 bg-[#F8FAF7] hover:bg-slate-50 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#153D32]/10 text-[#153D32] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Reception Phone
                    </span>
                    <span className="text-base font-bold text-[#153D32] block">
                      {CLINIC_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-500">
                      Speak directly with clinic front desk during working hours.
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAF7] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200/60 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consultation Hours
                    </span>
                    <span className="text-sm font-bold text-[#153D32] block">
                      Monday to Saturday: 9:00 AM – 9:00 PM
                    </span>
                    <span className="text-xs text-slate-500">
                      Sunday: Available on-call & on WhatsApp for urgent care.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#E8F4EE] border border-[#6BAF8D]/30 text-xs text-[#0D261F] leading-relaxed flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#153D32] shrink-0 mt-0.5" />
              <span>
                <strong>Landmark:</strong> Opposite ILM College, Main General Bus Stand Road, New Satellite Town, Sargodha.
              </span>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7 bg-[#F8FAF7] rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-[#E8F4EE] text-[#153D32] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-[#153D32] mb-2">Consultation Request Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <strong>{formData.ownerName}</strong>. Your enquiry for <strong>{formData.petSpecies}</strong> has been logged under reference <strong>{referenceCode}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-md mx-auto mb-6">
                  Our clinic staff will message you on WhatsApp or call <strong>{formData.phone}</strong> shortly to confirm the exact time slot.
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp Directly</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        ownerName: '',
                        phone: '',
                        petSpecies: 'Dog',
                        petBreedAge: '',
                        serviceId: 'consultation',
                        preferredDate: '',
                        preferredTime: 'Morning (9:00 AM – 1:00 PM)',
                        symptoms: '',
                      });
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-2">
                  <h3 className="text-base font-bold text-[#153D32]">Pet & Owner Details</h3>
                  <p className="text-xs text-slate-500">Provide basic information so Dr. Saad can prepare for your visit.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="e.g. Usman Tariq"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pet Species <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.petSpecies}
                      onChange={(e) =>
                        setFormData({ ...formData, petSpecies: e.target.value as ConsultationFormData['petSpecies'] })
                      }
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                    >
                      <option value="Dog">Dog / Puppy</option>
                      <option value="Cat">Cat / Kitten</option>
                      <option value="Bird">Companion Bird</option>
                      <option value="Other">Other Companion Animal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Breed & Age (approx.)
                    </label>
                    <input
                      type="text"
                      value={formData.petBreedAge}
                      onChange={(e) => setFormData({ ...formData, petBreedAge: e.target.value })}
                      placeholder="e.g. Persian Cat, 8 months"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
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
                      Preferred Time of Day
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                    >
                      <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                      <option value="Evening (6:00 PM – 9:00 PM)">Evening (6:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Symptoms or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    placeholder="Briefly describe what your pet is experiencing, when it began, or if you need vaccination history checks..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BAF8D]/40 focus:border-[#6BAF8D]"
                  />
                </div>

                <div className="flex items-start gap-2 text-[11.5px] text-slate-500 bg-white p-3 rounded-lg border border-slate-200/60">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Submitting this form does not automatically lock an appointment. Our staff will confirm the exact time slot with you via WhatsApp or phone.
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Submit Online Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#0D261F] bg-[#E8F4EE] hover:bg-[#d6ecdf] border border-[#6BAF8D]/40 rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
