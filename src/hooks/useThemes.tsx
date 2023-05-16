import { useEffect, useState } from 'react';

const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const useThemes = () => {
  // Starts theme with light mode
  const [theme, setTheme] = useState(themes.LIGHT);

  useEffect(() => {
    // Attempts to get theme from localStorage
    const localTheme = localStorage.getItem('theme');

    // If there is a theme set in localStorage, set it
    if (localTheme) {
      if (localTheme === themes.DARK) {
        setTheme(themes.DARK);
      }
    }
    // If there is no theme set in localStorage, set it based on user's system preference
    else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(themes.DARK);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useThemes;
