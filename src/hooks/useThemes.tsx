import { useEffect, useState } from 'react';

const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const useThemes = () => {
  const [theme, setTheme] = useState(themes.LIGHT);

  useEffect(() => {
    const userThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (userThemeIsDark.matches) {
      setTheme(themes.DARK);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);
  };

  return { theme, toggleTheme };
};

export default useThemes;
