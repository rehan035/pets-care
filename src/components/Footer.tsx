import React from 'react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D261F] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                <img
                  src={CLINIC_IMAGES.logo}
                  alt="Saad Veterinary Clinic emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  Saad Veterinary Clinic
                </span>
                <span className="text-xs text-[#6BAF8D] font-medium tracking-wide">
                  Dr. Saad Rehman · Sargodha, Pakistan
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Dedicated to compassionate, scientifically grounded animal healthcare. Providing routine vaccinations, clinical illness diagnostics, minor surgery, and localized wellness support across Sargodha.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#6BAF8D]" />
              <span>Registered Veterinary Healthcare Provider</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Clinic Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Saad Rehman
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Veterinary Services
                </a>
              </li>
              <li>
                <a href="#tour" className="hover:text-white transition-colors">
                  Clinic Tour & Facilities
                </a>
              </li>
              <li>
                <a href="#new-clients" className="hover:text-white transition-colors">
                  New Clients: What to Expect
                </a>
              </li>
              <li>
                <a href="#pet-guide" className="hover:text-white transition-colors">
                  Sargodha Climate Pet Guide
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Verified Client Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location, Map & Timings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Clinic Address & Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block">Mon – Sat: 9:00 AM – 9:00 PM</span>
                  <span className="text-slate-400 text-[11px]">Sunday: Emergency on-call / WhatsApp</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#6BAF8D] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Saad Veterinary Clinic. All rights reserved. Sargodha, Punjab, Pakistan.</p>
          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>Google Maps Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
