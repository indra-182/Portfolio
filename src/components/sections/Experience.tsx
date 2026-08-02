import { experiences } from '@/data/experience';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Professional experience</p>
              <h2 id="experience-heading">Delivery experience across the stack.</h2>
            </div>
            <p className="section-heading__aside">
              One employer, multiple product environments, and a steady move from implementation to
              frontend ownership.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="experience-list">
          {experiences.map((experience, index) => (
            <StaggerItem key={`${experience.company}-${experience.role}`}>
              <article
                className={`experience-entry ${index === 0 ? 'experience-entry--primary' : ''}`}
              >
                <div className="experience-entry__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="experience-entry__content">
                  <div className="experience-entry__header">
                    <div>
                      <p className="eyebrow">{experience.company}</p>
                      <h3>{experience.role}</h3>
                    </div>
                    <p className="experience-entry__period">{experience.period}</p>
                  </div>

                  {experience.achievements.length > 0 && (
                    <ul className="experience-entry__highlights">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
