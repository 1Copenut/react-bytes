import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const themeTogglerStyle = {
  cursor: 'pointer',
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const handleThemeModeClick = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button
        onClick={handleThemeModeClick}
        style={themeTogglerStyle}
        type="button"
      >
        {themeMode === 'light' ? 'Dark mode 🌙' : 'Light mode ☀️'}
      </button>
    </div>
  );
};

export default ThemeToggler;
