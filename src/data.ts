import { Service, Testimonial, FAQItem } from './types';
import { Language } from './contexts/LanguageContext';

export const CLINIC_INFO = {
  name: "Klinik Pratama Mahesa",
  shortName: "Mahesa",
  address: "Jl. Cimanuk No.10, Garut 44151",
  phone: "0822-6232-4040",
  whatsappNumber: "+62 822-6232-4040",
  whatsappUrl: "https://wa.me/6282262324040",
  operationalHours: {
    id: "Setiap Hari s/d 18.00 WIB",
    en: "Every Day until 18.00 WIB"
  },
  detailedHours: {
    id: [
      { day: "Senin - Jumat", hours: "08:00 - 18:00 WIB" },
      { day: "Sabtu - Minggu", hours: "08:00 - 18:00 WIB" },
      { day: "Hari Libur Nasional", hours: "Buka Terbatas (Cek WA)" }
    ],
    en: [
      { day: "Monday - Friday", hours: "08:00 - 18:00 WIB" },
      { day: "Saturday - Sunday", hours: "08:00 - 18:00 WIB" },
      { day: "National Holidays", hours: "Limited Hours (Check WA)" }
    ]
  },
  rating: {
    score: 4.9,
    reviewsCount: 89,
    stars: 5,
  },
  facilities: {
    disabilityFriendly: {
      id: "Akses kursi roda tersedia.",
      en: "Wheelchair access available."
    },
    pharmacy: {
      id: "Apotek lengkap terintegrasi.",
      en: "Fully integrated pharmacy."
    },
    telemedicine: {
      id: "Konsultasi via WhatsApp.",
      en: "Consultation via WhatsApp."
    }
  }
};

export const SERVICES: Record<Language, Service[]> = {
  id: [
    {
      id: "poli-umum",
      name: "Poli Umum",
      category: "poli",
      description: "Pemeriksaan medis umum, preventif, dan komunikatif.",
      detailedDescription: "Fokus pada keluhan umum, pencegahan, dan diagnosis awal. Dokter kami siap mengedukasi seputar pola hidup sehat.",
      iconName: "Stethoscope",
      features: ["Skrining Dasar", "Konsultasi BPJS", "Penyakit Umum", "Edukasi Medis"]
    },
    {
      id: "poli-gigi",
      name: "Poli Gigi",
      category: "poli",
      description: "Perawatan gigi dengan tindakan minim nyeri.",
      detailedDescription: "Layanan cabut, tambal, dan scaling dengan pendekatan modern yang membuat prosedur bebas cemas bagi segala usia.",
      iconName: "Smile",
      features: ["Tambal Rapi", "Pembersihan Karang", "Cabut Gigi", "Ramah Anak"]
    },
    {
      id: "ugd",
      name: "UGD",
      category: "emergency",
      description: "Penanganan cepat untuk situasi darurat.",
      detailedDescription: "Pertolongan untuk kondisi gawat darurat ringan hingga sedang, seperti demam tinggi, cidera akut, dan luka luar.",
      iconName: "Activity",
      features: ["Respon Cepat", "Jahitan Luka", "Penanganan Akut", "P3K"]
    },
    {
      id: "rawat-inap",
      name: "Rawat Inap",
      category: "ranap",
      description: "Kamar nyaman dengan pantauan 24 jam.",
      detailedDescription: "Pemulihan nyaman di ruang steril dengan suhu terjaga, sirkulasi lancar, dan pemantauan perawat yang sigap.",
      iconName: "Bed",
      features: ["Kamar AC Nyaman", "Visite Terjadwal", "Asuhan Perawat", "Menu Sehat"]
    },
    {
      id: "rontgen-xray",
      name: "Rontgen",
      category: "support",
      description: "Penunjang radiologi dengan hasil instan.",
      detailedDescription: "Pemeriksaan tulang paru dan organ dengan dosis rendah. Hasil keluar cepat untuk ketepatan diagnosis dokter.",
      iconName: "Bone",
      features: ["Rontgen Thorax", "Foto Tulang", "Emisi Rendah", "Langsung Baca"]
    },
    {
      id: "apotek-mahesa",
      name: "Apotek",
      category: "support",
      description: "Penyediaan obat lengkap & suplementasi.",
      detailedDescription: "Apotek internal dengan jaminan obat berstandar BPJS/Umum. Apoteker kami akan memandu cara minum obat yang benar.",
      iconName: "Tablets",
      features: ["Obat Asli", "Terima Resep", "Informasi Dosis", "Vitamin Lengkap"]
    }
  ],
  en: [
    {
      id: "poli-umum",
      name: "General Clinic",
      category: "poli",
      description: "General, preventive, and communicative medical checkups.",
      detailedDescription: "Focuses on general complaints, prevention, and early diagnosis. Our doctors are ready to educate you about healthy lifestyles.",
      iconName: "Stethoscope",
      features: ["Basic Screening", "BPJS Consultation", "General Illness", "Medical Education"]
    },
    {
      id: "poli-gigi",
      name: "Dental Clinic",
      category: "poli",
      description: "Dental care with minimal pain procedures.",
      detailedDescription: "Extraction, filling, and scaling services with a modern approach that makes procedures anxiety-free for all ages.",
      iconName: "Smile",
      features: ["Neat Fillings", "Scaling", "Tooth Extraction", "Child Friendly"]
    },
    {
      id: "ugd",
      name: "ER",
      category: "emergency",
      description: "Fast response for emergency situations.",
      detailedDescription: "Help for mild to moderate emergency conditions, such as high fever, acute injury, and external wounds.",
      iconName: "Activity",
      features: ["Fast Response", "Wound Stitching", "Acute Care", "First Aid"]
    },
    {
      id: "rawat-inap",
      name: "Inpatient Care",
      category: "ranap",
      description: "Comfortable rooms with 24-hour monitoring.",
      detailedDescription: "Comfortable recovery in a sterile room with maintained temperature, smooth circulation, and alert nurse monitoring.",
      iconName: "Bed",
      features: ["Comfortable AC Room", "Scheduled Visits", "Nurse Care", "Healthy Menu"]
    },
    {
      id: "rontgen-xray",
      name: "X-Ray",
      category: "support",
      description: "Radiology support with instant results.",
      detailedDescription: "Examination of lungs, bones, and organs with low doses. Results come out quickly for accurate doctor diagnosis.",
      iconName: "Bone",
      features: ["Thorax X-Ray", "Bone Photo", "Low Emission", "Instant Read"]
    },
    {
      id: "apotek-mahesa",
      name: "Pharmacy",
      category: "support",
      description: "Complete medicine supply & supplements.",
      detailedDescription: "Internal pharmacy providing medicines. Our pharmacists will guide you on how to take medicine correctly.",
      iconName: "Tablets",
      features: ["Original Medicine", "Prescriptions", "Dosage Info", "Complete Vitamins"]
    }
  ]
};

