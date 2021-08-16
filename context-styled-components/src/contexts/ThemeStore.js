import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const switchTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
