export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Technologies Used', value: '20+' },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">About</h2>

      <div className="neo-card mb-8 max-w-3xl">
        <p className="neo-prose">
          I am a full-stack developer who enjoys building things for the web. My journey started
          with curiosity about how websites work, and grew into a career crafting digital
          experiences that are fast, accessible, and enjoyable to use.
        </p>
        <p className="neo-prose">
          I specialize in React and TypeScript, with a focus on performance and user experience. I
          believe the best code is code that ships — I value pragmatism over perfection and clean
          delivery over over-engineering.
        </p>
        <p className="neo-prose">
          Beyond the frontend, I work across the stack: designing APIs, managing infrastructure, and
          exploring AI-powered tooling to automate the boring parts of development.
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
