import React from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import Card from './components/Card';

import AppContextProvider from './context/AppContextProvider';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 15px;
  border: 1px solid red;
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
