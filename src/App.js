import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Landing from './pages/Landing';
import Loading from './components/Loading';
import GalleryMain from './components/sections/GalleryMain';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  }
  React.useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])
  return (
    <ChakraProvider theme={theme}>
      {/* {!isLoading ? <Landing /> : <Loading />} */}
      <Router>
        <Switch>
          <Route exact path="/gallery" component={GalleryMain} />
          <Route  path="/" component={isLoading ? Loading : Landing} />
        </Switch>
      </Router>
      
      {/* <Fonts /> */}
    </ChakraProvider>
  )
  // (
  //   <ChakraProvider theme={theme}>
  //     {/* <Fonts /> */}
  //     <Landing />
  //   </ChakraProvider>
  // );
}

export default App;
