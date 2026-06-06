import React, { useState } from "react";
import { 
  Calendar, Clock, User, Phone, CheckSquare, 
  MessageSquare, FileText, Smartphone, Send, ClipboardCheck, ArrowRight 
} from "lucide-react";
import { CLINIC_INFO, SERVICES } from "../data";
import { BookingFormState } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

export default function BookingForm() {
  const { lang } = useLanguage();
  
  const [formData, setFormData] = useState<BookingFormState>({
    clinicianType: "Poli Umum",
    patientName: "",
    phoneNumber: "",
    bookingDate: "",
    bookingTime: "09.00 - 11.00 WIB",
    bpjsNumber: "",
    isBpjs: false,
    notes: "",
  });

  const [bookingGenerated, setBookingGenerated] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: checked,
      bpjsNumber: checked ? prev.bpjsNumber : "" // Clear if unchecked
    }));
  };

  // Construct WhatsApp draft message
  const constructWhatsAppMessage = (): string => {
    const space = " ";
    const lines = lang === 'en' ? [
      `👋 Hello Mahesa Medical Center Admin,`,
      `I would like to make a CLINIC APPOINTMENT via the official website:`,
      `──────────────────────`,
      `👤 Full Name:${space}${formData.patientName || "-"}`,
      `📞 WhatsApp No.:${space}${formData.phoneNumber || "-"}`,
      `🏥 Dept / Clinic:${space}${formData.clinicianType}`,
      `📅 Planned Date:${space}${formData.bookingDate || "-"}`,
      `⏰ Time Preference:${space}${formData.bookingTime}`,
      `💳 Service Type:${space}${formData.isBpjs ? `BPJS Health (No: ${formData.bpjsNumber || "-"})` : "General Patient"}`,
      `📝 Medical Complaint:${space}${formData.notes || "-"}`,
      `──────────────────────`,
      `Please confirm the doctor's availability at this time. Thank you.`
    ] : [
      `👋 Halo Admin Klinik Mahesa Medical Center,`,
      `Saya ingin membuat JANJI TEMU BEROBAT melalui website resmi:`,
      `──────────────────────`,
      `👤 Nama Lengkap:${space}${formData.patientName || "-"}`,
      `📞 No. WhatsApp:${space}${formData.phoneNumber || "-"}`,
      `🏥 Poli Tujuan:${space}${formData.clinicianType}`,
      `📅 Rencana Tanggal:${space}${formData.bookingDate || "-"}`,
      `⏰ Pilihan Jam:${space}${formData.bookingTime}`,
      `💳 Jenis Layanan:${space}${formData.isBpjs ? `BPJS Kesehatan (No: ${formData.bpjsNumber || "-"})` : "Pasien Umum"}`,
      `📝 Keluhan Medis:${space}${formData.notes || "-"}`,
      `──────────────────────`,
      `Mohon konfirmasi ketersediaan kuota dokter di jam tersebut. Terima kasih.`
    ];
    return lines.join("\n");
  };

  const currentWaText = constructWhatsAppMessage();

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phoneNumber || !formData.bookingDate) {
      alert(lang === 'en' ? "Please provide Name, WhatsApp No, and Appointment Date" : "Harap lengkapi Nama, No. WhatsApp, dan Tanggal Berobat");
      return;
    }
    const encodedMessage = encodeURIComponent(currentWaText);
    const waLink = `https://wa.me/6282262324040?text=${encodedMessage}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
    setBookingGenerated(true);
  };

  // Predefined time sessions
  const timeSessions = lang === 'en' ? [
    "08.00 - 10.00 WIB (Morning Session A)",
    "10.00 - 12.00 WIB (Morning Session B)",
    "13.00 - 15.00 WIB (Afternoon Session A)",
    "15.00 - 17.00 WIB (Afternoon Session B)",
    "17.00 - 18.00 WIB (Evening Session)",
  ] : [
    "08.00 - 10.00 WIB (Sesi Pagi A)",
    "10.00 - 12.00 WIB (Sesi Pagi B)",
    "13.00 - 15.00 WIB (Sesi Siang A)",
    "15.00 - 17.00 WIB (Sesi Siang B)",
    "17.00 - 18.00 WIB (Sesi Sore)",
  ];

  return (
    <section id="buat-janji" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            {lang === 'en' ? "DOCTOR / CLINIC RESERVATION" : "RESERVASI DOKTER / POLI"}
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {lang === 'en' ? "Send Appointment Easily via WhatsApp" : "Kirim Janji Temu Mudah via WhatsApp"}
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Form Container Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100">
          
          {/* Left Column: Input Form fields */}
          <form id="appointment-form" onSubmit={handleSendWhatsApp} className="lg:col-span-7 space-y-6">
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-200">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
              {lang === 'en' ? "Complete Appointment Data" : "Lengkapi Data Janji Temu"}
            </h3>

            {/* General details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Patient Name */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  {lang === 'en' ? "Patient Full Name *" : "Nama Lengkap Pasien *"}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    id="input-patient-name"
                    type="text"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder={lang === 'en' ? "Example: John Doe" : "Contoh: Budi Hermawan"}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                  />
                </div>
              </div>

              {/* Patient Phone Number (WA) */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  {lang === 'en' ? "Active WhatsApp No *" : "No. WhatsApp Aktif *"}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    id="input-phone-number"
                    type="text"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={lang === 'en' ? "Example: 0812345678" : "Contoh: 0812345678"}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                  />
                </div>
              </div>

              {/* Service Selection Clinic */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  {lang === 'en' ? "Clinic / Facility *" : "Poli / Penunjang Medis *"}
                </label>
                <div className="relative">
                  <select
                    id="input-serv-type"
                    name="clinicianType"
                    value={formData.clinicianType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition appearance-none"
                  >
                    {lang === 'en' ? (
                      <>
                        <option value="Poli Umum">General Clinic</option>
                        <option value="Poli Gigi">Dental Clinic</option>
                        <option value="Unit Gawat Darurat (UGD)">ER / Emergency</option>
                        <option value="Rawat Inap (Ranap)">Inpatient Care</option>
                        <option value="Rontgen (X-Ray)">X-Ray & Lab</option>
                      </>
                    ) : (
                      <>
                        <option value="Poli Umum">Poli Umum (Konsultasi Umum)</option>
                        <option value="Poli Gigi">Poli Gigi & Mulut</option>
                        <option value="Unit Gawat Darurat (UGD)">UGD (Unit Gawat Darurat)</option>
                        <option value="Rawat Inap (Ranap)">Rawat Inap (Ranap)</option>
                        <option value="Rontgen (X-Ray)">Rontgen (X-Ray) & Laboratorium</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Booking Date */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  {lang === 'en' ? "Appointment Date *" : "Format Rencana Tanggal Berobat *"}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    id="input-booking-date"
                    type="date"
                    name="bookingDate"
                    required
                    value={formData.bookingDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                  />
                </div>
              </div>

              {/* Booking Time Session */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  {lang === 'en' ? "Arrival Time Session" : "Sesi Jam Kedatangan"}
                </label>
                <select
                  id="input-booking-time"
                  name="bookingTime"
                  value={formData.bookingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                >
                  {timeSessions.map((session, i) => (
                    <option key={i} value={session}>{session}</option>
                  ))}
                </select>
              </div>

              {/* BPJS Flag */}
              <div className="flex items-center gap-3 pt-6 min-h-[50px]">
                <input
                  id="checkbox-is-bpjs"
                  type="checkbox"
                  name="isBpjs"
                  checked={formData.isBpjs}
                  onChange={handleCheckboxChange}
                  className="w-4.5 h-4.5 text-blue-600 border-slate-300 focus:ring-blue-500 rounded transition"
                />
                <label htmlFor="checkbox-is-bpjs" className="text-sm font-extrabold text-slate-700 cursor-pointer select-none">
                  {lang === 'en' ? "I am a BPJS Patient" : "Saya Pasien BPJS Kesehatan"}
                </label>
              </div>

            </div>

            {/* BPJS Number Card */}
            {formData.isBpjs && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-2 animate-in fade-in duration-200">
                <label className="text-xs font-extrabold text-blue-700 uppercase tracking-wider block">
                  {lang === 'en' ? "BPJS / JKN Card Number *" : "Nomor Kartu BPJS / JKN *"}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-blue-400 pointer-events-none">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <input
                    id="input-bpjs-number"
                    type="text"
                    name="bpjsNumber"
                    required={formData.isBpjs}
                    value={formData.bpjsNumber}
                    onChange={handleInputChange}
                    placeholder="Contoh: 0001234567890"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-semibold transition"
                  />
                </div>
                <p className="text-[10px] text-blue-600 leading-normal font-medium">
                  {lang === 'en' 
                    ? "Ensure your first-tier referral facility is directed to or can be adjusted to Mahesa Medical Center." 
                    : "Pastikan faskes rujukan tingkat pertama Anda mengarah atau dapat disesuaikan ke Mahesa Medical Center."}
                </p>
              </div>
            )}

            {/* Symptoms notes */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                {lang === 'en' ? "Brief Description of Complaints" : "Uraian Ringkas Keluhan Medis"}
              </label>
              <div className="relative">
                <span className="absolute top-3 left-3 text-slate-400 pointer-events-none">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea
                  id="input-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={lang === 'en' ? "E.g: Fever going up and down for 2 days with headache." : "Misalnya: Demam naik turun sejak 2 hari, disertai pusing kepala."}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-slate-800 text-sm font-medium transition"
                />
              </div>
            </div>

            {/* Submit Button Trigger */}
            <button
              id="btn-submit-booking"
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base rounded-2xl hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98] transition duration-200"
            >
              <Send className="w-5 h-5" />
              {lang === 'en' ? "Send Reservation to WhatsApp" : "Kirim Reservasi Ke WhatsApp"}
            </button>
          </form>

          {/* Right Column: Live Message Preview */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {lang === 'en' ? "Sent Message Preview" : "Pratinjau Pesan Terkirim"}
            </h3>

            {/* Mock Chat Box Interface */}
            <div className="bg-[#e5ddd5] rounded-3xl p-4 border border-slate-100 shadow-inner relative overflow-hidden">
              {/* WhatsApp header mock details */}
              <div className="bg-[#075e54] text-white p-3 rounded-t-2xl -mx-4 -mt-4 mb-4 flex items-center gap-3 shadow-md">
                <div className="w-9 h-9 bg-teal-800 text-teal-200 font-extrabold text-sm rounded-full flex items-center justify-center border border-teal-700">
                  MMC
                </div>
                <div>
                  <h4 className="font-extrabold text-xs">{CLINIC_INFO.name}</h4>
                  <p className="text-[9px] text-teal-100/95 font-medium flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {lang === 'en' ? "Online (Customer Service)" : "Online (Customer Service)"}
                  </p>
                </div>
              </div>

              {/* Chat Message Bubble */}
              <div className="flex flex-col space-y-3">
                <div className="bg-[#dcf8c6] text-slate-800 p-3.5 rounded-2xl rounded-tr-none max-w-[90%] self-end shadow-xs text-xs font-mono whitespace-pre-line leading-relaxed relative">
                  {currentWaText}
                  <span className="block text-[8px] text-slate-500 text-right mt-1.5 font-sans">
                    04.22 ({lang === 'en' ? "Processed from Official Website" : "Diproses dari Website Resmi"}) ✔✔
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Reminder Help Box */}
            <div className="bg-amber-50/50 p-4 border border-amber-100 rounded-2xl text-xs text-amber-800 leading-relaxed font-semibold">
              <h4 className="font-extrabold mb-1">💡 {lang === 'en' ? "Additional Notes:" : "Catatan Tambahan:"}</h4>
              <p className="font-medium text-amber-700">
                {lang === 'en' 
                  ? "Registration above is free of any extra administrative charge. After you send the WhatsApp message, our CS will confirm via chat within a few minutes." 
                  : "Pendaftaran di atas gratis tanpa biaya administrasi ekstra. Setelah Anda mengirim pesan WhatsApp, pihak CS kami akan mengonfirmasi via balasan chat rentang beberapa menit saja."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
