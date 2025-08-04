import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from '../types/theme';
import { ThemeContext } from './theme-context';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState(18);
  const [settingsVisible, setSettingsVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(Number(savedFontSize));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 14));
  };

  const toggleSettings = () => {
    setSettingsVisible(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      fontSize,
      settingsVisible,
      toggleTheme,
      increaseFontSize,
      decreaseFontSize,
      toggleSettings
    }}>
      {children}
    </ThemeContext.Provider>
  );
}