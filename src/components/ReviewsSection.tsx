import React, { useState } from 'react';
import { CLIENT_REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat'>('all');

  const filteredReviews = CLIENT_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    return rev.petType === filter;
  });

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#F8FAF7] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Google Maps Rating Anchor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#6BAF8D] tracking-wider uppercase mb-2">
              Verified Pet Parent Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D32] tracking-tight leading-tight mb-3 [text-wrap:balance]">
              Trusted by pet owners across New Satellite Town and Sargodha.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Read authentic feedback from families who rely on Dr. Saad Rehman for emergency care, routine vaccinations, and daily veterinary advice.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="text-3xl font-extrabold text-[#153D32] tracking-tight">4.9</div>
            <div className="text-xs">
              <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-semibold text-slate-700 block">Rated on Google Maps</span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6BAF8D] hover:text-[#153D32] font-medium flex items-center gap-1 transition-colors mt-0.5"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 mb-8 text-xs font-semibold">
          <span className="text-slate-400 mr-1 uppercase tracking-wider text-[11px]">Filter:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-[#153D32] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('dog')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'dog'
                ? 'bg-[#153D32] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Canine Parents
          </button>
          <button
            onClick={() => setFilter('cat')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'cat'
                ? 'bg-[#153D32] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Feline Parents
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8F4EE] border border-[#6BAF8D]/30 flex items-center justify-center font-bold text-sm text-[#153D32]">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#153D32] leading-tight">{rev.author}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <span>{rev.petDescription}</span>
                        <span>·</span>
                        <span>{rev.locality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-600">{rev.serviceReceived}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  <span>{rev.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#153D32] mb-1">
              Have you brought your companion to Saad Veterinary Clinic?
            </h3>
            <p className="text-xs text-slate-500">
              Your honest feedback helps other pet owners in Sargodha find reliable veterinary care.
            </p>
          </div>
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#153D32] bg-[#E8F4EE] hover:bg-[#d6ecdf] rounded-xl transition-colors shrink-0"
          >
            <span>Write a Review on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
