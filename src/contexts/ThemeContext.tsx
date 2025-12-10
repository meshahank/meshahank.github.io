import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEMES, type ThemeName } from '@/lib/themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}

export function ThemeProvider({ children, defaultTheme = 'default' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    // Try to get theme from localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') as ThemeName;
      return savedTheme && savedTheme in THEMES ? savedTheme : defaultTheme;
    }
    return defaultTheme;
  });

  const applyTheme = (themeName: ThemeName) => {
    const root = document.documentElement;
    
    // Remove all existing theme classes
    Object.keys(THEMES).forEach(t => {
      root.classList.remove(`theme-${t}`);
      root.removeAttribute('data-theme');
    });
    
    // Apply the new theme
    if (themeName !== 'default') {
      root.classList.add(`theme-${themeName}`);
      root.setAttribute('data-theme', themeName);
    }
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeName);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleSetTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme: handleSetTheme, 
        themeName: THEMES[theme] 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };