export interface Project {
  slug: string;
  number: string;
  title: string;
  client: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'petron-corporate-dashboard',
    number: '01',
    title: 'Petron Corporate Dashboard',
    client: 'Petron Philippines',
    category: 'Enterprise payments',
    period: 'Mar 2025 - Mar 2026',
    role: 'Lead Frontend Engineer',
    summary:
      'A corporate dashboard for authentication, inter-company transfers, and high-volume top-up operations.',
    description:
      'Led frontend delivery for a corporate dashboard built from scratch, covering registration, PIN setup, authentication, and inter-company fund-transfer flows.',
    image: '/projects/petron.webp',
    tags: ['Next.js', 'React', 'Redux Toolkit', 'TanStack Query', 'MUI'],
    featured: true,
    highlights: [
      'Led frontend delivery within a cross-functional team.',
      'Built a bulk top-up workflow supporting CSV and Excel uploads of up to 10,000 transaction records per batch.',
      'Shaped the workflow from first authentication state through transaction completion.',
    ],
  },
  {
    slug: 'avantrade-maybank-wealth-management',
    number: '02',
    title: 'Maybank Wealth Management',
    client: 'Avantrade Maybank',
    category: 'Wealth management',
    period: 'Mar 2026 - Present',
    role: 'Frontend Engineer',
    summary:
      'A Unit Trust module supporting product setup, subscription, redemption, and NAV calculation workflows.',
    description:
      'Developed the Unit Trust module end to end for a wealth management system, with critical user journeys protected by automated Playwright coverage.',
    image: '/projects/maybank.webp',
    tags: ['React', 'Redux', 'Ant Design', 'Tailwind CSS', 'Playwright'],
    featured: true,
    highlights: [
      'Delivered Product Setup, Subscription, Redemption, and NAV calculation flows.',
      'Implemented Playwright automated tests for critical workflows.',
      'Worked across complex financial states and release requirements.',
    ],
  },
  {
    slug: 'avantrade-bca-fixed-income',
    number: '03',
    title: 'BCA Wealth Management',
    client: 'Avantrade BCA',
    category: 'Investment platform',
    period: 'Sep 2023 - Sep 2024',
    role: 'Frontend Engineer',
    summary:
      'A fixed-income investment module covering product setup, buying, selling, and settlement.',
    description:
      'Developed fixed-income product and transaction workflows for an enterprise wealth management platform used to manage investment operations.',
    image: '/projects/bca.webp',
    tags: ['React', 'Redux', 'Ant Design', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Built Product Setup workflows for fixed-income instruments.',
      'Delivered Buy, Sell, and Settlement transaction flows.',
      'Translated complex investment operations into dependable interfaces.',
    ],
  },
  {
    slug: 'warehouse-shipment-management',
    number: '04',
    title: 'Warehouse Management App',
    client: 'Java Development Training',
    category: 'Enterprise operations',
    period: 'Aug 2021 - Jan 2022',
    role: 'Full Stack Engineer',
    summary:
      'A warehouse and shipment management application delivered by a four-person team from concept to implementation.',
    description:
      'Led a four-person team through the build of a warehouse and shipment management application, combining frontend delivery with backend and data modeling work.',
    image: '/projects/warehouse.webp',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
    featured: true,
    highlights: [
      'Led a four-person delivery team.',
      'Designed the entity relationship diagram before implementation.',
      'Applied full-stack development practices with mentor guidance.',
    ],
  },
  {
    slug: 'pegadaian-insurance-claims',
    number: '05',
    title: 'Pegadaian Insurance Claims',
    client: 'Pegadaian Asuransi Service',
    category: 'Insurance workflow',
    period: 'Sep 2024 - Mar 2025',
    role: 'Frontend Engineer',
    summary: 'An insurance claims workflow for clearer submission and tracking.',
    description:
      'Developed an insurance-claims workflow that streamlined claim submission and tracking for users, partnering with QA during testing and release preparation.',
    image: '/projects/pegadaian.webp',
    tags: ['Vue', 'Tailwind CSS', 'Axios'],
    featured: false,
    highlights: [],
  },
  {
    slug: 'dompet-nusantara-payment-flow',
    number: '06',
    title: 'Dompet Nusantara',
    client: 'Mitra Artha Pembayaran',
    category: 'Payments',
    period: 'Apr 2023 - Sep 2023',
    role: 'Frontend Engineer',
    summary: 'A partner-app payment flow with a native-feeling embedded experience.',
    description:
      'Built the UI and integrated a WebView for the Dompet Nusantara payment flow inside a partner application.',
    image: '/projects/dora.webp',
    tags: ['Preact', 'Zustand', 'Tailwind CSS'],
    featured: false,
    highlights: [],
  },
  {
    slug: 'danamon-mutual-fund-platform',
    number: '07',
    title: 'Danamon Mutual Fund Platform',
    client: 'Bank Danamon Indonesia',
    category: 'Mutual funds',
    period: 'Nov 2022 - Apr 2023',
    role: 'Frontend Engineer',
    summary: 'Daily mutual-fund transaction workflows for subscription, redemption, and switching.',
    description:
      'Developed subscription, redemption, and switching workflows for a mutual-fund platform supporting daily transactions.',
    image: '/projects/danamon.webp',
    tags: ['Angular', 'Bootstrap'],
    featured: false,
    highlights: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const supportingProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
