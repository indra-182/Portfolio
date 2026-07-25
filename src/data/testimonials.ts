export interface Testimonial {
  name: string;
  role: string;
  company: string;
  photo?: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Alex Rivera',
    role: 'CTO',
    company: 'TechCorp',
    photo: '/avatars/alex.jpg',
    quote:
      'Indra is the kind of engineer who makes the whole team better. His code is clean, his architecture decisions are well-reasoned, and he communicates complex ideas with clarity.',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Lead',
    company: 'StartupXYZ',
    photo: '/avatars/sarah.jpg',
    quote:
      'Working with Indra felt like cheating. He delivered features faster than anyone I have worked with, without once cutting corners on quality.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Engineering Manager',
    company: 'WebAgency',
    photo: '/avatars/marcus.jpg',
    quote:
      'Indra has a rare combination of deep technical skill and genuine curiosity. He does not just solve problems — he finds the right problems to solve.',
  },
];
