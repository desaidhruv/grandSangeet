import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Landing from './pages/Landing';
import Fonts from './Fonts';
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
