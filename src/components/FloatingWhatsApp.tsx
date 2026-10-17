import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Assalam-o-Alaikum Dr. Saad, I would like to consult with you regarding my pet.'
  )}`;

  return (
    <aside aria-label="Direct WhatsApp contact">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message to Saad Veterinary Clinic"
        className="fixed bottom-6 right-6 z-40 group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageSquare className="w-6 h-6 fill-white" />

        {/* Quiet desktop tooltip */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 text-xs font-semibold text-white bg-[#0D261F] rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Us (+92 300 6009997)
        </span>
      </a>
    </aside>
  );
};
