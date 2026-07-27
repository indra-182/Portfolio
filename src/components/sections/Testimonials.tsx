import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">Kind words</p>
        <h2 className="magic-section__title">Testimonials</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="magic-card magic-card--interactive flex flex-col gap-5"
          >
            <p className="text-sm leading-relaxed text-(--text)">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3 border-t border-(--border) pt-4">
              <div className="magic-gradient-text grid h-10 w-10 place-items-center rounded-full bg-(--accent-soft) text-sm font-semibold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight text-(--text-strong)">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-[11px] text-(--text-weak)">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ''}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