export const TESTIMONIALS: Record<Language, Testimonial[]> = {
  id: [
    {
      id: "testi-1",
      name: "Dewi Kartika",
      reviewDate: "2 mgg lalu",
      rating: 5,
      text: "Pelayanan BPJS-nya setara dengan pasien umum! Sangat mudah dan sat-set menggunakan antrean JKN Mobile di sini.",
      originalText: "Menerima pasien BPJS dan BPJS Tamu dengan pelayanan yang setara.",
      role: "Pasien BPJS",
      source: "Google Maps"
    },
    {
      id: "testi-2",
      name: "Budi Hermawan",
      reviewDate: "1 bln lalu",
      rating: 5,
      text: "Klinik luar biasa bersih dan nyaman. Satpamnya juga cekatan membantu pasien lansia yang butuh kursi roda.",
      originalText: "Dokter, perawat, apoteker, dan satpam sangat ramah dan komunikatif.",
      role: "Keluarga Pasien",
      source: "Google Maps"
    },
    {
      id: "testi-3",
      name: "Hendra W.",
      reviewDate: "3 mgg lalu",
      rating: 5,
      text: "Poli Gigi-nya recommended! Cabut gigi sama sekali tidak sakit. Dokter menjelaskannya jelas dan mudah dimengerti.",
      originalText: "Poli Gigi mantap dokter edukatif dan tindakan yang tidak sakit.",
      role: "Pasien Poli Gigi",
      source: "Google Maps"
    },
    {
      id: "testi-4",
      name: "Siti Rahmawati",
      reviewDate: "2 bln lalu",
      rating: 5,
      text: "Hasil rontgen keluar sangat cepat, admin di WhatsApp juga responsif tiap ditanya jadwal praktek atau ketersediaan obat.",
      originalText: "Rontgen hasil cepat, melayani konsultasi online via WhatsApp.",
      role: "Pasien Umum",
      source: "Google Maps"
    }
  ],
  en: [
    {
      id: "testi-1",
      name: "Dewi Kartika",
      reviewDate: "2 wks ago",
      rating: 5,
      text: "The BPJS service is equivalent to general patients! It's very easy and fast to use the JKN Mobile queue here.",
      originalText: "Accepting BPJS and Guest BPJS patients with equal service.",
      role: "BPJS Patient",
      source: "Google Maps"
    },
    {
      id: "testi-2",
      name: "Budi Hermawan",
      reviewDate: "1 mo ago",
      rating: 5,
      text: "The clinic is incredibly clean and comfortable. The security guard was also quick to help elderly patients who need a wheelchair.",
      originalText: "Doctors, nurses, pharmacists, and security guards are very friendly and communicative.",
      role: "Patient's Family",
      source: "Google Maps"
    },
    {
      id: "testi-3",
      name: "Hendra W.",
      reviewDate: "3 wks ago",
      rating: 5,
      text: "Highly recommended Dental Clinic! Tooth extraction was completely painless. The doctor explained everything clearly and understandably.",
      originalText: "Great Dental Clinic with an educative doctor and painless procedures.",
      role: "Dental Patient",
      source: "Google Maps"
    },
    {
      id: "testi-4",
      name: "Siti Rahmawati",
      reviewDate: "2 mos ago",
      rating: 5,
      text: "X-ray results came out very quickly, the WhatsApp admin is also responsive whenever asked about practice schedules or medicine availability.",
      originalText: "Fast X-ray results, serving online consultation via WhatsApp.",
      role: "General Patient",
      source: "Google Maps"
    }
  ]
};

