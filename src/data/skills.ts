export interface Skill {
  name: string;
  level: 'Familiar' | 'Proficient' | 'Advanced';
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Angular', level: 'Proficient' },
      { name: 'Vue', level: 'Proficient' },
      { name: 'TanStack Query', level: 'Advanced' },
      { name: 'Axios', level: 'Advanced' },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Redux', level: 'Advanced' },
      { name: 'Zustand', level: 'Proficient' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'ANT Design', level: 'Advanced' },
      { name: 'Shadcn UI', level: 'Proficient' },
      { name: 'Bootstrap', level: 'Proficient' },
      { name: 'MUI', level: 'Proficient' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'NPM', level: 'Advanced' },
      { name: 'Yarn', level: 'Proficient' },
      { name: 'Bun', level: 'Proficient' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'JIRA', level: 'Proficient' },
    ],
  },
  {
    category: 'Testing',
    items: [{ name: 'Playwright', level: 'Proficient' }],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 'Proficient' },
      { name: 'Spring Boot', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Proficient' },
    ],
  },
];
