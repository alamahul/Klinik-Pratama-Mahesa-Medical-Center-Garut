import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Phone } from "lucide-react";
import { FAQS, CLINIC_INFO } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

export default function FAQSection() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"Semua" | "BPJS" | "Layanan" | "Operasional">("Semua");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories: Array<"Semua" | "BPJS" | "Layanan" | "Operasional"> = [
    "Semua", "BPJS", "Layanan", "Operasional"
  ];

  const translatedCategories = {
    "Semua": lang === 'en' ? "All" : "Semua",
    "BPJS": "BPJS",
    "Layanan": lang === 'en' ? "Services" : "Layanan",
    "Operasional": lang === 'en' ? "Operational" : "Operasional"
  };

  // Filtering Logic
  const filteredFaqs = (FAQS[lang] || FAQS['id']).filter(faq => {
    const matchesCategory = selectedCategory === "Semua" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-50/50 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            {lang === 'en' ? "FREQUENTLY ASKED QUESTIONS" : "PERTANYAAN UMUM"}
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? "Service & BPJS Information" : "Informasi Layanan & BPJS"}
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search and Category Filtering Bar */}
        <div className="space-y-6 mb-10 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
          
          {/* Dynamic Search Input row */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </span>
            <input
              id="faq-search-input"
              type="text"
              placeholder={lang === 'en' ? "Search keywords... (e.g., JKN, referral, dental, hours)" : "Cari kata kunci... (contoh: JKN, rujukan, gigi, jam buka)"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-250 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-semibold transition shadow-xs"
            />
          </div>

          {/* Filter pills buttons */}
          <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                id={`faq-cat-pill-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null); // Close active when switching category filter
                }}
                className={`text-xs font-extrabold px-4.5 py-2.5 rounded-xl border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10 scale-102"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {cat === "Semua" ? (lang === 'en' ? "All FAQs" : "Semua FAQ") : `${lang === 'en' ? 'Topic ' : 'Topik '}${translatedCategories[cat] || cat}`}
              </button>
            ))}
          </div>

        </div>

        {/* List of Accordions FAQ */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div
                    id={`faq-item-card-${idx}`}
                    key={faq.question}
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-50 hover:bg-slate-50/80 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
                  >
                    {/* Header trigger line */}
                    <button
                      id={`faq-trigger-${idx}`}
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-2xl group"
                    >
                      <span className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors text-sm md:text-base pr-4 select-none leading-snug">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-full bg-white border border-slate-200 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 shrink-0 transition-all">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {/* Accordion description values expand */}
                    {isOpen && (
                      <motion.div
                        id={`faq-expanded-content-${idx}`}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200/50 bg-white"
                      >
                        <div className="p-5 md:p-6 text-slate-600 text-xs md:text-sm font-medium leading-relaxed font-sans select-none">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-250 rounded-2xl p-6">
                <HelpCircle className="w-10 h-10 text-slate-350 mx-auto mb-4" />
                <h4 className="font-bold text-slate-700 text-sm">{lang === 'en' ? "No Matching Answers Found" : "Tidak Menemukan Jawaban Cocok"}</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  {lang === 'en' ? "Try changing the filter or typing alternative search keywords for your medical questions." : "Coba ubah filter atau ketikkan kata kunci pencarian alternatif untuk pertanyaan medis Anda."}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Triage Banner bottom */}
        <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-white text-blue-600 border border-blue-100 hidden sm:block shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight">
                {lang === 'en' ? "Have a Special Condition / Other?" : "Punya Kondisi Khusus / Lainnya?"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-0.5 max-w-md">
                {lang === 'en' 
                  ? "Contact our online consultation counter to get primary care guidance directly from our nurses." 
                  : "Hubungi loket administrasi konsultasi online kami untuk mendapatkan bimbingan faskes primer langsung dari perawat kami."}
              </p>
            </div>
          </div>
          
          <a
            id="faq-btn-whatsapp-hotline"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl hover:shadow-lg hover:shadow-emerald-500/10 transition"
          >
            <Phone className="w-3.5 h-3.5 fill-white/10" />
            {lang === 'en' ? "Ask via WhatsApp" : "Tanya via WhatsApp"}
          </a>
        </div>

      </div>
    </section>
  );
}
