import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, Smile, Activity, Bed, Bone, Tablets, 
  ArrowRight, Check, X, ShieldAlert, Phone 
} from "lucide-react";
import { SERVICES, CLINIC_INFO } from "../data";
import { Service } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

// Dynamic Icon Mapper
const iconMap: Record<string, any> = {
  Stethoscope,
  Smile,
  Activity,
  Bed,
  Bone,
  Tablets
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { lang } = useLanguage();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [lang]);

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <section id="layanan" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9] mb-2">
            {lang === 'en' ? "OUR SERVICES" : "LAYANAN KAMI"}
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {lang === 'en' ? "One Place for All Your Medical Needs" : "Satu Tempat untuk Berbagai Kebutuhan Medis Anda"}
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-[#0ea5e9] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div className="animate-pulse">
                  <div className="w-14 h-14 rounded-2xl bg-slate-200 mb-6"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6 mb-6"></div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : (
            SERVICES[lang].map((service, index) => {
              const IconComp = iconMap[service.iconName] || Stethoscope;
              return (
                <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Special styling wrapper for UGD Badge */}
                {service.category === 'emergency' && (
                  <div className="absolute top-4 right-4 bg-red-50 text-red-600 border border-red-100 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3 animate-pulse" />
                    {lang === 'en' ? "24H ER STANDBY" : "UGD SIAGA 24H"}
                  </div>
                )}

                <div>
                  {/* Service Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-105 ${
                    service.category === 'emergency' 
                      ? "bg-red-50 text-red-600 border-red-100" 
                      : service.category === 'poli' 
                        ? "bg-blue-50 text-blue-600 border-blue-100" 
                        : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Service Header Info */}
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Service Navigation Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    id={`btn-details-${service.id}`}
                    onClick={() => openServiceDetails(service)}
                    className="text-xs font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    {lang === 'en' ? "Learn Details" : "Pelajari Detail Layanan"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {service.category === 'emergency' && (
                    <span className="text-[11px] text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-md">{lang === 'en' ? "Urgent STANDBY" : "Urgen SIAGA"}</span>
                  )}
                </div>
              </motion.div>
            );
          })
        )}
        </div>

        {/* Dynamic Detail Modal Panel */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                id="modal-backdrop"
                className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeServiceDetails}
              />

              {/* Modal Container */}
              <motion.div
                id="modal-content"
                className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 z-10 p-6 md:p-8"
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
              >
                {/* Modal Close Button */}
                <button
                  id="btn-close-modal"
                  onClick={closeServiceDetails}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Icon and Categories */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl border ${
                    selectedService.category === 'emergency'
                      ? "bg-red-50 text-red-600 border-red-100"
                      : selectedService.category === 'poli'
                        ? "bg-blue-50 text-blue-600 border-blue-100"
                        : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  }`}>
                    {(() => {
                      const IconComp = iconMap[selectedService.iconName] || Stethoscope;
                      return <IconComp className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      {lang === 'en' ? "SERVICE DETAILS" : "DETAIL LAYANAN"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                      {selectedService.name}
                    </h3>
                  </div>
                </div>

                {/* Short Paragraph & Detailed Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {selectedService.detailedDescription}
                </p>

                {/* Highlight Checkpoints features */}
                <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
                  <p className="text-xs uppercase font-extrabold text-blue-600 tracking-wider mb-3">
                    {lang === 'en' ? "Highlights & Coverage:" : "Keunggulan & Cakupan Layanan:"}
                  </p>
                  <ul className="space-y-2.5">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Consultation CTA for this service */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    id="modal-wa-consult"
                    href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(`Halo Klinik Mahesa Medical Center, saya tertarik bertanya mengenai layanan ${selectedService.name}. Mohon informasinya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-xl hover:shadow-lg hover:shadow-emerald-500/15 active:scale-95 transition"
                  >
                    <Phone className="w-4 h-4 fill-white/10" />
                    {lang === 'en' ? "Ask via WA" : "Tanya WA / Konsul"}
                  </a>
                  <a
                    id="modal-make-appt"
                    href="#buat-janji"
                    onClick={closeServiceDetails}
                    className="flex-1 inline-flex items-center justify-center px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl hover:shadow-lg hover:shadow-blue-500/15 active:scale-95 transition"
                  >
                    {lang === 'en' ? "Book Appointment" : "Buat Janji Berobat"}
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
