'use client';

import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode, useEffect, useMemo,
} from 'react';

interface ThemeContextType {
    theme: string | undefined;
    setTheme: Dispatch<SetStateAction<string | undefined>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  // run once on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }, [theme]);

  if (theme === undefined) {
    return undefined;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
