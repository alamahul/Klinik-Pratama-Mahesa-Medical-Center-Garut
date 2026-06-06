import { MapPin, Phone, Mail, Clock, ShieldAlert, Heart, ExternalLink, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Info, Quick Links, Interactive Contact, Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#beranda" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-2.5 rounded-2xl text-white shadow-lg">
                <Heart className="w-5 h-5 fill-white/10" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base md:text-lg tracking-tight leading-none uppercase">
                  Mahesa <span className="text-blue-500">Medical</span>
                </h4>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider mt-1">
                  {lang === 'en' ? "Garut Primary Clinic" : "Klinik Pratama Garut"}
                </p>
              </div>
            </a>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
              {lang === 'en' 
                ? "Mahesa Medical Center Primary Clinic is committed to providing friendly, communicative, clean, and equal primary health care access for all levels of Garut society." 
                : "Klinik Pratama Mahesa Medical Center berkomitmen memberikan akses pelayanan kesehatan primer yang ramah, komunikatif, bersih, dan setara bagi seluruh lapisan masyarakat Garut."}
            </p>

            {/* Quick Badges of trust */}
            <div className="flex flex-col gap-2 pt-2 text-xs">
              <div className="flex items-center gap-2 font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'en' ? "Accredited First-Tier Health Facility (FKTP)" : "Terakreditasi Faskes Tingkat Pertama (FKTP)"}</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-400">
                <Clock className="w-4 h-4" />
                <span>{lang === 'en' ? "Service Standby Until 18:00 WIB" : "Siaga Layanan Hingga Pukul 18.00 WIB"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? "Navigation" : "Navigasi"}
            </h5>
            <ul className="flex flex-col gap-3 text-xs md:text-sm">
              <li>
                <a href="#beranda" className="hover:text-blue-400 transition">{lang === 'en' ? "Home" : "Beranda"}</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-400 transition">{lang === 'en' ? "Services" : "Layanan"}</a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-blue-400 transition">{lang === 'en' ? "Excellence" : "Keunggulan"}</a>
              </li>
              <li>
                <a href="#bpjs" className="hover:text-blue-400 transition">BPJS</a>
              </li>
              <li>
                <a href="#ulasan" className="hover:text-blue-400 transition">{lang === 'en' ? "Reviews" : "Ulasan"}</a>
              </li>
              <li>
                <a href="#buat-janji" className="hover:text-blue-400 transition">{lang === 'en' ? "Registration" : "Pendaftaran"}</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours Column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? "Operating Hours" : "Jam Operasional"}
            </h5>
            <div className="flex flex-col gap-3 text-xs md:text-sm">
              {(CLINIC_INFO.detailedHours[lang as keyof typeof CLINIC_INFO.detailedHours] || CLINIC_INFO.detailedHours['id']).map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{item.day}</span>
                  <span className="font-bold text-white text-right">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-start gap-2 text-[10px] text-amber-500/90 mt-2 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
              <Clock className="w-3 h-3 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {lang === 'en' 
                  ? "ER & Inpatient has limited services outside these hours. Contact WA for emergencies." 
                  : "UGD & Ranap berjalan terbatas di luar jam diatas. Hubungi WA untuk darurat."}
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? "Location & Contact" : "Lokasi & Kontak"}
            </h5>
            
            <div className="space-y-4 text-xs md:text-sm mb-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">
                  {CLINIC_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold">
                  WA: <a id="footer-phone-link" href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 underline transition">{CLINIC_INFO.phone}</a>
                </span>
              </div>
            </div>

            {/* Google Maps embed with professional styling */}
            <div className="pt-2">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-800 h-44 bg-slate-950">
                <iframe
                  title="Klinik Pratama Mahesa Medical Center Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.309088722022!2d107.8823055!3d-7.2320788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1959771ba09%3A0xe6bf44bcfe1bfce9!2sKlinik%20Pratama%20Mahesa%20Medical%20Center!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500"
                />
              </div>
              <a
                id="footer-open-gmaps"
                href="https://maps.app.goo.gl/r6VCH9NfNREgC26a6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-blue-400 hover:text-blue-300 font-extrabold uppercase tracking-wide mt-2"
              >
                {lang === 'en' ? "Open in Google Maps" : "Buka di Google Maps"}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright sub bar bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {currentYear} {CLINIC_INFO.name}. {lang === 'en' ? "Guaranteed Equal & Professional Medical Rights." : "Jaminan Hak Medis Setara & Profesional."}</p>
          <div className="flex items-center gap-4">
            <a href="#beranda" className="hover:text-slate-400">{lang === 'en' ? "Privacy Policy" : "Kebijakan Privasi"}</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <a href="#beranda" className="hover:text-slate-400">{lang === 'en' ? "Terms of Service" : "Ketentuan Layanan"}</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span className="text-slate-500 font-bold">Garut, {lang === 'en' ? "West Java" : "Jawa Barat"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
