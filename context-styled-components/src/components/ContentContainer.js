import styled from 'styled-components';

const ContentContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.background};
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  width: 100vw;
`;

export default ContentContainer;
