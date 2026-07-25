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
    category: 'Languages',
    items: [
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Python', level: 'Proficient' },
      { name: 'Go', level: 'Familiar' },
      { name: 'SQL', level: 'Proficient' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express', level: 'Proficient' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'Figma', level: 'Familiar' },
    ],
  },
  {
    category: 'Cloud / DevOps',
    items: [
      { name: 'Vercel', level: 'Advanced' },
      { name: 'AWS', level: 'Familiar' },
      { name: 'CI/CD', level: 'Proficient' },
      { name: 'Linux', level: 'Proficient' },
    ],
  },
  {
    category: 'AI / Agentic',
    items: [
      { name: 'LangChain', level: 'Proficient' },
      { name: 'OpenAI API', level: 'Proficient' },
      { name: 'Vector DBs', level: 'Familiar' },
    ],
  },
];
