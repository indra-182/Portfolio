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
          Frontend Engineer with 5+ years shipping digital products for banks, fintech, and
          enterprises. I work at Indivara Group across clients like BCA, Bank Danamon, BRI,
          Pegadaian, and Petron Philippines.
        </p>
        <p className="neo-prose">
          My day to day is building interfaces that handle high-volume transactions, complex
          financial workflows, and data-heavy dashboards. I have led frontend delivery as the
          sole or lead engineer on cross-functional teams.
        </p>
        <p className="neo-prose">
          I also know my way around the backend (Java, Spring Boot, PostgreSQL) and
          currently exploring AI tooling to automate the boring parts of development.
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
        <a
          href="https://rxresu.me/mahadiindra2/mahadi-indra-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn"
          style={{ background: 'var(--neo-bg)' }}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
