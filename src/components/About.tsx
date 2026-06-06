import { motion } from "motion/react";
import { CheckCircle2, Heart, Award, Sparkles, Smile, ShieldCheck, Accessibility } from "lucide-react";
import { CLINIC_INFO } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  const coreValues = [
    {
      title: lang === 'en' ? "BPJS & JKN Friendly" : "Ramah BPJS & JKN",
      desc: lang === 'en' ? "Hassle-free service, synchronized with the JKN Mobile app. Consult, examine, and get medicine with equal care." : "Pelayanan anti-ribet, sinkron dengan aplikasi JKN Mobile. Konsultasi, periksa, dan ambil obat tanpa perbedaan layanan.",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: lang === 'en' ? "Friendly Staff" : "Staf Bersahabat",
      desc: lang === 'en' ? "Your recovery is our priority. Doctors, nurses, pharmacists, and security are ready to welcome you." : "Kesembuhan Anda nomor satu. Dokter, perawat, apoteker, dan satpam kami siap menyambut dengan komunikasi yang santun.",
      icon: Smile,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: lang === 'en' ? "Clean & Hygienic" : "Bersih & Higienis",
      desc: lang === 'en' ? "Sterile examination rooms, clinic, and waiting areas. Designed to remove the scary hospital impression." : "Ruang periksa, klinik, dan ruang tunggu yang steril dan wangi. Area yang dirancang menghilangkan kesan rumah sakit mengerikan.",
      icon: Sparkles,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      title: lang === 'en' ? "Disability Access" : "Akses Disabilitas",
      desc: lang === 'en' ? "Adequate ramps and standby staff to assist wheelchair or elderly patients in the lobby." : "Ramp memadai dan staf siaga untuk mendampingi pasien berkursi roda atau lansia di area poli / lobi.",
      icon: Accessibility,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  const checkpoints = lang === 'en' ? [
    "Simple queue registration without hassle",
    "Clear medical and medicine education",
    "Complete One Stop Service facilities"
  ] : [
    "Pendaftaran antrean simpel tanpa ribet",
    "Edukasi obat & tindakan medis jelas",
    "Fasilitas lengkap One Stop Service",
  ];

  return (
    <section id="tentang-kami" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            {lang === 'en' ? "ABOUT MAHESA CLINIC" : "TENTANG KLINIK MAHESA"}
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? "Transparent, Communicative, and Wholehearted" : "Transparan, Komunikatif, dan Sepenuh Hati"}
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Descriptive Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-2.5 rounded-2xl bg-blue-50/50 inline-flex items-center gap-2 border border-blue-100 text-blue-800 text-xs font-bold">
              <Award className="w-4 h-4" />
              <span>{lang === 'en' ? "Primary Care Facility in Garut" : "Faskes Pertama di Garut"}</span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
              {lang === 'en' ? "Dedicated Service Without Discrimination" : "Dedikasi Pelayanan Tanpa Diskriminasi"}
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              {lang === 'en' ? "Strategically located in the heart of Tarogong Kidul, Garut. Mahesa Medical Center adopts health service standards that simplify complex processes." : "Terletak strategis di jantung Tarogong Kidul, Garut. Mahesa Medical Center mengadopsi standar layanan kesehatan yang menyederhanakan proses kompleks menjadi praktis."}
            </p>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              {lang === 'en' ? "We integrate general clinic, dental, inpatient care, along with pharmacy, x-ray, and laboratory facilities under one roof—providing comprehensive, time-saving services without having to move around." : "Kami menyatukan poli umum, gigi, rawat inap, beserta fasilitas apotek, rontgen, dan laboratorium ke dalam satu atap—menyediakan layanan menyeluruh, hemat waktu, dan tanpa harus repot berpindah tempat."}
            </p>

            {/* Quick Checkpoints */}
            <div className="space-y-3 pt-3">
              {checkpoints.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Core Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  id={`value-card-${index}`}
                  key={index}
                  className="bg-slate-50/60 hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/[0.03] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`p-3 rounded-xl inline-flex mb-4 border ${value.color}`}>
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">{value.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Disability highlight full-width Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 md:p-8 rounded-3xl shadow-xl shadow-blue-600/10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-5 flex-col md:flex-row text-center md:text-left">
            <div className="bg-white/10 p-3.5 rounded-2xl text-white">
              <Accessibility className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-blue-200">
                {lang === 'en' ? "Disability Friendly Facilities" : "Fasilitas Ramah Disabilitas"}
              </p>
              <h4 className="text-lg md:text-xl font-extrabold leading-tight">
                {lang === 'en' ? "Supporting Full Wheelchair Accessibility" : "Mendukung Aksesibilitas Penuh Kursi Roda"}
              </h4>
              <p className="text-sm text-blue-100 mt-1 max-w-2xl font-light">
                {CLINIC_INFO.facilities.disabilityFriendly[lang]} {lang === 'en' ? "Our security staff and nurses are certified to guide patients with physical limitations upon arrival." : "Staff keamanan dan perawat kami bersertifikasi siaga memandu penderita keterbatasan fisik sejak kedatangan."}
              </p>
            </div>
          </div>
          <a
            id="accessibility-learn-more"
            href="#buat-janji"
            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 font-extrabold text-xs px-5 py-3 rounded-xl transition"
          >
            {lang === 'en' ? "Learn / Contact" : "Pelajari / Hubungi Kontak"}
          </a>
        </div>

      </div>
    </section>
  );
}
