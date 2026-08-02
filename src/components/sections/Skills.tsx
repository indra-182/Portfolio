import { skills } from '@/data/skills';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function Skills() {
  return (
    <section id="skills" className="section section--skills" aria-labelledby="skills-heading">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Technical capabilities</p>
              <h2 id="skills-heading">A practical stack for complex products.</h2>
            </div>
            <p className="section-heading__aside">
              Frontend is the center of gravity. Full-stack experience helps me collaborate across
              the whole delivery surface.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="skills-grid">
          {skills.map((group) => (
            <StaggerItem key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
