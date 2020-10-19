import React from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import Card from './components/Card';

import AppContextProvider from './context/AppContextProvider';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 15px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: space-between;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppContextProvider>
        <Card />
        <Form />
      </AppContextProvider>
    </AppContainer>
  );
};

export default App;
