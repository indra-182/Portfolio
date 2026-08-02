import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <section className="section not-found" aria-labelledby="not-found-heading">
      <div className="section-shell">
        <p className="eyebrow">404 / Project not found</p>
        <h1 id="not-found-heading">That case study does not exist.</h1>
        <Link className="button button--primary mt-8" href="/#projects">
          Back to selected work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
