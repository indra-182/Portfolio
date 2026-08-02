export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Indivara Group',
    role: 'Software Engineer | Frontend Engineer',
    period: 'Aug 2021 - Present',
    achievements: [
      'Delivered frontend work across banking, fintech, wealth-management, insurance, payment, and enterprise platforms.',
      'Led frontend delivery on selected engagements within cross-functional teams.',
      'Petron Philippines: built a corporate dashboard from scratch and a bulk top-up workflow supporting up to 10,000 transaction records per batch.',
      'Avantrade Maybank: developed the Unit Trust module end to end and implemented Playwright coverage for critical workflows.',
      'Pegadaian Asuransi Service: developed an insurance-claims workflow for submission and tracking.',
      'Avantrade BCA: developed fixed-income product setup, buy, sell, and settlement workflows.',
      'Mitra Artha Pembayaran and Bank Danamon: delivered payment and mutual-fund transaction experiences.',
      'Maintenance and Java development training: resolved production issues and led a four-person warehouse application team.',
    ],
  },
  {
    company: 'Indraprasta PGRI University',
    role: 'Bachelor - Informatics Engineering',
    period: 'GPA 3.3 / 4.0',
    achievements: [],
  },
];
