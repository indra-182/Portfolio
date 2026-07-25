export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  photo?: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Frisko Mayufid',
    role: 'Senior Frontend Engineer',
    company: 'Indivara Group',
    quote:
      'Indra is a highly recommended engineer with strong technical skills and a collaborative mindset. He consistently delivers quality work across complex financial projects and is someone you can always rely on.',
  },
  {
    name: 'Wahyu Aziz',
    role: 'Backend Engineer',
    quote:
      'Working with Indra has been a great experience. He has deep frontend expertise and communicates well across the stack. Highly recommended as a teammate and engineer.',
  },
  {
    name: 'Gibran',
    role: 'Computer Science Student',
    company: 'Indraprasta PGRI University',
    quote:
      'Indra helped me with my thesis project using Java. He explained everything clearly and made sure I understood the concepts. Great mentor and teacher.',
  },
];
