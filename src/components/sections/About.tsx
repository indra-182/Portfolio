'use client';

import { ScrollReveal } from '@/components/MotionWrapper';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">About</h2>
          </div>

          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Frontend Engineer with 5+ years shipping digital products for banks, fintech, and
              enterprises. I work at Indivara Group across clients like BCA, Bank Danamon, BRI,
              Pegadaian, and Petron Philippines.
            </p>
            <p>
              My day to day is building interfaces that handle high-volume transactions, complex
              financial workflows, and data-heavy dashboards. I have led frontend delivery as the
              sole or lead engineer on cross-functional teams.
            </p>
            <p>
              I also know my way around the backend (Java, Spring Boot, PostgreSQL) and currently
              explore AI tooling to automate the boring parts of development.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://rxresu.me/mahadiindra2/mahadi-indra-cv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
