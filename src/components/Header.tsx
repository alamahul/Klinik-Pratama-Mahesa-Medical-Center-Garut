import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, Heart, Globe, Moon, Sun } from "lucide-react";
import { CLINIC_INFO } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: lang === 'en' ? "Home" : "Beranda", href: "#beranda" },
    { name: lang === 'en' ? "Services" : "Layanan", href: "#layanan" },
    { name: lang === 'en' ? "About & Excellence" : "Tentang Kami & Keunggulan", href: "#tentang-kami" },
    { name: lang === 'en' ? "BPJS Section" : "Seksi BPJS", href: "#bpjs" },
    { name: lang === 'en' ? "Reviews" : "Ulasan", href: "#ulasan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner Contact Infomation */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wide">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              WhatsApp: {CLINIC_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {CLINIC_INFO.operationalHours[lang]}
            </span>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Main Bar Navigation */}
      <nav
        className={`transition-all duration-300 px-4 md:px-8 py-3 md:py-4 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-blue-50/50 dark:border-slate-800/50 py-3"
            : "bg-white dark:bg-slate-900 md:bg-white/80 md:dark:bg-slate-900/80 md:backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Title */}
          <a id="nav-logo" href="#beranda" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-2 rounded-xl text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 fill-white/10" />
            </div>
            <div>
              <p className="font-extrabold text-[#0f172a] dark:text-white text-sm md:text-base tracking-tight leading-tight uppercase">
                Mahesa <span className="text-blue-600 dark:text-blue-400">Medical</span>
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                Klinik Pratama Garut
              </p>
            </div>
          </a>

          {/* Desktop Navigation Link */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Header Navigation CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors mr-1"
              title={lang === 'en' ? "Switch to Indonesian" : "Ganti ke Bahasa Inggris"}
            >
              <Globe className="w-5 h-5" />
              <span className="ml-1 text-xs font-bold">{lang === 'en' ? 'EN' : 'ID'}</span>
            </button>
            <a
              id="cta-nav-whatsapp"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 font-semibold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 border border-blue-100 gap-1.5 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
            >
              <Phone className="w-3.5 h-3.5" />
              {lang === 'en' ? "Contact Admin" : "Hubungi Admin"}
            </a>
            <a
              id="cta-nav-booking"
              href="#buat-janji"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              {lang === 'en' ? "Register / Book" : "Daftar / Buat Janji"}
            </a>
          </div>

          {/* Mobile Menu Button Burger Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-trigger"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  id={`nav-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-base hover:bg-slate-50 dark:hover:bg-slate-800/50 py-2.5 px-3 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <hr className="border-slate-100 dark:border-slate-800" />
            
            <div className="flex flex-col gap-2 px-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-1">
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" /> WhatsApp: {CLINIC_INFO.phone}</p>
              <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> {CLINIC_INFO.operationalHours[lang]}</p>
            </div>

            <div className="flex gap-3">
              <a
                id="cta-mobile-whatsapp"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                Chat WA
              </a>
              <a
                id="cta-mobile-booking"
                href="#buat-janji"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 active:scale-95 hover:shadow-lg hover:shadow-blue-500/20 text-white font-semibold text-sm py-3 rounded-xl transition"
              >
                {lang === 'en' ? "Register Now" : "Daftar Sekarang"}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
