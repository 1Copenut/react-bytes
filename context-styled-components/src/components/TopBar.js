import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Sun, Moon } from 'styled-icons/feather';
import { ThemeContext } from '../contexts/ThemeStore';

const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.background};
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding-right: 30px;
  width: '100%';
`;

const icon = css`
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

const TopBar = (props) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Container>
      {theme === 'dark' ? (
        <StyledButton
          aria-label="Switch to light theme"
          onClick={() => switchTheme('light')}
          type="button"
        >
          <StyledSun size={32} />
        </StyledButton>
      ) : (
        <StyledButton
          aria-label="Switch to dark theme"
          onClick={() => switchTheme('dark')}
          type="button"
        >
          <StyledMoon size={32} />
        </StyledButton>
      )}
    </Container>
  );
};

export default TopBar;
