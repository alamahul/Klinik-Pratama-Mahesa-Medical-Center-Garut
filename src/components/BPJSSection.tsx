import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, ArrowRight, Smartphone, BookOpen, 
  UserCheck, AlertCircle, HelpCircle, CheckCircle2 
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BPJSSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { lang } = useLanguage();

  const bpjsSteps = [
    {
      title: lang === 'en' ? "1. Download JKN App" : "1. Unduh Aplikasi JKN",
      desc: lang === 'en' ? "Install JKN Mobile on your phone for easy access to your social security data." : "Instal JKN Mobile di ponsel untuk akses mudah ke data jaminan sosial Anda.",
      tip: lang === 'en' ? "Use an active phone to receive the verification OTP code." : "Gunakan HP aktif untuk terima kode OTP verifikasi.",
      icon: Smartphone,
    },
    {
      title: lang === 'en' ? "2. Change Facility" : "2. Ganti Faskes",
      desc: lang === 'en' ? "Set Mahesa Medical Center Clinic (Garut) as your Tier 1 Facility." : "Atur Klinik Mahesa Medical Center (Garut) sebagai Faskes Tingkat 1 Anda.",
      tip: lang === 'en' ? "Out-of-town users can use Guest BPJS." : "Pengguna luar kota bisa menggunakan BPJS Tamu.",
      icon: BookOpen,
    },
    {
      title: lang === 'en' ? "3. Claim Queue Number" : "3. Klaim Nomor Antre",
      desc: lang === 'en' ? "Get a queue ticket and estimated service time through the Service Registration menu." : "Ambil tiket antrean dan jam prediksi layanan Anda cukup lewat menu Pendaftaran Pelayanan.",
      tip: lang === 'en' ? "Faster than the cashier queue machine." : "Lebih cepat dari mesin antrean kasir.",
      icon: UserCheck,
    },
    {
      title: lang === 'en' ? "4. Arrive & Be Served" : "4. Tiba & Dilayani",
      desc: lang === 'en' ? "Simply show the barcode from the app to the receptionist, we will handle the rest." : "Cukup tunjukkan barcode dari aplikasi ke resepsionis, kami bantu urus sisanya.",
      tip: lang === 'en' ? "Arriving 10 minutes early is recommended." : "Datang 10 menit lebih cepat disarankan.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="bpjs" className="py-20 md:py-28 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background decorations elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Layout: Info left Column, Stepper right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Value Pitch */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{lang === 'en' ? "Equal Priority Service" : "Prioritas Layanan Setara"}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'en' ? "Hassle-Free BPJS Health Access" : "Akses BPJS Kesehatan Anti-Ribet"}
            </h2>

            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />

            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'en' ? <>Mahesa Clinic is proud to be an official <strong>BPJS</strong> partner. We fully serve both registered facilities and out-of-town referrals.</> : <>Klinik Mahesa bangga menjadi mitra resmi <strong>BPJS</strong>. Baik faskes terdaftar maupun rujukan luar kota, kami layani sepenuhnya.</>}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-white text-sm">{lang === 'en' ? "Accepts Guest BPJS" : "Terima BPJS Tamu"}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    {lang === 'en' ? "Visiting Garut and got sick? Use the Guest BPJS status easily without complicated conditions." : "Sedang main ke Garut dan sakit? Gunakan status BPJS Tamu dengan mudah tanpa syarat rumit."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-emerald-300 text-sm">{lang === 'en' ? "Yearly Health Screening" : "Skrining Kesehatan Tahunan"}</h4>
                  <p className="text-xs text-emerald-100/70 leading-relaxed mt-1">
                    {lang === 'en' ? "Free early health detection program available once a month exclusively for JKN Mobile app users." : "Tersedia program pendeteksian dini kesehatan gratis 1x sebulan khusus pengguna aplikasi JKN Mobile."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction BPJS Mobile JKN Setup Stepper */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-extrabold text-lg md:text-xl text-white">{lang === 'en' ? "BPJS Treatment Guide" : "Panduan Berobat Pakai BPJS"}</h3>
              <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">{lang === 'en' ? "JKN Mobile Integration" : "Integrasi JKN Mobile"}</span>
            </div>

            {/* Stepper Steps Circle Indicator Header */}
            <div className="grid grid-cols-4 gap-2 mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 -z-10" />
              {bpjsSteps.map((step, idx) => {
                const isCompletedOrActive = idx <= activeStep;
                return (
                  <button
                    id={`bpjs-step-indicator-${idx}`}
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center gap-2 group focus:outline-none"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-300 ${
                      idx === activeStep 
                        ? "bg-blue-600 border-blue-500 text-white scale-110 shadow-lg shadow-blue-500/20" 
                        : isCompletedOrActive 
                          ? "bg-blue-950 border-blue-800 text-blue-300" 
                          : "bg-slate-900 border-slate-800 text-slate-500 group-hover:border-slate-700"
                    }`}>
                      {idx + 1}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                id={`bpjs-step-card-${activeStep}`}
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-950/80 p-5 rounded-2xl border border-slate-850 flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="p-4 rounded-xl bg-blue-950 border border-blue-900/50 text-blue-400 shrink-0">
                  {(() => {
                    const CurrentIcon = bpjsSteps[activeStep].icon;
                    return <CurrentIcon className="w-6 h-6" />;
                  })()}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-extrabold text-white text-base leading-tight">
                    {bpjsSteps[activeStep].title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {bpjsSteps[activeStep].desc}
                  </p>
                  <div className="bg-slate-900 border-l-2 border-emerald-500 px-3.5 py-2 mt-2 text-xs text-slate-300 leading-relaxed rounded-r-lg font-light">
                    <span className="font-bold text-emerald-400">{lang === 'en' ? "Medical Tip:" : "Tips Medis:"}</span> {bpjsSteps[activeStep].tip}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Navigation Buttons Controls */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-800">
              <button
                id="btn-bpjs-prev"
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition ${
                  activeStep === 0 
                    ? "border-slate-800 text-slate-600 cursor-not-allowed" 
                    : "border-slate-700 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {lang === 'en' ? "Previous" : "Sebelumnya"}
              </button>

              <button
                id="btn-bpjs-next"
                onClick={() => setActiveStep(prev => Math.min(bpjsSteps.length - 1, prev + 1))}
                disabled={activeStep === bpjsSteps.length - 1}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition ${
                  activeStep === bpjsSteps.length - 1 
                    ? "border-slate-800 text-slate-600 cursor-not-allowed" 
                    : "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {lang === 'en' ? "Next Step" : "Langkah Berikut"}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
