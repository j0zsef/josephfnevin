'use client';

import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode, useEffect, useMemo,
} from 'react';

interface ThemeContextType {
  isDark: boolean;
  theme: string | undefined;
  setTheme: Dispatch<SetStateAction<string | undefined>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean>(false);
  const value = useMemo(() => ({ theme, setTheme, isDark }), [theme, isDark]);

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
      setIsDark(theme === 'dark');
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
