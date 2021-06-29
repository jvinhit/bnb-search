import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const onToggleTheme = () => (theme === 'light' ? setMode('dark') : setMode('light'));
  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme) setTheme(currentTheme);
  }, []);
  return [theme, onToggleTheme];
};
export default useDarkMode;
