export interface Service {
  id: string;
  name: string;
  category: 'poli' | 'ranap' | 'emergency' | 'support';
  description: string;
  detailedDescription: string;
  iconName: string; // Used to map to Lucide icons
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  reviewDate: string;
  rating: number;
  text: string;
  originalText: string;
  role: string; // e.g., "Pasien Poli Gigi", "Pasien BPJS"
  source: 'Google Maps' | 'Manual';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'BPJS' | 'Layanan' | 'Operasional' | 'Umum';
}

export interface BookingFormState {
  clinicianType: string;
  patientName: string;
  phoneNumber: string;
  bookingDate: string;
  bookingTime: string;
  bpjsNumber: string;
  isBpjs: boolean;
  notes: string;
}
