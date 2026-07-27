'use client';

import { useState } from 'react';
import { z } from 'zod';
import { ScrollReveal } from '@/components/MotionWrapper';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setStatus('idle');
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus('sending');
    const mailto = `mailto:mahadiindra2@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <p className="section-sub">
              Let&apos;s work together. Send me a message and I&apos;ll get back to you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-accent">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-accent">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                className="form-input resize-y"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-accent">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn--primary w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-accent">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
