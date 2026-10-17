import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Clock, Phone, Mail, Copy, Check, Navigation, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  onSuccessToast: (msg: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onSuccessToast }) => {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  // Compute live open/closed status in Pakistan Standard Time (PKT = UTC+5)
  useEffect(() => {
    try {
      const now = new Date();
      // UTC time + 5 hours for PKT
      const pktOffsetMs = 5 * 60 * 60 * 1000;
      const pktTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + pktOffsetMs);
      const day = pktTime.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const hour = pktTime.getHours();
      const minute = pktTime.getMinutes();
      const decimalHour = hour + minute / 60;

      // Mon - Sat (day 1 to 6) between 9:00 AM (9) and 9:00 PM (21)
      if (day >= 1 && day <= 6 && decimalHour >= 9 && decimalHour < 21) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    } catch {
      setIsOpenNow(null);
    }
  }, []);

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CLINIC_INFO.address);
      } else {
        const input = document.createElement('textarea');
        input.value = CLINIC_INFO.address;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      onSuccessToast('Clinic address copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onSuccessToast('Clinic address: ' + CLINIC_INFO.address);
    }
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#F8FAF7] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
            Clinic Location & Hours
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Visit Saad Veterinary Clinic in New Satellite Town, Sargodha.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Easily accessible on Main General Bus Stand Road right across from ILM College, with straightforward street parking for safe pet transit.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5 text-[#153D32]">
                  <MapPin className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Physical Address
                  </span>
                  <p className="text-sm font-bold text-[#153D32] leading-snug mb-1">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-[#6BAF8D] font-medium">
                    Opposite ILM College campus
                  </p>
                </div>
              </div>

              {/* Operating Hours & Live Status */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5 text-[#153D32]">
                  <Clock className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Operating Schedule
                    </span>
                    {isOpenNow !== null && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isOpenNow
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isOpenNow ? 'Open Now (PKT)' : 'Closed Now (Open 9am–9pm Mon–Sat)'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-[#153D32]">
                    Monday – Saturday: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sunday: WhatsApp guidance / on-call assistance for acute cases.
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5 text-[#153D32]">
                  <Phone className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Direct Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-[#153D32] hover:text-[#1D5445] transition-colors block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Call or text before arrival for case updates or directions.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#E8F4EE] flex items-center justify-center shrink-0 mt-0.5 text-[#153D32]">
                  <Mail className="w-4 h-4 text-[#153D32]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-xs font-semibold text-[#153D32] hover:underline break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For medical records, diagnostic inquiries, and documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-xl transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copied' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[380px] relative">
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-[#153D32]">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Saad Veterinary Clinic, Sargodha</span>
            </div>

            <iframe
              title="Saad Veterinary Clinic Sargodha Location Map"
              src="https://maps.google.com/maps?q=Saad+Veterinary+Clinic+Main+General+Bus+Stand+Road+Sargodha&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
