import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
});

export default theme;
