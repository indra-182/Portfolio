'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';
type StoredTheme = Theme | 'system';

const ThemeContext = createContext<{
  theme: StoredTheme;
  resolvedTheme: Theme;
  setTheme: (theme: StoredTheme) => void;
} | null>(null);

const STORAGE_KEY = 'theme';

function getStoredTheme(): StoredTheme {
  if (typeof window === 'undefined') return 'system';

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
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
  if (state.theme === action.theme && action.theme !== 'system') return state;

  return { theme: action.theme, resolved: resolveTheme(action.theme) };
}

function initState(): ThemeState {
  const theme = getStoredTheme();
  return { theme, resolved: resolveTheme(theme) };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, undefined, initState);

  useEffect(() => {
    applyTheme(state.resolved);
  }, [state.resolved]);

  useEffect(() => {
    if (state.theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => dispatch({ type: 'SET_THEME', theme: 'system' });
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [state.theme]);

  const setTheme = useCallback((theme: StoredTheme) => {
    localStorage.setItem(STORAGE_KEY, theme);
    dispatch({ type: 'SET_THEME', theme });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, resolvedTheme: state.resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
