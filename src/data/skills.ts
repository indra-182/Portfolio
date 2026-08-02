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
    category: 'Frontend',
    items: [
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Vue', level: 'Proficient' },
      { name: 'Angular', level: 'Proficient' },
      { name: 'Preact', level: 'Proficient' },
    ],
  },
  {
    category: 'Data & state',
    items: [
      { name: 'TanStack Query', level: 'Advanced' },
      { name: 'Redux Toolkit', level: 'Advanced' },
      { name: 'Redux', level: 'Advanced' },
      { name: 'Zustand', level: 'Proficient' },
      { name: 'Axios', level: 'Advanced' },
    ],
  },
  {
    category: 'UI & quality',
    items: [
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Ant Design', level: 'Advanced' },
      { name: 'MUI', level: 'Proficient' },
      { name: 'shadcn/ui', level: 'Proficient' },
      { name: 'Playwright', level: 'Proficient' },
    ],
  },
  {
    category: 'Backend & platforms',
    items: [
      { name: 'Java', level: 'Proficient' },
      { name: 'Spring Boot', level: 'Proficient' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'MySQL', level: 'Familiar' },
      { name: 'Firebase', level: 'Familiar' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Jira', level: 'Proficient' },
    ],
  },
];
