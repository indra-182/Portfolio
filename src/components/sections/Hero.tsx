import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <div className="section-shell hero__shell">
        <div className="hero__content">
          <p className="eyebrow">Software Engineer / Frontend Engineer</p>
          <h1 id="hero-heading">
            Mahadi <span>Indra</span>
            <br />
            Manurung
          </h1>
          <p className="hero__positioning">
            Frontend Engineer building reliable digital products for complex financial systems.
          </p>
          <p className="hero__intro">
            I build transaction-heavy interfaces for banking, fintech, and enterprise teams, with
            full-stack experience when the work needs a wider view.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View selected work
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="/resume.pdf" download>
              Download CV
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Based in</dt>
              <dd>Jakarta, Indonesia</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>5+ years</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Frontend / full-stack</dd>
            </div>
          </dl>
        </div>

        <aside className="hero__card" aria-label="Mahadi Indra Manurung profile">
          <div className="portrait-slot">
            <Image
              className="portrait-image"
              src="/Mahadi Indra - LinkedIn Photo.png"
              alt="Mahadi Indra Manurung, a frontend engineer, seated outdoors"
              fill
              sizes="(max-width: 48rem) calc(100vw - 4rem), (max-width: 64rem) calc(100vw - 3rem), 28rem"
            />
          </div>
          <div className="hero__card-footer">
            <p className="eyebrow">Currently building</p>
            <p>Interfaces that make complex financial workflows easier to trust.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
