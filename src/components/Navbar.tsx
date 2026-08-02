'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

function Links({
  active,
  onNavigate,
  isHome,
}: {
  active: string;
  onNavigate?: () => void;
  isHome: boolean;
}) {
  return (
    <ul className="nav-links">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={isHome ? link.href : `/${link.href}`}
            onClick={onNavigate}
            aria-current={isHome && active === link.href.slice(1) ? 'location' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observers = sections.map((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section.id);
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? 'true' : 'false';
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;

      setMenuOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function handleNavigate(restoreFocus = false) {
    setMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href={isHome ? '#hero' : '/#hero'} onClick={() => handleNavigate()}>
          <span className="brand-mark" aria-hidden="true">
            MI
          </span>
          <span className="brand-word">Indra.dev</span>
        </a>

        <nav className="nav-menu" aria-label="Primary navigation">
          <Links active={active} onNavigate={() => handleNavigate()} isHome={isHome} />
        </nav>

        <div className="nav-tools">
          <span className="availability-badge">Open to work</span>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <Links active={active} onNavigate={() => handleNavigate(true)} isHome={isHome} />
        </nav>
      </div>
    </header>
  );
}
