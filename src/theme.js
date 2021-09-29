import { extendTheme } from '@chakra-ui/react';
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#FF3B63',
    },
  },
<<<<<<< HEAD

=======
  
>>>>>>> 6b08dfa78f774a4c9460a97cd0fe1ed90c1af627
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
