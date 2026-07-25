export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Client Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">About</h2>

      <div className="neo-card mb-8 max-w-3xl">
        <p className="neo-prose">
          Frontend Engineer with 5+ years helping banks, fintech companies, and enterprises deliver
          better digital experiences. I care about the details that make an interface feel effortless
          — whether it is a high-volume transaction flow, a data-heavy dashboard, or a complex
          financial workflow that needs to feel simple for the people who use it every day.
        </p>
        <p className="neo-prose">
          I spent most of my career at Indivara Group, working across client projects including BCA,
          Bank Danamon, BRI, Pegadaian, and Petron Philippines. My work ranges from building modular
          UI architectures and high-volume transaction flows to leading frontend delivery as the sole
          or lead engineer on cross-functional teams.
        </p>
        <p className="neo-prose">
          Beyond frontend, I have experience across the stack — Java, Spring Boot, PostgreSQL — and
          I am currently exploring AI-powered tooling to automate the boring parts of development.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="neo-card text-center"
            style={{ padding: '16px 32px', minWidth: '160px' }}
          >
            <p
              className="text-3xl font-black uppercase leading-none"
              style={{ color: 'var(--neo-accent-1)' }}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase opacity-70">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a href="/cv.pdf" className="neo-btn" style={{ background: 'var(--neo-bg)' }}>
          Download CV
        </a>
      </div>
    </section>
  );
}
