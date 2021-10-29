import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Landing from './pages/Landing';
import "./App.css"

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Landing />
    </ChakraProvider>
  );
}

export default App;
