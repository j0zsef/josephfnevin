'use client';

import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons';

const ThemeToggle = () => {
  const themeCtx = useContext(ThemeContext);
  const onThemeToggle = () => {
    themeCtx?.setTheme((current) => {
      return current === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <Button className="theme-selector" variant={themeCtx?.theme} onClick={() => onThemeToggle()}>
      {themeCtx?.theme === 'dark' ? <SunFill /> : <MoonStarsFill />}
    </Button>
  );
};

export default ThemeToggle;
