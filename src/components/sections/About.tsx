export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Client Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">A little about me</p>
        <h2 className="magic-section__title">About</h2>
      </div>

      <div className="magic-card mb-8 max-w-3xl">
        <p className="magic-lede">
          Frontend Engineer with 5+ years shipping digital products for banks, fintech, and
          enterprises. I work at Indivara Group across clients like BCA, Bank Danamon, BRI,
          Pegadaian, and Petron Philippines.
        </p>
        <p className="magic-lede mt-4">
          My day to day is building interfaces that handle high-volume transactions, complex
          financial workflows, and data-heavy dashboards. I have led frontend delivery as the sole
          or lead engineer on cross-functional teams.
        </p>
        <p className="magic-lede mt-4">
          I also know my way around the backend (Java, Spring Boot, PostgreSQL) and currently
          explore AI tooling to automate the boring parts of development.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="magic-card magic-card--interactive text-center">
            <p className="magic-gradient-text text-4xl font-semibold leading-none tracking-[-0.06em]">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium tracking-wide text-(--text-weak)">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://rxresu.me/mahadiindra2/mahadi-indra-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="magic-button magic-button--outline"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
