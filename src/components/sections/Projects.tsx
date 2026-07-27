'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Petron Corporate Dashboard',
    description:
      'Led frontend team building a corporate dashboard from scratch — registration, PIN setup, login, and inter-corporate fund transfer. Built Bulk Top-Up for 10,000 records via CSV/Excel.',
    tags: ['Next.js', 'React', 'Redux Toolkit', 'TanStack Query', 'MUI'],
    image: '/projects/petron.webp',
  },
  {
    title: 'Maybank Wealth Management',
    description:
      'Developed Unit Trust module end-to-end — Product Setup, Subscription, Redemption, and NAV calculation for complex wealth management operations.',
    tags: ['React', 'Redux', 'Ant Design', 'Tailwind CSS', 'Playwright'],
    image: '/projects/maybank.webp',
  },
  {
    title: 'BCA Wealth Management',
    description:
      'Developed Fixed Income module covering Product Setup, Buy, Sell, and Settlement for enterprise-scale investment transactions.',
    tags: ['React', 'Redux', 'Ant Design', 'Tailwind CSS'],
    image: '/projects/bca.webp',
  },
  {
    title: 'Pegadaian Insurance Claims',
    description:
      'Built insurance claims feature simplifying claim submission and tracking process for users.',
    tags: ['Vue', 'Tailwind CSS', 'Axios'],
    image: '/projects/pegadaian.webp',
  },
  {
    title: 'Dompet Nusantara',
    description:
      'Built UI and integrated WebView for payment flow, ensuring smooth transaction experience within partner app.',
    tags: ['Preact', 'Zustand', 'Tailwind CSS'],
    image: '/projects/dora.webp',
  },
  {
    title: 'Danamon Mutual Fund Platform',
    description:
      'Developed Subscription, Redemption, and Switching transaction features for mutual fund platform.',
    tags: ['Angular', 'Bootstrap'],
    image: '/projects/danamon.webp',
  },
  {
    title: 'Warehouse Management App',
    description:
      'Led 4-person team building warehouse and shipment management application from concept to implementation. Designed ERD.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
    image: '/projects/warehouse.webp',
  },
];

function allTags(projects: Project[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = allTags(projects);

  const filtered = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects;

  return (
    <section id="projects" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">Selected work</p>
        <h2 className="magic-section__title">Projects</h2>
      </div>

      <div className="mb-8 flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-(--border) bg-(--surface) p-1">
        <button
          onClick={() => setActiveTag(null)}
          className="magic-filter"
          data-active={activeTag === null}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="magic-filter"
            data-active={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.title} className="magic-card magic-card--interactive flex flex-col">
            <div className="relative mb-5 h-52 w-full overflow-hidden rounded-xl border border-(--border)">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <h3 className="mb-2 text-xl font-semibold leading-tight tracking-[-0.045em] text-(--text-strong)">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-(--text)">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="magic-tag text-[10px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-button magic-button--primary text-sm"
                >
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-button magic-button--outline text-sm"
                >
                  Repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
