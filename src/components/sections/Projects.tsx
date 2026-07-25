"use client";

import { useState } from "react";
import Image from "next/image";

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
    title: "Petron Corporate Dashboard",
    description:
      "Led frontend team building a corporate dashboard from scratch — registration, PIN setup, login, and inter-corporate fund transfer. Built Bulk Top-Up for 10,000 records via CSV/Excel.",
    tags: ["Next.js", "React", "Redux Toolkit", "TanStack Query", "MUI"],
    image: "/projects/petron.webp",
  },
  {
    title: "Maybank Wealth Management",
    description:
      "Developed Unit Trust module end-to-end — Product Setup, Subscription, Redemption, and NAV calculation for complex wealth management operations.",
    tags: ["React", "Redux", "Ant Design", "Tailwind CSS", "Playwright"],
    image: "/projects/maybank.webp",
  },
  {
    title: "BCA Wealth Management",
    description:
      "Developed Fixed Income module covering Product Setup, Buy, Sell, and Settlement for enterprise-scale investment transactions.",
    tags: ["React", "Redux", "Ant Design", "Tailwind CSS"],
    image: "/projects/bca.webp",
  },
  {
    title: "Pegadaian Insurance Claims",
    description:
      "Built insurance claims feature simplifying claim submission and tracking process for users.",
    tags: ["Vue", "Tailwind CSS", "Axios"],
    image: "/projects/pegadaian.webp",
  },
  {
    title: "Dompet Nusantara",
    description:
      "Built UI and integrated WebView for payment flow, ensuring smooth transaction experience within partner app.",
    tags: ["Preact", "Zustand", "Tailwind CSS"],
    image: "/projects/dora.webp",
  },
  {
    title: "Danamon Mutual Fund Platform",
    description:
      "Developed Subscription, Redemption, and Switching transaction features for mutual fund platform.",
    tags: ["Angular", "Bootstrap"],
    image: "/projects/danamon.webp",
  },
  {
    title: "Warehouse Management App",
    description:
      "Led 4-person team building warehouse and shipment management application from concept to implementation. Designed ERD.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Angular"],
    image: "/projects/warehouse.webp",
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
             background:
               activeTag === null
                 ? "var(--neo-accent-1)"
                 : "var(--neo-accent-3)",
             cursor: "pointer",
             border: "2px solid #000",
             color: activeTag === null ? "var(--neo-text)" : "#000",
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
               background:
                 activeTag === tag
                   ? "var(--neo-accent-1)"
                   : "var(--neo-accent-3)",
               cursor: "pointer",
               border: "2px solid #000",
               color: activeTag === tag ? "var(--neo-text)" : "#000",
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
                  style={{ padding: "8px 16px" }}
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
                  style={{ padding: "8px 16px", background: "var(--neo-bg)" }}
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
