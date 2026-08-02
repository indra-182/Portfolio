'use client';

import { useState } from 'react';

type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) errors.name = 'Enter your name';
  if (!emailPattern.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.message.trim()) errors.message = 'Tell me a little about the opportunity';

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus('idle');

    const fieldErrors = validateForm(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = (await response.json()) as { success?: boolean };

      if (!response.ok || !payload.success) throw new Error('Contact request failed');

      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-heading">
      <div className="section-shell contact-layout">
        <div data-reveal>
          <div className="contact-intro">
            <p className="eyebrow">Let&apos;s work together</p>
            <h2 id="contact-heading">Have a complex product to make clearer?</h2>
            <p>
              I am open to frontend and full-stack engineering opportunities. Send a note or use one
              of the direct links below.
            </p>
            <div className="contact-links" aria-label="Direct contact links">
              <a href="mailto:mahadiindra2@gmail.com">mahadiindra2@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/mahadiindra182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="/resume.pdf" download>
                Download CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-heading"
          >
            <fieldset>
              <legend id="contact-form-heading">Send a message</legend>

              <div className="form-field">
                <label htmlFor="name">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name && (
                  <p id="name-error" className="form-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="form-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="form-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                className="button button--primary"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
                <span aria-hidden="true">↗</span>
              </button>

              <div className="form-status" aria-live="polite">
                {status === 'success' && (
                  <p className="form-success">Thanks. Your message is on its way.</p>
                )}
                {status === 'error' && (
                  <p className="form-error">
                    The form is unavailable. Please email{' '}
                    <a href="mailto:mahadiindra2@gmail.com">mahadiindra2@gmail.com</a> directly.
                  </p>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
