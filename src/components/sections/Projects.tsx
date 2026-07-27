'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/MotionWrapper';

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
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTag(null)}
              className={`tag-pill transition-colors ${
                activeTag === null ? 'tag-pill--accent' : ''
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`tag-pill transition-colors ${
                  activeTag === tag ? 'tag-pill--accent' : ''
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <StaggerItem
              key={project.title}
              className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <HoverCard
                as="article"
                className="flex h-full flex-col border border-border bg-surface p-5"
              >
                <div className="relative mb-4 aspect-16/10 w-full overflow-hidden bg-soft">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight text-text">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[10px]">
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
                      className="btn btn--primary text-xs"
                    >
                      Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline text-xs"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
