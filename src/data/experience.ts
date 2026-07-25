export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: 'TechCorp',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    achievements: [
      'Led migration from CRA to Next.js 14, improving Lighthouse score by 40 points.',
      'Built component library used across 4 product teams.',
      'Reduced bundle size by 60% via code splitting and lazy loading.',
    ],
  },
  {
    company: 'StartupXYZ',
    role: 'Full-stack Developer',
    period: '2021 — 2023',
    achievements: [
      'Shipped MVP in 6 weeks using Next.js + Supabase, securing first 100 paying customers.',
      'Designed and implemented real-time collaboration features with WebSockets.',
      'Wrote integration tests achieving 90% coverage across critical user flows.',
    ],
  },
  {
    company: 'WebAgency',
    role: 'Junior Developer',
    period: '2020 — 2021',
    achievements: [
      'Delivered 12+ client projects on time with React and Tailwind.',
      'Set up CI/CD pipelines reducing deployment time from hours to minutes.',
      'Mentored 3 interns through their first production deployments.',
    ],
  },
];
