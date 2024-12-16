'use client';

import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode, useEffect,
} from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string | null>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

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

  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
