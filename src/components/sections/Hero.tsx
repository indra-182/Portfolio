export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6"
    >
      <div className="animate-fade-up">
        <p
          className="mb-4 text-sm font-bold uppercase tracking-widest"
          style={{ color: "var(--neo-accent-1)" }}
        >
          Hi, my name is
        </p>

        <h1 className="text-6xl font-black uppercase leading-none tracking-tighter sm:text-7xl lg:text-8xl">
          Indra
        </h1>

        <p className="mt-6 max-w-xl text-lg font-bold uppercase leading-relaxed">
          Full-stack Engineer
        </p>

        <p className="neo-prose mt-4 max-w-lg text-sm font-bold opacity-70">
          Building fast, accessible web experiences with modern tools.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="neo-btn">
            View Projects
          </a>
          <a
            href="#contact"
            className="neo-btn"
            style={{ background: "var(--neo-bg)" }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
