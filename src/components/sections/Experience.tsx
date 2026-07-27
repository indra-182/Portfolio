import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">Career so far</p>
        <h2 className="magic-section__title">Experience</h2>
      </div>

      <div className="relative border-s border-(--border) ps-7">
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <article key={i} className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-s-[-2.02rem] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-(--page-background) bg-(--accent) shadow-[0_0_0_1px_var(--border)]"
              />
              <div className="magic-card magic-card--interactive">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-(--text-strong)">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-(--text-weak)">{exp.company}</p>
                  </div>
                  <span className="magic-tag magic-tag--accent w-fit">{exp.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-(--text)">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
