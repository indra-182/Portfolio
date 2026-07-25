import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">Testimonials</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="neo-card flex flex-col gap-4">
            <p className="neo-prose text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>

            <div className="mt-auto flex items-center gap-3 border-t-[3px] border-black pt-4">
              <div
                className="flex h-10 w-10 items-center justify-center border-2 border-black text-sm font-black uppercase"
                style={{ background: 'var(--neo-accent-3)' }}
              >
                {t.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-black uppercase leading-tight">{t.name}</p>
                <p className="text-[10px] font-bold uppercase opacity-60">
                  {t.role}
                  {t.company ? `, ${t.company}` : ''}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
