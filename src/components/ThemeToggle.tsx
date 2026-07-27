'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-provider';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  const toggle = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      className="grid size-9 place-items-center rounded border border-border text-text-tertiary transition-colors hover:border-text-secondary hover:bg-surface-hover hover:text-text"
      aria-label={
        mounted ? `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle theme'
      }
    >
      {mounted && resolvedTheme === 'dark' ? <LuSun size={16} /> : <LuMoon size={16} />}
    </button>
  );
}
