import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquareCode, Gift, ThumbsUp, CheckSquare, Sparkles, Send } from "lucide-react";
import { TESTIMONIALS, CLINIC_INFO } from "../data";
import { Testimonial } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

export default function Testimonials() {
  const { lang } = useLanguage();
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS[lang] || TESTIMONIALS['id']);
  const [isLoading, setIsLoading] = useState(true);
  const [likesState, setLikesState] = useState<Record<string, number>>({
    "testi-1": 14,
    "testi-2": 9,
    "testi-3": 21,
    "testi-4": 7,
  });
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setReviewsList(TESTIMONIALS[lang] || TESTIMONIALS['id']);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [lang]);

  // Form states for patients to leave a review
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [newRole, setNewRole] = useState(lang === 'en' ? "General Patient" : "Pasien Umum");
  const [formFeedback, setFormFeedback] = useState("");

  const handleLike = (id: string) => {
    if (hasLiked[id]) {
      // Unlike
      setLikesState(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      // Like
      setLikesState(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) {
      setFormFeedback(lang === 'en' ? "Please enter your name and comments." : "Harap masukkan nama dan komentar Anda.");
      return;
    }

    const newObj: Testimonial = {
      id: `new-${Date.now()}`,
      name: newName,
      reviewDate: lang === 'en' ? "Just now" : "Baru saja",
      rating: newRating,
      text: newText,
      originalText: newText,
      role: newRole,
      source: "Manual"
    };

    setReviewsList(prev => [newObj, ...prev]);
    setLikesState(prev => ({ ...prev, [newObj.id]: 0 }));
    setNewName("");
    setNewText("");
    setFormFeedback(lang === 'en' ? "Thank you! Your review has been posted locally." : "Terima kasih! Ulasan Anda berhasil diposting secara lokal.");
    
    // Auto clear feedback
    setTimeout(() => {
      setFormFeedback("");
    }, 4000);
  };

  return (
    <section id="ulasan" className="py-20 md:py-28 bg-[#fafbfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
            {lang === 'en' ? "REAL PATIENT REVIEWS" : "ULASAN PASIEN NYATA"}
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {lang === 'en' ? "Treatment Experience at Mahesa" : "Pengalaman Berobat di Mahesa"}
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Reviews Showcase and Review Form Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Grid of Reviews Layout */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-emerald-500" />
              {lang === 'en' ? `Popular Reviews Archive (${reviewsList.length})` : `Arsip Ulasan Terpopuler (${reviewsList.length})`}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <motion.div
                      key={`testi-skeleton-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between"
                    >
                      <div className="animate-pulse">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-1/2">
                            <div className="h-4 bg-slate-200 rounded mb-2"></div>
                            <div className="h-3 w-16 bg-slate-200 rounded-full mt-1.5"></div>
                          </div>
                          <div className="h-3 w-12 bg-slate-200 rounded"></div>
                        </div>
                        <div className="flex gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3.5 h-3.5 bg-slate-200 rounded-full"></div>)}
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="h-3 bg-slate-200 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                          <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-50 flex items-center justify-between animate-pulse">
                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                        <div className="h-6 w-20 bg-slate-200 rounded-lg"></div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  reviewsList.map((review, i) => {
                    const translatedRole = lang === 'en' && typeof review.role === 'string' && review.role.includes('Pasien Umum') ? 'General Patient' :
                                           lang === 'en' && typeof review.role === 'string' && review.role.includes('Tamu') ? 'Guest BPJS Patient' :
                                           lang === 'en' && typeof review.role === 'string' && review.role.includes('Rawat') ? 'Inpatient' : review.role;
                    return (
                    <motion.div
                    id={`review-item-${review.id}`}
                    key={review.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between group hover:border-[#22c55e]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      {/* Name / Star lines */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-extrabold text-slate-950 text-sm tracking-tight">{review.name}</h4>
                          <span className="text-[10px] text-[#22c55e] font-extrabold bg-[#22c55e]/10 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                            {translatedRole}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          {lang === 'en' ? review.reviewDate.replace('Bulan lalu', 'Last month').replace('Minggu lalu', 'Last week') : review.reviewDate}
                        </span>
                      </div>

                      {/* Stars Rating line */}
                      <div className="flex text-amber-500 gap-1 mb-3">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current shrink-0" />
                        ))}
                      </div>

                      {/* Text block summary */}
                      <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed italic mb-4">
                        "{lang === 'en' && review.originalText ? review.text : review.text}" {/* Assume text maps in real backend, fallback to text */}
                      </p>
                    </div>

                    {/* Bottom verification and Likes actions */}
                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        ✔ Verified {review.source}
                      </span>
                      
                      {/* Interactive Like action button */}
                      <button
                        id={`btn-like-review-${review.id}`}
                        onClick={() => handleLike(review.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                          hasLiked[review.id] 
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                            : "text-slate-500 hover:text-emerald-500 hover:bg-slate-50"
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? "Helpful" : "Membantu"} ({likesState[review.id] || 0})</span>
                      </button>
                    </div>
                  </motion.div>
                  );
                })
              )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Give your own review Form */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-extrabold text-[#0f172a] text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                {lang === 'en' ? "Evaluated at MMC?" : "Pernah Berobat ke MMC?"}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                {lang === 'en' ? "Help write your objective review to be a means of evaluating our service quality." : "Bantu tuliskan ulasan objektif Anda untuk menjadi sarana evaluasi kualitas pelayanan kami."}
              </p>
            </div>

            <form id="write-review-form" onSubmit={handleAddReview} className="space-y-4">
              {/* Your Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-extrabold text-slate-700 tracking-wider">
                  {lang === 'en' ? "Your Name *" : "Nama Anda *"}
                </label>
                <input
                  id="review-name-input"
                  type="text"
                  required
                  placeholder={lang === 'en' ? "Example: Rahmad" : "Contoh: Rahmad Garut"}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4.5 py-2.5 bg-slate-50/60 border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                />
              </div>

              {/* Patient Role Category */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-extrabold text-slate-700 tracking-wider">
                  {lang === 'en' ? "Patient Type" : "Jenis Pasien"}
                </label>
                <select
                  id="review-role-select"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-500 rounded-xl text-slate-800 text-xs font-semibold transition"
                >
                  {lang === 'en' ? (
                    <>
                      <option value="Pasien Umum Garut">General Patient (Outpatient)</option>
                      <option value="Pasien BPJS Kesehatan">BPJS Patient</option>
                      <option value="Pasien Poli Gigi">Dental Clinic Patient</option>
                      <option value="Pasien Rawat Inap & UGD">Inpatient & ER</option>
                    </>
                  ) : (
                    <>
                      <option value="Pasien Umum Garut">Pasien Umum (Rawat Jalan)</option>
                      <option value="Pasien BPJS Kesehatan">Pasien BPJS Kesehatan</option>
                      <option value="Pasien Poli Gigi">Pasien Poli Gigi</option>
                      <option value="Pasien Rawat Inap & UGD">Pasien Rawat Inap & UGD</option>
                    </>
                  )}
                </select>
              </div>

              {/* Rating Star Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-extrabold text-slate-700 tracking-wider">
                  {lang === 'en' ? "Star Rating *" : "Rating Bintang *"}
                </label>
                <div className="flex gap-2.5 pt-0.5">
                  {[1, 2, 3, 4, 5].map((str) => (
                    <button
                      id={`star-btn-${str}`}
                      key={str}
                      type="button"
                      onClick={() => setNewRating(str)}
                      className="focus:outline-none"
                    >
                      <Star className={`w-6 h-6 shrink-0 transition ${
                        str <= newRating 
                          ? "text-amber-500 fill-current scale-105" 
                          : "text-slate-300 hover:text-amber-400"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments Text */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-extrabold text-slate-700 tracking-wider">
                  {lang === 'en' ? "Constructive Review & Feedback *" : "Ulasan & Kritik Konstruktif *"}
                </label>
                <textarea
                  id="review-text-input"
                  rows={3}
                  required
                  placeholder={lang === 'en' ? "Tell us about your treatment experience..." : "Ceritakan pengalaman berobat Anda..."}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full px-4.5 py-2.5 bg-slate-50/60 border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-xs font-medium transition"
                />
              </div>

              {/* Form Status feedbacks */}
              {formFeedback && (
                <p className="text-xs text-emerald-600 font-bold bg-emerald-50 py-2 px-3.5 rounded-lg border border-emerald-100 transition animate-pulse">
                  {formFeedback}
                </p>
              )}

              {/* Submit Review Button */}
              <button
                id="btn-post-review"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs tracking-wide uppercase rounded-xl shadow-md transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                {lang === 'en' ? "Post Review" : "Posting Ulasan"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