export const FAQS: Record<Language, FAQItem[]> = {
  id: [
    {
      category: "BPJS",
      question: "Apakah menerima BPJS Kesehatan atau BPJS Tamu?",
      answer: "Tentu. Kami melayani pengguna BPJS murni maupun luar daerah tanpa diskriminasi."
    },
    {
      category: "BPJS",
      question: "Bagaimana cara ambil antrean lewat aplikasi JKN?",
      answer: "Pilih Klinik Mahesa sebagai Faskes, klik pendaftaran di aplikasi, lalu Anda akan langsung dapat nomor digital."
    },
    {
      category: "Layanan",
      question: "Apakah tambal/cabut gigi digratiskan BPJS?",
      answer: "Ya, tindakan dasar seperti cabut gigi tanpa penyulit, tambal, dan scaling rutin dicover secara gratis."
    },
    {
      category: "Operasional",
      question: "Jam buka sampai kapan?",
      answer: "Kami melayani poli umum, gigi, dan BPJS tiap hari hingga 18.00 WIB."
    },
    {
      category: "Layanan",
      question: "Bisa tebus resep dan rontgen harian sekalian?",
      answer: "Bisa, layanan radiologi rontgen dan Apotek kami selalu tersedia di satu tempat."
    },
    {
      category: "Umum",
      question: "Gimana kalau ingin konsultasi jadwal dulu via pesan online?",
      answer: "Silakan chat nomor WhatsApp 0822-6232-4040. Admin medis kami akan menuntun Anda."
    }
  ],
  en: [
    {
      category: "BPJS",
      question: "Do you accept BPJS Health or Guest BPJS?",
      answer: "Certainly. We serve basic BPJS and out-of-town users without discrimination."
    },
    {
      category: "BPJS",
      question: "How do I queue via the JKN app?",
      answer: "Select Mahesa Clinic as your Facility, click registration in the app, and you will immediately get a digital number."
    },
    {
      category: "Layanan",
      question: "Are tooth fillings/extractions free with BPJS?",
      answer: "Yes, basic procedures like straightforward extractions, fillings, and routine scaling are covered for free."
    },
    {
      category: "Operasional",
      question: "What are your opening hours?",
      answer: "We serve the general clinic, dental, and BPJS every day until 18.00 WIB."
    },
    {
      category: "Layanan",
      question: "Can I get my prescription and x-ray done together?",
      answer: "Yes, our radiant x-ray services and Pharmacy are always available in one place."
    },
    {
      category: "Umum",
      question: "What if I want to consult the schedule via online message first?",
      answer: "Please chat our WhatsApp number 0822-6232-4040. Our medical admin will guide you."
    }
  ]
};
