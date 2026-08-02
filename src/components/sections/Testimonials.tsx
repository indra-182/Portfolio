import { testimonials } from '@/data/testimonials';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section section--testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-heading">
            <p className="eyebrow">Proof of work</p>
            <h2 id="testimonials-heading">A reliable teammate matters.</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <figure className="testimonial-card">
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>
                  <span className="testimonial-card__initial" aria-hidden="true">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ''}
                    </small>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
