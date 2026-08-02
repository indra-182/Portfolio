import { ScrollReveal } from '@/components/MotionWrapper';

export default function About() {
  return (
    <section id="about" className="section section--about" aria-labelledby="about-heading">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-heading">
            <p className="eyebrow">Craft & mindset</p>
            <h2 id="about-heading">Frontend-first. Product-aware.</h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal>
            <div className="about-copy">
              <p>
                I am a Frontend Engineer with 5+ years of experience delivering digital products for
                banking, fintech, and enterprise clients through Indivara Group.
              </p>
              <p>
                My work sits where product complexity meets everyday use: transaction-heavy
                interfaces, data-rich dashboards, and financial workflows that need to feel clear
                even when the underlying rules are not.
              </p>
              <p>
                I also work across Java, Spring Boot, PostgreSQL, and full-stack delivery when a
                problem benefits from understanding the system behind the screen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="principle-card" aria-label="Working principle">
              <p className="eyebrow">Working principle</p>
              <p className="principle-card__quote">
                Good interfaces make complicated decisions feel deliberate, not mysterious.
              </p>
              <p className="principle-card__note">
                Clear states, resilient data flows, and testable delivery are part of the craft.
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
