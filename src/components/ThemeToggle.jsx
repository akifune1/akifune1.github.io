/** Shared theme preference and interruption-safe palette transition for App.jsx's header/footer toggles. */
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'kolby-portfolio-theme';

/** Shares the resolved preference with theme-dependent assets and controls. */
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // index.html resolves the saved preference before the first paint.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const transitionTimer = useRef(null);

  const changeTheme = useCallback((next) => {
    const root = document.documentElement;
    // One root palette changes synchronously; React only mirrors the toggle state.
    root.setAttribute('data-theme-transition', '');
    clearTimeout(transitionTimer.current);
    root.dataset.theme = next;
    root.style.colorScheme = next;
    setTheme(next);
    transitionTimer.current = setTimeout(() => {
      document.documentElement.removeAttribute('data-theme-transition');
    }, 340);
  }, []);

  useEffect(() => {
    const syncPreference = (event) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        changeTheme(event.newValue === 'dark' ? 'dark' : 'light');
      }
    };
    window.addEventListener('storage', syncPreference);
    return () => {
      window.removeEventListener('storage', syncPreference);
      clearTimeout(transitionTimer.current);
      document.documentElement.removeAttribute('data-theme-transition');
    };
  }, [changeTheme]);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    changeTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Theme switching still works when browser storage is blocked.
    }
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button type="button" className="theme-toggle" onClick={toggle}
      aria-label="Dark mode" aria-pressed={dark} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>
      {dark ? <Sun size={14.4} aria-hidden="true" /> : <Moon size={14.4} aria-hidden="true" />}
      <span>{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
