import React from 'react';
import AppTheme from '../Colors';
import ThemeContext from '../context/ThemeContext';

const Main = () => {
  const theme = React.useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: '1rem',
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1>Samuel L. Ipsum</h1>
      <a href="https://slipsum.com/" style={{ color: '#5b001f' }}>
        NSFW Samuel L. Jackson quotes
      </a>
      <p>
        Well, the way they make shows is, they make one show. That show's called
        a pilot. Then they show that show to the people who make shows, and on
        the strength of that one show they decide if they're going to make more
        shows. Some pilots get picked and become television programs. Some
        don't, become nothing. She starred in one of the ones that became
        nothing.
      </p>
    </main>
  );
};

export default Main;
