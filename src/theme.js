import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
    // fonts: {
    //   heading: "Heading innadrop Regular",
    //   body: "Body Font innadrop Regular",
    // },
  config,
  colors: {
    brand: {
      100: '#FF3B63',
    },
  },
  
  components: {
    Button: {
      sizes: {
        l: {
          fontSize: '24px',
          w: '220px',
          h: '60px',
          color: 'white',
        },
      },
    },
  },
});

export default theme;
