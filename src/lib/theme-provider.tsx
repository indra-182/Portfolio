'use client';

import { createContext, useContext, useEffect, useReducer, useCallback } from 'react';

type Theme = 'light' | 'dark';
type StoredTheme = Theme | 'system';

const ThemeContext = createContext<{
  theme: StoredTheme;
  resolvedTheme: Theme;
  setTheme: (t: StoredTheme) => void;
} | null>(null);

const STORAGE_KEY = 'theme';

function getStoredTheme(): StoredTheme {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem(STORAGE_KEY) as StoredTheme) || 'dark';
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(stored: StoredTheme): Theme {
  return stored === 'system' ? getSystemTheme() : stored;
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}

type ThemeState = { theme: StoredTheme; resolved: Theme };

function themeReducer(
  state: ThemeState,
  action: { type: 'SET_THEME'; theme: StoredTheme },
): ThemeState {
  const resolved = resolveTheme(action.theme);
  return { theme: action.theme, resolved };
}

function initState(): ThemeState {
  const stored = getStoredTheme();
  return { theme: stored, resolved: resolveTheme(stored) };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, undefined, initState);

  useEffect(() => {
    applyTheme(state.resolved);
  }, [state.resolved]);

  useEffect(() => {
    if (state.theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => dispatch({ type: 'SET_THEME', theme: 'system' });
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [state.theme]);

  const setTheme = useCallback((t: StoredTheme) => {
    localStorage.setItem(STORAGE_KEY, t);
    dispatch({ type: 'SET_THEME', theme: t });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, resolvedTheme: state.resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
