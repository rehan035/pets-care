import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ClinicTour } from './components/ClinicTour';
import { NewClientsSection } from './components/NewClientsSection';
import { SargodhaPetGuide } from './components/SargodhaPetGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenBooking = (serviceId: string = 'consultation') => {
    setPreselectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7] text-[#14231E]">
      {/* Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking('consultation')} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with Real Clinic Photo & Core Propositions */}
        <Hero onOpenBooking={() => handleOpenBooking('consultation')} />

        {/* 2. Practice Philosophy & Low-Stress Handling with Dr. Saad */}
        <AboutSection onOpenBooking={() => handleOpenBooking('consultation')} />

        {/* 3. Confirmed Veterinary Procedures & Deep-Dive Explorer */}
        <ServicesSection onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 4. Clinic Tour: Spotless Facilities & Pharmacy Inspection */}
        <ClinicTour onOpenBooking={() => handleOpenBooking('consultation')} />

        {/* 5. New Clients: What to Expect on Your First Visit */}
        <NewClientsSection onOpenBooking={() => handleOpenBooking('consultation')} />

        {/* 6. Sargodha Pet Parent Guide: Local Climate, Heatwaves & Parasite Calendar */}
        <SargodhaPetGuide />

        {/* 7. Verified Client Reviews from Google Maps */}
        <ReviewsSection />

        {/* 8. In-Clinic Consultation & WhatsApp Enquiry Form */}
        <AppointmentSection
          initialServiceId={preselectedService}
          onSuccessToast={(msg) => showToast(msg)}
        />

        {/* 9. Exact Location Landmark, Hours (PKT Status) & Embedded Map */}
        <LocationSection onSuccessToast={(msg) => showToast(msg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedServiceId={preselectedService}
        onSuccessToast={(msg) => showToast(msg)}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#0D261F] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-[#6BAF8D] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
