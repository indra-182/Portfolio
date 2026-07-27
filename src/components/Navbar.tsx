'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-(--container) items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-semibold tracking-tight text-text">
          Indra.dev
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-text-tertiary hover:bg-surface-hover hover:text-text'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
