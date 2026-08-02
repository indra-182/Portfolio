import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects, supportingProjects, type Project } from '@/data/projects';
import { HoverCard, ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

function ProjectTags({ project }: { project: Project }) {
  return (
    <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
      {project.tags.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <HoverCard as="article" className="project-card">
        <Link href={`/projects/${project.slug}`} className="project-card__link">
          <div className="project-card__media">
            <Image
              src={project.image}
              alt={`${project.client} project mark`}
              fill
              className="project-card__image"
              sizes="(max-width: 48rem) 100vw, 50vw"
            />
            <span className="project-card__view">View case study</span>
          </div>

          <div className="project-card__body">
            <p className="project-card__meta">
              <span>{project.number}</span>
              <span aria-hidden="true">/</span>
              <span>{project.category}</span>
            </p>
            <h3>{project.title}</h3>
            <p className="project-card__client">{project.client}</p>
            <p className="project-card__summary">{project.summary}</p>
            <ProjectTags project={project} />
          </div>
        </Link>
      </HoverCard>
    </StaggerItem>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--work" aria-labelledby="projects-heading">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading">Systems that make complex work feel clear.</h2>
            <p className="section-heading__intro">
              A selection of banking, fintech, and enterprise products I helped shape across
              frontend delivery, workflow design, and full-stack collaboration.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="project-grid">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="supporting-work">
            <div className="supporting-work__heading">
              <p className="eyebrow">More experience</p>
              <p>Additional engagements across insurance, payments, and mutual funds.</p>
            </div>
            <ul className="supporting-work__list">
              {supportingProjects.map((project) => (
                <li key={project.slug}>
                  <div>
                    <p className="supporting-work__number">{project.number}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.client}</p>
                  <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
