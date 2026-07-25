export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Indivara Group',
    role: 'Frontend Developer',
    period: 'Aug 2021 — Present',
    achievements: [
      'Petron Philippines (2025-2026): Led frontend team building Corporate Dashboard from scratch — registration, PIN setup, login, inter-corporate fund transfer. Built Bulk Top-Up feature handling 10,000 transaction records via CSV/Excel.',
      'Avantrade Maybank — Wealth Management (2026-Present): Developed Unit Trust module end-to-end — Product Setup, Subscription, Redemption, NAV calculation. Built Playwright automation tests.',
      'Pegadaian Asuransi Service (2024-2025): Built insurance claims feature simplifying claim submission and tracking.',
      'Avantrade BCA — Wealth Management (2023-2024): Developed Fixed Income module — Product Setup, Buy, Sell, Settlement.',
      'Mitra Artha Pembayaran (2023): Built UI + WebView for Dompet Nusantara payment flow.',
      'Bank Danamon (2022-2023): Developed Subscription, Redemption, Switching features for mutual fund platform.',
      'Maintenance Service (2022): Bug fixes and system maintenance for BRI and PNM — Java, Spring Boot, PostgreSQL.',
      'Java Development Training (2021-2022): Led 4-person team building warehouse & shipment management app. Designed ERD.',
    ],
  },
  {
    company: 'Indraprasta PGRI University',
    role: 'Informatics Engineering',
    period: 'GPA 3.3 / 4.0',
    achievements: [],
  },
];
