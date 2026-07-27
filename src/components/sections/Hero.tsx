export default function Hero() {
  return (
    <section
      id="hero"
      className="magic-section relative flex min-h-[82vh] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute right-[10%] top-[18%] h-52 w-52 rounded-full bg-indigo-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute bottom-[15%] right-[22%] h-36 w-36 rounded-full bg-sky-400/15 blur-3xl"
      />
      <div className="animate-fade-up relative">
        <p className="magic-section__kicker mb-4">Hi, my name is</p>
        <h1 className="magic-section__title max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
          Building thoughtful <span className="magic-gradient-text">digital products.</span>
        </h1>
        <p className="mt-6 max-w-xl text-xl font-medium tracking-[-0.03em] text-(--text-strong)">
          I&apos;m Indra, a software engineer.
        </p>
        <p className="magic-lede mt-3 max-w-xl">
          Building fast, accessible web experiences with modern tools.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="magic-button magic-button--primary">
            View Projects
          </a>
          <a href="#contact" className="magic-button magic-button--outline">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
