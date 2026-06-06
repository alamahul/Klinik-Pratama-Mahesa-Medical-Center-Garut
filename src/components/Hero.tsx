import { motion } from "motion/react";
import { MessageCircle, Star, ShieldCheck, CheckCircle2, ChevronRight, Accessibility, Clock } from "lucide-react";
import { CLINIC_INFO } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="beranda"
      className="relative pt-24 md:pt-36 pb-16 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300"
    >
      {/* Decorative colored background glow points */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/40 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-100/30 dark:bg-emerald-900/30 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Copy Content Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Inspiring Headline & Bullet tagline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight transition-colors">
                {lang === 'en' ? 'Trusted Clinic' : 'Klinik Andalan'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-500">
                  {lang === 'en' ? 'For Your Family' : 'Keluarga Garut'}
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal transition-colors">
                {lang === 'en' 
                  ? <>Friendly, clean, and professional medical services. Treating <strong>General & BPJS</strong> patients with fully equal care.</>
                  : <>Pelayanan medis yang ramah, bersih, dan profesional. Merawat pasien <strong>Umum & BPJS</strong> dengan perlakuan sepenuhnya setara.</>}
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                id="hero-whatsapp-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" />
                {lang === 'en' ? "Consult via WhatsApp" : "Konsultasi via WhatsApp"}
              </a>
              <a
                id="hero-booking-btn"
                href="#buat-janji"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-4 bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 text-white font-bold text-base rounded-2xl transition-all duration-200"
              >
                {lang === 'en' ? "Book an Appointment" : "Buat Janji Berobat"}
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Quick trust metrics line */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-slate-500 text-xs font-semibold"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{lang === 'en' ? "Accepts BPJS Health" : "Menerima BPJS Kesehatan"}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{lang === 'en' ? "JKN Mobile Screening" : "Skrining JKN Mobile"}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 md:col-span-1">
                <Accessibility className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{lang === 'en' ? "Wheelchair Access" : "Akses Kursi Roda"}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Visual background shadows/shapes */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-400 rounded-3xl blur-md opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            
            {/* Real generated graphic container */}
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden w-full max-w-md lg:max-w-none">
              <img
                src="/src/assets/images/header-hd-resolution.jpg"
                alt="Mahesa Medical Center Lobby"
                className="rounded-2xl w-full h-auto object-cover aspect-video md:aspect-4/3 shadow-sm bg-slate-50"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Interactive Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/60 flex items-center gap-3">
                <div className="bg-emerald-500 text-white rounded-lg p-2 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{lang === 'en' ? "Operational Hours Today" : "Jam Operasional Hari Ini"}</p>
                  <p className="text-sm font-extrabold text-[#0f172a]">{CLINIC_INFO.operationalHours[lang]}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
