'use client';

import { experiences } from '@/data/experience';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="relative border-l border-border pl-10">
          {experiences.map((exp, i) => (
            <StaggerItem key={i} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.1rem] top-1.5 size-3 rounded-full border-2 border-bg bg-accent"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-text">{exp.role}</h3>
                  <p className="text-sm text-text-tertiary">{exp.company}</p>
                </div>
                <span className="tag-pill tag-pill--accent mt-1 w-fit sm:mt-0">{exp.period}</span>
              </div>
              {exp.achievements.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-tertiary"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
