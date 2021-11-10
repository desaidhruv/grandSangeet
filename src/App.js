import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Landing from './pages/Landing';
import Loading from './components/Loading';
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  // const handleLoading = () => {
  //   setIsLoading(false);
  // }
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000)
    // window.addEventListener("load", handleLoading);
    // return () => window.removeEventListener("load", handleLoading);
  }, [])
  return(
    <ChakraProvider theme={theme}>
    {/* <Fonts /> */}
    {isLoading ? <Loading /> : <Landing />}
    
  </ChakraProvider>
  ) 
  // return isLoading ? (
  //   <ChakraProvider theme={theme}>
  //   {/* <Fonts /> */}
  //   <Landing />
  // </ChakraProvider>
  // ):(<Loading />)
  // (
  //   <ChakraProvider theme={theme}>
  //     {/* <Fonts /> */}
  //     <Landing />
  //   </ChakraProvider>
  // );
}

export default App;
