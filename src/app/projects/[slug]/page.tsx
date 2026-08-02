import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} | Mahadi Indra Manurung`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="case-study">
      <div className="section-shell">
        <Link className="back-link" href="/#projects">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        <header className="case-study__header">
          <div>
            <p className="eyebrow">
              {project.number} / {project.category}
            </p>
            <h1>{project.title}</h1>
            <p className="case-study__summary">{project.summary}</p>
          </div>
          <dl className="case-study__meta">
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
        </header>

        <div className="case-study__hero-image">
          <Image
            src={project.image}
            alt={`${project.client} project mark`}
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="case-study__body">
          <div className="case-study__main">
            <p className="eyebrow">The work</p>
            <p className="case-study__description">{project.description}</p>
          </div>

          <aside className="case-study__aside" aria-labelledby="highlights-heading">
            <p className="eyebrow" id="highlights-heading">
              Highlights
            </p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="case-study__footer">
          <div>
            <p className="eyebrow">Stack</p>
            <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Link className="button button--primary" href={`/projects/${nextProject.slug}`}>
            Next case study <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}
