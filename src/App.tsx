import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BPJSSection from "./components/BPJSSection";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { MessageCircle, Phone, Heart, PlusCircle } from "lucide-react";
import { CLINIC_INFO } from "./data";
import { useLanguage } from "./contexts/LanguageContext";

export default function App() {
  const { lang } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-[#fafbfd] dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dynamic Header Component */}
      <Header />

      {/* Main Sections Body */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* About & Core Strengths Section */}
        <About />

        {/* Services Showcase Section */}
        <Services />

        {/* Dedicated BPJS Guide Section */}
        <BPJSSection />

        {/* Live Booking Registration Form */}
        <BookingForm />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Patient FAQs Index Section */}
        <FAQSection />
      </main>

      {/* Footer Details & Map Section */}
      <Footer />

      {/* Persistent Floating Contact Widgets */}
      <div className="fixed bottom-6 right-6 z-40 group flex flex-col items-end gap-2 animate-fade-in-up opacity-0 [animation-delay:1s]">
        {/* Informative bubble appearing on hover */}
        <div className="bg-white text-[#0f172a] text-xs font-extrabold px-3.5 py-2 rounded-xl shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 translate-y-1">
          <PlusCircle className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          <span>{lang === 'en' ? "Need Help? Contact Us" : "Butuh Bantuan? Hubungi Kami"}</span>
        </div>

        <div className="flex flex-col gap-3 items-center">
          {/* Direct Phone Call Button */}
          <a
            id="floating-call-widget"
            href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 active:scale-95 transition-all duration-300"
            aria-label={lang === 'en' ? "Call Clinic Directly" : "Telepon Klinik Langsung"}
          >
            <Phone className="w-5 h-5 fill-white/10" />
          </a>

          {/* The WhatsApp Action Circle button */}
          <div className="relative flex items-center justify-center w-14 h-14">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping [animation-duration:3s]"></span>
            <a
              id="floating-whatsapp-widget"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95 transition-all duration-300"
              aria-label={lang === 'en' ? "Online Consultation via WhatsApp" : "Konsultasi Online via WhatsApp"}
            >
              <MessageCircle className="w-7 h-7 fill-white/10" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
