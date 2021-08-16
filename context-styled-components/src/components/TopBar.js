import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Sun, Moon } from 'styled-icons/feather';

const Container = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding-right: 30px;
  width: '100%';
`;

const icon = css`
  color: black;
  cursor: pointer;
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

const TopBar = (props) => {
  return (
    <Container>
      <StyledMoon size={32} />
    </Container>
  );
};

export default TopBar;
