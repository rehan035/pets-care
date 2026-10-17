import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { Phone, MapPin, Clock, MessageSquare, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clinic Tour', href: '#tour' },
    { label: 'New Clients', href: '#new-clients' },
    { label: 'Pet Guide', href: '#pet-guide' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0D261F] text-[#D1DFD8] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#6BAF8D] shrink-0" />
            <span>Opposite ILM College, Main General Bus Stand Road, New Satellite Town, Sargodha</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#6BAF8D] shrink-0" />
              <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#6BAF8D] shrink-0" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200/80 py-3'
            : 'bg-[#F8FAF7]/95 backdrop-blur-sm border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-200 shrink-0">
              <img
                src={CLINIC_IMAGES.logo}
                alt="Saad Veterinary Clinic emblem"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#153D32] tracking-tight leading-tight whitespace-nowrap">
                Saad Veterinary Clinic
              </span>
              <span className="text-[11px] font-medium text-[#6BAF8D] tracking-wide uppercase">
                Sargodha · Dr. Saad Rehman
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#153D32] transition-colors whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6BAF8D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick WhatsApp Direct */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Assalam-o-Alaikum, I would like to enquire about veterinary care at Saad Veterinary Clinic in Sargodha.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#153D32] bg-[#E8F4EE] hover:bg-[#d6ecdf] rounded-lg transition-colors whitespace-nowrap"
              aria-label="Direct WhatsApp Message"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#153D32] rounded-md sm:hidden"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#153D32] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-[#E8F4EE] hover:text-[#153D32] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Assalam-o-Alaikum Dr. Saad, I would like to consult with you about my pet.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat (+92 300 6009997)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#153D32] hover:bg-[#1D5445] rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Clinic Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
