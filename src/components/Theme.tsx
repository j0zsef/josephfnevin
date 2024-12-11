'use client';

import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

const ThemeToggle = () => {
  const themeCtx = useContext(ThemeContext);
  const onThemeToggle = () => {
    themeCtx?.setTheme((current) => {
      return current === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <Button onClick={() => onThemeToggle()}>
      {themeCtx?.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggle;
