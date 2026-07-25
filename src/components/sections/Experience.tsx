import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">Experience</h2>

      <div className="relative">
        <div
          className="absolute left-3.75 top-0 h-full w-0.75"
          style={{ background: 'var(--neo-border)' }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12">
              <div
                className="absolute left-1.25 top-1 h-5.75 w-5.75 rounded-full border-[3px]"
                style={{
                  background: 'var(--neo-accent-1)',
                  borderColor: 'var(--neo-border)',
                }}
              />

              <div className="neo-card">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-black uppercase tracking-tight">{exp.role}</h3>
                  <span
                    className="text-xs font-bold uppercase"
                    style={{ color: 'var(--neo-accent-2)' }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p className="mb-4 text-sm font-bold uppercase opacity-70">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="neo-prose flex items-start gap-2 text-sm"
                      style={{ lineHeight: '1.5' }}
                    >
                      <span
                        className="mt-1.75 h-1.5 w-1.5 shrink-0"
                        style={{ background: 'var(--neo-accent-1)' }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
