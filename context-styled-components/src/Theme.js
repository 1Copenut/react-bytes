import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from './contexts/ThemeStore';

const themes = {
  dark: {
    background: 'palevioletred',
    title: '#6495ed',
    text: '#fff',
  },
  light: {
    background: '#fff',
    title: '#ff6347',
    text: '#000',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    transition: all 0.5s;
    padding: 0;
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
