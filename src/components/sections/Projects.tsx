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
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, checkout, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    image: '/projects/ecommerce.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/ecommerce',
  },
  {
    title: 'Real-time Chat App',
    description: 'WebSocket-powered messaging app with rooms, typing indicators, and file sharing.',
    tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
    image: '/projects/chat.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/chat',
  },
  {
    title: 'AI Content Generator',
    description: 'LLM-powered tool that generates blog posts, social copy, and marketing text.',
    tags: ['OpenAI', 'Next.js', 'LangChain', 'PostgreSQL'],
    image: '/projects/ai.jpg',
    demoUrl: 'https://example.com',
  },
  {
    title: 'DevOps Dashboard',
    description: 'Monitor deployments, server health, and CI/CD pipeline status in one place.',
    tags: ['React', 'D3.js', 'Docker', 'Go'],
    image: '/projects/devops.jpg',
    repoUrl: 'https://github.com/example/devops',
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

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">Projects</h2>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className="neo-tag text-xs font-bold uppercase"
          style={{
            background: activeTag === null ? 'var(--neo-accent-1)' : 'var(--neo-accent-3)',
            cursor: 'pointer',
            border: '2px solid #000',
            color: activeTag === null ? '#FFF' : '#000',
          }}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="neo-tag text-xs font-bold uppercase"
            style={{
              background: activeTag === tag ? 'var(--neo-accent-1)' : 'var(--neo-accent-3)',
              cursor: 'pointer',
              border: '2px solid #000',
              color: activeTag === tag ? '#FFF' : '#000',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.title} className="neo-card flex flex-col">
            <div className="relative mb-4 h-48 w-full overflow-hidden border-[3px] border-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <h3 className="mb-2 text-xl font-black uppercase leading-tight tracking-tight">
              {project.title}
            </h3>

            <p className="neo-prose mb-4 text-sm">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="neo-tag text-[10px]">
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
                  className="neo-btn text-sm"
                  style={{ padding: '8px 16px' }}
                >
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn text-sm"
                  style={{ padding: '8px 16px', background: 'var(--neo-bg)' }}
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
