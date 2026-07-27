'use client';

import { skills } from '@/data/skills';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const levelColors: Record<string, string> = {
  Advanced: 'tag-pill--accent',
  Proficient: '',
  Familiar: '',
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-8">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-text-tertiary uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill.name} className={`tag-pill ${levelColors[skill.level] || ''}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
