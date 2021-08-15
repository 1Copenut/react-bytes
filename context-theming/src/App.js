import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ThemeContext from './context/ThemeContext';

const App = (props) => {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
