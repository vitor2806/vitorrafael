import { useState } from 'react';

const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const useThemes = () => {
  const [theme, setTheme] = useState(themes.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);
  };

  return { theme, toggleTheme };
};

export default useThemes;
