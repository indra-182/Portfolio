'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-provider';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      className="neo-btn"
      aria-label={
        mounted ? `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle theme'
      }
      style={{ padding: '8px 12px', background: 'var(--neo-bg)' }}
    >
      {mounted && resolvedTheme === 'dark' ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  );
}
