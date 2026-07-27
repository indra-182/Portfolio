'use client';

import { testimonials } from '@/data/testimonials';
import { ScrollReveal, StaggerContainer, StaggerItem, HoverCard } from '@/components/MotionWrapper';

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <HoverCard
                as="article"
                className="flex h-full flex-col border border-border bg-surface p-6"
              >
                <p className="mb-5 text-sm leading-relaxed text-text-secondary flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex size-9 items-center justify-center rounded bg-accent-soft text-xs font-semibold text-accent">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
