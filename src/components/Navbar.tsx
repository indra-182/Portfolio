'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#hero', label: 'Hero' },
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: 'var(--neo-bg)',
        borderBottom: '3px solid #000',
        boxShadow: '0 3px 0px 0px #000',
      }}
    >
      <a
        href="#"
        className="text-xl font-black uppercase tracking-tight"
        style={{ color: 'var(--neo-text)' }}
      >
        Indra.dev
      </a>

      <div className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => {
          const isActive = active === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-black hover:text-white"
              style={{
                color: isActive ? '#FFF' : 'var(--neo-text)',
                background: isActive ? '#000' : 'transparent',
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <ThemeToggle />
    </nav>
  );
}
