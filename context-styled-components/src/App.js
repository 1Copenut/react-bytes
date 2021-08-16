import React from 'react';
import ContentContainer from './components/ContentContainer';
import Title from './components/Title';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <>
      <TopBar />
      <ContentContainer>
        <Title>Theme Switching with Styled Components</Title>
      </ContentContainer>
    </>
  );
};

export default App;
